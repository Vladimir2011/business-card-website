<template>
  <Header />
  <main role="main">
    <div class="container">
      <section class="meeting">
        <div class="meeting__container">
          <div class="meeting__info-block">
            <p class="meeting__paragraph">Hello world ... I am</p>
            <h1 class="meeting__header">Гарбузов Владимир</h1>
            <p class="meeting__profession-name"> > Front-end developer</p>
            <ul class="meeting__comments-list">
              <li class="meeting__comments-item">// знаю, что выгляжу на фото как инфоцыган</li>
              <li class="meeting__comments-item">// не представляю жизни без кофе</li>
              <li class="meeting__comments-item meeting__comments-item--variable">
                <span class="meeting__comments-item-span-link">const githubLink</span> = <span class="meeting__comments-item-span-link">"https://github.com/Vladimir2011"</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </main>
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
