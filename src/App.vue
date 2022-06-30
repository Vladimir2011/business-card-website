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

<script lang="ts">
import Header from '@/components/Header.vue'
import Meeting from '@/components/Meeting.vue'
import Features from '@/components/Features.vue'
import AboutMe from '@/components/AboutMe.vue'
import Projects from '@/components/Projects.vue'
import Contacts from '@/components/Contacts.vue'
import Footer from '@/components/Footer.vue'
import { useStore } from 'vuex'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  components: { Header, Meeting, Features, AboutMe, Projects, Contacts, Footer },
  setup () {
    const store = useStore()
    const getApp = computed(() => store.getters['getApp'])
    document.title = getApp.value
    return {
      getApp
    }
  },
})
</script>
