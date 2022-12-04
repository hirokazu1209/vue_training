<template>
  <div>
    <CModalButton @modal="openModal">モーダルを表示</CModalButton>
    <CModal v-show="isModalActive"/>
  </div>
</template>

<script>
import CModalButton from '@/components/CModalButton.vue'
import CModal from '@/components/CModal.vue'

export default {
  components: {
    CModalButton,
    CModal
  },
  data: function() {
  return {
    isModalActive: false
  };
},
  methods: {
    openModal() {
      this.isModalActive = true
    }
  }
}
</script>