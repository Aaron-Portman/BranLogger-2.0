import React from "react"
import TodaysRun from "../todaysRun/TodaysRun"
import CoachComments from "../coachComments/CoachComments"
import RunReport from "../runReport/RunReport"
import "./home.css"
import {useState, useEffect} from "react";
import InputRun from "../inputRun/InputRun";
import axios from "axios";



export default function Home() {
    const [count, setCount] = useState(0);

    // const [coachComments, setCoachComments] = useState(0);
    // const [recentActivities, setRecentActivities] = useState(0);

    // const today = Date();

    // var getTodaysRun = async (today) => {
    //     //fetch from backend
    // }
    //will use state to fetch relevant data from DB and passinto components
   useEffect(() =>  {
        axios.get("/home").then(response => {
            setCount(response.data.mileage)
        }) 
   });

    
    return (
        <div className="home">
            <div className="container">
                <div className="sideBar">
                    <div className="todaysRun">
                        <TodaysRun>
                            {{mileage: count}}
                        </TodaysRun>    
                    </div>
                    
                    <div className="coachComments">
                        <CoachComments/>
                    </div>

                </div>
            </div>
            <div className="mainBar">
               <div className="recentActivity">
               <h1>
                    <b>Recent Activities</b>
                </h1>
                <RunReport
                color="red"
                />
                <RunReport
                color="red"
                />
                <RunReport
                color="red"
                />
                <RunReport
                color="red"
                />
                
                
               
               </div>
            </div>
           
        </div>
    )
}
