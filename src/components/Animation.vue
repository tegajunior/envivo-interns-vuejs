<template>
  <div>
    <transition name="slide">
      <div class="animated-div" v-if="showDiv">This will be animated</div>
    </transition>

    <button class="btn" @click="toggleDiv">Toggle</button>
  </div>
</template>

<script>
export default {
  name: 'Animattion',
  data() {
    return {
      showDiv: false,
    };
  },
  methods: {
    toggleDiv: function () {
      this.showDiv = !this.showDiv;
    },
  },
};
</script>

<style scoped>
div.animated-div {
  background-color: #567aae;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  margin: 30px auto;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /* transform: translateX(-400%);
  transition: transform 0.5s linear; */
}

div.animated-div.active {
  transform: translateX(0);
}

button.btn {
  border: 0;
  color: #fff;
  background-color: #567aae;
  padding: 10px 25px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s ease-in;
}

.btn:hover {
  opacity: 0.7;
}

/* .slide-enter-active {
  transition: transform 0.5s ease-in;
}
.slide-leave-active {
  transition: transform 0.5s ease-out;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(-400%);
} */

.slide-enter-active {
  animation: slider 2.5s forwards;
}

.slide-leave-active {
  animation: slider 2s reverse;
} 

 @keyframes slider {
  0% {
    transform: translateX(-200%)
  }

  50% {
    transform: translateX(100%);
  }
  
  100% {
    transform: translateX(0);
  }
}
</style>
