<template>
  <div>
    <v-header />
    <nuxt />
    <v-footer />
  </div>
</template>

<script>
import Vue from 'vue'
import Functions from '~/plugins/functions.js'
import vHeader from '~/components/header.vue'
import vFooter from '~/components/footer.vue'
Vue.use(Functions)
export default {
	components: { vHeader, vFooter }
}
</script>
