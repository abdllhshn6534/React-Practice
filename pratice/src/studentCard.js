import React from 'react'
import Card from 'react-bootstrap/Card';
const StudentCard = ({data}) => {
    const { isim, yas, kurs, img } = data;
    return (

        <Card >
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{isim}</Card.Title>
                <Card.Title>{yas}</Card.Title>

                <Card.Text>
                   {kurs}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default StudentCard