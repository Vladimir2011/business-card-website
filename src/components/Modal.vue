<template>
  <div class="modal">
    <p>Я модалка</p>
    <p>{{ project }}</p>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object
    }
  }
}
</script>
