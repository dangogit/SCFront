<template>
  <div class="player-preview">
    <div :title="id" class="player-title">
      <b>Player Fullname:</b> {{ fullname }}
    </div>
    <ul class="player-content">
      <li> Team name: {{ team_name }}</li>
      <li> Image: {{ image }}</li>
      <li> Position: {{ position }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PlayerPreview",
  props: {
      fullname: {
        type: String,
        required: true
      },
      team_name: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      position: {
        type: String,
        required: true
      }
  }, 
  mounted(){
    console.log("player preview mounted")
  } 
};
</script>

<style>
.player-preview {
  display: inline-block;
  width: 250px;
  height: 200px;
  position: relative;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:cadetblue;
}

.player-preview .player-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 197, 157);
}

.player-preview .player-content {
  width: 100%;
  overflow: hidden;
}



</style>
