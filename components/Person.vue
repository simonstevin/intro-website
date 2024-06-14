<template>
  <div class="py-4 w-56">
    <div class="shadow-lg group container border border-gray-300 rounded-lg bg-white max-w-sm flex justify-center items-center mx-auto content-div">
      <div class="w-full">
        <div class="w-full bg-cover image-cover rounded-t-md"  :style="{'background-image': 'url(' + src + ')'}">
        </div>
        <div class="py-8 px-4 rounded-b-md border-1 border-white fd-cl text-center w-full" style="background-color: white">
          <span class="block text-lg text-center text-gray-800 font-bold tracking-wide">{{ name }}</span>
          <span  class="block text-gray-600 text-sm text-center">
            <a :href="'https://wa.me/'+wanr" class="text-green-400 font-bold"><font-awesome-icon class="mr-1" :icon="['fab', 'whatsapp']"></font-awesome-icon> {{ phonenr }}</a>
          </span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Person",
        props: ['src', 'name', 'phonenr'],
        computed: {
            wanr: function() {
              let nr = this.phonenr;
              nr = nr.replace(/ /g, '');
              nr = nr.replace('+', '');
              return nr;
            }
        }
    }
</script>

<style scoped>
  .content-div{
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;
  }
  .image-cover  {
    height:241px;
  }
</style>
