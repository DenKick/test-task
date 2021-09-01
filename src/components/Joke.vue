<template>
  <div class="joke-container">
    <div class="joke-text">
      <div v-if="type === 'single'">{{text}}</div>
      <div v-else>
        <span class="joke-text">{{setup}}</span>
        <span class="joke-text">{{delivery}}</span>
      </div>
    </div>
    <div class="joke-tag">{{category}}</div>
    <div class="like-btn-container"></div>
  </div>
</template>

<script>
export default {
  name: 'Joke',
  props: {
    id: Number,
    type: String,
    text: String,
    setup: String,
    delivery: String,
    category: String,
  }
}
</script>

<style scoped>
.joke-container {
  border: 1px solid #fff;
  border-radius: 10px;
  margin: 4vh 0;
  padding: 5vh 5vw;
  transition: .3s linear;
}

.joke-container:hover {
  border: 1px solid #4b6584;
  box-shadow: 0 0 2px #4b6584;
}

.joke-text {
  display: block;
  margin: 0.5vh 0;
}

.joke-tag {
  background-color: #d1d8e0;
  color: #778ca3;
  display: inline-block;
  font-size: .7em;
  margin: 1vh 0;
  padding: 0.3em;
}
</style>
