import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import PageContainer from "../../styled/pageContainer";
import { Typography } from "@mui/material";
import { Note } from "../../types";

const Home: FC = () => {
  const { notes } = useSelector((store: RootState) => store.notes);

  return (
    <PageContainer>
      <Typography variant="h4">Notes</Typography>
      {notes?.map((note: Note) => (
        <div key={note.id}>{note.title}</div>
      ))}
    </PageContainer>
  );
};

export default Home;
