<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <mu-button color="primary">Primary</mu-button>
    <mu-button color="secondary">Secondary</mu-button>
    <mu-button color="success">Success</mu-button>
    <mu-button color="warning">Warning</mu-button>
    <mu-button color="info">Info</mu-button>
    <mu-button color="error">Error</mu-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
