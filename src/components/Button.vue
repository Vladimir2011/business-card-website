<template>
  <button class="btn" @click="buttonClick" :class="className">{{ name }}</button>
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
      const buttonClick = () => {
        emit('buttonClick')
      }

      const handleDownloadCV = () => {
        console.log('Скачал резюме')
      }

      return {
        handleDownloadCV,
        buttonClick
      }
    }
  }
</script>
