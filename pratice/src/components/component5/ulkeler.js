import React from 'react'
import data from './countries.json'
const Ulkeler = () => {
    const stil = {
        textAlign:"center",
        backgroundColor:"lightblue",
    }
  return (
    <div className='tblContainer'>
        <select name="" id="" defaultValue="ulke">
            <option disabled value="ulke">Bir Ülke Seçin</option>
            {
             data.map((country,index)=>(<option key={index } value={index}>{country.name}</option>))
            }
        </select>
        <table style={{width:"60px"}}>
            <thead>
                <tr>
                    <th>Sıra no</th>
                    <th>Ülke adı</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    data.filter((countrys)=> countrys.name.startsWith("A")).map((country,index)=>(
                    <tr key={index} style={index%2==0 ? stil : {...stil,backgroundColor:"lightgray"}}>
                  <td>{index+1}</td>
                  <td>{country.name}</td>
                  
                    </tr>))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Ulkeler