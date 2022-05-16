<template>
  <li
    v-for="project in projectsList"
    :key="project.id"
    class="projects__item project"
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
              name="view-project"
              class-name="project__button"
              @button-click="openPopup"
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
</template>

<script>
import Button from '@/components/Button'
import { projects } from '@/_config'

export default {
  components: { Button },
  setup () {
    let projectsList = projects

    const openPopup = () => {
      console.log('Открываем пивко')
    }

    return {
      projectsList,
      openPopup
    }
  }
}
</script>
