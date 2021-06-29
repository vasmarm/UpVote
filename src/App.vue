<template>
<div>
  <div class="heading">
    <h1> UpVote </h1>
  </div>
  <div class="topContainer">
    <div class="outerContainer">
      <div class="mainContainer">
        <Main />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Main from './components/Main.vue'
export default {
  name: 'App',
  components: {
    Main,
  }
}
</script>
<style>
* {
  box-sizing: border-box;
}
body {
  font-family: 'Poppins', sans-serif;
}
.heading {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
}
.topContainer {
  display: flex;
  justify-content: center;
}
.outerContainer {
  justify-content: center;
  max-width: 800px;
  margin: 30 px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid gray;
  background: gray;
}
.mainContainer {
  background: white;
  margin: 3px auto;
  min-height: 300px;
  border: 4px solid gray;
  border-radius: 15px;
  padding: 10px;
}

.btn {
  display: inline-block;
  background: black;
  color: aliceblue;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
</style>
