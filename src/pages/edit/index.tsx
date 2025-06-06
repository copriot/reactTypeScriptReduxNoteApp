import { FC } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Note, NoteData } from "../../types";
import PageContainer from "../../styled/pageContainer";
import { Typography } from "@mui/material";
import Form from "../../components/form";
import { useDispatch } from "react-redux";
import { updateNote } from "../../redux/slices/noteSlices";
import { toast } from "react-toastify";

const Edit: FC = () => {
  const note = useOutletContext<Note>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (data: NoteData) => {
    if (!data.title || !data.markDown || data.tags.length < 1) {
      return toast.error("Please fill all fields", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    dispatch(updateNote({ id: note.id, ...data }));
    navigate("/");
  };
  return (
    <PageContainer>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Update Note
      </Typography>
      <Form note={note} handleSubmit={handleSubmit} />
    </PageContainer>
  );
};

export default Edit;
