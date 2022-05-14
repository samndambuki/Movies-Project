import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { POSTGenres } from "../endpoints";
import DisplayErrors from "../utils/DisplayErrors";
import { genreCreationDTO } from "./genre.model";
import GenreForm from "./GenreForm";

export default function CreateGenre() {
  const history = useHistory();
  const [errors, setErrors] = useState<string[]>([]);
  async function create(genre: genreCreationDTO) {
    try {
      await axios.post(POSTGenres, genre);
      history.push("/genres/GetAllGenres");
      console.log(genre)
    } catch (error) {
      if (error && error.response) {
        setErrors(error.response.data);
      }
      console.error(error);
    }
  }
  return (
    <>
      <h3>Create Genre</h3>

      <GenreForm
        model={{ name: "" }}
        onSubmit={async (value) => {
          await create(value);
        }}
      />
    </>
  );
}
