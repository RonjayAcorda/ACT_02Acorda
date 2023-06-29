import React, {useContext} from 'react'
import { MainContext } from './UseContext'


function ContextChild1() {
    const darktheme = useContext(MainContext)
    const themeStyle = {
        backgroundColor: darktheme ? 'black' : 'white',
        color: darktheme ? 'white' : 'black'
    }

  return (
    <div className='card' style={themeStyle}>
        <div className='card-body'>
            Child 1
        </div>
    </div>
  )
}

export default ContextChild1