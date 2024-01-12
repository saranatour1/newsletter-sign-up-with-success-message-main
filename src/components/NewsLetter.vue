<script setup lang="ts">
import { ref } from 'vue';

const stayUpdatedText: string[] = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

const isValid = ref<boolean | null>(null);
const errMsg = ref("");
const text = ref("");
const emailVal = ref("");
const emailRegEx = ref(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/);

const nextStep = ref(false);

const validateEmail = (input: string) => {
  if (input.trim() === "") {
    isValid.value = null; // Reset validation state for empty input
    return (errMsg.value = ""); // Reset error message for empty input
  }
  if (input.match(emailRegEx.value)) {
    isValid.value = true;
  } else {
    isValid.value = false;
    return (errMsg.value = "Valid Email required");
  }
};

const goToNextStep = () => {
  if (isValid.value && isValid.value !== null) {
    nextStep.value = true;
  } else {
    nextStep.value = false;
  }
}

const refreshPage =()=>{
  location.reload();
}


</script>
<template>
  <div v-if="!nextStep"
    class="w-[58.375rem] h-[40.063rem] flex flex-row-reverse items-center 
    justify-around
     p-6 bg-white gap-x-16  rounded-[40px] max-sm:h-screen max-sm:w-screen max-sm:flex-col max-sm:p-0 max-sm:gap-x-0
      max-sm:justify-start max-sm:items-center
     ">

    <picture class=" max-sm:mx-auto">
      <source srcset="/src/assets/illustration-sign-up-mobile.svg" media="(max-width: 600px)" />
      <img class=" max-sm:w-screen max-sm:p-0" src="/src/assets/illustration-sign-up-desktop.svg" alt="MDN" />
    </picture>



    <div class=" p-5 inline-flex flex-col justify-around items-start max-sm:mx-auto max-sm:w-screen">
      <h1 class=" text-6xl max-sm:text-4xl text-gray-1000 font-roboto font-bold my-1 tracking-normal">Stay updated!</h1>
      <p class="-tracking-tight my-2 font-roboto text-base line-clamp-2 font-normal">
        Join 60,000+ product managers receiving monthly updates on:
      </p>

      <table class="table-fixed">
        <tbody>
          <tr class="my-1" v-for="(message, index) in stayUpdatedText" :key="index">
            <td class="px-0 py-1">
              <img src="/src/assets/icon-list.svg" alt="icons list" class="mr-2" />
            </td>
            <td class="px-2 py-1 font-roboto text-gray-970 text-base">{{ message }}</td>
          </tr>
        </tbody>
      </table>
      <form @submit.prevent class=" w-full">
        <div class="mb-3 flex flex-col w-full">
          <label for="email" class="text-xs font-extrabold mt-3 font-roboto text-gray-970">
            <div class="inline-flex justify-between">
              <span class="mr-10 font-roboto text-gray-970 font-bold mb-1"> Email address </span>
              <span class="mr-10 font-roboto  font-bold mb-1 text-red-300 self-end" v-if="!isValid">{{ errMsg }}</span>
              <span v-else> </span>
            </div>
          </label>
          <input type="email" name="email" id="email" placeholder="email@company.com" @submit.prevent
            class="bg-white indent-2 text-gray-970 h-12 w-full outline-none font-roboto rounded-lg p-0 border border-gray-970  focus:border-black focus:outline-black"
            :class="isValid ? 'bg-white' : ' border-red-tomato bg-red-tomato/25  focus:outline-red-tomato text-red-tomato'"
            @input="validateEmail(text)" v-model="text" />
        </div>

        <button @click="goToNextStep"
          class=" w-full h-14 bg-gray-1000 flex items-center justify-center text-white font-roboto font-bold rounded-lg mt-2 hover:bg">
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  </div>



  <div v-if="nextStep"
    class=" w-[32.75rem] h-[32.75rem] rounded-xl flex justify-center items-center bg-white p-10 card lg:flex lg:justify-center lg:items-center max-sm:h-screen">
    <div class=" flex flex-col justify-around h-full items-center">
      <div class=" max-sm:mt-24 flex-grow flex flex-col justify-center items-start">
        <img src="/src/assets/icon-success.svg" alt="success icon" class="my-2" />
        <h1 class="my-5 text-4xl leading-none font-extrabold font-roboto">
          Thanks for subscribing!
        </h1>
        <p class=" font-roboto">
          A confirmation email has been sent to
          <span class="font-extrabold">{{ text }}</span>. Please open it
          and click the button inside to confirm your subscription.
        </p>
      </div>
    
        <button id="dis" class=" w-full h-14 bg-gray-1000 flex items-center justify-center text-white font-roboto font-bold rounded-lg mt-2 hover:bg" @click="refreshPage">
          Dismiss message
        </button>
      
    </div>
  </div>
</template>

<style scoped>
button {
  transition: background-color 1s ease-in-out;
}

button:hover {
  background: rgb(255, 84, 116);
  background: linear-gradient(45deg, rgba(255, 84, 116, 1) 0%, rgba(255, 103, 64, 1) 44%);
}
</style>
