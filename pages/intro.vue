<template>
  <div class="min-h-screen py-5">
    <div class="text-center text-[30px] font-semibold">
      Introduction Section
    </div>
    <div class="p-5">
      <div class="">
        <Icon
          name="material-symbols:add-photo-alternate-outline"
          color="gray"
          class="text-[100px]"
        />
      </div>

      <form action="" class="flex flex-col gap-2">
        <div class="flex flex-col">
          <label for="nama">Nama</label>
          <input
            placeholder="Dhias Muhammad Naufal"
            type="text"
            name="nama"
            id="nama"
            class="w-[70vw]"
          />
        </div>
        <div class="flex flex-col">
          <label for="nama">Deskripsi</label>
          <textarea></textarea>
        </div>
      </form>
      <TagBtn>Update</TagBtn>
    </div>
  </div>
</template>
