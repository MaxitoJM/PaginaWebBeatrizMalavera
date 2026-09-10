# Sitio web — Beatriz Helena Malavera López

Sitio institucional de la abogada Beatriz Helena Malavera López, especializada en
derecho concursal, insolvencia y negociación de obligaciones.

## Stack

React 18 · TypeScript · Vite 5 · Tailwind CSS 3 · lucide-react

## Cómo trabajar en el proyecto

```bash
npm install
npm run dev      # servidor de desarrollo en http://localhost:5173
npm run build    # compila a dist/
npm run lint     # eslint
```

## Estructura

```
public/
  img/                  Fotografías del sitio
  favicon.svg           Balanza de la justicia
src/
  components/           Secciones de la portada y utilidades de interfaz
  data/
    site.ts             Nombre, teléfono, correo, dirección y horario
    services.ts         Catálogo de servicios
    legal.ts            Textos de los cuatro documentos legales
  hooks/
    useHashRoute.ts     Enrutado por hash para las páginas legales
```

### Dónde cambiar cada cosa

Los datos que aparecen en varias secciones están centralizados para evitar
duplicados. Si cambia un teléfono, un correo o la dirección, se edita
**únicamente** `src/data/site.ts` y el cambio se refleja en el encabezado, la
sección de contacto, el pie de página y los documentos legales.

Lo mismo aplica a `src/data/services.ts`: la lista alimenta a la vez la rejilla
de servicios, el selector del formulario y el pie de página.

## Documentos legales

Viven en `src/data/legal.ts` y se publican en rutas por hash:

- `#/aviso-legal`
- `#/politica-de-privacidad`
- `#/terminos-y-condiciones`
- `#/politica-de-cookies`

Se redactaron con base en la Ley 1581 de 2012 y el Decreto 1074 de 2015
(protección de datos), la Ley 1266 de 2008 (habeas data financiero), la
Ley 2300 de 2023 (canales de contacto), la Ley 1480 de 2011 (protección al
consumidor) y la Ley 1123 de 2007 (código disciplinario del abogado).

**Son borradores y deben ser revisados por la titular antes de considerarlos
definitivos.**

## Formulario de contacto

El sitio es estático y no tiene backend. El formulario:

1. Conserva lo escrito en el navegador para que no se pierda al recargar.
2. Exige autorización previa y expresa para el tratamiento de datos, con una
   segunda casilla opcional para remisión de información.
3. Al confirmar, abre WhatsApp con el mensaje redactado hacia el número de
   contacto, incluyendo constancia de las autorizaciones y la fecha.

No existe base de datos central: el registro de la consulta es el mensaje que
llega a WhatsApp. Para almacenarlas habría que añadir un backend.

## Despliegue

El dominio de producción es **https://beatrizmalavera.com** (sin `www`). Ese es
el valor de `canonical`, `og:url`, `og:image` y `twitter:image` en `index.html`.
Si el dominio cambia, hay que actualizar esas cuatro etiquetas: son absolutas
porque WhatsApp, Facebook y LinkedIn no resuelven rutas relativas.

### Hosting estático (cPanel u otro)

```bash
npm install
npm run build
```

Se sube **el contenido** de `dist/`, no la carpeta: `index.html` debe quedar en
la raíz del destino. El build usa rutas relativas (`base: './'` en
`vite.config.ts`), así que funciona igual en la raíz de un dominio que dentro de
una subcarpeta.

No hace falta `.htaccess` con reglas de reescritura: la navegación es por hash
(`#/aviso-legal`) y no usa React Router, de modo que el servidor solo entrega
`index.html` y nunca recibe rutas propias.

El proyecto no usa variables de entorno, así que no hay `.env` que preparar.

### Vercel

También se despliega en Vercel desde la rama `main`.

#### Despliegues bloqueados

En el plan Hobby, y mientras el repositorio sea **privado**, Vercel solo publica
los commits cuyo autor reconozca como titular del proyecto. La identificación se
hace por el **correo del autor del commit**, no por quién ejecuta el push. Si el
correo no corresponde a una dirección registrada en la cuenta de Vercel, el
despliegue queda en estado *Blocked*.

La regla es simple: **el correo del autor del commit debe ser una dirección
registrada en la cuenta de Vercel propietaria del proyecto.**

Por eso este repositorio fija localmente el autor, sin alterar la configuración
global usada en otros proyectos:

```bash
git config --local user.email "<correo de la cuenta de Vercel>"
```

Comprobar el autor antes de publicar:

```bash
git log -1 --format="%an <%ae>"
```

Dos advertencias aprendidas a golpes:

- Las direcciones `@users.noreply.github.com` **no sirven**: no reciben correo,
  así que no se pueden verificar en Vercel.
- El primer despliegue del proyecto puede aparecer como correcto aunque su
  autor no esté autorizado, porque la importación inicial no aplica esta
  verificación. No sirve como referencia.

Alternativas si no se quiere depender del autor del commit: hacer público el
repositorio, o publicar con el CLI (`vercel --prod`), que sube el build
directamente.
