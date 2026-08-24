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

Se despliega en Vercel desde la rama `main`.

> **Importante:** el repositorio es privado y el plan Hobby no admite
> colaboradores. Vercel bloquea los despliegues cuyo autor de commit no
> reconozca. Este repositorio fija el autor localmente:
>
> ```
> git config --local user.email "135483965+MaxitoJM@users.noreply.github.com"
> ```
>
> Si un despliegue aparece como *Blocked*, revisar primero el correo del autor
> del commit.
