<template>
  <header class="header">
    <div class="header__container">
      <p class="header__logo-text">Frontend-developer</p>
      <nav class="header__nav nav">
        <ul class="nav__list">
          <li
            v-for="link in linksList"
            :key="link.alias"
            class="nav__item"
          >
            <a class="nav__link" href="#">{{ link.title }}</a>
          </li>
        </ul>
      </nav>
      <div class="header__locales localization">
        <button class="localization__button localization__button-active">RU</button>
        <button class="localization__button">EN</button>
      </div>
    </div>
  </header>
</template>

<script>
import { links } from '@/_config'
import { ref } from "vue";

export default {
  setup () {
    const linksList = ref(links)

    return {
      linksList
    }
  }
}
</script>
