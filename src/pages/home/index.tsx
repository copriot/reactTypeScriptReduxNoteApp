import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import PageContainer from "../../styled/pageContainer";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { Note } from "../../types";
import { Link } from "react-router-dom";
import Filter from "../../components/filter";
import NoteCard from "../../components/noteCard";
const Home: FC = () => {
  const { notes } = useSelector((store: RootState) => store.notes);
  const [title, setTitle] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  //Note başlığı 1. inputta aratılan metni içermelidir.
  //2.Inputta Seçilen etiketlerin herbiri note'un etiketlerinden en az biriyle eşleşmelidir.

  const filtredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(title.toLowerCase())
  );
  return (
    <PageContainer>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" gap={2}>
          <img
            src="/logo.jpg"
            alt="logo"
            width={50}
            height={50}
            style={{ borderRadius: "10%" }}
          />
          <Typography variant="h4">Notes</Typography>
        </Stack>
        <Button component={Link} to="/create" variant="contained" color="primary">
          Create
        </Button>
      </Stack>
      <Filter setTitle={setTitle} setSelectedTags={setSelectedTags} />
      <Grid mt={5} container spacing={2}>
        {filtredNotes?.map((note: Note) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={note.id}>
            <NoteCard note={note} />
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  );
};

export default Home;
