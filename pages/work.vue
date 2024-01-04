<template>
  <div class="min-h-screen w-[800px] py-6 px-5">
    <div class="text-center text-[30px] font-semibold">
      <h1 class="">Working Experience Section</h1>
    </div>
    <div>
      <div class="flex flex-col">
        <label for="judul">Work Name</label>
        <input type="text" name="judul" id="judul" />
      </div>
      <div class="flex flex-col">
        <label for="tahun">Year</label>
        <input type="tel" name="tahun" id="tahun" />
      </div>
      <div class="flex flex-col">
        <label for="tahun">Description</label>
        <textarea name="deskripsi" id="" cols="30" rows="10"></textarea>
      </div>
    </div>
    <TagBtn>Add</TagBtn>
  </div>
</template>
