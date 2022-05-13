<template>
  <div class="wrapper" id="#app">
    <Header />
    <main role="main">
      <Meeting />
      <div class="container">
        <Features />
        <AboutMe />
        <Contacts />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Meeting from '@/components/Meeting'
import Features from '@/components/Features'
import AboutMe from "@/components/AboutMe"
import Contacts from '@/components/Contacts'
import Footer from '@/components/Footer'
import { app } from '@/_config'

export default {
  components: { Header, Meeting, Features, AboutMe, Contacts, Footer },
  setup () {
    const title = app.title
    document.title = title

    return {
      title
    }
  },
}
</script>
