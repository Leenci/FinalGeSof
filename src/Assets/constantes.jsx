import { Zap, 
  Smartphone, 
  Palette, 
  PackageCheck, 
  Moon, 
  Sliders,
 Blocks,  
  RefreshCw, 
  Layers, 
  Globe, 
  Cpu } from 'lucide-react';


export const navItems = [
    {label: "Inicio", href: "/"},
    {label: "React", href: "/react"},
    {label: "TailwindCSS", href: "/tailwind"},
    {label: "Sobre mi", href: "/about"},
]

export const cR = [
    {icon: <Blocks />,
    title: 'Basado en Componentes',
    description: 'Construye interfaces encapsuladas que manejan su propio estado y combínalas para crear vistas complejas.'},
    {icon: <Zap />,
    title: 'Virtual DOM',
    description: 'Optimiza el rendimiento actualizando únicamente las partes necesarias del DOM real de forma rápida y eficiente.'},
    {  icon: <RefreshCw />,
    title: 'Enfoque Declarativo',
    description: 'Diseña vistas simples para cada estado de tu aplicación y React se encargará de actualizarlas cuando cambien los datos.'},
    {icon: <Layers />,
    title: 'Ecosistema de Hooks',
    description: 'Reutiliza lógica de estado y efectos secundarios entre componentes sin necesidad de escribir clases.'},
    {icon: <Cpu />,
    title: 'Renderizado en el Servidor',
    description: 'Soporta Server Components y SSR para mejorar la velocidad de carga inicial y el posicionamiento SEO.'},
    { icon: <Globe />,
    title: 'Multiplataforma',
    description: 'Aprende una vez y escribe en cualquier lugar, permitiendo crear apps móviles nativas con React Native.'}
]
export const cT = [
    {icon: <Zap />,
    title: 'Utility-First',
    description: 'Construye diseños personalizados directamente en tu HTML combinando clases de utilidad sin escribir CSS tradicional.'},
    {icon: <Smartphone />,
    title: 'Diseño Responsivo',
    description: 'Adapta cualquier elemento a diferentes tamaños de pantalla de forma intuitiva usando prefijos como sm, md y lg.'},
    {icon: <PackageCheck />,
    title: 'Optimización Automática',
    description: 'Elimina automáticamente todo el CSS no utilizado en producción para generar archivos extremadamente ligeros.'},
    {icon: <Moon />,
    title: 'Modo Oscuro Nativo',
    description: 'Implementa temas oscuros en toda tu aplicación añadiendo simplemente el modificador dark a tus clases.'},
    {icon: <Sliders />,
    title: 'Altamente Personalizable',
    description: 'Configura tu propia paleta de colores, tipografías y espaciados desde un único archivo de configuración.'},
    {icon: <Palette />,
    title: 'Sistema de Diseño Consistente',
    description: 'Trabaja con escalas predefinidas de medidas y colores que mantienen la armonía visual en todo el proyecto.'}
]