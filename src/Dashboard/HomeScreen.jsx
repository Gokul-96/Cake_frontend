import React from 'react'
import cakeData from '../cakedata'
import Cake from '../components/Cake'

function Homescreen() {
  console.log(cakeData)
  return (
    <div>
      <div className='row'>
        {cakeData.map((cake, index) => (
          <div className='col-md-4 ' key={index}>
            <div>
              <Cake cake={cake}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Homescreen