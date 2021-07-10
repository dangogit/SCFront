<template>
  <div>
      
    <div v-for="g in pastGames" :key="g.id">
        <GamePreview 
        :hostTeam="g.home_team_name"
        :guestTeam="g.guest_team_name"
        :date="g.date_time"
        />
    </div>
    <br>
    <div v-for="g in futureGames" :key="g.id">
        <GamePreview 
        :hostTeam="g.home_team_name"
        :guestTeam="g.guest_team_name"
        :date="g.date_time"
        
        />
    </div>
  </div>
</template>

<!--:socerField="g.socer_field" -->
<!--:gameResult="g.game_result" -->
<!--:events="g.events" -->

<script>
import GamePreview from "../components/GamePreview";
export default {
  components: {
    GamePreview,
  },
  data() {
      return {
        pastGames: [],
        futureGames: [],
      } 
  },
  methods: {
    async getAllGames() {
        try{
            const response = await this.axios.get("http://localhost:3000/games/currentCycleGames");
            const past_games = response.data.past_games;
            const future_games = response.data.future_games;
            this.pastGames = [];
            this.futureGames = [];
            this.pastGames.push(...past_games);
            this.future_games.push(...future_games);
        }catch (error) {
        console.log(error);
      }
        
    },
  },
  mounted() {
    this.getAllGames();
  },
};
</script>
