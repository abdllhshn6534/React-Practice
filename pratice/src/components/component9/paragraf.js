import React, { useState } from 'react'
import data from "./data"
const Paragraf = () => {
    const [count, setcount] = useState(0);
    return (
        <div>
            <h3>Kaç tane paragraf</h3>
            <form action="">
                <label htmlFor="amount"></label>
                <input type="number" id="amount" />
                <button className='btn primary'>Generate</button>
                <button className='btn btn-danger'>Clear</button>

            </form>
            <div className="lorem">

            </div>
        </div>
    )
}

export default Paragraf