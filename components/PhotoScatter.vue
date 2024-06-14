<template>
  <div class="w-screen h-screen absolute z-10 top-0 left-0 overflow-hidden flex flex-wrap">
    <table class="w-full h-full">
      <tr>
        <td class="photoCell" :style="{'background-image': 'url(' + photos[0] + ')', 'height': photoHeight+'px'}"></td>
        <td class="photoCell" :style="{'background-image': 'url(' + photos[1] + ')', 'height': photoHeight+'px'}"></td>
        <td class="photoCell" :style="{'background-image': 'url(' + photos[2] + ')', 'height': photoHeight+'px'}"></td>
        <td class="photoCell" :style="{'background-image': 'url(' + photos[3] + ')', 'height': photoHeight+'px'}"></td>
      </tr>
      <tr>
        <td class="photoCell" :style="{'background-image': 'url(' + photos[4] + ')', 'height': photoHeight+'px'}"></td>
        <td class="photoCell" :style="{'background-image': 'url(' + photos[10] + ')', 'height': photoHeight+'px'}"></td>
        <td class="photoCell" :style="{'background-image': 'url(' + photos[11] + ')', 'height': photoHeight+'px'}"></td>
        <td class="photoCell" :style="{'background-image': 'url(' + photos[5] + ')', 'height': photoHeight+'px'}"></td>
      </tr>
      <tr>
        <td class="photoCell" :style="{'background-image': 'url(' + photos[6] + ')', 'height': photoHeight+'px'}"></td>
        <td class="photoCell" :style="{'background-image': 'url(' + photos[7] + ')', 'height': photoHeight+'px'}"></td>
        <td class="photoCell" :style="{'background-image': 'url(' + photos[8] + ')', 'height': photoHeight+'px'}"></td>
        <td class="photoCell" :style="{'background-image': 'url(' + photos[9] + ')', 'height': photoHeight+'px'}"></td>
      </tr>
    </table>
  </div>
</template>

<script>
  import Photo from "./Photo";
  import brascursie from '../assets/img/brascursie.jpeg';
  import welding from '../assets/img/welding.jpg';
  import bata from '../assets/img/bata.jpg';
  import camping from '../assets/img/bata-camping.jpg';
  import beertasting from '../assets/img/beertasting.jpg';
  import crafting from '../assets/img/crafting.jpg';
  import vuurspuwen from '../assets/img/vuurspuwen.jpg';
  import meiscie from '../assets/img/meiscie.jpg';
  import deutscheborrel from '../assets/img/deutscheborrel.jpg';
  import vdl from '../assets/img/vdl.jpg';
  import piste from '../assets/img/piste.jpg';
  import kano from '../assets/img/kano.jpg';

  export default {
    name: "PhotoScatter",
    components: {Photo},
    data() {
      return {
        photos: [
          brascursie,
          welding,
          crafting,
          bata,
          camping,
          kano,
          beertasting,
          vuurspuwen,
          deutscheborrel,
          meiscie,
          piste,
          vdl
        ],
        photoWidth: 200,
        photoHeight: window.innerWidth / 4 * 0.7
      };
    }
  }
</script>

<style scoped>
  .photoCell {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
</style>
