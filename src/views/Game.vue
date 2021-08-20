<template>
  <main>
    <div id="gridWrapper">
      <GameUsrSelect/>
      <GameScoreboard/>
      <GameCompSelect/>
    </div>
  </main>
</template>

<script>
  import GameUsrSelect from '@/components/GameFiles/GameUsrSelect.vue'
  import GameScoreboard from '@/components/GameFiles/GameScoreboard.vue'
  import GameCompSelect from '@/components/GameFiles/GameCompSelect.vue'
  
  export default {
    name: 'Game',
    components: {
      GameUsrSelect,
      GameScoreboard,
      GameCompSelect
    }
  }
</script>

<style scoped>
  main {
    margin-left: 10vw;
    margin-right: 10vw;
  }
  #gridWrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
</style>