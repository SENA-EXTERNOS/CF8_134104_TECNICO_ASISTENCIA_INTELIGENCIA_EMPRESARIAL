export default {
  global: {
    componenteFormativo: '<em>Social media</em> e inteligencia empresarial',
    descripcionCurso:
      '<em>Social media</em> y la inteligencia empresarial, han llegado estratégicamente como una nueva manera de comunicarse, abriendo un espacio para el relacionamiento y la comunicación, mediante plataformas dinámicas, interactivas y fáciles de manejar, siendo una ventaja para las organizaciones al utilizarla como un medio para reducir la brecha con el cliente y darle el protagonismo como el centro del negocio.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Análisis de datos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>E-commerce</em> y <em>marketing</em> digital',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Analítica de indicadores de desempeño en social media',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '<em>E-commerce</em> y <em>marketing digital</em>',
      referencia:
        'Miranda, E & Tellez, C. (2016). <i>Social Media Marketing</i> y la reputación de las empresas hoteleras del sur de Bolivia. <em>Revista Digital Investigación & negocios</em>.',
      tipo: 'Artículo',
      link: 'http://www.scielo.org.bo/pdf/riyn/v9n13/v9n13_a07.pdf',
    },
    {
      tema: 'Analítica de indicadores de desempeño en <i>social media</i>',
      referencia:
        'Guevara, E. et al. (2018). Minería de Datos. <em>Revista Científica Mundo de la Investigación y el Conocimiento</em>. 2 (1), 339-349.',
      tipo: 'Artículo',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=6732870',
    },
    {
      tema: '<em>E-commerce</em> y <em>marketing digital</em>',
      referencia:
        'Newberry, C. Houtsuite. <em>Las 17 métricas de redes sociales más importantes para seguir en 2022</em>.',
      tipo: 'Blog',
      link: 'https://blog.hootsuite.com/social-media-metrics/',
    },
    {
      tema: 'Análisis de datos',
      referencia:
        'NetworkDigital 360. (2022). <em>Innovación Digital 360.com. Análisis de datos: Concepto, metodología y técnicas</em>.',
      tipo: 'Página Web',
      link:
        'https://www.innovaciondigital360.com/big-data/analisis-de-datos-tecnicas-y-metodologias-para-la-aplicacion-de-analytics/',
    },
    {
      tema: '<em>E-commerce</em> y <em>marketing digital</em>',
      referencia:
        'Wix Blog. (2021). <em>¿Qué es Google Analytics? Guía para principiantes</em>.',
      tipo: 'Guía',
      link:
        'https://es.wix.com/blog/amp/2015/08/como-usar-google-analytics-para-tu-pagina-web-de-wix?utm_source=google&utm_medium=cpc&utm_campaign=12446219914^117820822545&experiment_id=^^501731587679^^_DSA&gclid=Cj0KCQjwqoibBhDUARIsAH2OpWiCrA33bZ_pMDQyntu2XXWM3ffM9wPqfMdVuECzNEBdKA8vS087S9saAuE9EALw_wcB',
    },
  ],
  glosario: [
    {
      termino: '<em>Big data</em>',
      significado:
        'rango de tareas que conlleva la recolección y consolidación de bases de datos centralizadas a través de los conceptos de ETL y <em>Datawarehouse</em>; la gestión de herramientas para el aprovechamiento de la información, basadas en analítica y minería de datos; junto con un conjunto de herramientas de visualización y reporte, que incluye tecnologías como OLAP (<em>On Line Analitical Processing</em>).',
    },
    {
      termino: '<em>Datawarehouse</em>',
      significado: 'almacén de datos.',
    },
    {
      termino: 'HTML',
      significado:
        'es el componente básico de Internet o lenguaje de etiquetas de texto que contiene el nombre de un elemento dispuesto en la red.',
    },
    {
      termino: 'Inteligencia de negocios (BI)',
      significado:
        'conjunto de procesos, tecnologías y personas que tienen la capacidad de transformar los datos en información y esta en conocimiento.',
    },
    {
      termino: '<em>Machine learning </em>',
      significado: 'aprendizaje automático.',
    },
    {
      termino: 'Minería de datos',
      significado:
        'explora o busca en bases de datos gigantes y de manera automática encontrar patrones repetitivos, tendencias o reglas que expliquen el comportamiento de los datos que se han ido recopilando con el tiempo. Estos patrones pueden encontrarse utilizando estadísticas o algoritmos de búsqueda próximos a la Inteligencia Artificial y a las redes neuronales.',
    },
    {
      termino: 'OLAP',
      significado:
        '<em>On Line Analytical Processing</em> traduce el procesamiento analítico en línea, es un método informático que permite a los usuarios extraer y consultar datos de forma ágil y selectiva para su análisis.',
    },
    {
      termino: '<em>Smart cities</em>',
      significado: 'ciudades inteligentes.',
    },
    {
      termino: '<em>World Wide Web</em>',
      significado:
        'conocido como “<i>www</i>” y significa todo el mundo en la <em>web</em>.',
    },
    {
      termino: '<em>Webmaster</em>',
      significado:
        'persona responsable de un servidor de Internet, dueño de un sitio <em>web</em> o responsable de mantenerlo habilitado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Devece, C., Guiral, H., & Lapiedra, R. (2016). <em>Introducción a la gestión de sistemas de información en la empresa</em>. D-Universitat Jaume I. Servei de Comunicació i Publicacions.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/51689?page=13',
    },
    {
      referencia:
        'Dotras, A. (2015). <em>Social media: Herramientas y estrategias empresariales</em>. Editorial Paracuellos de Jarama/RA-MA. Madrid.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/47296',
    },
    {
      referencia:
        'Mir, P. (2016). P. Brand.com: reputación de marcas y social media. <em>EUNSA</em>, p. 231.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/47296?page=31',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
