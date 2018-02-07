<template>
  <div class="top-signboard shadow-normal">
    <ul class="tile">
      <li class="tile-card-unit shadow-normal"></li>
      <li class="tile-card-unit shadow-normal"></li>
      <li class="tile-card-unit shadow-normal"></li>
      <li class="tile-card-unit shadow-normal"></li>
      <li class="tile-card-unit shadow-normal"></li>
      <li class="tile-card-unit shadow-normal"></li>
      <li class="tile-card-unit shadow-normal"></li>
      <li class="tile-card-unit shadow-normal"></li>
      <li class="tile-card-unit shadow-normal"></li>
      <li class="tile-card-unit shadow-normal"></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'siteTopSignboard',
  created () {
    this.cardAlignSet()
  },
  methods: {
    cardAlignSet: function () {
      const tile = document.getElementsByClassName('tile')
      for (var i = 0; i < tile.length; i++) {
        tile.insertAdjacentHTML('afterend', '<li class="tile-card-unit shadow-normal is-empty"></li>')
      }
    }
  }
}
</script>

<style lang="stylus">
.top-signboard
  overflow-y scroll
  position absolute
  top 0
  right 0
  bottom 0
  left 0
  width 80%
  max-width 1200px
  height 80%
  max-height 700px
  margin auto
  padding 2%
  box-sizing border-box
  border-radius 20px
  background-color #f5f5f5
  .tile
    display flex
    flex-flow row wrap
    justify-content center
    &-card-unit
      width 220px
      height 220px
      margin 10px
      border-radius 10px
      &.is-empty
        height 0
        padding-top 0
        padding-bottom 0
        margin-top 0
        margin-bottom 0
</style>
