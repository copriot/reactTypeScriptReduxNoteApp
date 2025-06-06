import { FC } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { Note } from "../../types";
import PageContainer from "../../styled/pageContainer";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import Markdown from "react-markdown";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../redux/slices/noteSlices";

const Detail: FC = () => {
  const note = useOutletContext<Note>();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };

  return (
    <PageContainer>
      <Stack direction="column" justifyContent="space-between" height="100%">
        <Box>
          <Stack gap={1}>
            <Typography variant="h3">{note.title}</Typography>
            <Stack direction="row" gap={1} flexWrap="wrap" mt={2}>
              {note.tags.map((tag) => (
                <Chip key={tag} label={tag} />
              ))}
            </Stack>
          </Stack>
          <Box mt={2} className="markdown">
            <Markdown>{note.markDown}</Markdown>
          </Box>
        </Box>
        <Stack direction="row" gap={2} mt={2} pb={2} justifyContent="flex-end">
          <Button component={Link} to="/" variant="outlined">
            Back
          </Button>
          <Button component={Link} to={`edit`} variant="contained" color="info">
            Edit
          </Button>
          <Button color="error" variant="contained" onClick={handleDelete}>
            Delete
          </Button>
        </Stack>
      </Stack>
    </PageContainer>
  );
};

export default Detail;
