<template>
  <div id="header-alt" ref="headerAlt" class="container-fluid fixed">
    <div class="innerzr">
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <Logo :id="3" />
        </div>
        <div class="col-md-8 col-sm-12 right-menu">
          <div class="row g-0">
            <div class="col-md-7"><MenuAlt /></div>
            <div class="col-md-5"><SocialLinksAltIn></SocialLinksAltIn></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.shadowy {
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.1);
}
.sticky-menu {
  position: sticky;
  top: 0;
  background-color: #41b883;
  padding: 1rem;
}
</style>
