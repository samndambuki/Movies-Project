import MovieTheaterForm from "./MovieTheaterForm";

export default function CreateMovieTheatre() {
  return (
    <>
      <h3>Create Movie Theatre</h3>
      <MovieTheaterForm
        model={{
          name: "Dedan Kimathi University Of Technology",
          latitude: 0.3978,
          longitude: 36.9609,
        }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
