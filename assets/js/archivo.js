(function () {
  var P = window.LYL_PROYECTOS.map(function (p, i) { return Object.assign({ i: i, slug: window.LYL_SLUG(p.nombre + (p.servicio === 'inf-rehab' && p.nombre === 'Puente Paso 5' ? ' rehab' : '')) }, p); });
  var S = window.LYL_SERVICIOS;
  var nf = new Intl.NumberFormat('es-CO', { maximumFractionDigits: 2 });
  var rejilla = document.getElementById('rejilla');
  var filtros = document.getElementById('filtros');
  var buscar = document.getElementById('buscar');
  var orden = document.getElementById('orden');
  var conteo = document.getElementById('conteo');
  var estado = { servicio: 'todos', q: '' };

  var claves = ['todos'].concat(Object.keys(S));
  filtros.innerHTML = claves.map(function (k) {
    var n = k === 'todos' ? P.length : P.filter(function (p) { return p.servicio === k; }).length;
    var nombre = k === 'todos' ? 'Todos' : (S[k].linea === 'Edificaciones' && k === 'edi-rehab' ? 'Rehabilitación de edificios' : S[k].nombre);
    if (k === 'inf-rehab') nombre = 'Rehabilitación de puentes';
    return '<button class="filtro" type="button" data-servicio="' + k + '" aria-pressed="false">' + nombre + ' <span class="mono">' + n + '</span></button>';
  }).join('');

  function meta(p) {
    return '<span>' + S[p.servicio].nombre + '</span><span>' + (p.longitud ? nf.format(p.longitud) + ' m' : S[p.servicio].linea) + '</span>';
  }

  function pintar() {
    var q = estado.q.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
    var lista = P.filter(function (p) {
      var nombre = p.nombre.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
      return (estado.servicio === 'todos' || p.servicio === estado.servicio) && (!q || nombre.indexOf(q) > -1);
    });
    if (orden.value === 'longitud') lista.sort(function (a, b) { return (b.longitud || 0) - (a.longitud || 0); });
    if (orden.value === 'nombre') lista.sort(function (a, b) { return a.nombre.localeCompare(b.nombre, 'es'); });

    filtros.querySelectorAll('.filtro').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.servicio === estado.servicio); });
    conteo.textContent = lista.length === 1 ? '1 proyecto' : lista.length + ' proyectos';

    if (!lista.length) {
      rejilla.innerHTML = '<div class="vacio"><h2 class="titulo-m">Ningún proyecto coincide</h2><p class="texto-2" style="margin:0">Pruebe con otro nombre o vea todos los servicios.</p><button class="boton boton-borde" type="button" data-limpiar>Ver todos</button></div>';
      return;
    }
    rejilla.innerHTML = lista.map(function (p) {
      return '<button class="ficha" type="button" id="' + p.slug + '" data-i="' + p.i + '">' +
        '<div class="ficha-foto"><img src="' + window.LYL_FOTO(p, 0) + '" alt="' + p.nombre + '" loading="lazy"></div>' +
        '<h2>' + p.nombre + '</h2><div class="ficha-meta mono">' + meta(p) + '</div></button>';
    }).join('');
  }

  filtros.addEventListener('click', function (e) {
    var b = e.target.closest('.filtro'); if (!b) return;
    estado.servicio = b.dataset.servicio;
    history.replaceState(null, '', estado.servicio === 'todos' ? location.pathname : '#' + estado.servicio);
    pintar();
  });
  buscar.addEventListener('input', function () { estado.q = buscar.value.trim(); pintar(); });
  orden.addEventListener('change', pintar);
  rejilla.addEventListener('click', function (e) {
    if (e.target.closest('[data-limpiar]')) { estado = { servicio: 'todos', q: '' }; buscar.value = ''; pintar(); return; }
    var f = e.target.closest('.ficha'); if (f) abrir(P[+f.dataset.i], 0);
  });

  // Visor de fotos
  var visor = document.getElementById('visor');
  var img = document.getElementById('visor-img');
  var mini = document.getElementById('visor-mini');
  var actual = null, foto = 0;

  function abrir(p, n) {
    actual = p; foto = n;
    document.getElementById('visor-titulo').textContent = p.nombre;
    document.getElementById('visor-texto').textContent = [S[p.servicio].linea + ', ' + S[p.servicio].nombre.toLowerCase(), p.longitud ? 'Longitud ' + nf.format(p.longitud) + ' m' : '', p.nota || ''].filter(Boolean).join('. ').replace(/\.\./g, '.');
    mini.innerHTML = p.fotos.map(function (f, k) {
      return '<button type="button" data-foto="' + k + '" aria-label="Foto ' + (k + 1) + ' de ' + p.fotos.length + '"><img src="' + window.LYL_FOTO(p, k) + '" alt=""></button>';
    }).join('');
    mostrar();
    if (!visor.open) visor.showModal();
  }
  function mostrar() {
    img.src = window.LYL_FOTO(actual, foto, true);
    img.alt = actual.nombre + ', foto ' + (foto + 1) + ' de ' + actual.fotos.length;
    mini.querySelectorAll('button').forEach(function (b, k) { b.setAttribute('aria-current', k === foto); });
  }
  function paso(d) { foto = (foto + d + actual.fotos.length) % actual.fotos.length; mostrar(); }

  visor.addEventListener('click', function (e) {
    if (e.target.closest('[data-cerrar]')) return visor.close();
    var p = e.target.closest('[data-paso]'); if (p) return paso(+p.dataset.paso);
    var m = e.target.closest('[data-foto]'); if (m) { foto = +m.dataset.foto; mostrar(); }
  });
  document.addEventListener('keydown', function (e) {
    if (!visor.open) return;
    if (e.key === 'ArrowRight') paso(1);
    if (e.key === 'ArrowLeft') paso(-1);
  });

  // Enlaces de entrada: #inf-diseno filtra; #p-nombre abre el proyecto
  function leerAncla() {
    var h = decodeURIComponent(location.hash.slice(1));
    estado.servicio = S[h] ? h : 'todos';
    pintar();
    if (/^p-/.test(h)) {
      var p = P.find(function (x) { return x.slug === h; });
      if (p) { document.getElementById(p.slug).scrollIntoView({ block: 'center' }); abrir(p, 0); }
    }
  }
  window.addEventListener('hashchange', leerAncla);
  leerAncla();
})();
