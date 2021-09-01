<template>
  <div class="main-container">
    <div>
      <input class="keyword-input" type="text" placeholder="Search" v-model='keyword'>
    </div>
    <div class="jokes-container" v-if="isLoaded">
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
    // * Запрос на сервер с необходимыми параметрами и дальнейшее получение ответа
    apiFetch: function() {
      fetch('https://v2.jokeapi.dev/joke/Any?amount=10')
        .then(response => response.json())
        .then(data => {this.error = data.error;
                       this.amount = data.amount;
                       this.jokes = data.jokes;
                       this.isLoaded = true})
        .catch(error => console.log(error));
    },
    // * Фильтр результатов ответа сервера по необходимому ключевому слову/словам
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
    // * Фильтрация массива анекдотов по условию в функции filterJoke()
    filteredJokes() {
      return this.jokes.filter(joke => this.filterJoke(joke))
    }
  }
}
</script>
 
<style>
.main-container {
  color: #4b6584;
  margin: 2% auto;
  transition: .3s linear;
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

.jokes-container {
  transition: .3s
}

.keyword-input {
  border: none;
  border-bottom: 1px solid #d1d8e0;
  font-size: 1.3em;
  line-height: 3em;
  margin: 5vh 5vw;
  outline: none;
  padding: 0 5vw;
  transition: .3s linear;
  width: 60%;
}

.keyword-input:hover {
  border-bottom: 1px solid #a5b1c2;
}

.keyword-input:hover::placeholder {
  color: #a5b1c2;
}

.keyword-input:focus {
  border-bottom: 1px solid #4b6584;
}

.keyword-input::placeholder {
  color: #d1d8e0;
  transition: .3s linear;
}

.keyword-input:focus::placeholder {
  color: #4b6584;
}
</style>
