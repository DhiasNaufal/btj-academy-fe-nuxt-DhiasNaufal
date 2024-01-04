<template>
  <section class="flex flex-col py-[70px] gap-2 px-[150px]">
    <div class="flex justify-between text-lg">
      <p class="">Recent Works</p>
      <p>view all</p>
    </div>
    <div class="flex items-start gap-5">
      <WorkCard v-for="work in works" :key="work.id">
        <template v-slot:judul>
          <h1>{{ work.title }}</h1>
        </template>
        <template v-slot:tahun>
          <h1>{{ work.year }}</h1>
        </template>
        <template v-slot:deskripsi>
          <p>{{ work.description }}</p>
        </template>
      </WorkCard>
    </div>
  </section>
</template>

<script>
export default defineComponent({
  data() {
    return {
      works: [
        {
          id: 1,
          title: "Flutter Developer at Wanagama",
          year: "2022",
          description:
            "I translated client needs into software requirements for the Wanagama App, a Flutter-based solution for online booking. Created documentation, including an SRS, and presented the app to the Wanagama Directorate, emphasizing its features and impact.",
        },
        {
          id: 2,
          title: "Program Development Intern PT",
          year: "2021",
          description:
            "I organized successful events, such as the Developer Bootcamp, Hustler event, Ytalks talk show, and two webinars, engaging over 100 participants each. These initiatives effectively promoted our company's programs, highlighting my strong organizational skills and ability to connect with diverse audiences in the startup ecosystem.",
        },
      ],
    };
  },
});
</script>
