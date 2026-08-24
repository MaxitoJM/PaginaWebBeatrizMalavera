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

### Despliegues bloqueados

En el plan Hobby, y mientras el repositorio sea **privado**, Vercel solo publica
los commits cuyo autor reconozca como titular del proyecto. La identificación se
hace por el **correo del autor del commit**, no por quién ejecuta el push. Si el
correo no corresponde a una dirección registrada en la cuenta de Vercel, el
despliegue queda en estado *Blocked*.

Comprobar el autor de un commit:

```bash
git log -1 --format="%an <%ae>"
```

Formas de resolverlo, de menor a mayor costo:

1. Registrar y verificar ese correo en Vercel (*Settings → Account → Emails*).
2. Hacer público el repositorio: la restricción no aplica a repos públicos y el
   proyecto no contiene credenciales ni datos sensibles.
3. Publicar con el CLI (`vercel --prod`), que sube el build directamente y no
   verifica el autor del commit.

Las direcciones `@users.noreply.github.com` **no sirven** para la primera
opción, porque no reciben correo y no se pueden verificar.
