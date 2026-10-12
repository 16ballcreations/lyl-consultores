# L&L Ingenieros Consultores: propuesta de sitio web

Propuesta de 16 Ball Creations para el nuevo sitio de **Londoño & Londoño
Ingenieros Consultores** (Medellín), firma de ingeniería estructural: puentes,
edificaciones, contención, revisión de diseños, rehabilitación y patología.

> **Estado: propuesta.** El sitio actual, https://www.lylconsultores.co (Joomla),
> sigue en producción. No confundir con otras empresas "LyL" del rubro SAP.

## El concepto

**«Diseñamos lo que no se puede caer.»**

El lenguaje viene de la referencia de Refero *AI for Business*
(https://styles.refero.design/style/ee403055-480e-4bd4-9216-07c9ae2dde2e):
editorial-brutalista sobre lienzo gris, titulares enormes en mayúsculas
condensadas, superficies planas sin sombras y un solo acento de color (menta).
De la referencia se tomó la estructura y el tono visual. Donde ella usa renders
3D de objetos, aquí está la obra real: las fotos de los puentes hacen de objeto
físico sobre el lienzo.

La pieza firma es **la regla**: un bloque negro con los puentes diseñados
ordenados por longitud y dibujados a escala, del Roncador (2.291 m) hacia abajo.
La cifra del titular (8.314 m) se calcula con los datos publicados en el sitio
actual, no está escrita a mano.

| | |
|---|---|
| Lienzo | `#e5e5e5`, tarjetas blancas, bloques casi negros `#0d0d0d` |
| Acento | Menta `#d1ffca` (etiquetas, barra mayor, botón sobre oscuro). Amarillo `#fff100` solo en el correo |
| Tipografía | Archivo (ancho 62 para titulares condensados, 100 para texto) + Geist Mono para datos |
| Formas | Botones 8 px, tarjetas 32 px, bloques con arco superior de 64 px, etiquetas en píldora |
| Íconos | Phosphor |
| Modo oscuro | Automático según el sistema |

## Páginas

- `index.html`: portada, la regla, servicios (Infraestructura y Edificaciones),
  licitaciones de autopistas, obras destacadas, empresa y contacto.
- `proyectos.html`: los 74 proyectos con filtros por servicio, buscador, orden
  por longitud y visor de fotos. Acepta anclas: `proyectos.html#inf-diseno`
  filtra un servicio y `proyectos.html#p-puente-chiri` abre un proyecto.

El formulario de contacto no necesita servidor: valida y abre el correo de la
persona con el mensaje listo para `info@lylconsultores.co`.

## Contenido

Todo el contenido sale del sitio actual: textos de la página Empresa, los 74
proyectos con sus longitudes y notas, teléfonos, dirección y correo. Los datos
viven en `assets/js/proyectos.js`. Los teléfonos fijos se pasaron al formato
actual de Medellín (604).

Las fotos se enlazan directamente desde `lylconsultores.co/images/`. Antes de
publicar el sitio definitivo conviene copiarlas al repositorio y pasarlas a WebP.

## Verlo en local

```bash
node scripts/servir.mjs
```

Abre http://localhost:4321. No hay dependencias ni paso de compilación.

## Pendiente antes de producción

- Copiar y optimizar las fotos (hoy se cargan del sitio viejo).
- Confirmar con el cliente teléfonos, correo y el logotipo (la propuesta usa la
  sigla L&L en tipografía en lugar del logo actual).
- Redirecciones 301 desde las rutas viejas de Joomla
  (`/index.php/infraestructura/diseno` → `/proyectos.html#inf-diseno`, etc.).
