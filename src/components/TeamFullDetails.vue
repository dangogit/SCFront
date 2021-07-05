<template>
  <div class="team-full">
    <div :title="id" class="team-title">
      <b>Team Name:</b> {{ team_name }}
    </div>
    <ul class="team-content">
      <li> Team Logo: {{ team_logo }}</li>
      <li> Players: {{ players }}</li>
      <li> Past Games: {{ past_games }}</li>
      <li> Future Games: {{ future_games }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TeamFullDetails",
  props: {
      team_name: {
        type: String,
        required: true
      },
      team_logo: {
        type: String,
        required: true
      },
      players: {
        type: Array,
        required: true
      },
      past_games: {
        type: Array,
        required: true
      },
      future_games: {
        type: Array,
        required: true
      }
  }, 
  mounted(){
    console.log("team full details mounted")
  } 
};
</script>

<style>
.team-full {
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

.team-full .team-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 197, 157);
}

.team-full .team-content {
  width: 100%;
  overflow: hidden;
}



</style>
