<template>
  <div
    class="flex justify-between items-center px-[150px] w-full border-b shadow-sm z-20"
  >
    <img src="../assets/img/logo-kiri.png" alt="" width="70px" />
    <div>
      <ul class="flex gap-2 items-center">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink
          to="/login"
          class="border px-5 py-2 rounded-l-full rounded-br-full bg-primaryColor text-white"
          >Login</NuxtLink
        >
      </ul>
    </div>
  </div>
</template>
