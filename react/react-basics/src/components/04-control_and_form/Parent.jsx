import MapPractice from "./MapPracticeApp";
import MapPracticeMovie from "./MapPracticeMovies";
import User from "./User";
import Product from "./Example";

const Parent = () => {
    return (
      <>
        <h1>control & form</h1>

        <h2>1. Map</h2>
        <MapPractice />
        <MapPracticeMovie />
        <hr />

        <h2>2. Filter + Map + useState + Props</h2>
        <User />
        <hr />

        <h2>3. Filter + Map + useState + Props + components</h2>
        <Product />
        <hr />
      </>
    );
}
export default Parent;
