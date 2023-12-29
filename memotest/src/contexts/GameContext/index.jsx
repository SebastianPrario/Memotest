import React, { createContext, useState } from 'react';


const GameContext = createContext(null);

// eslint-disable-next-line react/prop-types
function GameProvider({ children }) {
   
  const [ cardsArray, setCardsArray ] = useState(null);


  return (
    <GameContext.Provider
      value={{
        cardsArray,
        setCardsArray,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export { GameContext };
export default GameProvider;
