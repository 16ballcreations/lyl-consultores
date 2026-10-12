// Proyectos de L&L, tomados del sitio actual (lylconsultores.co).
// Cada foto vive en https://www.lylconsultores.co/images/<carpeta>/<archivo>;
// la miniatura está en <carpeta>/resizedimages/<archivo>.
// longitud en metros; null cuando el sitio actual no la publica.

window.LYL_SERVICIOS = {
  'inf-diseno':      { linea: 'Infraestructura', nombre: 'Diseño de puentes y obras viales' },
  'inf-revision':    { linea: 'Infraestructura', nombre: 'Revisión y asesoría en construcción' },
  'inf-rehab':       { linea: 'Infraestructura', nombre: 'Rehabilitación y patología' },
  'inf-preliminar':  { linea: 'Infraestructura', nombre: 'Estudios para licitación' },
  'edi-diseno':      { linea: 'Edificaciones',   nombre: 'Diseño estructural' },
  'edi-rehab':       { linea: 'Edificaciones',   nombre: 'Rehabilitación y patología' },
  'edi-supervision': { linea: 'Edificaciones',   nombre: 'Supervisión técnica' },
};

window.LYL_PROYECTOS = [
  // Infraestructura · Diseño
  { nombre: 'Puente Cauca', servicio: 'inf-diseno', longitud: 150, carpeta: 'diferente', fotos: ['Cauca_3.jpg', 'Cauca_1.jpg', 'Cauca_2.jpg'] },
  { nombre: 'Puente Alonso Sánchez', servicio: 'inf-diseno', longitud: 180, carpeta: 'PteAlonsInfraDiseno', fotos: ['1AlonsoSanchez.JPG', '2AlonsoSanchez2.jpg', '3AlonsoSanchez.jpg', '4.jpg'] },
  { nombre: 'Puente Chirí', servicio: 'inf-diseno', longitud: 100, carpeta: 'PteChiriInfraDiseno', fotos: ['4Chiri2.jpg', '1Chiri.jpg', '3.Chiri.jpg', '4_Chiri.jpg'] },
  { nombre: 'Puente Ticuitá', servicio: 'inf-diseno', longitud: null, carpeta: 'PteTuicuitaInfraDise', fotos: ['1Ticuita2.jpg', '2.jpg', 'ticuita_3.jpg'] },
  { nombre: 'Puente Rabo de Tigre', servicio: 'inf-diseno', longitud: 45, carpeta: 'rabo_tigre', fotos: ['1.jpg', '2.jpg', 'rabo_tigre_6.jpg'] },
  { nombre: 'Puente Pescaito', servicio: 'inf-diseno', longitud: 95, carpeta: 'PtePescaitoInfraDiseno', fotos: ['PuentePescaito.jpg', 'PuentePescaito_2.jpg', 'PuentePescaito_3.jpg'] },
  { nombre: 'Puente Voltezuela', servicio: 'inf-diseno', longitud: 131, carpeta: 'PteVoltezueInfraDiseno', fotos: ['Voltezuela.jpg', '3.jpg', 'Voltezuela_2.jpg', 'Voltezuela_4.jpg'] },
  { nombre: 'Puente Zanjón Seco', servicio: 'inf-diseno', longitud: 132, carpeta: 'PteZanSecoInfraDiseno', fotos: ['1.jpg', 'ZanjnSeco.jpg', 'zanjon_seco_4.jpg'] },
  { nombre: 'Puente Zanjón Barrialosa', servicio: 'inf-diseno', longitud: 100, carpeta: 'PteZanjonInfraDiseno', fotos: ['ZanjnBarrialosa.jpg', 'barrialosa_2.jpg', 'barrialosa_3.jpg'] },
  { nombre: 'Puente NN3', servicio: 'inf-diseno', longitud: 93, carpeta: 'Ptenn3InfraDiseno', fotos: ['1.jpg', '1NN3.jpg', '2.jpg', '2NN3.jpg'] },
  { nombre: 'Puente Balseadero', servicio: 'inf-diseno', longitud: 1708, carpeta: 'PuenteBalsadInfraDiseno', fotos: ['Balseadero_1.jpg', '1.jpg', 'Balseadero.jpg'] },
  { nombre: 'Túnel falso La Vuelta', servicio: 'inf-diseno', longitud: 90, carpeta: 'TunelFalsoInfraDiseno', fotos: ['2TunelFalsoLaVuelta.jpg', '1TunelFalsoLaVuelta.jpg', '3TunelFalsoLaVuelta.jpg'] },
  { nombre: 'Puente 3 Barbosa', servicio: 'inf-diseno', longitud: 121, carpeta: 'puente3', fotos: ['1Puentes3.jpg', 'Barbosa_2.jpg', 'Barbosa_3.jpg'] },
  { nombre: 'Puente 4 Barbosa', servicio: 'inf-diseno', longitud: 70, carpeta: 'puente4', fotos: ['Puente4Barbosa_1.jpg', '1.jpg', '2.jpg'] },
  { nombre: 'Ampliación Puente La Caro', servicio: 'inf-diseno', longitud: 310, carpeta: 'la_caro', fotos: ['1.jpg', 'La_caro_1.jpg', 'La_caro_2.jpg'] },
  { nombre: 'Puente Caño Mojana', servicio: 'inf-diseno', longitud: 72, carpeta: 'mojana', fotos: ['mojana_3.jpg', '1.jpg', 'mojana_4.jpg'] },
  { nombre: 'Estructuras de contención vía Medellín - Bogotá', servicio: 'inf-diseno', longitud: null, carpeta: 'contencion', fotos: ['contencion_2.jpg', 'contencion_1.jpg', 'contencion_3.jpg'] },
  { nombre: 'Puente Papayos II', servicio: 'inf-diseno', longitud: 40, carpeta: 'papayos2', fotos: ['1PuentePapayosII.jpg', 'papayos_2.jpg', 'papayos_2_3.jpg'] },
  { nombre: 'Puente Papayos IV', servicio: 'inf-diseno', longitud: 40, carpeta: 'papayos_4', fotos: ['papayos_4_1.jpg', 'papayos_4_2.jpg', 'papayos_4_4.jpg'] },
  { nombre: 'Puente 5 Barbosa', servicio: 'inf-diseno', longitud: 130, carpeta: 'puente_5_barbosa', fotos: ['p5_3.jpg', 'p5_1.jpg', 'p5_2.jpg'] },
  { nombre: 'Puente Mina', servicio: 'inf-diseno', longitud: 78, carpeta: 'puente_mina', fotos: ['mina_3.jpg', '1.jpg', 'mina_2.jpg'] },
  { nombre: 'Puente paso de fauna', servicio: 'inf-diseno', longitud: 40, carpeta: 'paso_fauna', fotos: ['fauna_3.jpg', 'fauna_1.jpg', 'fauna_2.jpg'] },
  { nombre: 'Puente peatonal Juncal', servicio: 'inf-diseno', longitud: 34, carpeta: 'puente_juncal', fotos: ['juncal_1.jpg', 'juncal_2.jpg'] },
  { nombre: 'Puente San Roque', servicio: 'inf-diseno', longitud: 68, carpeta: 'san_roque', fotos: ['san_roque_2.jpg', '1.jpg', 'san_roque_3.jpg'] },
  { nombre: 'Puente Escuela de Minas', servicio: 'inf-diseno', longitud: 130, carpeta: 'escuela_minas', fotos: ['1.jpg', 'ecuela_minas_1.jpg', 'ecuela_minas_2.jpg'] },
  { nombre: 'Puente Roncador', servicio: 'inf-diseno', longitud: 2291, carpeta: 'roncador', fotos: ['1.jpg', '2.jpg', '3.jpg'] },
  { nombre: 'Obras de estabilización San Antonio de Prado', servicio: 'inf-diseno', longitud: null, carpeta: 'ObrasEstabilizacionSanAntonioDePrado', fotos: ['1.jpg', '2.jpg', '3.jpg'] },
  { nombre: 'Puente Santa Lucía', servicio: 'inf-diseno', longitud: 1000, carpeta: 'PuenteSantaLucia', fotos: ['1.PteSantaLucia.jpg', '2.PteSantaLucia.jpg', '3.PteSantaLucia.jpg'] },
  { nombre: 'Puente Cabras 1', servicio: 'inf-diseno', longitud: 93, carpeta: 'PuentesCabras1', fotos: ['1.jpg', '2.jpg'] },
  { nombre: 'Puente Cabras 2', servicio: 'inf-diseno', longitud: 93, carpeta: 'PuentesCabras2', fotos: ['3.jpg', '4.jpg'] },
  { nombre: 'Puente Morro Azul', servicio: 'inf-diseno', longitud: 33, carpeta: 'PuenteMorroAzul', fotos: ['2.PteMorroAzul.jpg', '1.PteMorroAzul.jpg', '3.PteMorroAzul.jpg'] },
  { nombre: 'Puente El Aro', servicio: 'inf-diseno', longitud: 120, carpeta: 'PuenteElAro', fotos: ['2.PteElAro.jpg', '1.PteElAro.jpg', '3.PteElAro.jpg'] },
  { nombre: 'Puente La Honda', servicio: 'inf-diseno', longitud: 76, carpeta: 'PuenteHonda', fotos: ['1.jpg', '2.jpg', '3.jpg'] },
  { nombre: 'Puente 4', servicio: 'inf-diseno', longitud: 191, carpeta: 'Puente4', fotos: ['1.jpg', '2.jpg', '3.Puente4.jpg'] },
  { nombre: 'Puente 5', servicio: 'inf-diseno', longitud: 130, carpeta: 'Puente5', fotos: ['1.Puente5.jpg', '2.Puente5.jpg', '3.Puente5.jpg'] },
  { nombre: 'Puente Combeima', servicio: 'inf-diseno', longitud: 270, carpeta: 'Combeima', fotos: ['1.Combeima.jpg', '2.jpg', '3.Combeima.jpg'] },
  { nombre: 'Puente 6', servicio: 'inf-diseno', longitud: 60, carpeta: 'Puente6', fotos: ['1.Puente6.jpg', '2.Puente6.jpg', '3.Puente6.jpg'] },

  // Infraestructura · Revisión y asesoría en construcción
  { nombre: 'Puente Girardota', servicio: 'inf-revision', longitud: 237, nota: 'Revisión de diseños estructurales.', carpeta: 'ReviInfraPteGirardota', fotos: ['girardota_2.jpg', 'girardota_1.jpg', 'pteG.jpg'] },
  { nombre: 'Puente Fundadores', servicio: 'inf-revision', longitud: 145, nota: 'Revisión de diseños estructurales.', carpeta: 'ReviInfraPteFundadores', fotos: ['4.jpg', '1.jpg', 'fundadores_1.jpg'] },
  { nombre: 'Puentes 2 Barbosa', servicio: 'inf-revision', longitud: 90, nota: 'Revisión de diseños estructurales.', carpeta: 'ReviInfraPte2', fotos: ['1Puentes2.jpg', '3Puentes2.jpg', '4Puentes4.jpg'] },
  { nombre: 'Puente Paso 5', servicio: 'inf-revision', longitud: 82.75, carpeta: 'ReviInfraPtePaso5', fotos: ['2Puentepaso52.jpg', '1Puentepaso52.jpg', '3Puentepaso52.jpg', '4Puentepaso52.jpg'] },
  { nombre: 'Puente El Bagre', servicio: 'inf-revision', longitud: 358, nota: 'Revisión de diseños estructurales.', carpeta: 'ReviInfraPteElBagre', fotos: ['bagre_2.jpg', 'bagre_1.jpg', 'bagre_3.jpg'] },
  { nombre: 'Puente Talaigua', servicio: 'inf-revision', longitud: 511, nota: 'Asesoría durante la construcción.', carpeta: 'RevInfraPteTelaigua', fotos: ['talaigua_3.jpg', 'talaigua_1.jpg', 'talaigua_2.jpg'] },
  { nombre: 'Puente Sogamoso', servicio: 'inf-revision', longitud: 735, nota: 'Asesoría durante la construcción.', carpeta: 'ReviInfraPteSogamoso', fotos: ['sogamoso_1.jpg', '1PteSogamoso.jpg', '2PteSogamoso.jpg', '4.jpg'] },
  { nombre: 'Puente Colorada', servicio: 'inf-revision', longitud: 88, nota: 'Asesoría durante la construcción.', carpeta: 'ReviInfraPteColorada', fotos: ['1PteColorada.jpg', '2PteColorada.jpg', '3PteColorada.jpg', '4PteColorada.jpg'] },
  { nombre: 'Puente 4 Sur', servicio: 'inf-revision', longitud: 578, nota: 'Revisión de diseños estructurales.', carpeta: '4sur', fotos: ['24Sur2.jpg', '34Sur.jpg', '44Sur.jpg', '4Sur.jpg'] },
  { nombre: 'Puentes vía Amoya', servicio: 'inf-revision', longitud: null, nota: 'Revisión de diseños estructurales de 5 puentes: 37, 65, 35, 44 y 47 m.', carpeta: 'ReviInfraPteAmoya', fotos: ['2PtesViaAmoya.jpg', '1PtesViaAmoya.jpg', '3PtesViaAmoya.jpg'] },
  { nombre: 'Puente Quebrada Blanca', servicio: 'inf-revision', longitud: 167, carpeta: 'ReviInfraPteBog_Villavi', fotos: ['3PtesBogota-Villavicencio.jpg', '1PtesBogota-Villavicencio.jpg', '2PtesBogota-Villavicencio.jpg'] },
  { nombre: 'La Paulita', servicio: 'inf-revision', longitud: null, nota: 'Revisión de diseños estructurales de las obras.', carpeta: 'ReviInfraLaPaulita', fotos: ['lp4.jpg', '2.jpg', 'lp1.jpg'] },

  // Infraestructura · Rehabilitación y patología
  { nombre: 'Puente Balandra', servicio: 'inf-rehab', longitud: 20.1, carpeta: 'RehabiInfraPuenteBalandra', fotos: ['2.jpg', '1.jpg', '3.jpg', '4.jpg'] },
  { nombre: 'Puente Bocas del río San Juan', servicio: 'inf-rehab', longitud: 6.14, carpeta: 'RehabiInfraPuenteBocas', fotos: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'] },
  { nombre: 'Puente La Pintada', servicio: 'inf-rehab', longitud: 216, carpeta: 'RehabiInfraPuenteCauca', fotos: ['1.jpg', 'pintada_1.jpg', 'pintada_2.jpg'] },
  { nombre: 'Puente río Jobo', servicio: 'inf-rehab', longitud: 28.6, carpeta: 'RehabiInfraPuenteJobo', fotos: ['1.jpg', '2.jpg', '3.jpg'] },
  { nombre: 'Puente San Juan', servicio: 'inf-rehab', longitud: 110, carpeta: 'RehabiInfraPuenteSanJuan', fotos: ['3.jpg', '1.jpg', '2.jpg'] },
  { nombre: 'Puentes La Virginia', servicio: 'inf-rehab', longitud: null, nota: 'Estudios de patología, reforzamiento y diseño de ampliación de 7 puentes.', carpeta: 'la_virginia', fotos: ['la_virginia_7.jpg', 'la_virginia_1.jpg', 'la_virginia_2.jpg', 'la_virginia_3.jpg', 'la_virginia_4.jpg', 'la_virginia_5.jpg', 'la_virginia_6.jpg'] },
  { nombre: 'Puente Paso 5', servicio: 'inf-rehab', longitud: 83, carpeta: 'paso_5', fotos: ['paso_5_3.jpg', 'paso_5_1.jpg', 'paso_5_2.jpg'] },
  { nombre: 'Puente Irra', servicio: 'inf-rehab', longitud: 140, carpeta: 'PuenteIrra', fotos: ['3.PteIrra.jpg', '1.PteIrra.jpg', '2.PteIrra.jpg'] },
  { nombre: 'Puentes Chaguana y Zapote', servicio: 'inf-rehab', longitud: null, carpeta: 'PteChaguana-PteZapote', fotos: ['3.jpg', '1.jpg', '2.jpg', '4.jpg'] },

  // Infraestructura · Estudios para licitación
  { nombre: 'Autopista Mar 2', servicio: 'inf-preliminar', longitud: null, nota: 'Estudios y diseños estructurales para la licitación.', carpeta: 'autopista_mar_2', fotos: ['autopista_mar_2_3.jpg', 'autopista_mar_2_1.jpg', 'autopista_mar_2_2.jpg'] },
  { nombre: 'Autopista Pacífico 1', servicio: 'inf-preliminar', longitud: null, nota: 'Estudios y diseños para la licitación.', carpeta: 'pacifico_1', fotos: ['pacifico_1.jpg', 'pacifico_2.jpg', 'pacifico_3.jpg'] },
  { nombre: 'Autopista Cartagena - Barranquilla - Malambo', servicio: 'inf-preliminar', longitud: null, nota: 'Estudios y diseños para la licitación.', carpeta: 'cbm', fotos: ['cbm_4.jpg', 'cbm_1.jpg', 'cbm_2.jpg', 'cbm_3.jpg'] },
  { nombre: 'Autopista Honda - Puerto Salgar', servicio: 'inf-preliminar', longitud: null, nota: 'Estudios y diseños para la licitación.', carpeta: 'honda_puerto_salgar', fotos: ['honda_puertos_salgar_4.jpg', 'honda_puertos_salgar_1.jpg', 'honda_puertos_salgar_2.jpg', 'honda_puertos_salgar_3.jpg'] },
  { nombre: 'Autopista Magdalena 2 - Pacífico 2', servicio: 'inf-preliminar', longitud: null, nota: 'Estudios y diseños para la licitación.', carpeta: 'pacifico_2', fotos: ['pacifico_2_3.jpg', 'pacifico_2.jpg', 'pacifico_2_2.jpg', 'pacifico_2_4.jpg'] },
  { nombre: 'Autopista Villavicencio - Yopal', servicio: 'inf-preliminar', longitud: null, nota: 'Estudios y diseños para la licitación.', carpeta: 'villavicencio_yopal', fotos: ['villavicencio_yopal_1.jpg', 'villavicencio_yopal_2.jpg', 'villavicencio_yopal_3.jpg'] },

  // Edificaciones · Diseño
  { nombre: 'Bodega Itagüí', servicio: 'edi-diseno', longitud: null, nota: 'Diseño estructural.', carpeta: 'EdifidisBodItagui', fotos: ['1.jpg', 'bodega_itagui.jpg', 'bodega_itagui_2.jpg'] },
  { nombre: 'Sunset 100', servicio: 'edi-diseno', longitud: null, nota: 'Diseño estructural de la pantalla de contención.', carpeta: 'Sunset100', fotos: ['3Sunset100.jpg', '1Sunset100.jpg', '5Sunset100.jpg'] },
  { nombre: 'Edificio Guayacán', servicio: 'edi-diseno', longitud: null, nota: 'Diseño estructural.', carpeta: 'EdifidisEdiGuayacan', fotos: ['guayacan_1.jpg', '1.jpg', 'guayacan_2.jpg'] },
  { nombre: 'Sala de ventas', servicio: 'edi-diseno', longitud: null, nota: 'Diseño estructural.', carpeta: 'EdifidisSalaEstrella', fotos: ['4SalaDeVentas.jpg', '1SalaDeVentas.jpg', '2SalaDeVentas.jpg', '3SalaDeVentas.jpg'] },
  { nombre: 'Casa de Máquinas Santiago', servicio: 'edi-diseno', longitud: null, nota: 'Diseño estructural de las fundaciones.', carpeta: 'EdifidisCasadeMaquinas', fotos: ['3.jpg', 'casa_maquinas.jpg', 'casa_maquinas_3.jpg'] },
  { nombre: 'Aeropuerto de Quibdó', servicio: 'edi-diseno', longitud: null, nota: 'Diseño de la ampliación de la terminal y del centro de servicios.', carpeta: 'Quibdo', fotos: ['4.BibliotecaAeropuertoQuibdo.jpg', '1.CentroDeServiciosAeropuertoQuibdo.jpg', '2.AmpliacionTerminalPasajerosAeropuertoQuibdo.jpg', '3.BibliotecaAeropuertoQuibdo.jpg', 'quibdo_1.jpg', 'quibdo_2.jpg', 'quibdo_3.jpg', 'quibdo_4.jpg'] },

  // Edificaciones · Rehabilitación y patología
  { nombre: 'Edificio Tecnomédicas', servicio: 'edi-rehab', longitud: null, nota: 'Revisión estructural del edificio, en el barrio Patio Bonito.', carpeta: 'EdifiRehabiEdificioTecnomedicas', fotos: ['1.jpg', '2.jpg', '4.jpg', '5.jpg', 'tecnomedicas_1.jpg', 'tecnomedicas_2.jpg', 'tecnomedicas_3.jpg'] },
  { nombre: 'Edificio Swid del Parque', servicio: 'edi-rehab', longitud: null, carpeta: 'swiddelparque', fotos: ['1.jpg', 'swid_1.jpg', 'swid_2.jpg', 'swid_3.jpg'] },
  { nombre: 'Edificio La Merced', servicio: 'edi-rehab', longitud: null, carpeta: 'EdificioLaMerced', fotos: ['1.jpg', '2.Ed.LaMerced.jpg', '3.Ed.LaMerced.jpg'] },

  // Edificaciones · Supervisión técnica
  { nombre: 'Edificio Verde Vista', servicio: 'edi-supervision', longitud: null, carpeta: 'verdevistas', fotos: ['verde_vista_1.jpg', 'verde_vista_2.jpg', 'verde_vista_3.jpg'] },
];

(function () {
  var BASE = 'https://www.lylconsultores.co/images/';
  window.LYL_FOTO = function (p, i, grande) {
    var archivo = p.fotos[i || 0];
    return BASE + p.carpeta + '/' + (grande ? '' : 'resizedimages/') + encodeURIComponent(archivo);
  };
})();
