<template>
 <div v-resize="listScroll" id='single-alarm'>
    <SinglePawn></SinglePawn>
    <PatrolVideo :url="photoUrl" type="image"></PatrolVideo>
 </div>
</template>

<script>
import PatrolVideo from './Patrol'
import SinglePawn from './Sing'
import { mapActions } from 'vuex'
export default {
  components: { PatrolVideo, SinglePawn },
  data() {
    return {
    }
  },
  computed: {
    photoUrl() {
      return ``
    }
  },
  watch: {
  },
  methods: {
  },
  created() {
  },
  destroyed() {
  }
}
</script>

<style>
</style>

