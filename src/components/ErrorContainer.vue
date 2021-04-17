<template>
  <div class="container">
    <slot>
      <div style="font-size: 20vh">
        {{ code }}
      </div>
      <div>
        {{ message }}
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    code: {
      type: Number,
      default: 500
    },
    message: {
      type: String,
      default: 'Terjadi kesalahan tak terduga'
    }
  }
}
</script>

<style>
  .container {
    color: whitesmoke;
    text-shadow: 0px 0px 10px blue;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    background: linear-gradient(270deg ,#005c97,#add2f7);
  }
</style>
