import React, { useState } from 'react'
import data from "./data"
import { Button, Card } from 'react-bootstrap'
const Bilgiler = () => {

    const [index, setIndex] = useState(0);
    const { id, isim, tarih, metin, resim } = data[index];
    const sonraki = (nxt) => {
        if(nxt>data.length-1){
            nxt=0;
           
        }
        setIndex(nxt);
    }
    const onceki = (prv) => {
        if(prv<0) {
             prv = data.length-1
            
        }
        setIndex(prv);
    }
    const rastgele = () => {
        let rnd = Math.floor(Math.random() * data.length)
        setIndex(rnd);
    }
    return (
        <div style={{ padding: "20px" }}>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={resim} style={{height:"300px"}} />
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }} >{isim}</Card.Title>
                    <Card.Title style={{ textAlign: 'center' }}>{id}</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                        {metin}
                    </Card.Text>
                    <div style={{ textAlign: 'center' }}>
                        <Button variant="primary" onClick={() => onceki(index-1)}>Previos</Button>
                        <Button variant="warning" onClick={rastgele}>Random</Button>
                        <Button variant="primary" onClick={() => sonraki(index+1)}>next</Button>
                    </div>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Bilgiler