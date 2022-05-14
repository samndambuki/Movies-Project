import { useEffect, useState } from "react";
import { landingPageDTO } from "./movies.model";
import MoviesList from "./MoviesList";

export default function LandingPage() {
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        intheatres: [
          {
            id: 1,
            title: "Spider-man:Far From Home",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg",
          },
          {
            id: 2,
            title: "Luca",
            poster:
              "https://www.metaflix.com/wp-content/uploads/2021/04/Disney-Pixar-Luca-Poster.jpg",
          },
        ],

        upcomingReleases: [
          {
            id: 3,
            title: "Soul",
            poster:
              "https://1.bp.blogspot.com/-pG9x85OBW1o/XmkmpG-_-II/AAAAAAAAX-Q/9W0JXTUhOuQW-NmzEo4bvn_7S92TV18fACLcBGAsYHQ/s1600/Pixar-Soul-Poster.jpg",
          },
        ],
      });
    }, 1000);
    return () => clearTimeout(timerId);
  });
  return (
    <>
      <h3>In Theaters</h3>
      <MoviesList movies={movies.intheatres} />

      <h3>Upcoming releases</h3>
      <MoviesList movies={movies.upcomingReleases} />
    </>
  );
}
