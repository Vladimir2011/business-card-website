<template>
  <Header />
  <Footer />
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { app } from '@/_config'

export default {
  components: { Header, Footer },
  setup () {
    const title = app.title
    document.title = title

    return {
      title
    }
  },
}
</script>
