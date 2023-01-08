import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { POSTActors } from "../endpoints";
import DisplayErrors from "../utils/DisplayErrors";
import { converActorToFormData } from "../utils/formDataUtils";
import ActorForm from "./ActorForm";
import { actorCreationDTO } from "./actors.model";

export default function CreateActor() {

  const [errors, setErrors] = useState<string[]>([]);
  const history = useHistory();

  async function create(actor:actorCreationDTO)
  {
    try
    {
      const formData = converActorToFormData(actor);

      await axios({
        method:'post',
        url: POSTActors,
        data:formData,
        headers:{'Content-Type':'multipart/form-data'}
      });

      history.push('/actors');
    }
    catch(error)
    {
      if(error && error.response)
      {
        setErrors(error.response.data);
      }
    }
  }

  return (
    <>
      <h3>Create Actor</h3>
      <DisplayErrors errors={errors}/>
      <ActorForm
        model={{ name: " ", dateofBirth: undefined }}
        onSubmit={ async values => await create(values)}
      />
    </>
  );
}
