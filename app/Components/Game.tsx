import React, { useEffect } from 'react';


export default function Game(props:{clean: number, setClean: any, gameState: string, setGameState: any}) {

  var numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  var cont: string[] = ['', '', '', '', '', '', '', '', ''];

  var [turn, setTurn] = React.useState('X');
  var [content, setContent] = React.useState(cont);


  var winning_states = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winning_states.map((item: any) => {
    if (content[item[0]] === content[item[1]] && content[item[1]] === content[item[2]] && content[item[0]] !== '') {
      props.setGameState(content[item[0]]); 
    }
  })

  useEffect(() => {
      setContent(cont);
      props.setClean(0) ;
      props.setGameState('');
  },[props.clean]) // when the value of props.clean changes, the useEffect will be triggered

  console.log()
  useEffect(() => {
    if (content.includes('') === false && props.gameState==="") {
      props.setGameState('D');
    }
  });


  
  return (
    <div className={`m-5 grid grid-cols-3 grid-rows-3 w-[500px] h-[500px] rounded-lg gap-3 p-3
    ${props.gameState==="D"?"bg-gray-800":
    props.gameState==="X"?"bg-  bg-rose-950":
    props.gameState==="O"?"bg-green-950":"bg-teal-950"}
    `}>
      {numbers.map((item: any) => (
        <button
          className={`rounded-lg 
          ${props.gameState==="D"?"bg-gray-700":
          props.gameState==="X"?"bg-rose-900":
          props.gameState==="O"?"bg-green-900":"bg-teal-800"}
          ${content[item] === 'X' ? "text-red-300" : "text-green-300"}
          font-bold text-7xl text-center`}
          onClick={() => {
            
            if (content[item] === '' && props.gameState === '') {
              if (turn === 'X') {
                content[item] = 'X';
                setTurn('O');
              } else {
                content[item] = 'O';
                setTurn('X');
              }
            }
          }}
        >
          {content[item]}
        </button>
      ))}
    {

    }

    </div>
  );
}
