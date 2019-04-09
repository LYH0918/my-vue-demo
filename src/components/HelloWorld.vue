<template>
  <div id="tttt">
    <slot></slot>
    <slot name="header"></slot>
    <slot :mydata='list'
          name="list"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4]
    }
  },
  created() { },
  methods: {

  }
}
</script>

<style>
</style>
