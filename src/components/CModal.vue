<template>
  <div>
    <CModalButton @modal="modalOpen" />
    <div id="overlay" v-show="isModalActive">
      <div id="modal-content">
        <p>これがモーダルウィンドウです！</p>
        <!-- TODO:isModalActiveの変数化 -->
        <a class="modal-close" @click="(isModalActive = false)">モーダルを閉じる</a>
      </div>
    </div>
  </div>
</template>

<script>
import CModalButton from '@/components/CModalButton.vue'

export default {
  components: {
    CModalButton
  },
  data() {
    return {
      isModalActive: false,
    }
  },
  methods: {
    modalOpen() {
      this.isModalActive = true
    }
  }
}

</script>

<style>
#modal-content {
  z-index:10;
  width:50%;
  padding: 10em;
  background:#fff;
  border-radius: 20px;
}
#overlay {
  /*要素を重ねた時の順番*/
  z-index:1;

  /*画面全体を覆う設定*/
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);

  /*画面の中央に要素を表示させる設定*/
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-close {
  display: inline-block;
  padding: 10px 30px;
  margin: 10px;
  background: #F15B55;
  color: #FFF;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
}
</style>
