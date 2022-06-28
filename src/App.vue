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
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  components: { Header, Meeting, Features, AboutMe, Projects, Contacts, Footer },
  setup () {
    const store = useStore()

    const getApp = computed(() => store.getters['getApp'])
    document.title = getApp.value

    return {
      getApp
    }
  },
}
</script>
