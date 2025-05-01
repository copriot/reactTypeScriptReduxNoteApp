import { Button, Grid, Stack, styled, TextField } from "@mui/material";
import { FC } from "react";

const Label = styled("label")({
  fontSize: "1rem",
  fontWeight: "bold",
  color: "rgb(110, 220, 220)",
});

const Form: FC = () => {
  return (
    /** sx styled in inline kullanılısı gibi */
    <Stack spacing={7} sx={{ mt: 5 }}>
      {/* //*UpperSide*/}
      <Grid container spacing={5}>
        <Grid size={6}>
          <TextField label="Title" variant="outlined" fullWidth />
        </Grid>
        <Grid size={6}>
          <TextField label="Tag" variant="outlined" fullWidth />
        </Grid>
      </Grid>
      {/* //*Markdown Area*/}
      <Stack gap={2}>
        <Label>İçerik Markdown</Label>

        <TextField fullWidth minRows={15} maxRows={50} multiline />
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
        <Button variant="contained" type="submit" sx={{ minWidth: "100px" }}>
          Save
        </Button>
      </Stack>
    </Stack>
  );
};

export default Form;
