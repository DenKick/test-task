<template>
  <div class="main-container">
    <div>
      <input type="text" v-model='keyword'>
    </div>
    <div v-if="isLoaded">
      <Joke v-for="joke in filteredJokes"
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
    },
    filterJoke: function(joke) {
      if (joke.type === 'single') {
        return joke.joke.includes(this.keyword);
      } else {
        return joke.setup.includes(this.keyword) || joke.setup.includes(this.keyword);
      }
    }
  },
  data: function() {
    return {
      isLoaded: false,
      error: null,
      amount: null,
      jokes: null,
      keyword: '',
    }
  },
  created() {
    this.apiFetch();
  },
  computed: {
    filteredJokes() {
      return this.jokes.filter(joke => this.filterJoke(joke))
    }
  }
}
</script>
 
<style>
.main-container {
  color: #4b6584;
  margin: 10% auto;
  height: 100%;
  width: 50vw;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.loading-container {
  display: flex;
  justify-content: center;
  height: 50vh;
}
</style>
