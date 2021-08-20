<template>
    <div>
        <h1>Scoreboard</h1>
        <div>
            <h2>Player vs. Computer</h2>
            <p>Win:Lose:Tie</p>
            <p>{{ getPlayerScore }} : {{ getComputerScore }} : {{ getDrawScore }}</p>
            <h3>You chose: {{ getPlayerChoice }}</h3>
            <h3>Computer chose: {{ getComputerChoice }}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'GameScoreboard',
        data() {
            return {
                playerScore: 0,
                ComputerScore: 0
            }
        },
        computed: {
            getPlayerScore: function() {
                return this.$store.state.playerScore;
            },
            getComputerScore: function() {
                return this.$store.state.computerScore;
            },
            getDrawScore: function() {
                return this.$store.state.drawScore;
            },
            getPlayerChoice: function() {
                return this.$store.state.playerChoice;
            },
            getComputerChoice: function() {
                return this.$store.state.computerChoice;
            }
        },
        
        methods: {
            changeScoreBoard: function() {
                this.playerScore = this.getPlayerChoice;
            },
        
        },
        watch: {
            playerScore: function() {
                console.log("It ran!");
                this.changeScoreBoard();
            }
        }
        

    }
</script>

<style scoped>

</style>