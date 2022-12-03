<template>
  <div>
    <CButton @alert='alertMessage'></CButton>
  </div>
</template>

<script>
import CButton from '@/components/CButton.vue'

export default {
  name: 'ButtonView',
  components: {
    CButton
  },
  methods: {
    alertMessage() {
      window.alert('これはテストです！')
    }
  }
}
</script>