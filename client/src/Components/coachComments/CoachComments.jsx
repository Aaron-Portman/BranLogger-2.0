import React from 'react'
import "./coachComments.css"

export default function CoachComments() {
    return (
        <div className="coachComments">
            <h1>
                <b>Coach Comments</b>
            </h1>
            <ul>
                <li>Core</li>
                <li>Bands</li>
                <li>Lift</li>  
            </ul>
            <h3>
                Notes:
            </h3>
            <p>
                Be sure to stretch for atleast 20 minutes
            </p>
        </div>
    )
}
