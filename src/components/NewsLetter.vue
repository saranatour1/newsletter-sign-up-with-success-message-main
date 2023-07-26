<script setup lang="ts">
// import StayUpdated from './NewsLetterComponents/StayUpdated.vue';
import { ref, onMounted } from 'vue';


// import { ref } from 'vue';
const stayUpdatedText: string[] = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

let isValid = ref(false);
let errMsg = ref("");
let text = ref("");
let emailVal = ref("");
let isLarge = ref(true);

onMounted(() => {
  window.addEventListener('resize', () => {
    isLarge.value = window.innerWidth >= 376;
  });

})


console.log(text.value);
const emailRegEx = ref(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/);

const validateEmail = (input: string) => {
  if (input.match(emailRegEx.value)) {
    isValid.value = true;
    emailVal.value = text.value;

    return (text.value = "");
  } else {
    isValid.value = false;
    return (errMsg.value = "Valid Email required");
  }

  // pass items from child to parent
};
</script>
<template>
  <!-- This is our Larger pot, Containes two components -->
  <div v-if="!isValid" class="bg-white w-full mx-auto my-0 card">
  <div class="h-72 m-0">
    <img
      :src="`/src/assets/illustration-sign-up-${ isLarge ? 'desktop' : 'mobile'}.svg`"
      class="h-full object-contain"
    />
  </div>

  <div class="stay-updated">
    <h1 class="my-5 text-4xl leading-none font-extrabold">Stay updated!</h1>
    <p class="-tracking-tight my-2">
      Join 60,000+ product managers receiving monthly updates on:
    </p>

    <table class="table-fixed">
      <tbody>
        <tr class="my-1" v-for="(message, index) in stayUpdatedText" :key="index">
          <td class="px-0 py-1">
            <img
              src="/src/assets/icon-list.svg"
              alt="icons list"
              class="mr-2"
            />
          </td>
          <td class="px-2 py-1">{{ message }}</td>
        </tr>
      </tbody>
    </table>
    <form @submit="(event) => event.preventDefault()">
      <div class="mb-3 flex flex-col">
        <label for="email" class="text-xs font-extrabold mt-3">
          <div class="inline-flex justify-between">
            <span class="mr-10"> Email address </span>
            <span v-if="isValid" class="text-red-300">{{ errMsg }}</span>
            <span v-else> </span>
          </div>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@company.com"
          class="py-2 w-full px-2"
          :class="isValid ? 'bg-white' : ' bg-red-200 border-red-500'"
          :value="text"
          @input="(event) => (text = (event.target as HTMLInputElement)?.value)"
        />
      </div>

      <button
        @click="validateEmail(text)"
        class="text-white text-center w-full py-2 px-2 rounded-lg my-2"
      >
        Subscribe to monthly newsletter
      </button>
    </form>
  </div>
</div>

<div v-if="isValid" class="flex justify-center items-center bg-white p-10 card lg:flex lg:justify-center lg:items-center">
  <div class="container flex flex-col justify-around h-full">
    <div class=" sm:mt-24 flex-grow">
      <img src="/src/assets/icon-success.svg" alt="success icon" class="my-2"/>
      <h1 class="my-5 text-4xl leading-none font-extrabold">
        Thanks for subscribing!
      </h1>
      <p>
        A confirmation email has been sent to
        <span class="font-extrabold">{{ emailVal }}</span>. Please open it
        and click the button inside to confirm your subscription.
      </p>
    </div>
    <div>
      <button
        id="dis"
        class="text-white text-center w-full py-2 px-2 rounded-lg my-2"
        @click="isValid=!isValid"
      >
        Dismiss message
      </button>
    </div>
  </div>
</div>

</template>

<style>
/** Desktop Media Query */
/* Styles for screens between 600px and 1440px */
@media (min-width: 600px) and (max-width: 1440px) {
  body{
    background:hsl(234, 29%, 20%);
    /* height: 100vh; */
    display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
  }
  .card{
    max-height: fit-content;
    max-width: 600px;
    padding: 20px;
    border: 1px solid hsl(231, 7%, 60%);
    background-color: hsl(0, 0%, 100%);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
  }

  .card:first-of-type{
    display: flex;
    flex-direction: row-reverse;
  }
  .h-72.m-0 > img{
    padding: 5px;
    height: fit-content;
    object-fit: contain;
  }
}


/**Mobile Media Query */


@media (max-width: 375px) {
  body {
    overflow-x: hidden;
  }
  div.bg-white.w-full.mx-auto.my-0 , div.flex.justify-center.items-center.bg-white.p-10{
    height: 100vh;
  }

  .stay-updated {
    width: 90vw;
    /* height: 100vh; */
    margin: 0 auto;
  }

}
td,
p,
label {
  color: hsl(235, 18%, 26%);
}

input[type="email"] {
  color: hsl(235, 18%, 26%);
  border-radius: 7px;
  text-indent: 2px;
  border: 1px solid hsl(231, 7%, 60%);
}

input[type="email"]:focus {
  border: 1px solid hsl(235, 18%, 26%);
}

button {
  background-color: hsl(234, 29%, 20%);
}

button:hover {
  background-image: linear-gradient(45deg, hsl(4, 100%, 67%), hsl(0, 0%, 100%));
  transition: background-image 0.5s ease;
}
</style>
