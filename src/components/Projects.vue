<template>
  <section class="projects" id="projects">
    <h2 class="projects__header section-title">Коммерческие проекты</h2>
    <div class="projects__wrapper">
      <ul class="projects__list">
        <li
          class="projects__item project"
          v-for="(project) in commerceProjectsList"
          :key="project.id"
        >
          <div class="project__header-wrapper">
            <p class="project__name">{{ project.name }}</p>
            <p class="project__type"> // {{ project.type }}</p>
          </div>

          <div class="project__block">
            <div class="project__image-wrapper">
              <img :src="require('@/static/' + project.image)" alt="image" class="project__image">
              <ul class="project__tech-list">
                <li class="project__tech-item">
                  <div
                    v-for="tech in project.technologies"
                    :key="tech.id"
                    class="project__tech-image-wrapper"
                    :class="tech.class"
                  >
                    <img :src="require('@/static/svg/technologies/' + tech.icon)" alt="icon" class="project__tech-image">
                  </div>
                </li>
              </ul>
            </div>
            <div class="project__description-wrapper">
              <p class="project__description">
                {{ project.description }}
              </p>
              <div class="project__button-wrapper">
                <Button
                  :id="project.id"
                  :name="'view-project'"
                  :class-name="'project__button'"
                  @buttonClick="openPopup($event)"
                />
                <a
                  v-if="project.link !== ''"
                  :href="project.link"
                  target="_blank"
                  class="project__github-link"
                >
                  <img src="@/static/svg/github-project-icon.svg" alt="icon" class="project__button-github">
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <h2 class="projects__header section-title">Учебные проекты</h2>
    <div class="projects__wrapper">
      <ul class="projects__list">
        <li
            class="projects__item project"
            v-for="(project) in petProjectsList"
            :key="project.id"
        >
          <div class="project__header-wrapper">
            <p class="project__name">{{ project.name }}</p>
            <p class="project__type"> // {{ project.type }}</p>
          </div>

          <div class="project__block">
            <div class="project__image-wrapper">
              <img :src="require('@/static/' + project.image)" alt="image" class="project__image">
              <ul class="project__tech-list">
                <li class="project__tech-item">
                  <div
                      v-for="tech in project.technologies"
                      :key="tech.id"
                      class="project__tech-image-wrapper"
                      :class="tech.class"
                  >
                    <img :src="require('@/static/svg/technologies/' + tech.icon)" alt="icon" class="project__tech-image">
                  </div>
                </li>
              </ul>
            </div>
            <div class="project__description-wrapper">
              <p class="project__description">
                {{ project.description }}
              </p>
              <div class="project__button-wrapper">
                <Button
                    :id="project.id"
                    :name="'view-project'"
                    :class-name="'project__button'"
                    @buttonClick="openPopup($event)"
                />
                <a
                    v-if="project.link !== ''"
                    :href="project.link"
                    target="_blank"
                    class="project__github-link"
                >
                  <img src="@/static/svg/github-project-icon.svg" alt="icon" class="project__button-github">
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <Teleport to="#modal">
    <transition name="modal">
      <Modal
        :is-open="popupIsOpen"
        :project="projectPopup"
        @close-popup="closePopup"
      />
    </transition>
  </Teleport>
</template>

<script>
import Modal from '@/components/Modal'
import Button from '@/components/Button'
import { ref, computed } from 'vue'
import { useStore } from "vuex"

export default {
  components: { Modal, Button },

  setup () {
    const store = useStore()
    let commerceProjectsList = computed(() => store.getters['getCommerceProjects'])
    let petProjectsList = computed(() => store.getters['getPetProjects'])
    let popupIsOpen = ref(false)
    let projectPopup = ref({})

    // Проверяем по кнопке какого проекта мы нажали
    const openPopup = (event) => {
      popupIsOpen.value = true

      commerceProjectsList.value.forEach((item) => {
        if (item.id === +event.target.id) {
          projectPopup.value = item.popupInfo
        }
      })
    }

    const closePopup = () => {
      popupIsOpen.value = false
    }

    return {
      commerceProjectsList,
      petProjectsList,
      popupIsOpen,
      projectPopup,
      openPopup,
      closePopup
    }
  }
}
</script>
