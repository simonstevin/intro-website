<template>
  <transition name="fade">
    <td class="photoCell" :style="{'background-image': 'url(' + src + ')', 'height': photoHeight+'px'}"></td>
  </transition>
</template>

<script>
  export default {
    name: "Photo",
    props: [
      'src',
      'top',
      'left',
      'delay'
    ],
    photoHeight: window.innerWidth / 4 * 0.7
  }
</script>

<style scoped>
  @keyframes fadeInUp {
    from {
      transform: translate3d(0,40px,0)
    }

    to {
      transform: translate3d(0,0,0);
      opacity: 1
    }
  }

  .fade-enter-active {
    opacity: 0;
    animation: fadeInUp 0.5s;
  }

  .fade-leave-active {
    opacity: 1;
    animation: fadeInUp 0.5s reverse;
  }

  .photoCell {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
</style>
