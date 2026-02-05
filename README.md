## ¿Dónde está desplegada cada parte?

En este proyecto cada parte está desplegada en una plataforma distinta.

El backend está desplegado en Render, donde se encuentra la API. Desde ahí se gestionan los datos y se accede mediante una URL pública.

El frontend web está desplegado en Vercel. Es una aplicación hecha con React que se puede usar desde cualquier navegador sin necesidad de instalar nada.

Por último, también existe una aplicación de escritorio, creada con Electron, que se distribuye como un archivo ejecutable (.exe) para Windows.


## ¿Qué problemas han surgido durante el despliegue?

Durante el despliegue aparecieron varios problemas.

En Render, el principal problema fue configurar bien las variables de entorno y la conexión con la base de datos. Además, el servidor tarda un poco en arrancar.

En Vercel, hubo problemas para crear el proyecto, ya que a la hora de poner el nombre al poryecto ponía muchas pegas.

En Electron, el despliegue fue más complicado, ya que aparecieron errores de permisos en Windows y problemas al generar el ejecutable con electron-builder.


##  Diferencias entre web y escritorio

La aplicación web tiene como ventaja que no necesita instalación, se puede usar desde cualquier dispositivo con navegador y se actualiza automáticamente.

La aplicación de escritorio necesita instalación y ocupa más recursos, pero permite ejecutarse como un programa independiente del navegador.

##  ¿Por qué Electron no sustituye a una web?

Electron no sustituye a una web porque consume más recursos, necesita instalación y depende del sistema operativo. Además, una web es más accesible, ya que se puede usar desde cualquier dispositivo sin instalar nada.Electron es una alternativa para ciertos casos, pero no reemplaza a una aplicación web.