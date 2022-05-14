import { Link } from "react-router-dom";

export default function IndexMovieTheatres() {
  return (
    <>
      <h3>Movie Theatre</h3>
      <Link className="btn btn-primary " to="/movietheatres/create">
        Create Movie Theatre
      </Link>
    </>
  );
}
