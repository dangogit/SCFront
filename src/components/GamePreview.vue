<template>
  <div class="game-preview">
    <div :title="id" class="game-title">
      <b>Next game:</b>
    </div>
    <ul class="game-content">
      <li> host: {{ hostTeam }}</li>
      <li> guest: {{ guestTeam }}</li>
      <li> date: {{ date }}</li>
     <!-- <li> time: {{ hour }}</li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "GamePreview",
  props: {
      hostTeam: {
        type: String,
        required: true
      },
      guestTeam: {
        type: String,
        required: true
      },
      date: {
        type: String,
        required: true
      },
  },
  
  mounted(){
    console.log("game preview mounted")
  } 
};
</script>

<style>
.game-preview {
  width: 250px;
  height: 100px;
}

.game-preview .game-title {
  text-align: left;
  text-transform: uppercase;
  color:  #42b983;
}

.game-preview .game-content {
  width: 100%;
  overflow: hidden;
}



</style>
