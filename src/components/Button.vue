<template>
  <button class="btn" @click="clickButton" :class="className">{{ name }}</button>
</template>

<script>
  export default {
    emits: ['buttonClick'],
    props: {
      name: {
        type: String,
        required: true
      },
      className: {
        type: String
      }
    },
    setup (_, { emit }) {
      const clickButton = () => {
        emit('buttonClick', event)
      }

      return {
        clickButton
      }
    }
  }
</script>
