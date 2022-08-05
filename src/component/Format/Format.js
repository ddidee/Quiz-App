import React from 'react'
import Aux from '../../hoc/Auxilliary'
import Classes from "../Format/Format.module.css"


const Format = (props) => {
    return(
        <Aux>
            <div className= {Classes.Format}>
                <main >
                    {props.children}
                </main>
            </div>
        </Aux>
    )
}

export default Format