import React from 'react'
import { useParams } from 'react-router-dom';

const Word = () => {
    const { word, color, back } = useParams();
    return (
        <div>
            {
                isNaN(word)?
                <div style={
                    {backgroundColor:`${back}`,
                    color: `${color}`, 
                    display:'flex', 
                    justifyContent:'center',
                    padding:'10px'}
                }>The word is {word}</div>:
                <h2>{word} is not a word</h2>
            }
        </div>
    )
}

export default Word