import { POSTGenres } from "../endpoints";
import IndexEntity from "../utils/IndexEntity";
import { genreDTO } from "./genre.model";

export default function IndexGenres() {

  return (
    <>
      <IndexEntity<genreDTO>
        url={POSTGenres} createURL="genres/create" title="Genres"
        entityName="Genre"
        >
          {(genres,buttons) => 
          <>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {genres?.map(genre => 
              <tr key={genre.id}>
                <td>
                  {buttons(`genres/edit/${genre.id}`,genre.id)}
                </td>
                <td>{genre.name}</td>
              </tr>
            )}
          </tbody>
          </>
          }
      </IndexEntity>
    </>
  );
}
