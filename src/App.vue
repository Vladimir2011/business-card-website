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
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Front-End Website Developer | Vladimir Garbuzov',
    meta: [
      { hid: 'og:title', property: 'og:title', content: 'Front-End Website Developer | Vladimir Garbuzov' },
      { hid: 'twitter:title', property: 'twitter:title', content: 'Front-End Website Developer | Vladimir Garbuzov' },
      { hid: 'description', name: 'description', content: 'Vladimir Garbuzov, Front-end Web Developer specialising in Responsive Websites using HTML5, CSS3, SVG, Creative JavaScript, Vue.js, Nuxt.js' },
      { hid: 'og:description', property: 'og:description', content: 'Vladimir Garbuzov, Front-end Web Developer specialising in Responsive Websites using HTML5, CSS3, SVG, Creative JavaScript, Vue.js, Nuxt.js' },
      { hid: 'twitter:description', property: 'twitter:description', content: 'Vladimir Garbuzov, Front-end Web Developer specialising in Responsive Websites using HTML5, CSS3, SVG, Creative JavaScript, Vue.js, Nuxt.js' },
      { hid: 'og:url', property: 'og:url', content: 'https://garbuzov.com/'},
      { hid: 'og:type', property: 'og:type', content: 'website' }

    ]
  },
  setup () {
    const title = app.title
    document.title = title

    return {
      title
    }
  },
}
</script>
