import Tour from "./Tour";

export default function OurTours({ eachTour, deleteTour }) {
  return (
    <>
      <div className="tourHead">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>

      <div className="allTours">
        {eachTour.map((item) => {
          return <Tour key={item.id} {...item} deleteTour={deleteTour} />;
        })}
      </div>
    </>
  );
}
