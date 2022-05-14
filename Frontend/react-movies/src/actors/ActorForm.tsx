import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import * as Yup from "yup";
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";
import MarkdownField from "../forms/MakdownField";
import { actorCreationDTO } from "./actors.model";

export default function ActorForm(props: ActorFormProps) {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("This field is required")
          .firstLetterUppercase(),
        dateofBirth: Yup.date().nullable().required("This field is required"),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField displayName="Name" field="name" />
          <DateField displayName="Date Of Birth" field="Date Of Birth" />
          <ImageField
            displayName="Picture"
            field="picture"
            imageURL={props.model.pictureURL}
          />
          <MarkdownField displayName="Biography" field="biography" />
          <Button disabled={formikProps.isSubmitting} type="submit">
            Save Changes
          </Button>
          <Link to="/actors" className="btn btn-secondary">
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  );
}
interface ActorFormProps {
  model: actorCreationDTO;
  onSubmit(
    values: actorCreationDTO,
    action: FormikHelpers<actorCreationDTO>
  ): void;
}
