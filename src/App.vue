<template>
  <div class="wrapper" id="#app">
    <Header />
    <main role="main">
      <Meeting />
      <div class="container">

      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Meeting from '@/components/Meeting'
import { app } from '@/_config'

export default {
  components: { Header, Footer, Meeting },
  setup () {
    const title = app.title
    document.title = title

    return {
      title
    }
  },
}
</script>
