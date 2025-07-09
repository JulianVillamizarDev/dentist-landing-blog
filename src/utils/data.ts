
export const MAIL = 'od.angelavillamizar@hotmail.com';
export const PHONE_NUMBER = '573142384249';

export const navbarData = [
    {
        title: 'Acerca',
        href: '/#about'
    },
    {
        title: 'Servicios',
        href: '/#services'
    },
    {
        title: 'Contacto',
        href: '/#contact'
    },
    {
        title: 'Agenda Tu Cita',
        href: `https://wa.me/${PHONE_NUMBER.trim()}`
    }
]

export const socialLinks = [
    {
        title: 'Facebook',
        href: 'https://www.facebook.com/angela.villamizar.165/',
    },
    {
        title: 'Instagram',
        href: 'https://www.instagram.com/od.angelavillamizar',
    },
]

export const services = [
    {
        name: 'Limpieza',
        description: 'Limpieza dental profunda para eliminar la placa y sarro',
        imgUrl: 'gallery/2.jpg'
    },
    {
        name: 'Blanqueamiento',
        description: 'Tratamiento para blanquear los dientes de forma segura y efectiva',
        imgUrl: 'gallery/3.jpg'
    },
    {
        name: 'Ortodoncia',
        description: 'Tratamientos para corregir la posición de los dientes',
        imgUrl: 'gallery/4.jpg'
    },
    {
        name: 'Implantes',
        description: 'Solución definitiva para reemplazar dientes perdidos o faltantes con implantes dentales',
        imgUrl: 'gallery/5.jpg'
    }
]

export const FAQ = [
    {
        name: '¿Cuáles son los servicios dentales que ofrece su clínica?',
        description: 'En nuestra clínica dental ofrecemos una amplia gama de servicios, que incluyen limpiezas dentales, empastes, extracciones, tratamientos de conducto, blanqueamiento dental, ortodoncia, implantes dentales y mucho más. Nuestro equipo está capacitado y equipado para brindar atención de alta calidad en todas estas áreas de la odontología.',
    },
    {
        name: '¿Qué medidas de seguridad e higiene implementan para garantizar la salud de los pacientes durante las visitas?',
        description: 'La salud y seguridad de nuestros pacientes es nuestra máxima prioridad. Implementamos estrictos protocolos de esterilización y desinfección en todas nuestras instalaciones y equipos. Nuestro personal utiliza equipo de protección personal (EPP) y seguimos las pautas establecidas por las autoridades sanitarias para minimizar el riesgo de infecciones cruzadas.'
    },
    {
        name: '¿Cuál es el proceso de programación de una cita dental?',
        description: 'Programar una cita es fácil y conveniente. Puedes llamar a nuestra clínica durante el horario de atención o comunicarse con nosotros a través de Whatsapp.'
    },
    {
        name: '¿Cuales son las opciones de pago disponibles para los tratamientos dentales?',
        description: 'Ofrecemos diversas opciones de pago para adaptarnos a las necesidades de nuestros pacientes. Aceptamos efectivo, tarjetas de crédito y débito, así como transferencias bancarias mediante nuestro código QR. También ofrecemos planes de financiamiento como Addi para facilitar el acceso a tratamientos dentales de calidad.',
    },
]

export const carouselImages = [
    '/gallery/img-1.jpg',
    '/gallery/img-2.jpg',
    '/gallery/img-3.jpg',
    '/gallery/img-4.jpg',
    'gallery/ortodoncia.jpg'
];

export const identificationTypes = [
    {
        key: 'cc',
        value: 'cc',
        text: 'Cédula de Ciudadania'
    },
    {
        key: 'ti',
        value: 'ti',
        text: 'Tarjeta de Identidad'
    },
    {
        key: 'rc',
        value: 'registro-civil',
        text: 'Registro Civil'
    },
    {
        key: 'passport',
        value: 'pasaporte',
        text: 'Pasaporte'
    },
]