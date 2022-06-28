<template>
  <header class="header">
    <!--Mobile menu start-->
    <div class="header__container header__container--adaptive">
      <p class="header__logo-text">
        Vladimir Garbuzov
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
        Vladimir Garbuzov
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
            @click="isMenuOpen = false"
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
import { ref, watch, computed } from "vue";
import { useStore } from 'vuex'

export default {
  components: {
    Button
  },
  setup () {
    const store = useStore()
    const isMenuOpen = ref(false)
    const linksList = computed(() => store.getters['getLinks'])

    watch(isMenuOpen, (value) => {
      if (value) {
        document.body.style.overflow = 'hidden'
        document.body.style.position = 'relative'
      } else {
        document.body.style.overflow = 'auto'
        document.body.style.position = 'static'
      }
    })

    return {
      isMenuOpen,
      linksList
    }
  }
}
</script>
