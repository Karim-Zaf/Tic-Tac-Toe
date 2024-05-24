import Image from "next/image";
"use client";
import Game from "./Components/Game";
import { useState } from "react";

export default function Home() {
  var [empty, setEmpty] = useState(0);
  var [gameState, setGameState] = useState("");

  return (
    <div className="flex items-center justify-center flex-col w-screen h-screen">
      
      <h1 className="font-bold text-4xl">Tic Tac Toe with Karim</h1>
      <Game clean = {empty} setClean={setEmpty} gameState={gameState} setGameState = {setGameState}/> 
      <button className="w-[200px] h-[80px] bg-fuchsia-900 rounded-md text-3xl font-bold text-fuchsia-100" 
          onClick={()=>{setEmpty(1); setGameState("");}}>Reset</button>
      
      <h1 className="font-bold text-5xl mt-5 w-[800px] h-[80px] flex items-center justify-center">{
        gameState==='' ? '': gameState==="D" ? 'DRAW !' : gameState === 'X' ? 
          <div className="flex gap-3">Player <h1 className="text-red-500"> X </h1>Wins !</div> : 
          <div className="flex gap-3">Player <h1 className="text-green-500"> O </h1>Wins !</div>
      }</h1>

      <h1 className='absolute bottom-5 right-5 text-gray-300'>&copy; Made by Karim Zaafrani</h1>

    </div>

  );
}
