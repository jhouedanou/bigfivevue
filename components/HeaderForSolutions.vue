<script setup></script>

<template>
  <div id="header" class="container-fluid">
    <div class="innerzr">
      <div class="row">
        <div class="col-md-8 col-sm-12 right-menu">
          <div class="row g-0">
            <div class="col-md-4"><SocialLinks></SocialLinks></div>
            <div
              id="dahico"
              class="col-md-8 d-flex align-content-start align-items-start justify-content-start"
            >
              <Menu />
            </div>
          </div>
        </div>
        <div
          class="col-md-4 col-sm-12 d-flex align-content-end justify-content-end"
        >
          <Logo :id="2" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#dahico {
  #menuhomepage {
    #menulinks {
      padding-left: 0px !important;
    }
  }
}
</style>
