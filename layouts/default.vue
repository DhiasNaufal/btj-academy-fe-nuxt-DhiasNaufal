<template>
  <AppHeader />
  <div class="flex">
    <AppSidebar />
    <div>
      <slot />
    </div>
  </div>
  <AppFooter />
</template>
