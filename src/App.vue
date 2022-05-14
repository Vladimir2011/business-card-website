<template>
  <div class="wrapper" id="#app">
    <Header />
    <main role="main">
      <Meeting />
      <div class="container">
        <Features />
        <AboutMe />
        <Projects />
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
import Projects from "@/components/Projects"
import Contacts from '@/components/Contacts'
import Footer from '@/components/Footer'
import { app } from '@/_config'

export default {
  components: { Header, Meeting, Features, AboutMe, Projects, Contacts, Footer },
  setup () {
    const title = app.title
    document.title = title

    return {
      title
    }
  },
}
</script>
