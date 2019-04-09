<template>
  <div>
    <p>{{data | upper}}</p>
    <p>{{money|cash}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: "hello",
      money: 580000000000
    }
  },
  filters: {
    cash: function gg(val) {
      var c = val.toString().split('').reverse()
      var b = []
      var k = []
      var len = c.length;
      if (len % 3 !== 0) {
        len = (len / 3) + 1
      } else {
        len = len / 3
      }
      for (var i = 0; i < len; i++) {
        k = c.splice(0, 3)
        if (k.length === 3 && i !== len) {
          b = b.concat(k).concat([','])
        } else { b = b.concat(k) }
      }
      var result = b.reverse().join('');
      if (result[0] === ',') {
        result = result.slice(1)
      }
      return '￥' + result
    }
  }
}
</script>

<style>
</style>
