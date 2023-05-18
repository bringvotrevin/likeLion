import React from 'react';
import Game from './Game';

export default function GameList() {
  const gameList = ['one', 'two', 'three'];
  return (
    <ul>
      {gameList.map((game) => {
        return <Game gameName={game} />;
      })}
    </ul>
  );
}
