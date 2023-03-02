import React from 'react'
import { FirstName, LastName } from './App'

function ComponentC() {
    return (
        <div>
            {/* <FirstName.Consumer>
            {(fname)=>{
            return <h4><em>My Name is {fname} Jayadevan</em></h4>
        }}
        </FirstName.Consumer> */}

            {/* when there are multiple consumers, they require another function */}

            {/* IT FORMS A TYPE OF TRIANGULAR PATTERN */}
            {/* when data grows, useContext becomes difficult to understand */}

            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>{(lname) => {
                            return <h4><em>My Name is {fname} {lname} </em></h4>
                        }}</LastName.Consumer>
                    )
                }}
            </FirstName.Consumer>

        </div>
    )
}

export default ComponentC