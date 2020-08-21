<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col sm="6" offset-sm="3">
          <Calculator/>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
import Calculator from './components/Calculator.vue'


export default {
  name: 'App',
  components: {
    Calculator
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
