<template>
  <div
    @click="handleUpVoteClick(id)"
    :style="getBackgroundColor()"
    class="upContainer"
  >
    <img v-if="selected" src="../assets/Arrow+Tail-Up-Blue.svg" alt="upVote" />
    <img v-else src="../assets/Arrow+Tail-Up.svg" alt="upVote" />
  </div>
</template>

<script>
export default {
  name: 'UpVote',
  props: {
    id: Number,
    upVoteClick: Function,
    selected: Boolean
  },
  methods: {
    handleUpVoteClick(id) {
      this.upVoteClick(id);
    },
    getImg() {
      if (this.selected) {
        return '../assets/Arrow+Tail-Up-Blue.svg';
      }
      return '../assets/Arrow+Tail-Up.svg';
    },
    getBackgroundColor() {
      if (this.selected) {
        return { background: '#E5E8FD' };
      }
      return { background: '#F4F6F8' };
    }
  }
};
</script>
<style scoped>
.upContainer {
  height: 45px;
  width: 45px;
  display: flex;
  justify-content: center;
  background: #f4f6f8;
  border-radius: 15px;
  margin: 10px;
  cursor: pointer;
}
</style>