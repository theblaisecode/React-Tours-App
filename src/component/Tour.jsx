import { useState } from "react";

export default function Tour({ id, image, info, name, price, deleteTour }) {
  // id, image, info, name, and price.
  const [isDescription, setIsDescription] = useState(false);

  function toggleDescription() {
    setIsDescription((prevDescription) => !prevDescription);
  }

  return (
    <div className="tour" key={id}>
      <div className="tourImg">
        <img src={image} alt={name} />
        <span>${price}</span>
      </div>

      <div className="aboutTour">
        <h3>{name}</h3>
        {isDescription ? (
          <p>
            {info.substr()}
            <button onClick={toggleDescription}>&nbsp; Show Less</button>
          </p>
        ) : (
          <p>
            {info.substr(0, 200)}...
            <button onClick={toggleDescription}>&nbsp; Read More</button>
          </p>
        )}

        <button className="btnTour" onClick={() => deleteTour(id)}>
          Not interested
        </button>
      </div>
    </div>
  );
}
