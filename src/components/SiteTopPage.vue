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
  height 100%
</style>
