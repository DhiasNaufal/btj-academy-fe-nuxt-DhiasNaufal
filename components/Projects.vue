import type { NuxtImg } from '#build/components';
<template>
  <section class="flex flex-col py-[50px] px-[150px] bg-primaryColor-500">
    <div class="text-lg">Projects</div>
    <div class="flex flex-col gap-7">
      <ProjectCard v-for="project in projects" :key="project.id">
        <template v-slot:foto>
          <img src="`../assets/img/Wanagama.png`" :alt="project.title" />
        </template>
        <template v-slot:judul>
          <h1>{{ project.title }}</h1>
        </template>
        <template v-slot:tahun>
          <h1>{{ project.year }}</h1>
        </template>
        <template v-slot:deskripsi>
          <p>{{ project.description }}</p>
        </template>
      </ProjectCard>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          image: "Wanagama.png",
          title: "Wanagama Project",
          year: "2022",
          description:
            "Wanagama Project is a project for Wanagama Forest Located in Gunung Kidul Daerah Istimewa Yogyakarta",
        },
        {
          id: 2,
          image: "MedQ.png",
          title: "MedQ ",
          year: "2023",
          description:
            "MedQ is a Mobile App Quiz Game that intended for learning about Clinical Decision Support System In general",
        },
      ],
    };
  },
};
</script>
