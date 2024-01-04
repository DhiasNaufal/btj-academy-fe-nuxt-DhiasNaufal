<template>
  <div
    class="border p-3 w-[400px] bg-gray-100 rounded border-none flex flex-col gap-3 shadow-xl"
  >
    <div class="font-bold text-[20px]">
      <slot name="judul">Judul Kerja</slot>
    </div>
    <div>
      <slot name="tahun"> Tahun</slot>
    </div>
    <slot name="deskripsi"> Deskripsi</slot>
  </div>
</template>
