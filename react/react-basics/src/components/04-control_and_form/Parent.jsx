import MapPractice from "./MapPracticeApp";
import MapPracticeMovie from "./MapPracticeMovies";
import Example from "./User";

const Parent = () => {
    return (
      <>
        <h1>control & form</h1>

        <h2>1. Map</h2>
        <MapPractice />
        <MapPracticeMovie />
        <hr />

        <h2>2. Filter + Map + useState + Props</h2>
        <Example />
        <hr />
      </>
    );
}
export default Parent;
