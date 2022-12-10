<template>
  <div class="form">
    <div class="form-input">
      <input type="text" v-model="textInput">
      <p>{{ textInput }}</p>
    </div>
    <div class="form-input">
      <textarea v-model="textAreaInput"></textarea>
      <p>{{ textAreaInput }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        textInput: '',
        textAreaInput: ''
      };
    }
  }
</script>

<style>
.form {
  margin: 20px;
}
.form-input {
  border-radius: 0;
}
</style>