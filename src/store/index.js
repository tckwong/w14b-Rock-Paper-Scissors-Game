import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playerChoice: "",
    computerChoice: "",
    playerScore: 0,
    computerScore: 0,
    drawScore: 0,
    computerPictureURL: "evilRobot.jpg",
    playerPictureURL: ""
    
  },
  mutations: {
    updateComputer(state, data) {
      state.computerChoice = data;
    },
    updatePlayer: function(state, data) {
      state.playerChoice = data;
    },
    updatePlayerWin(state) {
      state.playerScore++
    },
    updatecomputerWin(state) {
      state.computerScore++
    },
    updateDraw(state) {
      state.drawScore++
    },
    updateCompURL(state, payload) {
      state.computerPictureURL = payload;
    },
    updatePlayerURL(state, payload) {
      state.playerPictureURL = payload;
    }
  },
  actions: {
  },
  getters: {
  }
})
