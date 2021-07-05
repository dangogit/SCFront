<template>
    <div class="league-preview">
      <b-card
      img-alt="Image"
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-title>{{league_name}}</b-card-title>
      <b-card-text>
        Season: {{ current_season_name }}
        <br/>
        Stage: {{ current_stage_name }}
        <br/>   
          <GamePreview
            :hostTeam="game_details.home_team_name" 
            :guestTeam="game_details.guest_team_name" 
            :date="game_details.date_time" 
            >
          </GamePreview>
      </b-card-text>
      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>

import GamePreview from "./GamePreview.vue";
export default {
name : "LeagueInfo",
  components: {
    GamePreview,
  },
 data() {
    return {
      league_name: "superliga", 
      current_season_name: "season", 
      current_stage_name: "stage",
      game_details: {}
    };
  },
    methods: {
    async getDetails() {
      try {
        const response = await this.axios.get(
          `http://localhost:3000/league/getDetails`
        );
        this.league_name = response.data.league_name;
        this.current_season_name = response.data.current_season_name;
        this.current_stage_name = response.data.current_stage_name;
        let game_data = response.data.game_details[0];
        console.log(game_data)
        let home_team_details = await this.axios.get(
          `http://localhost:3000/teams/${game_data.home_team_id}`,
          {}
          );
        let guest_team_details = await this.axios.get(
          `http://localhost:3000/teams/${game_data.guest_team_id}`,
          {}
          );
        this.game_details = {
          date_time: game_data.game_date_time,
          home_team_name: home_team_details.data.team_name,
          guest_team_name: guest_team_details.data.team_name,
          }
      } catch (err) {
        console.log(err.response);
      }
    },
  },
    mounted(){
    console.log("league details");
    this.getDetails(); 
  }
}
</script>

<style>
.league-preview {
  display: inline-block;
  width: 250px;
  height: 200px;
  position: relative;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:rgb(44, 89, 116);
}

.league-preview .league-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 155, 197);
}

.league-preview .league-content {
  width: 100%;
  overflow: hidden;
}

</style>