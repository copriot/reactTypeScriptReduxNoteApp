import { Autocomplete, Grid, TextField } from "@mui/material";

import { FC } from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
interface Props {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}
const Filter: FC<Props> = ({ setTitle, setSelectedTags }) => {
  const { tags } = useSelector((store: RootState) => store.tags);

  return (
    <Grid container spacing={6} mt={5}>
      <Grid size={6}>
        <TextField label="Search by title" onChange={(e) => setTitle(e.target.value)} />
      </Grid>
      <Grid size={6}>
        <Autocomplete
          multiple
          id="tag-search"
          options={tags}
          onChange={(e, allTags) => setSelectedTags(allTags)}
          renderInput={(params) => <TextField {...params} label="Search by tag" />}
        />
      </Grid>
    </Grid>
  );
};

export default Filter;
