<template>
  <!-- イベントハンドリング -->
  <div @click="$emit('modal')" class="button">モーダルを表示</div>
</template>

<script>
export default {
}
</script>

<style>
.button {
  display: inline-block;
  padding: 10px 30px;
  margin: 10px;
  background: #42b983;
  color: #FFF;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
}
</style>