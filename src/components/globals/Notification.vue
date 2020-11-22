<template>
  <div class="alert" :class="[severity, position]">
    <div class="content">
      <div class ="icon">
        <span class="fa" :class="[`fa-${icon}`]"></span>
      </div>
      <div class="message">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: 'top-right',
      validator: function (value) {
        return [
          'top', 
          'top-right',
          'top-left',
          'bottom',
          'bottom-right',
          'bottom-left'
        ].indexOf(value) !== -1
      }
    },
    message: {
      type: String,
      required: true
    },
    severity: {
      type: String,
      required: true,
      validator: function (value) {
        return ['success', 'warning', 'error', 'info'].indexOf(value) !== -1
      }
    }
  },
  data() {
    return {
      visible: false
    }
  },
  computed: {
    icon() {
      let icon = ''
      switch (this.severity) {
        case 'success': 
          icon = 'check-circle'
          break
        case 'warning': 
          icon = 'question-circle'
          break
        case 'error': 
          icon = 'exclamation-circle'
          break
        case 'info': 
          icon = 'info-circle'
          break
      }
      return icon
    }
  }
}
</script>

<style scoped>
.alert {
  color: #fff;
  border-radius: 5px;
  min-width: 300px;
  box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 8px 2px rgba(0,0,0,.12);
}

.content {
  padding: 10px;
  display: flex;
  text-align: left;
}

.content > .icon {
  flex: 1
}

.content > .message {
  flex: 9
}

.top-right {
  position: absolute;
  top: 20px;
  right: 10px;
  z-index: 99999;
}

.top-left {
  position: absolute;
  top: 20px;
  left: 10px;
  z-index: 99999;
}

.top {
  position: absolute;
  top: 20px;
  margin: 0 auto;
  z-index: 99999;
}

.alert.success {
  background: #4caf50;
  border: 1px solid #087f23;
}

.alert.warning {
  background: #ff9800;
  border: 1px solid #ff9800;
}

.alert.error {
  background: #f44336;
  border: 1px solid #ba000d;
}

.alert.info {
  background: #2196f3;
  border: 1px solid #0069c0;
}

.message {
  font-size: .9rem;
}
</style>