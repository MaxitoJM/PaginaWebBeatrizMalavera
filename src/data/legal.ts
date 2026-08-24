import { CONTACT, SITE } from './site';

/**
 * Documentos legales del sitio.
 *
 * IMPORTANTE: los valores marcados como PENDIENTE deben ser completados por la
 * titular antes de considerar el sitio plenamente conforme. El artículo 50 de
 * la Ley 1480 de 2011 exige identificar de forma cierta y permanente a quien
 * ofrece servicios por medios electrónicos.
 */
export const IDENTIFICACION = {
  nombre: SITE.name,
  documento: 'C.C. [PENDIENTE: número de cédula]',
  tarjetaProfesional:
    'T.P. [PENDIENTE: número] del Consejo Superior de la Judicatura',
  domicilio: CONTACT.office.full,
  notificacionesJudiciales: CONTACT.email.display,
} as const;

/** Fecha de última actualización que se muestra en cada documento. */
export const LEGAL_UPDATED = '23 de agosto de 2026';

export interface LegalBlock {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
}

export interface LegalDoc {
  slug: string;
  title: string;
  summary: string;
  blocks: LegalBlock[];
}

const responsable: LegalBlock = {
  heading: 'Responsable del tratamiento',
  list: [
    `Nombre: ${IDENTIFICACION.nombre}`,
    `Identificación: ${IDENTIFICACION.documento}`,
    `Tarjeta profesional: ${IDENTIFICACION.tarjetaProfesional}`,
    `Domicilio y dirección para notificaciones: ${IDENTIFICACION.domicilio}`,
    `Correo electrónico: ${CONTACT.email.display}`,
    `Teléfono y WhatsApp: ${CONTACT.phone.display}`,
    `Horario de atención: ${CONTACT.schedule.full}`,
  ],
};

export const LEGAL_DOCS: LegalDoc[] = [
  {
    slug: 'aviso-legal',
    title: 'Aviso legal',
    summary:
      'Identificación de la titular del sitio, alcance de la información publicada y condiciones de la relación profesional.',
    blocks: [
      responsable,
      {
        heading: 'Objeto del sitio',
        paragraphs: [
          'Este sitio web tiene una finalidad informativa. Presenta la trayectoria profesional de la titular y las áreas del derecho en las que ejerce, principalmente derecho concursal, insolvencia de persona natural no comerciante, negociación de obligaciones y resolución de conflictos.',
          'La información publicada se ofrece de forma general y no constituye asesoría jurídica para un caso concreto. Ninguna sección de este sitio genera por sí sola una relación abogada-cliente, la cual solo nace del acuerdo expreso entre las partes y del otorgamiento del poder o mandato correspondiente.',
        ],
      },
      {
        heading: 'Ausencia de garantía de resultados',
        paragraphs: [
          'De conformidad con el Código Disciplinario del Abogado (Ley 1123 de 2007), la titular no garantiza ni promete resultados específicos en ningún proceso. Los procesos de insolvencia y las negociaciones de obligaciones dependen de la situación particular de cada persona, de la voluntad de los acreedores y de las decisiones de las autoridades competentes.',
          'Las referencias a experiencia o número de casos acompañados describen la trayectoria profesional y no deben interpretarse como una previsión sobre el resultado de un asunto futuro.',
        ],
      },
      {
        heading: 'Ejercicio profesional y ética',
        paragraphs: [
          'El ejercicio profesional de la titular se sujeta a la Ley 1123 de 2007, al deber de lealtad y honradez con el cliente y al secreto profesional. La información que las personas compartan con ocasión de una consulta está amparada por reserva profesional.',
        ],
      },
      {
        heading: 'Propiedad intelectual',
        paragraphs: [
          'Los textos, fotografías, marcas y demás contenidos de este sitio son propiedad de la titular o se usan con autorización. Su reproducción total o parcial con fines comerciales requiere autorización previa y escrita.',
        ],
      },
      {
        heading: 'Enlaces a terceros',
        paragraphs: [
          'Este sitio puede contener enlaces a sitios de terceros, como WhatsApp. La titular no controla ni responde por el contenido ni por las políticas de privacidad de esos terceros.',
        ],
      },
      {
        heading: 'Autoridad de vigilancia',
        paragraphs: [
          'Para asuntos relacionados con protección al consumidor y protección de datos personales, la autoridad competente es la Superintendencia de Industria y Comercio (www.sic.gov.co). En materia disciplinaria del ejercicio de la abogacía, la Comisión Nacional de Disciplina Judicial.',
        ],
      },
    ],
  },

  {
    slug: 'politica-de-privacidad',
    title: 'Política de tratamiento de datos personales',
    summary:
      'Cómo se recogen, usan, conservan y protegen los datos personales, conforme a la Ley 1581 de 2012 y el Decreto 1074 de 2015.',
    blocks: [
      {
        paragraphs: [
          'Esta política se adopta en cumplimiento de la Ley 1581 de 2012, del Decreto 1377 de 2013 (compilado en el Decreto 1074 de 2015) y demás normas concordantes. Su finalidad es informar a los titulares cómo se tratan sus datos personales y cómo pueden ejercer sus derechos.',
        ],
      },
      responsable,
      {
        heading: 'Datos que se recogen',
        paragraphs: [
          'A través del formulario de contacto se solicitan los siguientes datos, todos suministrados voluntariamente por el titular:',
        ],
        list: [
          'Nombre completo',
          'Correo electrónico',
          'Número de teléfono',
          'Servicio de interés',
          'Descripción de la situación que motiva la consulta',
        ],
      },
      {
        heading: 'Datos de contenido financiero',
        paragraphs: [
          'La descripción de la situación puede incluir información sobre obligaciones, acreedores o dificultades económicas. Esta información se trata con reserva profesional y se usa exclusivamente para valorar la consulta y orientar a la persona.',
          'Cuando el tratamiento involucre información financiera o crediticia proveniente de bancos de datos, se aplicará además la Ley 1266 de 2008. La titular no consulta ni reporta a centrales de riesgo con base en la información recibida por este sitio.',
        ],
      },
      {
        heading: 'Datos sensibles',
        paragraphs: [
          'No se solicitan datos sensibles en los términos del artículo 5 de la Ley 1581 de 2012. Se recomienda a los titulares no incluir información sobre salud, origen étnico, convicciones políticas o religiosas, ni datos de menores de edad en el formulario. Si el titular decide incluirlos voluntariamente, autoriza de manera expresa su tratamiento para atender la consulta, y podrá solicitar su supresión en cualquier momento.',
        ],
      },
      {
        heading: 'Finalidades del tratamiento',
        list: [
          'Responder la consulta formulada y contactar al titular por los canales que autorice.',
          'Valorar preliminarmente el caso y ofrecer información sobre los servicios profesionales.',
          'Agendar y prestar la consulta inicial gratuita.',
          'Cumplir obligaciones legales y conservar constancia de la relación profesional.',
        ],
      },
      {
        heading: 'Autorización y canales de contacto',
        paragraphs: [
          'El envío del formulario requiere la aceptación previa y expresa de esta política mediante una casilla que no viene marcada por defecto. Al aceptarla, el titular autoriza ser contactado por WhatsApp, llamada telefónica o correo electrónico, dentro del horario de atención indicado.',
          'En aplicación de la Ley 2300 de 2023, el titular puede indicar en cualquier momento cuáles canales autoriza, restringirlos o revocarlos, escribiendo al correo de contacto.',
        ],
      },
      {
        heading: 'Envío mediante WhatsApp',
        paragraphs: [
          'El formulario no transmite información por sí mismo. Al confirmar el envío, se abre una conversación de WhatsApp con el mensaje redactado, y es el propio titular quien decide enviarlo. Mientras el titular no lo envíe, la información no llega a la titular del sitio.',
          'WhatsApp es un servicio operado por un tercero, con sus propias condiciones y política de privacidad. El titular puede optar por el correo electrónico como canal alternativo.',
        ],
      },
      {
        heading: 'Conservación',
        paragraphs: [
          'Los datos se conservan durante el tiempo necesario para atender la consulta y, si se establece relación profesional, durante el término de la misma y los plazos legales de conservación documental aplicables al ejercicio de la abogacía. Cumplidas esas finalidades, se suprimen.',
        ],
      },
      {
        heading: 'Derechos del titular',
        paragraphs: [
          'Conforme al artículo 8 de la Ley 1581 de 2012, el titular tiene derecho a:',
        ],
        list: [
          'Conocer, actualizar y rectificar sus datos personales.',
          'Solicitar prueba de la autorización otorgada.',
          'Ser informado sobre el uso que se ha dado a sus datos.',
          'Presentar quejas ante la Superintendencia de Industria y Comercio por infracciones a la ley.',
          'Revocar la autorización y solicitar la supresión de los datos, cuando no exista un deber legal o contractual de conservarlos.',
          'Acceder de forma gratuita a sus datos personales.',
        ],
      },
      {
        heading: 'Procedimiento para consultas y reclamos',
        paragraphs: [
          `Las consultas y reclamos se presentan al correo ${CONTACT.email.display}, indicando el nombre del titular, la descripción de los hechos y los datos de contacto.`,
          'Las consultas se atienden en un término máximo de diez (10) días hábiles, prorrogable por cinco (5) días hábiles más. Los reclamos se atienden en un término máximo de quince (15) días hábiles, prorrogable por ocho (8) días hábiles más, informando previamente los motivos de la prórroga.',
        ],
      },
      {
        heading: 'Seguridad',
        paragraphs: [
          'La titular adopta medidas razonables de carácter técnico y administrativo para proteger la información recibida. No obstante, ningún medio de transmisión por internet es completamente seguro, por lo que se recomienda no enviar documentación sensible antes de establecer contacto directo.',
        ],
      },
      {
        heading: 'Registro Nacional de Bases de Datos',
        paragraphs: [
          'La obligación de inscripción en el Registro Nacional de Bases de Datos (RNBD) recae sobre sociedades y entidades sin ánimo de lucro con activos superiores a 100.000 UVT y sobre personas jurídicas de naturaleza pública. Las personas naturales no están obligadas a dicho registro. Si la actividad profesional se desarrollara a través de una persona jurídica que supere ese umbral, se procederá al registro correspondiente.',
        ],
      },
      {
        heading: 'Vigencia',
        paragraphs: [
          `Esta política rige desde el ${LEGAL_UPDATED}. Cualquier modificación se publicará en esta misma página.`,
        ],
      },
    ],
  },

  {
    slug: 'terminos-y-condiciones',
    title: 'Términos y condiciones',
    summary:
      'Reglas de uso del sitio web y condiciones aplicables a la solicitud de consultas.',
    blocks: [
      responsable,
      {
        heading: 'Aceptación',
        paragraphs: [
          'El uso de este sitio implica la aceptación de estos términos. Quien no esté de acuerdo debe abstenerse de usarlo.',
        ],
      },
      {
        heading: 'Naturaleza del servicio',
        paragraphs: [
          'El sitio ofrece información sobre servicios jurídicos y permite solicitar una consulta inicial. La consulta inicial es gratuita y no genera obligación para ninguna de las partes.',
          'La prestación de servicios jurídicos posteriores se rige por el contrato de prestación de servicios o el poder que se suscriba por separado, donde se pactan honorarios, alcance y duración.',
        ],
      },
      {
        heading: 'Uso del formulario',
        list: [
          'La información suministrada debe ser veraz, completa y actualizada.',
          'No debe enviarse información de terceros sin su autorización.',
          'El envío de una consulta no garantiza la aceptación del caso. La titular puede abstenerse de aceptar un asunto por conflicto de interés, por su naturaleza o por disponibilidad.',
          'El envío de una consulta no interrumpe términos judiciales ni suspende plazos de ningún proceso en curso.',
        ],
      },
      {
        heading: 'Honorarios',
        paragraphs: [
          'Salvo la consulta inicial, los servicios profesionales son remunerados. Los honorarios se acuerdan previamente y por escrito con cada cliente, atendiendo la complejidad del asunto y las tarifas orientadoras del Colegio de Abogados. No se cobran honorarios sin acuerdo previo.',
        ],
      },
      {
        heading: 'Disponibilidad del sitio',
        paragraphs: [
          'La titular procura la disponibilidad continua del sitio, pero no garantiza que esté libre de interrupciones o errores. Puede modificar o suspender contenidos en cualquier momento.',
        ],
      },
      {
        heading: 'Limitación de responsabilidad',
        paragraphs: [
          'La titular no responde por decisiones que el usuario adopte con base únicamente en la información general publicada en este sitio, sin haber recibido asesoría particular sobre su caso.',
        ],
      },
      {
        heading: 'Protección al consumidor',
        paragraphs: [
          'Al usuario le asisten los derechos previstos en la Ley 1480 de 2011. Las peticiones, quejas y reclamos pueden dirigirse al correo de contacto y serán atendidas dentro de los términos legales. La autoridad de vigilancia es la Superintendencia de Industria y Comercio (www.sic.gov.co).',
        ],
      },
      {
        heading: 'Ley aplicable',
        paragraphs: [
          'Estos términos se rigen por la ley colombiana. Las controversias se someterán a los jueces de la República de Colombia, sin perjuicio de acudir previamente a mecanismos de arreglo directo o conciliación.',
        ],
      },
    ],
  },

  {
    slug: 'politica-de-cookies',
    title: 'Política de cookies',
    summary:
      'Qué almacena este sitio en tu navegador y por qué. No se usan cookies de publicidad ni de seguimiento.',
    blocks: [
      {
        paragraphs: [
          'Las cookies y tecnologías similares son pequeños archivos que un sitio guarda en el navegador. Cuando permiten identificar o asociar información a una persona, su uso constituye tratamiento de datos personales y se sujeta a la Ley 1581 de 2012 y a los criterios de la Superintendencia de Industria y Comercio.',
        ],
      },
      {
        heading: 'Este sitio no usa cookies de seguimiento',
        paragraphs: [
          'Este sitio no instala cookies publicitarias, ni de analítica, ni de perfilamiento. No hay Google Analytics, ni píxeles de redes sociales, ni herramientas de medición de audiencia. Por esa razón no se solicita consentimiento para cookies no esenciales: sencillamente no existen.',
        ],
      },
      {
        heading: 'Almacenamiento técnico que sí se utiliza',
        paragraphs: [
          'El sitio usa el almacenamiento local del navegador (localStorage) para dos fines estrictamente funcionales:',
        ],
        list: [
          'Conservar temporalmente lo que escribes en el formulario, para que no se pierda si recargas la página por accidente. Se borra automáticamente al enviar la consulta.',
          'Recordar que ya viste el aviso informativo, para no mostrarlo en cada visita.',
        ],
      },
      {
        heading: 'Cómo eliminar esta información',
        paragraphs: [
          'Esta información permanece únicamente en tu dispositivo y nunca se transmite a la titular del sitio. Puedes borrarla desde las opciones de tu navegador ("borrar datos de navegación") o con el botón disponible al final del formulario de contacto.',
          'Si usas un computador compartido, te recomendamos borrar los datos del formulario al terminar.',
        ],
      },
      {
        heading: 'Servicios de terceros',
        list: [
          'Google Fonts: el sitio carga tipografías desde los servidores de Google, lo que implica que Google recibe la dirección IP de tu conexión. Google no instala cookies mediante este servicio.',
          'WhatsApp: solo se activa si decides usar el botón de envío. Se rige por las condiciones y la política de privacidad de WhatsApp.',
          'Vercel: proveedor de alojamiento del sitio, que procesa registros técnicos de acceso con fines de seguridad y funcionamiento.',
        ],
      },
      {
        heading: 'Cambios',
        paragraphs: [
          `Si en el futuro se incorporan herramientas de analítica u otras cookies, esta política se actualizará y se solicitará el consentimiento previo, expreso e informado antes de instalarlas. Última actualización: ${LEGAL_UPDATED}.`,
        ],
      },
    ],
  },
];

export const findLegalDoc = (slug: string): LegalDoc | undefined =>
  LEGAL_DOCS.find((doc) => doc.slug === slug);
