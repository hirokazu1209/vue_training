<template>
  <div>
    <CModal />
  </div>
</template>

<script>
import CModal from '@/components/CModal.vue'

export default {
  components: {
    CModal
  },
  data: function() {
  return {
    isModalActive: false
  };
}
}
</script>