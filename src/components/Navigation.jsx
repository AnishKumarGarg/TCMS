import React from "react";

export default function Navigation() {
  return (
    <div className="bg-black text-white h-screen flex gap-5 overflow-scroll">
    <div className="pt-20 ml-20 w-1/2">      
      <div className="mb-5">
        <h1 className="text-3xl mb-6">
          Why TraffikAI
        </h1>
        <div className="text-xl">
          <p className="mb-5">
            Bengaluru is placed in 10th position for its global traffic
            index.The remarkable shift happened within two years when it ranked
            as the most congested city globally in 2019. Bengaluru’s congestion
            levels came down to 48% in 2021.
          </p>
          <p className="mb-5">
            From the TomTom(Tom2), the geolocation technology specialist, we
            acquired the last 7 days' congestion periods to be from 6 pm to 7 pm
            with congestion of 60 to 70 percent.
          </p>
          <p className="mb-5">
            According to the National Crime Records Bureau, nearly 24,012 people
            die each day due to a delay in getting medical assistance. Many
            accident victims wait for help at the site, and a delay costs them
            their lives. The reasons could range from ambulances stuck in
            traffic to the fire brigade being unable to reach the site on time
            due to traffic jams.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-3xl mb-6">
          Density Algorithm
        </h1>
        <div className="text-xl">
          <p className="mb-5">
            The density score is calculated based on number of vehicles and
            considering each variant among them. Each vehicle has its own
            predefind density value. Formula,
          </p>
          <p classname="mb-5">
          <a href="https://ibb.co/cFxr9C2"><img src="https://i.ibb.co/1qbmNdR/density.png" alt="density" className="h-[100px] ml-[500px]"></img></a>
          </p>
          <p className="mt-5 mb-5">
            where, xk=Different Vehicles
          </p>
        </div>
      </div>
    </div>
    <div className="pt-[100px]">
      <a href="https://imgbb.com/"><img src="https://i.ibb.co/y6WW4yb/rushhour.png" alt="rushhour" border="0" className="w-[577px] h-[522px]"></img></a>
    </div>
    </div>
  );
}
