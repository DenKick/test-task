<template>
  <div class="main-container">
    <div v-if="isLoaded">
      <Joke v-for="joke in jokes"
            :key="joke.id"
            :id="joke.id"
            :type="joke.type"
            :text="joke.joke"
            :setup="joke.setup"
            :delivery="joke.delivery"
            :category="joke.category"
      />
    </div>
    <div class="loading-container" v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from './components/Spinner.vue';
import Joke from './components/Joke.vue';

export default {
  name: 'App',
  components: {
    Spinner,
    Joke
  },
  methods: {
    apiFetch: function() {
      fetch('https://v2.jokeapi.dev/joke/Any?amount=10')
        .then(response => response.json())
        .then(data => {this.error = data.error;
                       this.amount = data.amount;
                       this.jokes = data.jokes;
                       this.isLoaded = true})
        .catch(error => console.log(error));
    }
  },
  data: function() {
    return {
      isLoaded: false,
      error: null,
      amount: null,
      jokes: null,
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
  color: #4b6584;
  margin: 10% auto;
  height: 100%;
  width: 50vw;
}

.loading-container {
  display: flex;
  justify-content: center;
  height: 50vh;
}
</style>
