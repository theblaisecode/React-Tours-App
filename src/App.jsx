import { useEffect, useState } from "react";
import Loading from "./component/Loading";
import Error from "./component/Error";
import OurTours from "./component/Tours";

const url = "https://www.course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [eachTour, setEachTour] = useState([]);

  function deleteTour(id) {
    setEachTour((prevTour) =>
      prevTour.filter((checkId) => {
        return checkId.id !== id;
      })
    );
  }

  async function getTours() {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }

      const data = await res.json();
      setIsLoading(false);
      setEachTour(data);
      console.log(data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getTours();
  }, []);

  function refreshTour() {
    getTours();
  }

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error errorMessage={isError} />;
  }

  if (eachTour.length < 1) {
    return (
      <div className="noTours">
        <h2>No Tours Left</h2>
        <button className="btn" onClick={refreshTour}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <main>
      <OurTours eachTour={eachTour} deleteTour={deleteTour} />
    </main>
  );
}

export default App;
