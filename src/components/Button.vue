<template>
  <button class="btn" @click="handleDownloadCV" :class="className">{{ name }}</button>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      className: {
        type: String
      }
    },
    setup () {
      const handleDownloadCV = () => {
        console.log('Скачал резюме')
      }

      return {
        handleDownloadCV
      }
    }
  }
</script>
