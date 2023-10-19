import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokeName, pokeHp, pokeImgFront, pokeImgBack}) {


  const [cardFront, setCardFront] = useState(true);

  function handleCardClick(){
    setCardFront(!cardFront)
  }

  return (
    <Card>
      <div onClick={handleCardClick}>
        <div className="image">

          {cardFront ? <img src={pokeImgFront} alt="oh no!" /> : <img  src={pokeImgBack} alt="oh no!" />}
          
        </div>
        <div className="content">
          <div className="header">{pokeName}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokeHp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
