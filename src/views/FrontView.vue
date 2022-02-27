<template>
  <FrontBavbar></FrontBavbar>
  <router-view></router-view>
</template>

<script>
import FrontBavbar from '@/components/FrontNavbar.vue';

export default {
  components: {
    FrontBavbar,
  },
};
</script>
