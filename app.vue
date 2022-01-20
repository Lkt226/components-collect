<template>
  <NuxtPage />
</template>


<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@700&family=Sora&display=swap');

  html, body, #__nuxt{
      overflow: hidden;
  }

  *{
    font-family: 'Sora', sans-serif;
    font-weight: normal;
  }

  h1,h2,h3,h1 *,h2 *,h3 *{
    font-family: 'Kanit', sans-serif;
    font-weight: bold;
  }
  h4{
    font-weight: bold;
  }

  h1{
    font-size: 4.5rem;
  }
  
  h2, h2 *{
    font-size: 1.125rem;
  }

  p{
    font-size: 1rem;
  }
</style>