import Items from "./Items";

import React, { useEffect, useState } from "react";

function MainItem(props) {
  const [rockets, setRockets] = useState([]);

  async function fetchdata() {
    const data = await fetch("https://api.spacexdata.com/v4/rockets");
    const response = await data.json();
    setRockets(response);
    console.log(response);
  }
  useEffect(() => {
    //  await fetch("https://api.spacexdata.com/v4/rockets")
    //   .then((response) => response.json())
    //   .then((rockets) => setRockets(rockets));
    fetchdata();
  }, []);
  function call(data) {
    if (props.passData) {
      return data.filter((item) =>
        item.engines.type.toUpperCase().includes(props.passData.toUpperCase())
      );
    } else {
      return data;
    }
  }
  return (
    <div className="container my-3">
      <div className="Headline">
        <h2>Space Exploration Technologies Corp.</h2>
        <h1>SpaceX</h1>
      </div>
      <div className="row">
        {call(rockets).map((element) => {
          return (
            <div className="col-md-4" key={element.id}>
              <Items
                imageUrl={element.flickr_images}
                description={element.description}
                name={element.name}
                UnikeId={element.id}
                height={element.height.feet}
                diameter={element.diameter.feet}
                mass={element.mass.kg / 1000}
                firstFlight={element.first_flight}
                Active={element.active ? "Yes" : "No"}
                costLaunch={element.cost_per_launch / 1000000}
                country={element.country}
                company={element.company}
                wikipedia={element.wikipedia}
                type={element.engines.type}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainItem;
