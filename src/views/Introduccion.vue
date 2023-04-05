<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/intro/img01.png")
      .col-lg-7(data-aos="fade-left")
        p Apreciado aprendiz, bienvenido a este componente formativo, donde iniciará conociendo acerca del análisis de los datos, donde estos son transformados en información. Seguidamente, conocerá los fundamentos del #[em social media], que más adelante será el punto de partida para abordar las temáticas de #[em e-commerce] y #[em marketing] digital, los diferentes indicadores como los KPIS y las herramientas que permiten implementar #[em social media] en las organizaciones. Por último, conocerá los aspectos importantes a tener en cuenta para crear un reporte de #[em social media], en su organización.
        p.mb-0 Antes de empezar a explorar el menú de contenido, lo invitamos a ver el siguiente video, donde conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo. ¡Muchos éxitos en este proceso de aprendizaje!
      
    figure.mb-4(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/bdXSegcvJ0Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
