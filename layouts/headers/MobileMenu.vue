<template> 
    <ul class="main-menu__list">
      <li
        v-for="(item, i) in menuData"
        :key="i"
        :class="item.has_dropdown ? 'dropdown' : ''"
      >
        <!-- Main Menu Link -->
        <NuxtLink
          :to="item.path"
          :class="navTitle === item.title ? 'expanded' : ''"
        >
          {{ item.title }} <span class="line"></span>
          <!-- Dropdown Toggle Button -->
          <button
            v-if="item.has_dropdown"
            aria-label="dropdown toggler" 
            :class="navTitle === item.title ? 'expanded' : ''"
            class="dropdown-toggle-btn"
            @click="toggleMenu(item.title)"
          >
            <i class="fa fa-angle-down"></i>
          </button>
        </NuxtLink>
  
  
        <!-- Submenu -->
        <ul v-if="item.has_dropdown" :style="{ display: navTitle === item.title ? 'block' : 'none' }">
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
import { ref } from "vue";
import menuData from "../../data/menu-data";

// State for tracking the currently open menu
const navTitle = ref("");

// Function to toggle the mobile menu
const toggleMenu = (menu) => {
  navTitle.value = navTitle.value === menu ? "" : menu;
};
</script>


