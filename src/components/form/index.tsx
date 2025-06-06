import { Button, Grid, Stack, styled, TextField } from "@mui/material";
import { FC, useState } from "react";
import TagSelect from "./tagSelect";
import { Note, NoteData } from "../../types";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Label = styled("label")({
  fontSize: "1rem",
  fontWeight: "bold",
  color: "rgb(110, 220, 220)",
});

interface Props {
  handleSubmit: (data: NoteData) => void;
  note?: Note;
}

const Form: FC<Props> = ({ handleSubmit, note }) => {
  const [title, setTitle] = useState<string>(note?.title || "");
  const [markDown, setMarkDown] = useState<string>(note?.markDown || "");
  const [selectedTags, setSelectedTags] = useState<string[]>(note?.tags || []);

  const handleForm = () => {
    if (!title || !markDown || !selectedTags) {
      toast.error("Please fill all fields", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }
    handleSubmit({ title, markDown, tags: selectedTags });
  };
  return (
    /** sx styled in inline kullanılısı gibi */

    <Stack spacing={7} sx={{ mt: 5 }}>
      {/* //*UpperSide*/}
      <Grid container spacing={5}>
        <Grid size={6}>
          <TextField
            value={title}
            label="Title"
            variant="outlined"
            fullWidth
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid size={6}>
          <TagSelect selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
        </Grid>
      </Grid>
      {/* //*Markdown Area*/}
      <Stack gap={2}>
        <Label>Content (Support Markdown)</Label>

        <TextField
          fullWidth
          minRows={15}
          maxRows={50}
          multiline
          value={markDown}
          onChange={(e) => setMarkDown(e.target.value)}
        />
      </Stack>
      {/* //*Buttons */}

      <Stack direction="row" spacing={2} justifyContent={"end"}>
        <Button
          variant="contained"
          color="secondary"
          sx={{ minWidth: "100px" }}
          component={Link}
          to={note ? `/note/${note.id}` : ".."}
        >
          Back
        </Button>
        <Button
          onClick={handleForm}
          variant="contained"
          type="submit"
          sx={{ minWidth: "100px" }}
        >
          Save
        </Button>
      </Stack>
    </Stack>
  );
};

export default Form;
