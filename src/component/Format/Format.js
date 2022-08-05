import React from 'react'
import Aux from "./hoc/Auxilliary"


const Format = (props) => {
    return(
        <Aux>
            <div className={classes.Content}>QUIZ APP</div>
            <main >
                {props.children}
            </main>
        </Aux>
    )
}

export default Format