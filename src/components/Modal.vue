<template>
  <div class="modal" v-show="isOpen">
      <div class="modal__content">
        <h4 class="modal__header">{{ project.name }}</h4>

        <div class="modal__link-wrapper">
          <img src="@/static/svg/link-icon-popup.svg" alt="icon" class="modal__link-icon">
          <a :href="project.link" target="_blank" class="modal__link">{{ project.link }}</a>
        </div>

        <div v-if="project.details" class="modal__tab">
          <div class="modal__tab-header-wrapper" @click="openDetails">
            <img
                src="@/static/svg/arrow-icon-popup.svg"
                alt="icon"
                class="modal__tab-icon"
                :class="{'modal__tab-icon--active' : detailsIsOpen}"
            >
            <span class="modal__tab-name" :class="{'modal__tab-name--active' : detailsIsOpen}">Подробнее о проекте</span>
          </div>
          <div class="modal__tab-description-block" v-if="detailsIsOpen">
            <p class="modal__tab-description-paragraph">{{ project.details }}</p>
          </div>
        </div>

        <div class="modal__tab">
          <div class="modal__tab-header-wrapper" @click="openStack">
            <img
              src="@/static/svg/arrow-icon-popup.svg"
              alt="icon"
              class="modal__tab-icon"
              :class="{'modal__tab-icon--active' : stackIsOpen}"
            >
            <span class="modal__tab-name" :class="{'modal__tab-name--active' : stackIsOpen}">Стек</span>
          </div>
          <div class="modal__tab-description-block" v-if="stackIsOpen">
            <p class="modal__tab-description-paragraph">{{ project.stack }}</p>
          </div>
        </div>

        <div class="modal__tab">
          <div class="modal__tab-header-wrapper" @click="openFunct">
            <img
              src="@/static/svg/arrow-icon-popup.svg"
              alt="icon"
              class="modal__tab-icon"
              :class="{'modal__tab-icon--active' : functIsOpen}"
            >
            <span class="modal__tab-name" :class="{'modal__tab-name--active' : functIsOpen}">Чем занимался</span>
          </div>
          <div class="modal__tab-description-block" v-show="functIsOpen">
            <p
              v-for="item in project.functional"
              :key="item.id"
              class="modal__tab-description-paragraph"
            >
              {{ item.name }}
            </p>
          </div>
        </div>

        <div v-if="project.additional" class="modal__tab">
          <div class="modal__tab-header-wrapper" @click="openAddit">
            <img
              src="@/static/svg/arrow-icon-popup.svg"
              alt="icon"
              class="modal__tab-icon"
              :class="{'modal__tab-icon--active' : additIsOpen}"
            >
            <span class="modal__tab-name" :class="{'modal__tab-name--active' : additIsOpen}">{{ project.additional.name }}</span>
          </div>
          <div class="modal__tab-description-block" v-show="additIsOpen">
            <p class="modal__tab-description-paragraph">{{ project.additional.info }}</p>
          </div>
        </div>

        <span class="modal__close" @click="handleClose">
          <img src="@/static/svg/close-icon.svg" alt="icon" class="modal__close-icon">
        </span>
      </div>

      <div class="shadow" @click="handleClose" />
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    project: {
      type: Object
    },
    isOpen: {
      type: Boolean
    }
  },
  setup (_, { emit }) {
    const handleClose = () => {
      emit('closePopup')
    }

    let stackIsOpen = ref(true)
    let functIsOpen = ref(true)
    let additIsOpen = ref(true)
    let detailsIsOpen = ref(true)

    // Позже произвести рефакторинг этого участка кода
    const openDetails = () => {
      detailsIsOpen.value = !detailsIsOpen.value
    }

    const openStack = () => {
      stackIsOpen.value = !stackIsOpen.value
    }

    const openFunct = () => {
      functIsOpen.value = !functIsOpen.value
    }

    const openAddit = () => {
      additIsOpen.value = !additIsOpen.value
    }

    return {
      handleClose,
      stackIsOpen,
      functIsOpen,
      additIsOpen,
      detailsIsOpen,
      openStack,
      openFunct,
      openAddit,
      openDetails
    }
  }
}
</script>
