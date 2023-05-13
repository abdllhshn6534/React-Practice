import React from 'react'
import data from './students.json'
import './style.scss'

const Tablo = () => {
    const stil = {
        color: "crimson",
        fontWight: "bolder",
        bacgroundColor: "aqua"

    }
    return (
        <div className='kursiyerler'>
            <h1>Kursiyerler</h1>
            <table style={{ width: "400px" }}>
                <thead>
                    <tr>
                        <th>isim</th>
                        <th>yaş</th>
                        <th>kurs</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((student, index) =>
                        ( <tr key={index} style={index%2==0 ? stil : {...stil,backgroundColor:"gray"}}>
                            <td>{student.isim}</td>
                            <td>{student.yas}</td>
                            <td>{student.kurs}</td>
                        </tr>))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Tablo