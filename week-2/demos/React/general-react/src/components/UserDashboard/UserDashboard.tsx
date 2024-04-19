import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

function UserDashboard() {

    // We need to do a couple of things in here

    // Verify the user is logged in, if they are not then send them to the login page

    // Let's populate some info based off of the individual user

    // GOAL: Send an http request when this component shows up on the screen
    // The request should be a get request and should receive the workout plans for a specific user

    const [plans, setPlans] = useState<any>([])

    // useEffect
    // useEffect is another hook we didn't really discuss but it is a good one (albeit sometimes unnecessary)
    // We can use useEffect to run a function at 3 different points in the components lifecycle
    /*
        1. When the component becomes visible on the screen (mounting)
        2. When the component is removed from the screen (unmounting)
        3. Whenever the state of this component updates
    */

        useEffect(() => {

            if (!localStorage.getItem('username')){
                return;
            }

            // Inside of here this will be called anytime the function loads or updates
            console.log("Component has mounted")
            // We only want to call this once when the component loads onto the screen so lets add in a empty set of brackets as the 
            // second arg
            let username = (localStorage.getItem('username') ? localStorage.getItem("username") as string: "")
            // Let's attempt to send a get request 
            let asyncCall = async () => {
                let res = await fetch('http://localhost:8080/plans', {
                headers: {
                    'Content-Type': 'application/json',
                    'user': username
                },
            })
            .then((data) => data.json())
            .then((data) => setPlans(data))
            .catch((error) => {
                alert("There was an error")
                console.log(error)
            })
            }

            asyncCall()

        },[]) // Since I only want it to happen when the component loads/mounts, I use []

  return (
    <>
        {
            // Ternary Operator for conditional rendering
            // There should only be a username there when someone has successfully logged in
            // I should be able to check and make sure this is not undefined
            (localStorage.getItem("username")) ? 
            <>
                <h1>User 's Workout Plans</h1>
                {
                    plans.map((plan : any) => {

                        return(<div>
                            <h2>{plan.name}</h2>
                            </div>)
                        
                    })
                }
            </>
                :
                // If a user is not logged in, let's send them to the logic location
                <Navigate to={"/login"}></Navigate>
        }
    
    
    </>
  )
}

export default UserDashboard
