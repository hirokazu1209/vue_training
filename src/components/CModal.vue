<template>
  <div id="overlay">
    <div id="modal-content">
      <p>これがモーダルウィンドウです！</p>
    </div>
  </div>
</template>

<script>

</script>

<style>
#modal-content{
  z-index:10;
  width:50%;
  padding: 10em;
  background:#fff;
  border-radius: 20px;
}
#overlay{
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

  .p {
    padding: -20px;
  }
}
</style>
