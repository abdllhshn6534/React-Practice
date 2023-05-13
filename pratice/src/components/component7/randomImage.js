import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const RandomImage = () => {
    const [number, setNumber] = useState(1);

     let img ="";
     if(number<=4)
     img = "1.jpg";
     else if (number<=7)
     img = "2.jpg"
     else
     img ="3.jpg";
    const change = () => {
        let randomNumber = Math.floor(Math.random()*10+1);
        setNumber(randomNumber);
    }
    return (

        <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src={require(`../../assets/img/${img}`)} style={{ height: '20rem' }} />
            <Card.Body>
                <Card.Title>Rastgele Sayı : {number}</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, nesciunt
                </Card.Text>
                <Button variant='primary' onClick={change}>Resim değiştir</Button>
            </Card.Body>
        </Card>
    )
}

export default RandomImage