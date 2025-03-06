import {Link} from "react-router"
const DefaultPage = () => {
  return (
    <div>
      <h2>Oops..not found</h2>
      <a href="/">Home Anchor</a>
      <Link to="/">Home Link</Link>
    </div>
  );
}
export default DefaultPage;