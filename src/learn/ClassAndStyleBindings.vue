<template>
  <div>
    <!-- the presence of the active class will be determined by the truthiness of the data property isActive-->
    <div class="static" :class="classObject"></div>
    <!--Binding to Arrays-->
    <div :class="[activeClass, errorClass]"></div>
    <div :class="[isActive ? activeClass : '', errorClass]"></div>
    <div :class="[{ active: isActive }, errorClass]"></div>
    <p :class="$attrs.class">Hi!</p>
    <div :style="{color: activeColor, fontSize: fontSize + 'px'}"></div>
    <div :style="{ 'font-size': fontSize + 'px' }"></div>
    <div :style="styleObject"></div>
    <div :style="[baseStyles, overridingStyles]"></div>
    <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classObject1: {
        active: true,
        "text-danger": false,
      },
      isActive: true,
      error: null,
      activeClass: "active",
      errorClass: "text-danger",
      activeColor: 'red',
      fontSize: 30,
      styleObject: {
        color: 'red',
        fontSize: '13px'
      }
    };
  },
  computed: {
    classObject() {
      return {
        active: this.isActive && !this.error,
        "text-danger": this.error && this.error.type == "fatal",
      };
    },
  },
};
</script>

<style></style>
