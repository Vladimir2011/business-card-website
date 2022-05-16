<template>
  <div class="modal">
    <p>Я модалка</p>
    <p>{{ idModal }}</p>
  </div>
</template>

<script>
export default {
  props: {
    idModal: {
      type: Number
    }
  }
}
</script>
