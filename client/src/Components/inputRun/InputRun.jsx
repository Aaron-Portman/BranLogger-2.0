import React from 'react'
import './inputRun.css'
export default function InputRun() {
    return (
        <div>
            <div className="main-block">
                <h1>Input Run Form</h1>
                <form action="/addEasyRun" method="POST">


                <div className="info">

                <div className="info-item">
                    <label className="icon" for="minutes"><i className="fas fa-stopwatch"></i></label>
                    <input type="text" name="minutes" id="time" placeholder="Minutes" required />
                </div>

                <div className="info-item">
                    <label className="icon" for="seconds"><i className="fas fa-stopwatch"></i></label>
                    <input type="text"  name="seconds" id="time" placeholder="Seconds" required />
                </div>
                <div className="info-item">
                    <label className="icon" for="name"><i className="fas fa-route"></i></label>
                    <input type="text"  name="mileage" id="WorkoutReps" placeholder="Enter your mileage" required />
                </div>

                <div className="info-item">
                    <label className="icon" for="age"><i className="fas fa-calendar"></i></label>
                    <input type="date" name="date" id="date" placeholder="Date" required />
                </div>
                </div>

                <div className="grade-type">
                    <h5>How was your run?</h5>
                    <div>
                        <input type="radio" value="Excellent" id="radioOne" name="grade" checked />
                        <label for="radioOne" className="radio">Excellent</label>
                    </div>
                    <div>
                        <input type="radio" value="Very Good" id="radioTwo" name="grade" />
                        <label for="radioTwo" className="radio">Very Good</label>
                    </div>
                    <div>
                        <input type="radio" value="Good" id="radioThree" name="grade" />
                        <label for="radioThree" className="radio">Good</label>
                    </div>
                    <div>
                        <input type="radio" value="Neutral" id="radioFour" name="grade" />
                        <label for="radioFour" className="radio">Neutral</label>
                    </div>
                    <div>
                        <input type="radio" value="Not Good" id="radioFive" name="grade" />
                        <label for="radioFive" className="radio">Not Good</label>
                    </div>
                    <div>
                        <input type="radio" value="Very Bad" id="radioSix" name="grade" />
                        <label for="radioSix" className="radio">Very Bad</label>
                    </div>
                    <div>
                        <input type="radio" value="Terrible" id="radioSeven" name="grade" />
                        <label for="radioSeven" className="radio">Terrible</label>
                    </div>
                </div>
                <h3>Notes:</h3>
                <textarea rows="4" name="notes"></textarea>
                <button type="submit" href="/showLog">Submit</button>
            </form>
        </div>
{/* <script>
  document.getElementById('date').value = new Date().toISOString().slice(0, 10)
</script> */}
        </div>
    )
}
