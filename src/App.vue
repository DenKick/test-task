<template>
  <div class="main-container">
    <div v-if="isLoaded">
      <span>Загрузилось</span>
    </div>
    <div v-else>
      <span>Загрузка</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  methods: {
    apiFetch: function() {
      fetch('https://v2.jokeapi.dev/joke/Any?amount=10')
        .then(response => response.json())
        .then(data => {this.apiResponse = data; this.isLoaded = true})
        .catch(error => console.log(error));
    }
  },
  data: function() {
    return {
      isLoaded: false,
      apiResponse: null,
    }
  },
  created() {
    this.apiFetch();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main-container {
  margin: 10% auto;
  height: 100%;
  width: 50vw;
}
</style>
