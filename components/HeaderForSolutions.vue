<script setup></script>

<template>
  <div id="header" class="container-fluid fixed">
    <div class="innerzr">
      <div class="row">
        <div class="col-md-8 col-sm-12 right-menu">
          <div class="row g-0">
            <div class="col-md-5"><SocialLinks></SocialLinks></div>
            <div
              class="col-md-7 d-flex align-content-star justify-content-start"
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

<style scoped></style>
