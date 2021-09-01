// * Простой компонент для отображение загрузки
<template>
  <div class="spinner"></div>
</template>

<script>
export default {
  name: 'Spinner'
}
</script>

<style scoped>
.spinner {
  animation: 1s ease-in 0s infinite alternate shadow_animation;
  background-color: #4b6584;
  border-radius: 50%;
  box-shadow: 0px 0px 5px #113284;
  margin: auto;
  opacity: .5;
  height: 25px;
  width: 25px;
}

@keyframes shadow_animation {
  0% {
    box-shadow: 0px 0px 5px #113284;
    opacity: .2
  }
  50% {
    box-shadow: 0px 0px 25px #113284;
    opacity: .5
  }
  100% {
    box-shadow: 0px 0px 5px #113284;
    opacity: .2
  }
}
</style>