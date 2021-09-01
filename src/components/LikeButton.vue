<template>
  <div :class="isLiked ? 'heart-icon liked' : 'heart-icon'" v-on:click="clickHandler">
    <svg viewBox="0 -28 512.00002 512" xmlns="http://www.w3.org/2000/svg"><path d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"/></svg>
  </div>
</template>

<script>
export default {
  name: 'LikeButton',
  props: {
    id: Number,
  },
  data () {
    return {
      isLiked: false,
    }
  },
  created() {
    let likes = JSON.parse(window.localStorage.getItem('likes'));

    if (likes != null) {
      let index = likes.indexOf(this.id);
      if (index === -1) {
        this.isLiked = false;
      } else {
        this.isLiked = true;
      }
    }
  },
  methods: {
    clickHandler: function() {
      let likes = JSON.parse(window.localStorage.getItem('likes'));
      
      if (likes === null) {
        likes = []
      }

      if (this.isLiked === false) {
        likes.push(this.id);
        this.isLiked = true;
      } else {
        let index = likes.indexOf(this.id);

        if (index === -1) {
          this.isLiked = false;
        } else {
          likes.splice(index, 1);
          this.isLiked = false;
        }
      }

      console.log(likes);
      
      window.localStorage.setItem('likes', JSON.stringify(likes));
    }
  }
}
</script>

<style scoped>
.heart-icon {
  display: inline-block;
  fill: #4b6584;
  height: 20px;
  transition: .2s linear;
  width: 20px;
}

.liked {
  fill: #eb3b5a;
}

.heart-icon:hover {
  cursor: pointer;
  fill: #fc5c65;
}
</style>