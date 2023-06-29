import React, { createContext, useState } from 'react'
import ContextChild1 from './ContextChild1';
import ContextChild2 from './ContextChild2';

export const MainContext = createContext();


function ContextParent1(){
    return(
        <div className='card bg-light text-dark'>
            <div className='card-body'>
                Main Component 1
            </div>
            <div className='card-body'>
                <ContextChild1/>
            </div>
        </div>
    )
}

function ContextParent2(){
    return(
        <div className='card bg-light text-dark'>
            <div className='card-body'>
                Main Component 2
            </div>
            <div className='card-body'>
                <ContextChild2/>
            </div>
        </div>
    )
}


function UseContext() {
    const [darktheme, setDarktheme] = useState(true)

    function toggleTheme(){
        setDarktheme((prevDarktheme) => !prevDarktheme)
    }

  return (
    <MainContext.Provider value={darktheme}>
        <div className='container'>
            <div className='card'>
                <div className='card-body'>
                    <h1>useContext Demo</h1>
                    <button className='btn btn-primary' onClick={toggleTheme}>Toggle Theme</button>
                    <div className='card'>
                        <div className='card-body bg-secondary text-white'>
                            container

                            <div className='card-body'>
                                <ContextParent1/>
                                <ContextParent2/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MainContext.Provider>
  )
}

export default UseContext