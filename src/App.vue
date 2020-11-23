<template>
  <Notification 
    v-if="notification.isVisible"
    :message="notification.message"
    :severity="notification.severity"
    :position="notification.position"
  />
  <Loader />
  <div id="nav">
    <router-link to="/">Todo</router-link> |
    <router-link to="/done">Done</router-link>
  </div>
  <router-view />
</template>

<script>
import { mapState } from 'vuex'
import Loader from './components/globals/Loader'
import Notification from './components/globals/Notification'

export default {
  components: {
    Loader,
    Notification
  },
  computed: {
    ...mapState(['notification'])
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
