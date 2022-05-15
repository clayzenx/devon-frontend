<template>
  <header ma mt-10 max-w-4xl flex justify-between>
    <nuxt-link to="/">
      <img src="/logo.svg" />
    </nuxt-link>
    <section flex gap4 items-center>
      <Locale />
      <a href="https://github.com/clayzenx/devon-frontend" i-ion-logo-github op70 />
      <DarkToggle />
    </section>
  </header>
</template>
