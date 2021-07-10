<template>
  <div class="container">
      <h1>Favorite Players</h1>
      <div v-for="p in myFavoritePlayersArray" :key="(p.fullname,p.team_name)">
        <PlayersPreviewList
        :player_full_name="p.fullname"
        :player_impage="p.image_path"
        :position="p.position_name"
        :team_name="p.team_name"
        />
      </div>
        <br>
        <br>
        <h1>Favorite Games</h1>
      <div v-for="g in myFavoriteGamesArray" :key="(g.home_team_id,g.guest_team_id,g.game_date_time)">
        <PlayersPreviewList
        :game_date_time="g.game_date_time"
        :home_team_id="t.home_team_id"
        :guest_team_id="t.guest_team_id"
        :filed="t.field"
        />
      </div>
    
  </div>
</template>

<script>
import PlayersPreviewList from "../components/PlayersPreviewList";
import GamesPreviewList from "../components/GamesPreviewList";
export default {
  components: {
    PlayersPreviewList,
    GamesPreviewList
  },
  data(){
    return{
      myFavoritePlayersArray: [],
      myFavoriteGamesArray: []
    }
  },
  mounted() {
    this.getMyFavPlayers();
    this.getMyFavTeams();
  },
  methods: {
    async getMyFavPlayers() {
      try {
        const response = await this.axios.get(
          this.$root.store.baseURL+"/users/favoritePlayers"
        );
        const players = response.data;
        this.myFavoritePlayersArray = [];
        this.myFavoritePlayersArray.push(...players);
      } catch (error) {
        console.log(error);
      }
    },

    async getMyFavGames() {
      try {
        const response = await this.axios.get(
          this.$root.store.baseURL+"/users/favoriteGames"
        );
        const games = response.data;
        this.myFavoriteGamesArray = [];
        this.myFavoriteGamesArray.push(...games);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>

</style>