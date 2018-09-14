<template>
  <div id="app">
    <!-- <vue-particles
        color="#ffffff"
        :particleOpacity="0.7"
        :particlesNumber="40"
        shapeType="circle"
        :particleSize="4"
        linesColor="#ffffff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="120"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
    </vue-particles> -->
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
body {
	margin: 0px;
	padding: 0px;
	/* background: url(assets/loginback.jpg) center !important; */
	background-size: cover;
  /* overflow: hidden; */
  background:#ffffff;
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: arial,'pingfang sc',stheiti,simsun,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  top: 0px;
	bottom: 0px;
}
/* .login {
  position: absolute;
  top: 0;
  left: 40%;
} */
</style>
