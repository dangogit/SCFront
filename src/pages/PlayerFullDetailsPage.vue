
<template>
  <div class="player-full">
    <div v-if="!playerFound">
    Please enter the player id:
    <b-input-group prepend="Id:" id="search-input">
      <b-form-input v-model="searchQuery"></b-form-input>
      <b-input-group-append>
        <b-button variant="success" v-on:click="searchPlayerById">Search</b-button>
      </b-input-group-append>
    </b-input-group>
    </div>

    <div v-if="this.playerFound">
    <h1 >Player Page</h1>
    <PlayerPreview :fullname="fullname"
                  :team_name="team_name"
                  :image="image"
                  :position="position"
    ></PlayerPreview>
    <PlayerFullDetails :commonName="commonName" 
                        :nationality="nationality"
                        :birthdate="birthdate"
                        :birthCountry="birthCountry"
                        :height="height"
                        :weight="weight"
                        > </PlayerFullDetails>
  </div>

      <div v-if="!this.playerFound && !this.searched">
      Player not found
</div>
  </div>
</template>

<script>
import PlayerPreview from "../components/PlayerPreview";
import PlayerFullDetails from "../components/PlayerFullDetails";
export default {
  components: {
    PlayerPreview, 
    PlayerFullDetails, 
  },
  data(){
       this.playerFound = false;
       this.searched = true;
        this.full_name = "";
        this.team_name = "";
        this.image = "";
        this.position = "";
        this.commonName = "";
        this.nationality = "";
        this.birthdate = "";
        this.birthCountry = "";
        this.height = "";
        this.weight = "";
  return {
      searchQuery:"",
      teamFound: false,
      searched: true
    };
  },
  methods: {
    async searchPlayerById() {
      try {
        const response = await this.axios.get(
          `http://localhost:3000/players/playerFullDetails/${this.searchQuery}`,{
        });
        
        this.full_name = response.data.full_name;
        this.team_name = response.data.team_name;
        this.image = response.data.image;
        this.position = response.data.position;
        this.commonName = response.data.commonName;
        this.nationality = response.data.nationality;
        this.birthdate = response.data.birthdate;
        this.birthCountry = response.data.birthCountry;
        this.height = response.data.height;
        this.weight = response.data.weight;

        this.playerFound = true;
        this.searched = false;
      } catch (err) {
        this.playerFound = false;
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