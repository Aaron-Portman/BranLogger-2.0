import { people } from 'Faker/lib/image';
import React from 'react'
import { useState, useEffect} from 'react';
import "./todaysRun.css"

export default function TodaysRun(mileage) {
    const [todaysRun, setTodaysRun] = useState(0);
    useEffect(() => {
        setTodaysRun(mileage.children.mileage)

    })

    return (
        <div className="todaysRun">
            <h1>
                <b>Today's Run</b>
            </h1>
            <div className="todaysDistance">
                {todaysRun}
            </div>
        </div>
    )
}
