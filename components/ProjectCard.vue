<template>
  <div class="flex gap-6">
    <div class="w-[350px]">
      <slot name="foto">FOTO</slot>
    </div>
    <div>
      <div class="text-[40px] font-bold">
        <slot name="judul">JUDUL</slot>
      </div>
      <slot name="tahun"> TAHUN</slot>
      <slot name="deskripsi"> DESKRIPSI</slot>
    </div>
  </div>
</template>
