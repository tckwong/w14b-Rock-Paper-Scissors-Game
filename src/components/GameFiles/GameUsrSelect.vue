<template>
    <div>
        <h1>Player</h1>
        <button @click="playerChoice='Rock';getPlayerChoice();getComputerChoice();loopDecisions()"><img class="rpsImages" src="@/assets/rock.png" alt="rock Choice"></button>
        <button @click="playerChoice='Paper';getPlayerChoice();getComputerChoice();loopDecisions()"><img class="rpsImages" src="@/assets/paper.png" alt="paper Choice"></button>
        <button @click="playerChoice='Scissors';getPlayerChoice();getComputerChoice();loopDecisions()"><img class="rpsImages" src="@/assets/scissors.png" alt="scissors Choice"></button>
        <img id="pAvatar" :src="require('@/assets/' + playerPicture)"/>
    </div>
</template>

<script>
    export default {
        name : 'GameUsrSelect',
        data:() => {
            return {
                playerChoice: "",
                computerChoice: "",
                randomNum: "",
                playerPicture: "avatar.png",
                decisions: [
                    {   
                        id: 0,
                        decisionName: "Rock",
                        beats: "Scissors",
                        compDecision: "",
                        picture: "rock.png"
                    },
                     {  
                        id: 1,
                        decisionName: "Paper",
                        beats: "Rock",
                        compDecision: "",
                        picture: "paper.png"
                    },
                     {  
                        id: 2,
                        decisionName: "Scissors",
                        beats: "Paper",
                        compDecision: "",
                        picture: "scissors.png"
                    },
                ]
            }
        },
        computed: {
            getState: function() {
                return this.$store.state.playerChoice;
            },
            GetNewState: function() {
                return this.$store.state.stateChange;
            },
        },
        methods: {
            getPlayerChoice: function() {
                this.$store.commit('updatePlayer', this.playerChoice);
                let userSelection = this.decisions.find(sel => sel.decisionName == this.playerChoice);
                this.playerPicture = userSelection.picture;
            },
            getComputerChoice: function() {
                var randomCompChc = Math.floor(Math.random() *3);
                this.randomNum = randomCompChc;
                this.computerChoice = this.decisions[randomCompChc].decisionName;
                this.$store.commit('updateComputer', this.computerChoice)
                this.$store.commit('updateCompURL', this.decisions[randomCompChc].picture);
                
                for (let i=0; i<this.decisions.length; i++){
                    this.decisions[i].compDecision = this.computerChoice;
                    console.log(this.decisions[i].compDecision)
                }
                return this.decisions[randomCompChc].decisionName;
            },

            loopDecisions: function() {
                let userSelection = this.decisions.find(sel => sel.decisionName == this.playerChoice);
                let pcSelection = this.decisions[this.randomNum];
                this.decideWinner(userSelection, pcSelection);
            },

            decideWinner(selection, pcSelect) {
                let playerWinner = this.isWinner(selection, pcSelect);
                let computerWinner = this.isWinner(pcSelect, selection);
                this.updateScoreboard(playerWinner, computerWinner);
            },

            isWinner: function(myselect, computerSelect){
                return myselect.beats == computerSelect.decisionName; 
            },
            updateScoreboard: function(pWin, cWin){
                if(pWin) {
                    this.$store.commit('updatePlayerWin');
                }else if(cWin) {
                    this.$store.commit('updatecomputerWin');
                }else {
                    this.$store.commit('updateDraw');
                }
    
            }
        },
    }
</script>

<style scoped>
    .rpsImages {
        width: 100%;
        height: 10vh;
    }
    #pAvatar {
        margin-top: 20px;
        max-width: 80%;
    }
    button {
        margin-left: 5px;
    }
</style>