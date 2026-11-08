# Mi Control Fitness

Aplicación web personal para registrar entrenamientos en casa.

## Incluye
- 5 rutinas diferentes de 3 días (A-E), adaptadas a banco reclinable, mancuernas, pesa rusa y barra Z con discos.
- Registro por sesión de peso utilizado y repeticiones/segundos.
- Historial consultable y eliminación de sesiones.
- Evolución de cargas por ejercicio.
- Datos iniciales editables.
- Exportación e importación de copias JSON.
- Diseño adaptable a móvil y ordenador.

## Publicar con GitHub Pages
1. En GitHub, pulsa **New repository**.
2. Nombre recomendado: `mi-control-fitness`.
3. Selecciona **Public** (necesario para la opción gratuita de Pages en repositorios personales, según las condiciones vigentes de GitHub).
4. Crea el repositorio.
5. Pulsa **Add file → Upload files**.
6. Sube `index.html` a la raíz del repositorio (no dentro de una carpeta).
7. Escribe un mensaje como `Crear Mi Control Fitness` y pulsa **Commit changes**.
8. En el repositorio abre **Settings → Pages**.
9. En **Build and deployment**, selecciona **Deploy from a branch**.
10. Selecciona la rama `main` y la carpeta `/ (root)`, y pulsa **Save**.
11. Espera a que GitHub Pages publique la web. La dirección tendrá este formato:
   `https://TU-USUARIO.github.io/mi-control-fitness/`

## Guardado de datos: importante
- Los entrenamientos se guardan en el almacenamiento local del navegador (localStorage) del dispositivo donde uses la app.
- GitHub Pages publica la aplicación, pero **no sincroniza los datos entre móviles, ordenadores o navegadores**.
- No borres los datos del sitio ni el almacenamiento del navegador sin exportar antes una copia JSON.
- Para trasladar tus registros: en Ajustes pulsa **Exportar copia JSON**; en el otro dispositivo abre la app y pulsa **Importar copia JSON**.
- Guarda copias periódicas fuera del móvil/ordenador. GitHub no es una copia automática de tus entrenamientos.

## Actualizar la aplicación
Cuando haya una nueva versión, reemplaza `index.html` en el repositorio y confirma los cambios. Tus registros locales deberían mantenerse mientras no se cambie la clave interna `mi_control_fitness_v1` ni se borren los datos del navegador.
