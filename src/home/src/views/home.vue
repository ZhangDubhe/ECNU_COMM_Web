<template>
  <div class="app">
    <AppHeader/>
    <div class="app-body">
      <main class="main">
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside/>
    </div>
    <AppFooter/>
  </div>
</template>
<script>
import {Header as AppHeader, Footer as AppFooter} from '../components/'

export default {
  name: 'Home',
  components: {
    AppHeader
  }
}
</script>
