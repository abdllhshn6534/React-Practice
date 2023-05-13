import React, { useState } from 'react'
import data from "./data"

const Paragraf = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState([])
    /*nfn fonksiyonun kısaltmasıdır*/
    const handleGenerate = (e) => {
        e.preventDefault();
        let amount = count;
        if (count <=0) {
            amount = 1;
        }
        if(count>data.length){
            amount=data.length;
        }
        setText(data.slice(0,amount));

    }
    return (
        <div>
            <h3>Kaç tane paragraf</h3>
            <form action="">
                <label htmlFor="amount"></label>
                <input type="number" id="amount" value={count} onChange={(e) => setCount(e.target.value)} />
                <button className='btn ' onClick={handleGenerate}>Generate</button>
                <button className='btn btn-danger'>Clear</button>
            </form>
            <div className="lorem">
                {
                    text.map((item, index)=>(<p key={index}>{item}</p>))
                }
            </div>
        </div>
    )
}

export default Paragraf