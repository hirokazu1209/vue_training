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

    <div class="form-input">
      <input type="checkbox" v-model="checkBox" value="スペイン">
      <input type="checkbox" v-model="checkBox" value="ドイツ">
      <input type="checkbox" v-model="checkBox" value="日本">
      <p>{{ checkBox }}</p>
    </div>

    <div class=“form-input”>
      <input type="radio" v-model="radioValue" value="フランス">フランス
      <input type="radio" v-model="radioValue" value="モロッコ">モロッコ
      <input type="radio" v-model="radioValue" value="イングランド">イングランド
      <p>{{ radioValue }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        textInput: '',
        textAreaInput: '',
        checkBox: [],
        radioValue: 'フランス'
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