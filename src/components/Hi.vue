<template>
  <div class="hi">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <button class="btn btn-danger btn-lg"
            @click="showTop = !showTop">
      Click to toggle alert on top
    </button>
    <button class="btn btn-success btn-lg"
            @click="showRight = !showRight">
      Click to toggle alert on right
    </button>
    <hr>
    <div class="hih">
    <alert type="success">
      <strong>Well Done!</strong>
      You successfully read this important alert message.
    </alert>
    <alert type="info">
      <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
    </alert>
    <alert type="danger" dismissable>
      <strong>Oh snap!</strong> Change a few things up and try submitting again.
    </alert>
    <alert type="warning" dismissable>
      <strong>Warning!</strong> Better check yourself, you're not looking too good.
    </alert>

    <alert :show.sync="showRight" placement="top-right" duration="3000" type="success" width="400px" dismissable>
      <span class="icon-ok-circled alert-icon-float-left"></span>
      <strong>Well Done!</strong>
      <p>You successfully read this important alert message.</p>
    </alert>
    <alert :show.sync="showTop" placement="top" duration="3000" type="danger" width="400px" dismissable>
      <span class="icon-info-circled alert-icon-float-left"></span>
      <strong>Heads up!</strong>
      <p>This alert needs your attention.</p>
    </alert>
    </div>
  </div>
</template>

<script>
  import { alert } from 'vue-strap'

  export default {
    name: 'hi',
    components: {
      alert
    },
    data () {
      return {
        msg: 'Welcome Andy',
        showRight: false,
        showTop: false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hih {
    text-align: left;
  }
  .alert-icon-float-left {
    font-size:32px;
    float:left;
    margin-right:5px;
  }
</style>
