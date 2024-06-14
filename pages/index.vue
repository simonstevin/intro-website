<template>
  <section id="welcome">
    <PhotoScatter class="z-0"></PhotoScatter>
    <div class="fluid-container relative z-10">
      <div class="title items-center text-center content-center align-middle flex">
        <h1 class="w-full text-6xl" data-aos="fade-up" data-aos-delay="1000" data-aos-anchor-placement="top-center">We are mechanical engineers.
        </h1>
      </div>
      <div class="top-0 right-0 pr-10 fixed">
        <a class="block mx-auto w-64 shadow bg-primary hover:bg-primary-700 focus:shadow-outline focus:outline-none text-white px-10 rounded-b text-sm font-bold py-2 uppercase" href="https://simonstev.in/home">To regular website</a>
      </div>
      <div class="arrow">
        <font-awesome-icon icon="chevron-down" data-aos="fade-up" data-aos-delay="1500" data-aos-anchor-placement="top-center"></font-awesome-icon>
      </div>
    </div>
    <div class="w-full bg-primary">
      <div class="container block md:hidden mx-auto mt-5 pt-5 flex">
        <div class=" w-full text-center">
          <div class="photoCell mx-auto" :style="{'background-image': 'url(' + welcomeImg + ')'}">
          </div>
        </div>
      </div>
      <div class="container mx-auto py-5 my-5 md:my-10 flex">
        <div class="column w-full md:w-1/2 my-0 md:my-0 md:mt-12">
          <h1 class="px-2 md:px-0">W.S.V. Simon Stevin is</h1>
          <p class="md:pr-5 px-2 md:px-0">the Study Association of Mechanical Engineering in Eindhoven. We organize all sorts of activities for Mechanical Engineering students, from parties to welding workshops.<br/>The study association is a great place to make friends for the rest of your life while having a lot of fun! Interested? Read more below!</p>
        </div>
        <div class="hidden md:block md:w-1/2 text-center">
          <div class="photoCell md:ml-auto md:mr-0 mx-auto" :style="{'background-image': 'url(' + welcomeImg + ')'}">
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-white">
      <div class="container mx-auto py-5 my-10">
        <div class="flex">
          <div class="column text-gray-900 w-full mt-12">
            <h1 class="text-gray-900 px-2 md:px-0">Contact?</h1>
            <p class="text-gray-900 px-2 md:px-0">If you have any questions, don’t hesitate to send a WhatsApp message to the people below! You can also e-mail us at <a href="mailto:info@simonstevin.tue.nl">info@simonstevin.tue.nl</a>.</p>
          </div>
        </div>
        <div class="flex">
          <div class="column w-full">
            <div class="flex flex-wrap pt-10">
              <div class="w-full">
                <div class="max-w-lg flex flex-row justify-between mx-auto">
                  <Person class="mx-auto" :src="benImg" name="Ben Gortemaker" phonenr="+31 6 83 54 48 17"></Person>
                  <Person class="mx-auto" :src="stefanImg" name="Stefan Geerts" phonenr="+31 6 37 30 74 92"></Person>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="column w-full mt-5 md:mt-12 text-gray-900 text-center">
            <font-awesome-icon class="text-gray-900" :icon="['fab', 'instagram']"></font-awesome-icon> <a class="text-gray-900" href="https://www.instagram.com/wsvsimonstevin/">instagram.com/wsvsimonstevin</a><br/>
            <font-awesome-icon class="text-gray-900" :icon="['fab', 'facebook']"></font-awesome-icon> <a class="text-gray-900" href="https://www.facebook.com/wsvsimonstevin/">facebook.com/wsvsimonstevin</a><br/>
            <font-awesome-icon class="text-gray-900" icon="newspaper"></font-awesome-icon> <a class="text-gray-900" href="https://www.openme.nl">openME.nl</a><br/>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full">
      <div class="container mx-auto py-5 my-10 flex flex-wrap">
        <div class="column w-full md:w-1/2 mt-5 md:mt-12">
          <h1 class="px-2 md:px-0">Education</h1>
          <p class="px-2 md:px-0">As a study association, Simon Stevin works closely together with the Department of Mechanical Engineering. We <b>sell books for a reduced price</b> via <a class="underline" href="https://simonstev.in/mysimon/order-books">our website</a>. We also organize several things to improve the quality of education, like student councils where you can give your feedback about your courses; and help you develop your skills with hard and soft skill courses (Like welding, woodworking and Photoshop).</p>
        </div>
        <div class="w-full md:w-1/2 text-center mt-10 md:mt-0">
          <div class="photoCell md:ml-auto md:mr-0 mx-auto" :style="{'background-image': 'url(' + weldingImg + ')'}">
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-white">
      <div class="container mx-auto py-5 my-12">
        <div class="flex flex-wrap">
          <div class="column text-gray-900 w-full md:w-1/2">
            <div class="photoCell mx-auto md:mr-auto md:ml-0" :style="{'background-image': 'url(' + yachtingImg + ')'}">
            </div>
          </div>
          <div class="column text-gray-900 w-full md:w-1/2 mt-12">
            <h1 class="text-gray-900 px-2 md:px-0">Leisure</h1>
            <p class="text-gray-900 px-2 md:px-0 text-justify">Next to exploring the field of Mechanical Engineering and developing yourself, leisure is also an important part of our association and student life in general. Some examples of the activities are the regular <b>Thursday drink</b> in our own bar <b>‘De Weeghconst’</b>; Several <b>ME-parties</b> at Stratumseind; land yachting with <b>our own land yachts</b> and many other activities!</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-primary">
      <div class="container mx-auto py-2 md:py-5 my-12">
        <div class="flex flex-wrap">
          <div class="column text-gray-900 w-full md:w-1/2 md:mt-16">
            <p class=" px-2 md:px-0">
              We have around 150 active members in 25 committees. There are three special committees for freshmen: AcCie, ReAcCie and BattleCie. Joining a committee is a lot of fun and you will learn vital skills for your career and personal development. If you would like to know more, you can take a look here: <a class="underline" href="https://simonstev.in/association/committees">https://simonstev.in/association/committees</a>.
            </p>
          </div>
          <div class="column text-gray-900 w-full md:w-1/2 mt-10 md:mt-0">
            <div class="photoCell md:ml-auto md:mr-0 mx-auto" :style="{'background-image': 'url(' + committeeImg + ')'}">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-white">
      <div class="container mx-auto py-5 my-10 flex flex-wrap">
        <div class="column w-full md:w-1/2 text-center">
          <div class="photoCell md:mr-auto md:ml-0 mx-auto" :style="{'background-image': 'url(' + armyImg + ')'}">
          </div>
        </div>
        <div class="column w-full md:w-1/2 mt-12 text-gray-900">
          <h1 class="text-gray-900 px-2 md:px-0">Career</h1>
          <p class="md:pr-5 text-gray-900 px-2 md:px-0">To get an idea of what is possible as a Mechanical Engineer, the association organizes multiple career-oriented activities during the year. These include a <b>lunch lecture</b> (almost) every Wednesday, multiple <b>company visits</b> and <b>symposia</b>. By participating in these activities, you will learn more about the possibilities after your study, which will be important to determine what master course you want to do, as well as where you’d like to work in the future!</p>
        </div>
      </div>
    </div>
    <div class="w-full">
      <div class="container mx-auto py2 md:py-5 my-10 flex flex-wrap">
        <div class="column w-full md:w-1/2 mt-0 md:mt-12">
          <h1 class=" px-2 md:px-0">openME</h1>
          <p class="md:pr-5 px-2 md:px-0">
            openME is the department paper of Mechanical Engineering, of which a physical edition is released twice a year by Simon Stevin. All kinds of articles are also released every week online at <a href="https://www.openme.nl">openME.nl</a>. These articles cover a range of topics: tech-related, the university, studying and about career-related subjects.
          </p>
        </div>
        <div class="column w-full md:w-1/2 mt-10 md:mt-0 text-center">
          <div class="photoCell md:ml-auto md:mr-0 mx-auto" :style="{'background-image': 'url(' + openMeImg + ')'}">
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-white">
      <div class="container mx-auto py-5 my-10">
        <div class="flex flex-wrap">
          <div class="column w-full md:w-1/2 text-right md:text-center">
            <div class="photoCell md:mr-auto md:ml-0 mx-auto" :style="{'background-image': 'url(' + youImg + ')'}">
            </div>
          </div>
          <div class="column text-gray-900 text-justify w-full md:w-1/2 mt-12">
            <h1 class="text-gray-900 px-2 md:px-0">You!</h1>
            <p class="text-gray-900 px-2 md:px-0">
              But what about you? Studying is a very big step towards your future, but with the potential for a lot of fun and exploration of new things!<br/>Here at Simon Stevin, we will guide you during this period to create the best possible time while studying you could have!
            </p>
            <p class="text-gray-900 px-2 md:px-0 pt-2">
              If you are interested in joining the association, you can visit us during the introduction week or become a member during the Book Pickup Event for freshmen. We hope to see you soon!
            </p>
          </div>
        </div>
        <!--<div class="flex">
          <div class="column w-full overflow-hidden text-center my-12 pt-5">
            <a class="block mx-auto w-64 mx-auto shadow bg-primary hover:bg-primary-700 focus:shadow-outline focus:outline-none text-white text-xl py-3 px-10 rounded" href="https://www.simonstev.in/join-simon">Join Simon Stevin</a>
          </div>
        </div>-->
      </div>
    </div>
    <div class="w-full" style="background-color: #eee;">
      <div class="container mx-auto py-5 my-10">
        <div class="flex">
          <div class="column text-black text-center w-full">
            <small class="text-gray-800">&copy; 2020 W.S.V. Simon Stevin</small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import PhotoScatter from "../components/PhotoScatter";
  import Person from "../components/Person";

  import kim from "../assets/img/kim_2.jpg";
  import stefan from "../assets/img/stefan.jpg";
  import sem from "../assets/img/sem.jpg";
  import ben from "../assets/img/ben.jpg";
  import welding from "../assets/img/welding.jpg";
  import landyachting from "../assets/img/landyachting.jpg";
  import committee from "../assets/img/committee.jpg";
  import army from "../assets/img/army.jpeg";
  import openme from "../assets/img/openme.jpg";
  import you from "../assets/img/intro.jpeg";


  export default {
    name: "index",
    components: {Person, PhotoScatter},
    data() {
      return {
        welcomeImg: sem,
        kimImg: kim,
        stefanImg: stefan,
        benImg: ben,
        weldingImg: welding,
        yachtingImg: landyachting,
        committeeImg: committee,
        armyImg: army,
        openMeImg: openme,
        youImg: you
      };
    }
  }
</script>

<style scoped>
  .fluid-container {
    @apply h-screen w-full flex justify-center items-center text-center mx-auto;
    background-color: rgba(0,0,0,0.5);
    /*background-image: url('~assets/img/brascursie.jpeg');
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;*/
  }

  .title {
    @apply w-full h-screen font-bold text-6xl text-white mx-auto;
    /*text-shadow: 1px 4px 5px rgba(10,10,10,0.7), 0 0 5px #000;*/
    /*background-color: rgba(0,0,0,0.5);*/
  }
  .arrow {
    @apply absolute w-20 mx-auto text-center bottom-0 text-white text-4xl pb-10 font-bold;
    overflow: hidden;
    text-shadow: 1px 4px 5px rgba(10,10,10,0.7), 0 0 5px #000;
  }

  .column {
    @apply px-5 text-white;
  }

  .photoCell {
    z-index: 999;
    width: 90%;
    height: 300px;
    box-shadow: 5px 10px #888888;
    @apply rounded-lg shadow-lg;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  p {
  }

</style>
