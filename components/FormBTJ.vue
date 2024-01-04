<template>
  <div id="main-card" class="w-[480px] shadow-2xl rounded-xl flex flex-col">
    <header class="p-[30px] bg-primaryColor-500">
      <h1 class="text-3xl font-bold text-primaryColor">Welcome</h1>
      <p>Bangundindo Design System</p>
    </header>
    <main class="p-[40px]">
      <form class="basis-5">
        <div class="mb-4">
          <input
            type="text"
            id="username"
            name="username"
            class="mt-1 p-2 w-full border-0 rounded-md bg-black text-white focus:ring-0"
            placeholder="Username"
          />
        </div>

        <div class="mb-4">
          <input
            type="password"
            id="password"
            name="password"
            class="mt-1 p-2 w-full border-0 rounded-md bg-black text-white focus:ring-0 focus:outline-0 focus:border-0"
            placeholder="Password"
          />
        </div>

        <div class="mb-4 flex items-center p-2 gap-1">
          <input
            type="checkbox"
            id="Remember"
            name="Remember-me"
            class="p-2 border border-primaryColor rounded-md focus:ring-0 focus:ring-offset-0 accent-primary text-primaryColor focus:ring-p"
          />
          <label for="Remember"> Remember me </label>
        </div>

        <NuxtLink
          to="/dashboard"
          type="submit"
          class="bg-primaryColor text-white px-4 py-2 rounded-md focus:outline-none text-center focus:shadow-outline-blue w-full"
        >
          Sign-in
        </NuxtLink>
      </form>
      <a href="" class="text-center block my-[20px]">Forgot your password?</a>
      <div id="sign-up" class="flex justify-between">
        <p class="flex items-center">Dont't Have an account? Create now!</p>
        <NuxtLink
          to="/dashboard"
          class="border text-primaryColor border-primaryColor px-[16px] rounded-md py-2"
        >
          Sign-up
        </NuxtLink>
      </div>
    </main>
  </div>
  <!-- <div>
    <footer class="flex flex-col items-center gap-[10px]">
      <img
        src="../assets/icon/btj-design-system-black 1.svg"
        alt=""
        class="w-[24px]"
      />
      <p class="font-bold">Bangundindo<span class="font-light">UI</span></p>
      <p class="text-sm font-light">@2023</p>
    </footer>
  </div> -->
</template>
