import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokeCard }) {

  const { name, hp, sprites } = pokeCard
  
  const [isFront, setIsFront] = useState(true)

  function handleOnClick() {
    setIsFront(isFront => !isFront)
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img onClick={handleOnClick} src={isFront ? sprites.front : sprites.back} alt={name + ' image'} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
