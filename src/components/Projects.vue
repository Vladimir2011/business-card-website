<template>
  <section class="projects">
    <h2 class="projects__header section-title">Проекты</h2>
    <div class="projects__wrapper">
      <ProjectList />
    </div>
  </section>
</template>

<script>
import ProjectList from '@/components/project/ProjectList'

export default {
  components: { ProjectList }
}
</script>
