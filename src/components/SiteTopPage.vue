<template>
<div class="top">
  <site-top-signboard></site-top-signboard>
</div>
</template>

<script>
import SiteTopSignboard from '../components/SiteTopSignboard'

export default {
  name: 'siteTopPage',
  components: {
    'SiteTopSignboard': SiteTopSignboard
  }
}
</script>

<style lang="stylus" scoped>
.top
  position relative
  width 100%
  max-width 1280px
  height 100%
  margin 0 auto
</style>
