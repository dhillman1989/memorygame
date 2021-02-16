import React, { Component } from "react";

import Cards from "./Cards";

class GameBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      best: 0,
      cardDeck: [
        { id: "1", text: "1" },
        { id: "2", text: "2" },
        { id: "3", text: "3" },
        { id: "4", text: "4" },
        { id: "5", text: "5" },
        { id: "6", text: "6" },
        { id: "7", text: "7" },
        { id: "8", text: "8" },
      ],
      dealtCards: [],
      usedCards: [],
    };

    this.dealCards = (num) => {
      const deck = [...this.state.cardDeck];
      let myCards = [];
      for (let i = 0; i < num; i++) {
        let randNum = Math.floor(Math.random() * deck.length);
        let card = deck[randNum];
        if (myCards.some((c) => c.id == card.id)) {
          i--;
        } else {
          myCards.push(card);
        }
      }
      this.setState({ dealtCards: [...myCards] });
    };

    this.increaseScore = () => {
      this.setState({ score: this.state.score + 1 });
      if (this.state.score > this.state.best) {
        this.setState({ best: this.state.score });
      }
    };

    this.shuffleCards = () => {
      let shuffledCards = [];
      for (let i = 0; i < this.state.dealtCards.length; i++) {
        let randNum = Math.floor(Math.random() * this.state.dealtCards.length);
        let card = this.state.dealtCards[randNum];
        if (shuffledCards.some((c) => c.id == card.id)) {
          i--;
        } else {
          shuffledCards.push(card);
        }
      }
      this.setState({ dealtCards: [...shuffledCards] });
    };

    this.resetGame = () => {
      this.setState({ score: 0, usedCards: [] });
    };

    this.cardSelect = (id) => {
      if (this.state.usedCards.some((used) => used == id)) {
        this.resetGame();
      } else {
        this.setState({ usedCards: [...this.state.usedCards, id] });
        this.increaseScore();
        this.shuffleCards();
      }
    };
  }

  componentDidMount = () => {
    console.log("didMount");
    this.dealCards(8);
  };

  render() {
    return (
      <div>
        <h1>GAMEBOARD</h1>
        <Cards cards={this.state.dealtCards} cardSelect={this.cardSelect} />
      </div>
    );
  }
}
export default GameBoard;
