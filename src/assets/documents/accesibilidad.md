# Informe de Accesibilidad – Catálogo de Plantas

## 1. Navegación por teclado (TAB)
- Todos los enlaces, botones y tarjetas pueden recorrerse usando **TAB**.
- Las tarjetas incluyen `tabIndex={0}`, permitiendo acceder sin ratón.
- Todos los elementos muestran un foco visual claro.

![Tab producto](/imagenes/tab.png)
![Tab enlace](/imagenes/tab2.png)



---

## 2. Menú hamburguesa accesible
- El botón utiliza atributos:
  - `aria-label`
  - `aria-expanded`
  - `aria-controls`
- El lector de pantalla anuncia si el menú está abierto o cerrado.
- Funciona correctamente en pantallas pequeñas.

✔ Menú completamente accesible.

---

## 3. Lectores de pantalla
- Todas las imágenes incluyen texto alternativo (`alt` descriptivo).
- Las tarjetas usan `aria-label="Abrir detalle de <nombre>"`.
- Se emplean encabezados semánticos (`h1`, `h2`) correctamente.
- La estructura del contenido facilita la lectura por voz.

✔ Compatible con lectores de pantalla.

---

## 4. Página de detalle del producto
- El orden de lectura es correcto: botón → título → imagen → descripción.
- No hay elementos inaccesibles ni saltos inesperados.

✔ Experiencia accesible y clara.

---

## Conclusión
La aplicación cumple los requisitos fundamentales de accesibilidad:

- ✔ Navegación por teclado  
- ✔ Lectores de pantalla  
- ✔ Uso adecuado de ARIA  
- ✔ Estructura semántica correcta

---
