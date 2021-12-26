import React from 'react'
import "./runReport.css"
import { useState } from 'react';

export default function RunReport(backGroundColor) {
    const [color, setColor] = useState("#0B6623");
    
    return (
        <div className="runReport">
                <h1>
                    <span class="dot" style={{backgroundColor: color}}></span>
                    Aaron
                </h1>
                <h3>
                    Distance: 5 Miles
                    Pace: 6:45/mile
                </h3>
                <h3>
                    Comments:
                </h3>
                <h5>
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </h5>

        </div>
    )
}
