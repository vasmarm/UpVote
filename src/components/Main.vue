<template>
    <div>
      <div class="combine" v-for="group in allUpVotes" :key="group.id" >
          <div class="groupContainer" >
            <div v-for="element in group.votesCount" :key="element">
              <UpVote v-bind:id="group.id" :selected="group.selected" :upVoteClick="handleUpVoteClick"/>
            </div>
          </div>
          <button class="addContainer" @click="handleAddVoteClick(group.id)">
        <img src="../assets/add-filled.svg" alt="add"/>
      </button>
      </div>
    </div>
</template>

<script>
import UpVote from './UpVote.vue'
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "Main",
  computed: mapGetters(['allUpVotes']),
  created() {
    console.log(this.allUpVotes);
  },
  props: {
      
  },
  components: {
    UpVote,
  },
  methods: {
      ...mapActions(['addUpVote', 'toggleUpVote']),
      handleAddVoteClick(id) {
          this.addUpVote(id);
      },
      handleUpVoteClick(id) {
        this.toggleUpVote(id);
      }
  }
};
</script>

<style>
.combine {
  display: flex; 
  flex-grow: grow;
}
.groupContainer {
  overflow: auto;
  display: flex;
  justify-content: start;
  min-width: 1020px;
  max-height: 75px;
  background: rgb(252, 250, 250);
  border: 4px solid rgb(209, 203, 203);
  border-radius: 15px;
  margin-bottom: 15px;
}
.addContainer {
  max-height: 50px;
  background: rgb(248, 248, 252);
  border: 2px solid rgb(209, 203, 203);
  border-radius: 15px;
  padding: 10px;
  margin-top: 15px;
  margin-left: 100px; 
  cursor: pointer;
}
</style>
