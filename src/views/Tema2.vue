<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.mb-5
    .BGIMG01.px-md-5.px-4.pt-md-5.pt-4
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 #[em E-commerce] y #[em marketing] digital

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7.order-lg-1.order-2
          p El comercio electrónico y el #[em marketing] digital, difieren en que el #[em marketing] digital genera una plataforma que define el público objetivo, el posicionamiento de marca, fidelización de clientes, entre otros, mientras el #[em e-commerce] es la versión digital de un negocio, haciendo posible la operatividad de manera digital, lo que permite mayor control y cobertura, entre otros.
          .BGR01A.p-4(data-aos="fade-right")
            p.mb-0 Este híbrido se lleva a cabo con el apoyo de un #[em Social Commerce Manager] quien se encarga de gestionar el canal de venta social de la marca y ser estratégico en la combinación de #[em branding] y ventas.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema2/img01.png")

      .mb-4.d-flex
        .d-flex.flex-wrap.align-items-center.pe-4
          img(src='@/assets/curso/temas/img01.svg' style="max-width: 32px;" data-aos="fade-right")
          h4.col.mb-0(style="margin-left: -16px" data-aos="fade-left") #[em E-commerce]
      
      p.mb-5 El comercio electrónico es toda actividad en la que las empresas y consumidores interactúan, hacen negocios entre sí, o con las administraciones, por medios electrónicos. Este ha superado los canales tradicionales de distribución, ofreciendo una amplia información acerca de productos y servicios, y sus precios y a favor de la empresa se ha dado una reducción de costos y a la agilidad con que se realizan operaciones al interior de la empresa y, a su vez, transacciones comerciales. A continuación, lo invitamos a ver el siguiente video, donde conocerá acerca del alcance del #[em e-commerce].
    
    .h4 El alcance de #[em e-commerce]
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.BGR01A.p-4.mb-4(data-aos="fade-right")
        p.mb-0 Ya conociendo el alcance que tiene el #[em e-commerce] en una organización, es importante conocer las diferentes categorías en que este se divide, teniendo en cuenta el comercio entre empresas y consumidores.

    p A continuación, se presentan tres categorías del #[em e-commerce].

    .row.justify-content-center.mb-5
      .col-xl-4.col-md-8.col-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema2/img02.jpg' alt='AvatarTop')
          .tarjetas-up_card.BG01.p-4
            .title.d-flex.align-items-center.mb-xl-4.mb-5
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 #[em Business to business]
            p.mb-0 Es el comercio electrónico entre empresas. Ha generado mayor cercanía entre las organizaciones, pero debido a la cooperación entre ellas, se han creado nuevos vínculos entre competidores, clientes y proveedores, desarrollando su capacidad competitiva.
      .col-xl-4.col-md-8.col-10.mb-xl-0.mb-4(data-aos="flip-up")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema2/img03.jpg' alt='AvatarTop')
          .tarjetas-up_card.BG01.p-4
            .title.d-flex.align-items-center.mb-xl-4.mb-5
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 #[em Business to consumer]
            p.mb-0 Es el comercio electrónico entre empresa y consumidor. Apareció desde 1990, facilitando la comunicación y las transacciones entre empresas, obligando a generar estructuras más ágiles y flexibles, que se esfuerzan por brindar mayor calidad en sus productos. 
      .col-xl-4.col-md-8.col-10(data-aos="fade-left")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema2/img04.jpg' alt='AvatarTop')
          .tarjetas-up_card.BG01.p-4
            .title.d-flex.align-items-center.mb-xl-4.mb-5
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 #[em Consumer to consumer]
            p.mb-0 Es el comercio electrónico entre consumidores. Se suele utilizar cuando un consumidor no necesita un producto y lo decide vender a otro consumidor, permitiéndole una nueva utilidad, a precios más accesibles.
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 32px;" data-aos="fade-right")
        h4.col.mb-0(style="margin-left: -16px" data-aos="fade-left") #[em Marketing] digital
    
    p Toda organización cuenta estratégicamente, con un área de mercadeo encargada de satisfacer al cliente, en relación fluida con el entorno y adonde llega bastante información del exterior, requerida para conocer la percepción del cliente y captar información decisiva para la toma de decisiones.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.BGR01A.p-4.mb-4(data-aos="fade-right")
        p.mb-0 En la Figura 2, se presenta el proceso del sistema de información en esta área, la cual inicia con la base de datos organizacional, definiendo las estrategias y la necesidad de la información a obtener, con la cual se consolida el subsistema de inteligencia, generando información relevante a través de estudios de mercado, recursos e informes, lo que confluye en la conocida mezcla de #[b mercadotecnia].
      .col-lg-8.mb-4(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          h5 Figura 2
          br
          span.fst-italic  Sistema de información de #[em marketing]
      .col-lg-8(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/tema2/img05.svg")
          figcaption(style= "background-color: #FEF2E4") Nota. Devece et al., 2016. Recuperado de <a href="https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/51689?page=4" target="_blank" style="color: #206897">elibro-net.bdigital.sena.edu.co</a>

    p Esa interacción presentada en la Figura 2, además, no solo ocurre entre las empresas, sino que también tiene lugar entre los propios consumidores, dando lugar al comúnmente conocido como #[b eWOM], que tiene características particulares donde las personas comparten espacio y tiempo para realizarlo y que es de fácil acceso a las personas, durante un tiempo indefinido, donde se trata acerca de la reputación de las empresas y los productos.    
    p Este #[b eWOM] se encuentra desarrollado, teniendo en cuenta ocho pilares:

    .row.justify-content-center.mb-5
      .col-lg-8
        PasosA.color-acento-contenido(tipo="n")
          .row.justify-content-center
            .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
              .h4 Pilar 1
              p.mb-0 La insatisfacción y satisfacción del cliente.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              img(src="@/assets/curso/tema2/img06.png")
          .row.justify-content-center
            .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
              img(src="@/assets/curso/tema2/img07.png")
            .col-lg-7(data-aos="fade-left")
              .h4 Pilar 2
              p.mb-0 Productos únicos e innovadores.
          .row.justify-content-center
            .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
              .h4 Pilar 3
              p.mb-0 Las comunicaciones empresariales, los anuncios y las actividades de relaciones públicas.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              img(src="@/assets/curso/tema2/img08.png")
          .row.justify-content-center
            .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
              img(src="@/assets/curso/tema2/img09.png")
            .col-lg-7(data-aos="fade-left")
              .h4 Pilar 4
              p.mb-0 Personas o instituciones influyentes externas a la organización.
          .row.justify-content-center
            .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
              .h4 Pilar 5
              p.mb-0 Puede ser influido por el área comercial y su relación con consumidores, comercio, organizaciones y otros establecimientos comerciales.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              img(src="@/assets/curso/tema2/img10.png")
          .row.justify-content-center
            .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
              img(src="@/assets/curso/tema2/img11.png")
            .col-lg-7(data-aos="fade-left")
              .h4 Pilar 6
              p.mb-0 El relacionamiento con los proveedores como socios estratégicos del negocio.
          .row.justify-content-center
            .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
              .h4 Pilar 7
              p.mb-0 Los gerentes lo influencian a través de su relacionamiento con contactos personales de los colaboradores.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              img(src="@/assets/curso/tema2/img12.png")
          .row.justify-content-center
            .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
              img(src="@/assets/curso/tema2/img13.png")
            .col-lg-7(data-aos="fade-left")
              .h4 Pilar 8
              p.mb-0 Valerse de los contactos formales e informales de los directivos.
            
    p.mb-5 Siendo llamado el boca a boca o más conocido como voz a voz, se creería que perdería dominio por la digitalización de las empresas, pero contrario a ello, existe con mayor solidez y agilidad entre los consumidores y personas interesadas; soportado en Internet comunicando de manera continua y prolongando su presencia y estando accesible para todos. En la Tabla 1, se presentan algunos de los factores que se deben analizar en el eWOM.

    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 1
          br
          span.fst-italic Características de la compra que inciden en el contenido generado por consumidores

        .tabla-a.color-secundario(data-aos="zoom-in")
          table
            caption(style= "background-color: #FEF2E4") Nota. Mir, 2016. Recuperado de <a href="https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/47296" target="_blank" style="color: #206897">elibro-net.bdigital.sena.edu.co</a>
            thead(style="border-color: transparent")
              tr
                th(style="background-color: #ACE1E7; width: 50%" rowspan="2").text-center Características de la compra que afectan a la importancia del contenido generado por los consumidores para otros consumidores
                th(style="background-color: #ACE1E7;" colspan="2").text-center Importancia del contenido generado por los consumidores
              tr
                th(style="background-color: #ACE1E7;").text-center Poca
                th(style="background-color: #ACE1E7;").text-center Mucha
            tbody
              tr
                td(style="background-color: #FFF;") Riesgo financiero percibido.
                td(style="background-color: #FFF;").text-center Bajo
                td(style="background-color: #FFF;").text-center Alto
              tr
                td(style="background-color: #F6F6F6;") Riesgo para la propia imagen.
                td(style="background-color: #F6F6F6;").text-center Bajo
                td(style="background-color: #F6F6F6;").text-center Alto
              tr
                td(style="background-color: #FFF;") Necesidad de información acerca de la compra bajo consideración.
                td(style="background-color: #FFF;").text-center Baja
                td(style="background-color: #FFF;").text-center Alta
              tr
                td(style="background-color: #F6F6F6;") Consecuencias negativas de una mala decisión.
                td(style="background-color: #F6F6F6;").text-center Bajas
                td(style="background-color: #F6F6F6;").text-center Altas
              tr
                td(style="background-color: #FFF;") Conocimiento sobre la calidad y el valor de la compra bajo consideración.
                td(style="background-color: #FFF;").text-center Alto
                td(style="background-color: #FFF;").text-center Bajo
              tr
                td(style="background-color: #F6F6F6;") Posibilidad de probar el producto antes de la compra.
                td(style="background-color: #F6F6F6;").text-center Alta
                td(style="background-color: #F6F6F6;").text-center Baja
    
    p El #[b #[em marketing]], tradicionalmente conocido, es utilizado por muchas empresas y se centra en promocionar su producto; su estrategia es la mercadotecnia o #[em marketing mix] y se implementa a través de medios tradicionales como la televisión, la radio, las vallas publicitarias, revistas, entre otros y es conocido como #[em Marketing] 1.0.


    .row.justify-content-center.mb-5
      .col-lg-8.BGR01A.p-4(data-aos="fade-right")
        p.mb-0 En la era de la #[em Web] 2.0, el #[em marketing] también evolucionó cambiando el foco del producto al cliente, con el fin de llegar a su corazón y esencia, para crear un vínculo fuerte y conocerlo de primera mano, al punto de crear productos y servicios conforme a sus necesidades y expectativas; de esta manera, trabajan a la vez en la fidelización del cliente, gracias al análisis exhaustivo de las bases de datos que dinamizando la interacción total y bidireccional con el cliente, se unen a una combinación con los medios tradicionales e interactivos. 

    p A continuación, se presenta la triangulación de medios en #[em marketing] digital, donde se muestra la combinación de medios tradicionales, medios interactivos definidos como medios pagados, ganados y propios y su aporte al #[em marketing] digital.       

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-8
        img(src="@/assets/curso/tema2/img14.svg")
    
    .row.justify-content-center.mb-5
      .col-lg-8.BGR01A.p-4(data-aos="fade-right")
        p.mb-0 Resumiendo, la triangulación corresponde a la potencialización de la estrategia de #[em marketing], basada en la interacción de los espacios propios como #[em blog], sms, redes sociales, página #[em web] y otras aplicaciones; así como también los medios pagados, o donde sea necesario que la organización realice una inversión y los medios ganados, donde la empresa ha tenido la oportunidad de resaltar por la calidad de sus productos, por la excelencia de sus servicios, en fin, por ser una compañía confiable que supera las expectativas del cliente.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 32px;" data-aos="fade-right")
        h4.col.mb-0(style="margin-left: -16px" data-aos="fade-left") Publicidad en redes sociales y motores de búsqueda
      
    p La publicidad en redes sociales, corresponde a lo relacionado con contenidos, para lo que es necesario diseñar y elaborar un plan de contenidos.
    p Este plan debe de contener:
    
    .row.justify-content-center
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img15.svg")
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="BGR01C")
          div(titulo="Los objetivos")
            p.mb-0 Estos deben ser determinados según la metodología S.M.A.R.T. que traducido significa, específicos, medibles, alcanzables, realizables y acordes con el tiempo.
          div(titulo="Público objetivo o audiencia")
            p.mb-0 El público objetivo o audiencia es para quien se implementará el plan.
          div(titulo="Tema o contenidos")
            p.mb-0 Otro componente son los temas o contenidos a publicar, los cuales son transformados en tangibles, donde juega un papel estratégico el SEO o estrategia de posicionamiento, que mediante la definición de palabras, videos, imágenes claves, fijarán una excelente posición para ser ubicados con mayor agilidad, donde serán útiles las etiquetas o #[em tags] y los #[em hashtags].
          div(titulo="Fuente u origen de la información")
            p.mb-0 Además, debe contener fuente u origen de la información, descripción o detalle, formato, canal como #[em blog], redes sociales, fecha de publicación, responsable, estadísticas acerca de ventas, oportunidades de negocio, ideas, tráfico #[em web], alcance, entre otros.

    p En este punto, es importante señalar que el canal es el SEO, siendo necesario que el sitio #[em web] esté optimizado correctamente, con la finalidad que los motores de búsqueda como Google, ubiquen la información de la marca en los primeros lugares. A partir de una correcta optimización, los motores de búsqueda arrojan resultados orgánicos o que se encuentre un sitio, desempeñando de esta manera un papel crucial para comercializar, a través de diferentes canales, orientada a buscadores como estrategia SEM.
    p.mb-5 En la definición de la estrategia publicitaria, se identifican las 4 P, las cuales son:

    .row.justify-content-center.mb-5
      .col-xl-3.col-md-6.col-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjeta--boton.color-primario.hg02.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/tema2/img16.svg')
          h4.text-center Personalización
          p.text-center Adaptación de los productos, acordes con las necesidades de cada cliente.
      .col-xl-3.col-md-6.col-10.mb-xl-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-primario.hg02.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/tema2/img17.svg')
          h4.text-center Participación
          p.text-center Creación de comunidades, donde los usuarios comparten experiencias.
      .col-xl-3.col-md-6.col-10.mb-xl-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-primario.hg02.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/tema2/img18.svg')
          h4.text-center Predicciones
          p.text-center Capacidad de seguimiento, para predecir futuros comportamientos.
      .col-xl-3.col-md-6.col-10(data-aos="fade-left")
        .tarjeta--boton.color-primario.hg02.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/tema2/img19.svg')
          h4.text-center Persona a persona
          p.text-center Intercambio directo de información entre los clientes.
    
    p.mb-5 De esta manera, los contenidos compartidos por medio de redes sociales, adquieren una relevancia crítica, distinguiendo en Internet dos niveles de comunicación: la de los medios de comunicación en la red y páginas #[em web] corporativas y de las redes de autocomunicación social y personal, generadas por los consumidores (Dotras, 2015a). En la Tabla 2, se evidencia la diferencia entre #[em marketing] tradicional y digital, donde cada área ha avanzado a un nivel de mayor agilidad para compartir información con mayor alcance, visibilidad, a menor costo, manteniendo un contacto directo y alta credibilidad (Mir, 2016).

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 2
          br
          span.fst-italic #[em Marketing] tradicional vs #[em marketing] en la red

        .tabla-a.color-secundario(data-aos="zoom-in")
          table
            caption(style= "background-color: #FEF2E4") Nota. Mir, 2016. Consultado en <a href="https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/47296" target="_blank" style="color: #206897">elibro-net.bdigital.sena.edu.co</a>
            thead(style="border-color: transparent")
              tr
                th(style="background-color: #ACE1E7;").text-center Área
                th(style="background-color: #ACE1E7;").text-center #[em Marketing] tradicional
                th(style="background-color: #ACE1E7;").text-center #[em Marketing] en la Red
            tbody
              tr
                td(style="background-color: #FFF;").text-center Método promocional.
                td(style="background-color: #FFF;").text-center Boca a boca (#[b WOM]).
                td(style="background-color: #FFF;").text-center #[em Marketing] viral, #[b eWOM].
              tr
                td(style="background-color: #F6F6F6;").text-center Presentación de producto.
                td(style="background-color: #F6F6F6;").text-center Anuncios en medios de comunicación.
                td(style="background-color: #F6F6F6;").text-center Banners publicitarios en Internet.
              tr
                td(style="background-color: #FFF;").text-center Relaciones públicas.
                td(style="background-color: #FFF;").text-center Notas de prensa.
                td(style="background-color: #FFF;").text-center Notas en #[em web] corporativa.
              tr
                td(style="background-color: #F6F6F6;").text-center Comunicación.
                td(style="background-color: #F6F6F6;").text-center Correo postal.
                td(style="background-color: #F6F6F6;").text-center Correo electrónico.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 32px;" data-aos="fade-right")
        h4.col.mb-0(style="margin-left: -16px" data-aos="fade-left") Herramientas informáticas para la gestión #[em social media]
    
    p.mb-5 La gestión #[em social media], consiste en realizar seguimientos o vigilancias, a la dinámica de las redes sociales en cuanto a la marca o a la empresa, con el fin de determinar los resultados obtenidos como menciones de marca, menciones de productos, menciones de la empresa, opiniones de usuario y consumidores, monitorear la presencia en medios sociales, entre otros. Las siguientes son algunas de las herramientas utilizadas en #[em social media]:

    .row.justify-content-center.mb-5
      .col-lg-8
        .bloque-texto-g.color-acento-contenido.p-2.p-sm-3.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img20.jpg')})`}"
          )(data-aos="fade-right")
          .bloque-texto-g__texto.p-4(data-aos="fade-left")
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fab.fa-battle-net(style="color= #F40B74")
                | Buscador de Google (gratuita).
              li(style="margin-bottom: 2px")
                i.fab.fa-battle-net(style="color= #F40B74")
                | Social Report (de pago).
              li(style="margin-bottom: 2px")
                i.fab.fa-battle-net(style="color= #F40B74")
                | Engagor (gratuita).
              li(style="margin-bottom: 2px")
                i.fab.fa-battle-net(style="color= #F40B74")
                | SocialBro (gratuita y de pago).
              li(style="margin-bottom: 2px")
                i.fab.fa-battle-net(style="color= #F40B74")
                | Radian6 (de pago).
              li(style="margin-bottom: 2px")
                i.fab.fa-battle-net(style="color= #F40B74")
                | Klout (gratuita).
              li(style="margin-bottom: 2px")
                i.fab.fa-battle-net(style="color= #F40B74")
                | HootSuite (gratuita y de pago).
              li(style="margin-bottom: 2px")
                i.fab.fa-battle-net(style="color= #F40B74")
                | Google Alerts (gratuita).
              li(style="margin-bottom: 2px")
                i.fab.fa-battle-net(style="color= #F40B74")
                | Google Trends (gratuita).
              li(style="margin-bottom: 2px")
                i.fab.fa-battle-net(style="color= #F40B74")
                | Mention (gratuita y de pago).
              li(style="margin-bottom: 2px")
                i.fab.fa-battle-net(style="color= #F40B74")
                | SocialMention (gratuita).
              li(style="margin-bottom: 2px")
                i.fab.fa-battle-net(style="color= #F40B74")
                | Addictomatic (gratuita).
    
    p Como se puede observar, hay diversidad de herramientas dispuestas para la gestión de #[em social media], de acuerdo con las necesidades de las organizaciones.

    .row.justify-content-center.mb-5
      .col-lg-8.BGR01A.p-4(data-aos="fade-right")
        p.mb-0 Ahora bien, la gestión del contenido, implica definir un plan estratégico de #[em social media] que oriente la estrategia y defina los objetivos a alcanzar los cuales, al pasar el tiempo, podrán ser medibles a través de herramientas de analítica.

    p.mb-5 Para la construcción de este plan estratégico, se deben tener en cuenta las siguientes recomendaciones:

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img21.svg")
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="BGR01C")
          div(titulo="Definición de contenido")
            p.mb-0 Al definir con claridad la audiencia o público objetivo, se debe determinar el tipo de contenido, el canal donde se publicará, la temática, si el tipo de contenido es texto, video, enlaces, entre otros, se debe programar la secuencia de publicaciones, con el fin de coordinar y monitorear las diferentes redes sociales.
          div(titulo="Contenido relevante")
            p.mb-0 También, es necesario tener en cuenta que el contenido a publicar debe ser relevante; es importante producir contenido propio, auténtico y relacionado con terceros, compartir contenidos conversacionales, contar historias, realizar promociones e informar.
          div(titulo="Talento calificado")
            p.mb-0 Para manejar, de manera apropiada y profesional cada herramienta para publicar, se requiere de talento calificado entre los que se encuentran #[em community manager], #[em social media manager], experto SEO, #[em social media analyst] y #[em social commerce manager] que serán requeridos de acuerdo con el tamaño de la empresa, el nivel de la marca, los recursos disponibles y los objetivos que se esperan alcanzar.

    p Todo plan debe ser evaluado, al conocer los objetivos del plan de #[em social media] y cada uno de sus componentes, se podrá definir el momento de la medición, para evaluar si hasta allí se están logrando los objetivos propuestos o si, por el contrario, se requiere con prontitud realizar correcciones, de manera que los objetivos deben estar alineados con los indicadores claves de desempeño que permitirán comprobar la efectividad de la estrategia y, si su estado de avance es el adecuado, o no. En este caso, la medición tiene tres objetivos: conocer la percepción de la marca, la popularidad e influencia de la marca y esto se logra al evaluar el plan. 
    
    .row.justify-content-center.mb-4
      .col-lg-8.BGR01A.p-4(data-aos="fade-right")
        p.mb-0 De acuerdo con la Figura 3, en la medición de #[em social media] debe estar claramente definido su alcance o hasta adónde llega a evaluar, generar la socialización de los resultados y abrir espacios para la discusión y, finalmente, la presentación y análisis de resultados valorando la efectividad de la estrategia ejecutada.

    .BGIMG02.px-md-5.px-4.pb-md-5.pb-4
      .row.justify-content-center.align-items-center.mb-5       
        .col-lg-8.mb-4(data-aos="fade-right")
          .titulo-sexto.color-acento-contenido
            h5 Figura 3
            br
            span.fst-italic Pilares de la medición de los medios sociales
        .col-lg-8.mb-4(data-aos="zoom-in")
          figure.mb-4
            img(src="@/assets/curso/tema2/img22.svg")
          
          p.mb-0(style= "background-color: #FEF2E4; padding: 5px") Nota. Mir, 2016. Recuperado de  <a href="https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/47296?page=31" target="_blank" style="color: #206897">elibro-net.bdigital.sena.edu.co</a>
        .col-lg-8.BGR01A.p-4(data-aos="fade-right")
          p.mb-0 Para realizar estas mediciones se hace necesario diseñar una #[em dashboard] o cuadro de mando, donde se registre con exactitud, los parámetros a medir para visualizar los resultados, según el contexto sin perder de vista que #[em social media] requiere una inversión y esta debe generar un beneficio (Dotras, 2015b).

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
