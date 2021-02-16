import React, { Component } from "react";
import "../styles/cards.scss";

class Cards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cards } = this.props;
    return (
      <div class="cards">
        {cards.map((card) => (
          <div
            class="cards__card"
            onClick={() => {
              this.props.cardSelect(card.id);
            }}
          >
            {card.text}
          </div>
        ))}
      </div>
    );
  }
}

export default Cards;
