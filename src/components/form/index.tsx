import { Button, Grid, Stack, styled, TextField } from "@mui/material";
import { FC, useState } from "react";
import TagSelect from "./tagSelect";
import { NoteData } from "../../types";
import Detail from "../../pages/detail";

const Label = styled("label")({
  fontSize: "1rem",
  fontWeight: "bold",
  color: "rgb(110, 220, 220)",
});

interface Props {
  handleSubmit: (data: NoteData) => void;
}

const Form: FC<Props> = ({ handleSubmit }) => {
  const [title, setTitle] = useState<string>("");
  const [markDown, setMarkDown] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleForm = () => {
    if (!title || !markDown || !selectedTags) {
      alert("Please fill all fields");
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
          onChange={(e) => setMarkDown(e.target.value)}
        />
      </Stack>
      {/* //*Buttons */}

      <Stack direction="row" spacing={2} justifyContent={"end"}>
        <Button
          type="button"
          variant="contained"
          color="secondary"
          sx={{ minWidth: "100px" }}
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
      <Detail />
    </Stack>
  );
};

export default Form;
