import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { GETGenresById, PUTGenres } from "../endpoints";
import DisplayErrors from "../utils/DisplayErrors";
import EditEntity from "../utils/EditEntity";
import Loading from "../utils/Loading";
import { genreCreationDTO,genreDTO } from "./genre.model";
import GenreForm from "./GenreForm";

export default function EditGenre() {
  
  return (
    <>
    <EditEntity<genreCreationDTO,genreDTO>
      url={PUTGenres} entityName="Genres"
      indexURL="/genres"
      >
      {(entity,edit) => 
      <GenreForm model={entity}
      onSubmit={async value =>{
        await edit(value);
      }}
      />
      }
    </EditEntity>
    </>
  );
}
