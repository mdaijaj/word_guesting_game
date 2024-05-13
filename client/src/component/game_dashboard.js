import React, { useEffect, useState } from 'react';
import '../App.css';
import {wordList} from '../component/asset'
import { useNavigate, useParams } from 'react-router-dom';

const GameDashBoard= ()=> {
    const [wordObj, setWordObj] = useState('');
    const [wordlength, setWordlength]= useState(0)
    const [isOpen, setIsOpen] = useState(false);
    const [buttonOpen, setButtonOpen] = useState(false);
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    let   [remaining, setRemaining]= useState(5);
    const [historyItem, setHistoryItem]= useState([]);
    const [staticMessage, setStaticMessage]= useState()
    const [victory, setVictory]= useState({status: false, color: "skyblue"})
    const [score, setScore]= useState(0)

    let mainarr=[]
    const {id}=useParams()

    let randomWord=()=> {
        let ranItem = wordList[Math.floor(Math.random() * wordList.length)];
        console.log("ranItem", ranItem)
        setWordObj(ranItem)
        let mainarr=[];
        if(ranItem.word){
            for (var i=0; i< ranItem.word.length; i++){
                mainarr.push("●")
            }
        }
        setWordlength(mainarr)
    }

    useEffect(()=>{
        randomWord();
    }, [])

    function toggle() {
        setIsOpen((isOpen) => !isOpen);
    }

    const nextWord = async (e) => {
        e.preventDefault();

        let baseurl=`/api/editUserDetail/${id}`
        const regInf = {
            method: "Put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                score
            })
        }

        const res = await fetch(baseurl, regInf);
        const result = await res.json()
        console.log("result", result)

        if (res.status === 200 || !res) {
            console.log("Invalid data")
            randomWord()
        }
      
    }
    const handleGuess = () => {
        console.log("wordObj", wordObj)
        console.log(wordObj.word.includes(guess));
        let index = wordObj.word.indexOf(guess);
        console.log("index", index);
   
        mainarr.push(guess)
        setHistoryItem(mainarr)

    
        console.log("remaining", remaining)
        console.log("historyItem.length", historyItem.length)
        console.log("historyItem", historyItem)

        if(index>=0){
            wordlength[index]=guess
            setWordlength(wordlength) 
            setMessage(`Good guess! The word has the letter ${guess}`)
            if(!wordlength.includes("●")){
                setScore(score+5)
                setMessage("You guessed the correct word! Congrats!")
                let obj={
                    status: true,
                    color: "Green"
                }
                setVictory(obj)
                // randomWord()
                setButtonOpen(true)
            }else{
                setMessage(`You already guessed that letter, silly. Try again. ${guess}`)
            }
        }
        else if(remaining<=0){
            setMessage(`Game over. The Right word is ${wordObj.word}`)
            let obj={
                status: true,
                color: "Red"
            }
            setVictory(obj)
            setRemaining(remaining-1)
            setStaticMessage(`You have ${remaining} guesses remaining.`)

        }else{
            setRemaining(remaining-1)
            setMessage(`Sorry, the word has no ${guess}.`)
            setStaticMessage(`You have ${remaining} guesses remaining.`)
        }
    };

    return (
        <>
        <div className="App">
            <h1>Word Guessing Game</h1>
            {victory.status? 
            <h1 style={{color: victory.color}} >{message}</h1>
            : <h3 >{message}</h3> } 
            <h1>{wordlength}</h1>
            <button onClick={()=>{toggle(false)}}>Hint</button>
           {isOpen?  <h5>Hint:- {wordObj.hint}</h5> : ""}
            <h5>{staticMessage}</h5>
            <h5>Wrong guesses:- {historyItem}</h5>
            <input
                type="text"
                placeholder="Enter your first Charactor"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
            /> <br/> <br/>
            <button onClick={handleGuess}>Guess</button>
        </div> <br/>
        {buttonOpen?         
        <button className='btn btn-success' onClick={nextWord}>Next Word</button>
    : ""
    }

        <div className='score' style={{textAlign: "center"}}>
                Your Score:  {score}
        </div>
        </>
    );
}

export default GameDashBoard;
