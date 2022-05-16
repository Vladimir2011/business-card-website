<template>
  <section class="projects" id="projects">
    <h2 class="projects__header section-title">Проекты</h2>
    <div class="projects__wrapper">
      <ul class="projects__list">
        <li
          class="projects__item project"
          v-for="(project) in projectsList"
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
                    @buttonClick="openPopup"
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

          <Modal
            v-if="popupIsOpen"
            :id-modal="projectPopup.id"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Modal from '@/components/Modal'
import Button from '@/components/Button'
import { ref } from 'vue'
import { projects } from "@/_config";

export default {
  components: { Modal, Button },

  setup () {
    let projectsList = projects
    let popupIsOpen = ref(false)
    let projectPopup = {}

    const openPopup = (event) => {
      popupIsOpen.value = !popupIsOpen.value

      projectsList.forEach(item => {
        console.log('ITEM: ' + item.id)
        console.log('Event: ' + event.target.id)
      })
    }

    return {
      projectsList,
      popupIsOpen,
      projectPopup,
      openPopup
    }
  }
}
</script>
