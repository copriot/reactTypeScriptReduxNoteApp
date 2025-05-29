import { FC } from "react";
import { Typography } from "@mui/material";
import PageContainer from "../../styled/pageContainer";
import Form from "../../components/form";
import { NoteData } from "../../types";
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/slices/noteSlices";
import { AppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";
const Create: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const handleSubmit = (data: NoteData) => {
    dispatch(addNote(data));
    navigate("/");
  };
  return (
    <PageContainer>
      <Typography variant="h5">Create Note</Typography>
      <Form handleSubmit={handleSubmit} />
    </PageContainer>
  );
};

export default Create;
