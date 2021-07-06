<template>
  <div class="team-full">
    <div :title="id" class="team-title">
      <b>Team Name:</b> {{ team_name }}
    </div>
      <img width="100" height="150" :src="team_logo">
      <div class="players">
       <h2>Players</h2>   
      <PlayerPreview v-for="player in players" 
                  :key="player.id"
                  :fullname="player.fullname"
                  :team_name="player.team_name"
                  :image="player.image"
                  :position="player.position"></PlayerPreview>
          </div>
      <div  class="futureGames">
          <h2>Future Games</h2>  
          <GamePreview v-for="g in future_games"
            :hostTeam="g.hostTeam" 
            :guestTeam="g.guestTeam" 
            :date="g.date" 
            :hour="g.hour" 
            :key="g.id"></GamePreview>
          <p v-if="future_games.length==0">There are no future games to show</p>
      </div>
      <div class="pastGames">
          <h2>Past Games</h2>
          <GamePreview v-for="g in past_games"             
          :hostTeam="g.hostTeam" 
            :guestTeam="g.guestTeam" 
            :date="g.date" 
            :hour="g.hour" 
            :key="g.id"></GamePreview>
          <p v-if="past_games.length==0">There are no past games to show</p>
      </div>
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
