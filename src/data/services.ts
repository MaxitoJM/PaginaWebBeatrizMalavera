import { FileText, Handshake, TrendingUp, GraduationCap } from 'lucide-react';
import type { ComponentType } from 'react';

export interface Service {
  id: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  benefits: string[];
  process: string[];
}

/**
 * Catálogo de servicios. Lo consumen la sección de Servicios, el selector del
 * formulario de contacto y el pie de página, para que la lista sea idéntica
 * en todo el sitio.
 */
export const SERVICES: Service[] = [
  {
    id: 'insolvencia',
    icon: FileText,
    title: 'Ley de Insolvencia',
    description:
      'Análisis integral y defensa jurídica para reorganizar deudas y alcanzar acuerdos sostenibles.',
    benefits: [
      'Protección legal contra embargos',
      'Reorganización de todas las deudas',
      'Plan de pagos personalizado',
    ],
    process: [
      'Evaluación de la situación financiera',
      'Preparación de documentación legal',
      'Presentación ante autoridad competente',
      'Negociación con acreedores',
      'Seguimiento del plan acordado',
    ],
  },
  {
    id: 'negociacion',
    icon: Handshake,
    title: 'Negociación de Deudas',
    description:
      'Estrategias personalizadas para negociar con acreedores y reducir montos y tasas de interés.',
    benefits: [
      'Reducción de intereses moratorios',
      'Quita parcial del capital',
      'Planes de pago flexibles',
      'Evitar procesos judiciales',
    ],
    process: [
      'Análisis de cada deuda',
      'Estrategia de negociación',
      'Contacto directo con acreedores',
      'Acuerdos por escrito',
      'Monitoreo del cumplimiento',
    ],
  },
  {
    id: 'recuperacion',
    icon: TrendingUp,
    title: 'Recuperación de Cartera',
    description:
      'Enfoque estratégico para la recuperación efectiva de cartera vencida.',
    benefits: [
      'Recuperación extrajudicial',
      'Procesos judiciales eficientes',
      'Preservación de relaciones comerciales',
    ],
    process: [
      'Análisis de viabilidad',
      'Estrategia de cobranza',
      'Gestión extrajudicial',
      'Acciones legales si es necesario',
      'Recuperación efectiva',
    ],
  },
  {
    id: 'educacion',
    icon: GraduationCap,
    title: 'Educación Financiera',
    description:
      'Capacitación para tomar decisiones financieras informadas y evitar futuras problemáticas.',
    benefits: [
      'Talleres personalizados',
      'Herramientas de planificación',
      'Prevención de sobreendeudamiento',
      'Mejores decisiones financieras',
    ],
    process: [
      'Diagnóstico de conocimientos',
      'Plan de capacitación personalizado',
      'Talleres teórico-prácticos',
      'Herramientas de seguimiento',
      'Acompañamiento continuo',
    ],
  },
];
