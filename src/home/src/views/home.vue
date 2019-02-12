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
import { Header as AppHeader} from '../components/Header'
import { Footer as AppFooter } from '../components/Footer'

export default {
  name: 'Home',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
