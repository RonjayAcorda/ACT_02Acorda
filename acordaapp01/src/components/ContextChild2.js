import React, { useContext } from 'react'
import { MainContext } from './UseContext'

function ContextChild2() {
    const darktheme = useContext(MainContext)
    const themeStyle = {
        backgroundColor: darktheme ? 'black' : 'white',
        color: darktheme ? 'white' : 'black'
    }

  return (
    <div className='card' style={themeStyle}>
        <div className='card-body'>
            Child 2
        </div>
    </div>
  )
}

export default ContextChild2