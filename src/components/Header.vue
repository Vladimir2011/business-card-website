<template>
  <header class="header">
    <!--Mobile menu start-->
    <div class="header__container header__container--adaptive">
      <p class="header__logo-text">
        Frontend-developer
      </p>
      <Button
        :name="''"
        :class-name="'header__burger-button'"
        @button-click="isMenuOpen = true"
      />
    </div>
    <!--Mobile menu end-->
    <div class="header__container" :class="{'header__container--open' : isMenuOpen}">
      <p class="header__logo-text">
        Frontend-developer
        <span class="header__close" @click="isMenuOpen = false">
          <img
            src="@/static/svg/close-menu-icon.svg"
            alt="icon"
            class="header__close-icon"
          >
        </span>
      </p>
      <nav class="header__nav nav">
        <ul class="nav__list">
          <li
            v-for="link in linksList"
            :key="link.alias"
            class="nav__item"
          >
            <a class="nav__link" :href="'#' + link.alias">{{ link.title }}</a>
          </li>
        </ul>
      </nav>
      <div class="header__locales localization">
        <button class="localization__button localization__button-active">RU</button>
        <button class="localization__button">ENG</button>
      </div>
    </div>
  </header>
</template>

<script>
import Button from '@/components/Button'
import { links } from '@/_config'
import { ref } from "vue";

export default {
  components: {
    Button
  },
  setup () {
    const linksList = ref(links)
    const isMenuOpen = ref(true)

    return {
      linksList,
      isMenuOpen
    }
  }
}
</script>
