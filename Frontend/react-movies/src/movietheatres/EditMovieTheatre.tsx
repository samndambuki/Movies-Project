import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTheatre() {
  return (
    <>
      <h3>Edit Movie Theatre</h3>
      <h3>Create Movie Theatre</h3>
      <MovieTheaterForm
        model={{ name: "Dedan Kimathi University Of Technology" }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
