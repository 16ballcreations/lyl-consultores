(function () {
  var P = window.LYL_PROYECTOS || [];
  var S = window.LYL_SERVICIOS || {};
  var nf = new Intl.NumberFormat('es-CO', { maximumFractionDigits: 2 });

  window.LYL_SLUG = function (s) {
    return 'p-' + s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  // Menú en móvil
  var cab = document.querySelector('.cabecera');
  var btn = document.querySelector('.menu-boton');
  if (btn) {
    btn.addEventListener('click', function () {
      var abierto = cab.classList.toggle('abierta');
      btn.setAttribute('aria-expanded', abierto);
      btn.innerHTML = abierto ? '<i class="ph ph-x"></i>' : '<i class="ph ph-list"></i>';
    });
    cab.querySelectorAll('.navegacion a').forEach(function (a) {
      a.addEventListener('click', function () { cab.classList.remove('abierta'); btn.setAttribute('aria-expanded', false); btn.innerHTML = '<i class="ph ph-list"></i>'; });
    });
  }

  // Cifras calculadas desde los datos
  var disenados = P.filter(function (p) { return p.servicio === 'inf-diseno' && p.longitud; });
  var metros = disenados.reduce(function (s, p) { return s + p.longitud; }, 0);
  document.querySelectorAll('[data-total-metros]').forEach(function (el) { el.textContent = nf.format(metros) + ' m'; });
  document.querySelectorAll('[data-cifra="proyectos"]').forEach(function (el) { el.textContent = P.length; });
  document.querySelectorAll('[data-cifra="puentes"]').forEach(function (el) {
    el.textContent = P.filter(function (p) { return /^Puente/.test(p.nombre); }).length;
  });
  document.querySelectorAll('[data-cuenta-linea]').forEach(function (el) {
    var n = P.filter(function (p) { return S[p.servicio].linea === el.dataset.cuentaLinea; }).length;
    el.textContent = n + ' proyectos';
  });
  document.querySelectorAll('[data-anio]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // La regla: los puentes diseñados, a escala
  var regla = document.getElementById('regla');
  if (regla) {
    var orden = disenados.slice().sort(function (a, b) { return b.longitud - a.longitud; }).slice(0, 12);
    var max = 2500; // la escala va de 0 a 2.500 m; las marcas de abajo llegan a 2.000
    regla.innerHTML = orden.map(function (p, i) {
      var f = (p.longitud / max).toFixed(4);
      return '<li class="regla-fila">' +
        '<span class="regla-nombre">' + (/^Puente \D/.test(p.nombre) ? p.nombre.slice(7) : p.nombre) + '</span>' +
        '<span class="regla-pista"><span class="regla-barra" style="width:' + (f * 100) + '%;transition-delay:' + (i * 60) + 'ms"></span></span>' +
        '<span class="regla-metros mono">' + nf.format(p.longitud) + ' m</span></li>';
    }).join('');
    var resumen = document.querySelector('[data-resumen]');
    if (resumen) resumen.textContent = 'Los 12 más largos de ' + disenados.length + ' puentes y obras con longitud publicada.';
    // Las marcas se alinean con la misma escala que las barras
    var marcas = document.querySelector('.regla-marcas');
    if (marcas) marcas.style.width = (2000 / max * 100) + '%';
  }

  // Aparición al entrar en pantalla
  var observados = document.querySelectorAll('.revelar, .regla-lista');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    // El margen enorme de arriba da por visto lo que ya quedó atrás, aunque se haya saltado con un ancla
    }, { rootMargin: '100000px 0px -12% 0px', threshold: 0.01 });
    observados.forEach(function (el) { io.observe(el); });
  } else {
    observados.forEach(function (el) { el.classList.add('visible'); });
  }

  // Formulario: arma el correo con lo que escribió la persona
  var form = document.getElementById('formulario');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var ok = true;
      form.querySelectorAll('[required]').forEach(function (c) {
        var campo = c.closest('.campo');
        var vacio = !c.value.trim();
        campo.classList.toggle('invalido', vacio);
        c.setAttribute('aria-invalid', vacio);
        if (vacio && ok) { c.focus(); ok = false; }
      });
      if (!ok) return;
      var d = new FormData(form);
      var asunto = 'Solicitud de propuesta: ' + d.get('tipo');
      var cuerpo = 'Nombre: ' + d.get('nombre') + '\nEmpresa: ' + (d.get('empresa') || '-') + '\nTipo de trabajo: ' + d.get('tipo') + '\n\n' + d.get('mensaje');
      window.location.href = 'mailto:info@lylconsultores.co?subject=' + encodeURIComponent(asunto) + '&body=' + encodeURIComponent(cuerpo);
    });
    form.querySelectorAll('[required]').forEach(function (c) {
      c.addEventListener('input', function () { if (c.value.trim()) { c.closest('.campo').classList.remove('invalido'); c.removeAttribute('aria-invalid'); } });
    });
  }
})();
