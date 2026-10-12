// Puente en bloques de la portada: se arma al entrar en pantalla.
// Con movimiento reducido o sin IntersectionObserver queda dibujado de una vez.
(() => {
  const curva = 'cubic-bezier(.16, 1, .3, 1)';
  const reducido = matchMedia('(prefers-reduced-motion: reduce)');
  const movil = matchMedia('(max-width: 860px)');
  document.querySelectorAll('.pb').forEach(fig => {
    const svg = fig.querySelector('.pb-svg');
    const vista = () => svg.setAttribute('viewBox', movil.matches ? svg.dataset.vbMovil : svg.dataset.vbDesk);
    vista(); movil.addEventListener('change', vista);
    const piezas = [...svg.querySelectorAll('.pb-anim')];
    let activas = [];
    const keyframes = {
      sube:   [{ transform: 'scaleY(0)', opacity: 1 }, { transform: 'scaleY(1)', opacity: 1 }],
      cae:    [{ transform: 'translateY(-26px)', opacity: 0 }, { transform: 'none', opacity: 1 }],
      llave:  [{ transform: 'translateY(-64px)', opacity: 0, offset: 0 }, { opacity: 1, offset: .25 }, { transform: 'none', opacity: 1 }],
      izq:    [{ transform: 'translateX(16px)', opacity: 0 }, { transform: 'none', opacity: 1 }],
      der:    [{ transform: 'translateX(-16px)', opacity: 0 }, { transform: 'none', opacity: 1 }],
      eje:    [{ transform: 'scaleY(0)', opacity: 1 }, { transform: 'scaleY(1)', opacity: 1 }],
      aparece:[{ opacity: 0 }, { opacity: 1 }]
    };
    const duracion = { sube: 600, cae: 560, llave: 900, izq: 520, der: 520, eje: 700, aparece: 600, traza: 800 };
    function armar() {
      activas.forEach(a => a.cancel()); activas = [];
      fig.classList.remove('pb-espera');
      if (reducido.matches) return;
      piezas.forEach(el => {
        const tipo = el.dataset.a, delay = +el.dataset.d || 0;
        if (tipo === 'traza') {
          const L = Math.ceil(el.getTotalLength());
          el.style.strokeDasharray = L;
          activas.push(el.animate([{ strokeDashoffset: L, opacity: 1 }, { strokeDashoffset: 0, opacity: 1 }],
            { duration: duracion.traza, delay, easing: curva, fill: 'both' }));
        } else {
          activas.push(el.animate(keyframes[tipo], { duration: duracion[tipo], delay, easing: curva, fill: 'both' }));
        }
      });
    }
    fig.armar = armar;
    if (reducido.matches || !('IntersectionObserver' in window)) return;
    fig.classList.add('pb-espera');
    const io = new IntersectionObserver(ents => {
      if (ents.some(e => e.isIntersecting)) { io.disconnect(); armar(); }
    }, { threshold: .35 });
    io.observe(fig);
  });
})();
