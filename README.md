# Mi Control Fitness — PWA

Esta versión está preparada para instalarse en Android como aplicación (PWA), abrirse a pantalla completa y cargar su estructura básica sin conexión tras la primera visita.

## Publicar o actualizar en GitHub Pages
1. Abre el repositorio `mi-control-fitness`.
2. Sube/reemplaza `index.html` en la raíz.
3. Sube también `manifest.webmanifest` y `service-worker.js` en la raíz.
4. Sube la carpeta `icons` completa con sus tres PNG.
5. Confirma los cambios en la rama `main`.
6. En Settings → Pages, comprueba que sigue publicado desde `main` y `/ (root)`.
7. Espera a que termine el despliegue.

## Instalar en Android
1. Abre la URL HTTPS publicada de GitHub Pages en Chrome.
2. Espera a que termine de cargar y vuelve a cargar una vez si acabas de actualizar.
3. Pulsa ⋮ → `Instalar aplicación` o `Añadir a pantalla de inicio` (el texto depende de Chrome).
4. Confirma la instalación. Se creará el icono `Fitness`.
5. Abre el icono desde la pantalla de inicio o el cajón de aplicaciones.

## Importante sobre datos y uso sin conexión
- El service worker almacena en caché la estructura de la app para abrirla offline después de haberla visitado online.
- Las sesiones y ajustes siguen guardándose en el almacenamiento local del navegador/dispositivo. No se sincronizan automáticamente entre dispositivos.
- Exporta copias JSON desde Ajustes periódicamente.
- La instalación como PWA no convierte por sí sola la app en una app nativa de Play Store.
