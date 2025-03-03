<template>
  <ul class="main-menu__list">
    <li
      v-for="(item, i) in menuData"
      :key="i"
      :class="{ dropdown: item.has_dropdown, current2: item.has_dropdown }"
    >
      <!-- Parent Menu Link -->
      <NuxtLink :to="item.path">
        {{ item.title }} <span class="line"></span>
      </NuxtLink>

      <!-- Dropdown Submenus -->
      <ul v-if="item.has_dropdown">
        <li
          v-for="(subItem, index) in item.sub_menus"
          :key="index"
        >
          <NuxtLink :to="subItem.path">{{ subItem.title }}</NuxtLink>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
// import menuData from '@/data/menu-data'; // Import the menu data
import menuData from '../../data/menu-data'; // Import the menu data
</script>

<style scoped>
/* Add any styles specific to this component here */
</style>
