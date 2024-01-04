<template>
  <div
    class="bg-gradient-to-b from-primaryColor from-0% to-primaryColor-300 to-100% w-[20vw] text-white"
  >
    <ul class="py-4 px-5 flex flex-col gap-5 text-[20px]">
      <NuxtLink v-for="link in links" :key="link.path" :to="link.path">{{
        link.label
      }}</NuxtLink>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { path: "/dashboard", label: "Home" },
        { path: "/intro", label: "Introduction" },
        { path: "/aboutpage", label: "About Section" },
        { path: "/work", label: "Work Experience" },
        { path: "/project", label: "Recent Project" },
      ],
    };
  },
};
</script>
