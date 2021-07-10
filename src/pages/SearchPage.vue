<template>
  <div>
    <h1 class="title">Search Page</h1>
    <b-input-group prepend="Search Query:" id="search-input">
      <b-form-input v-model="searchQuery"></b-form-input>
      <b-input-group-append>
        <b-button variant="success" @click="search">Search</b-button>
         <b-button variant="success" @click="sortPlayersNamesByAlphabeth">filter</b-button>
      </b-input-group-append>
    </b-input-group>
    <br />
    Your search Query: {{ searchQuery }}
    
    <!-- <div v-if="hasResults">
      <div v-for="p in searchPlayersArray" :key="p.image_path">
        <PlayerPreview 
          :full_name="p.first_name"
          :team_name="p.team_name"
          :image="p.image_path"
          :position="p.position_name"
        />
    </div>   -->
    <div v-if="!hasResults">
      <h1>No relevant results found</h1>
    </div>
    <div v-if="hasResults">
      <div v-for="p in searchPlayersArray" :key="p.image_path">
        <PlayerPreview 
          :full_name="p.first_name"
          :team_name="p.team_name"
          :image="p.image_path"
          :position="p.position_name"
        />
      </div>  

    </div>
  </div>
</template>

<script>
import PlayerPreview from "../components/PlayerPreview";
export default {
  components: {
    PlayerPreview, 
  },
  data() {
    return {
      searchQuery: "",
      searchTeamsArray: [],
      searchPlayersArray: [],
      hasResults: true,
      lastPlayerSearch:[],
      lastTeamSearch:[],
    };
  },
  mounted() {
    this.showLastSearch();
  },
  methods: {
    async search() {
      try {
        this.hasResults = true;
        //SearchTeamByName
        // const responseTeam = await this.axios.get(
        //   'https://localhost:3000/teams/SearchTeamByName/${this.searchQuery}`
        // );
        // const resultTeamByName = responseTeam.data;
        // this.searchTeamsArray = [];

        //SearchTeamByName
        const responsePlayer = await this.axios.get(
          `http://localhost:3000/players/SearchPlayerByName/${this.searchQuery}`,{
        });
        const resultPlayerByName = responsePlayer.data;
        this.searchPlayersArray = [];
        //console.log("get players");

        //there is no search results
        // if (resultTeamByName.length==0 && resultPlayerByName.length==0) {
        if (resultPlayerByName.length==0){
          this.hasResults = false;
        } else {
          // this.searchTeamsArray.push(...resultTeamByName);
          this.searchPlayersArray.push(...resultPlayerByName);
          console.log(this.searchPlayersArray);
          if (this.$root.store.username) {
            // this.$root.store.lastTeamsSearch = this.searchTeamsArray;
            this.$root.store.lastPlayersSearch = this.searchPlayersArray;
          }
        }
      } catch (error) {
        console.log(error);
      }
    },

    async showLastSearch(){
      //this.lastTeamSearch.push(...this.searchTeamsArray);
      this.lastPlayerSearch.push(...this.searchPlayersArray);
    },

    async sortPlayersNamesByAlphabeth(){
        this.searchPlayersArray.sort(function(player1, player2) {
        // let full_name_p1 = player1.first_name + " " +player1.last_name; //check last name
        // let full_name_p2 = player2.first_name + " " +player2.last_name; // check last name 
        // return player1.full_name_p1 - player2.full_name_p2;//change to full name
         return player1.first_name - player2.first_name;//change to full name
      });
    },

    async sortPlayersTeamNameByAlphabeth(){
        this.searchPlayersArray.sort(function(player1, player2) {
        return player1.team_name - player2.team_name;
      });
    }
  },

};
</script>

<style scoped>
#search-input {
  margin-left: 20px;
  width: 500px;
}
</style>
