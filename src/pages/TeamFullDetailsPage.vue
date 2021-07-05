<template>
  <div class="team-full">
    <div v-if="!teamFound">
    Please enter the team id:
    <b-input-group prepend="Id:" id="search-input">
      <b-form-input v-model="searchQuery"></b-form-input>
      <b-input-group-append>
        <b-button variant="success" v-on:click="searchTeamById">Search</b-button>
      </b-input-group-append>
    </b-input-group>
    </div>
    
   <div v-if="this.teamFound">
    <h1 class="title">Team Page</h1>
    <TeamFullDetails :team_name="team_name"
        :team_logo="team_logo"
        :players="players"
        :past_games="past_games"
        :future_games="future_games" ></TeamFullDetails>
  </div>

    <div v-if="!this.teamFound && !this.searched">
      Team not found
</div>
  </div>
</template>  

<script>
import TeamFullDetails from "../components/TeamFullDetails";
export default {
  components: {
    TeamFullDetails, 
  },
  data(){
       this.teamFound = false;
       this.searched = true;
       this.team_name = "";
        this.team_logo = "";
        this.players = [];
        this.past_games = [];
        this.future_games = [];
  return {
      searchQuery:"",
      teamFound: false,
      searched: true
    };
  },
    methods: {
    async searchTeamById() {
      try {
        const response = await this.axios.get(
          `http://localhost:3000/teams/teamFullDetails/${this.searchQuery}`,
          {
  
          }
        );
        
        this.team_name = response.data.team_name;
        this.team_logo = response.data.team_logo;
        this.players = response.data.players;
        this.past_games = response.data.past_games;
        this.future_games = response.data.future_games;

        this.teamFound = true;
        this.searched = false;
      } catch (err) {
        this.teamFound = false;
        this.searched = false;
      }
    }
    },
    
};
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
</style>