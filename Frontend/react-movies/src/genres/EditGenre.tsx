import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { GETGenresById, PUTGenres } from "../endpoints";
import DisplayErrors from "../utils/DisplayErrors";
import Loading from "../utils/Loading";
import { genreCreationDTO } from "./genre.model";
import GenreForm from "./GenreForm";

export default function EditGenre() {
  const { id }: any = useParams();
  const [genre, setGenre] = useState<genreCreationDTO>();
  const [errors, setErrors] = useState<string[]>([]);
  const history = useHistory();
  useEffect(() => {
    axios
      .get(`${GETGenresById}/${id}`)
      .then((response: AxiosResponse<genreCreationDTO>) => {
        setGenre(response.data);
      });
  }, [id]);
  async function edit(genreToEdit: genreCreationDTO) {
    try {
      await axios.put(`${PUTGenres}/${id}`, genreToEdit);
      history.push("/genres");
    } catch (error) {
      if (error && error.response) {
        setErrors(error.response.data);
      }
    }
  }
  return (
    <>
      <h3>Edit Genre</h3>
      <DisplayErrors errors={errors} />
      {genre ? (
        <GenreForm
          model={genre}
          onSubmit={async (value) => {
            //when the form is posted
            await edit(value);
          }}
        />
      ) : (
        <Loading />
      )}
    </>
  );
}
