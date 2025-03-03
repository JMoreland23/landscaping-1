<template>
  <div :class="['search-popup', search ? 'active' : '']">
    <div class="search-popup__overlay search-toggler" @click="toggleSearch(false)"></div>
    <div class="search-popup__content">
      <form @submit.prevent style="display: flex">
        <input
          type="text"
          id="search"
          placeholder="Search Here..."
          style="display: inline-block"
        />
        <button
          type="submit"
          aria-label="search submit"
          class="thm-btn"
          style="display: inline-block"
        >
          <i class="icon-magnifying-glass"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  toggleSearch: Function,
  search: Boolean,
});
</script>

 