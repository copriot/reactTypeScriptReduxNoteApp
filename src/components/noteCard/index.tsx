import { FC } from "react";
import { Note } from "../../types";
import {
  CardActionArea,
  Typography,
  CardContent,
  Card,
  Stack,
  Chip,
} from "@mui/material";
import { Link } from "react-router-dom";
interface Props {
  note: Note;
}
const NoteCard: FC<Props> = ({ note }) => {
  return (
    <Card variant="outlined">
      <CardActionArea component={Link} to={`/note/${note.id}`}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {note.title}
          </Typography>
          <Stack direction="row" gap={1} mt={2} flexWrap="wrap">
            {note.tags.map((tag) => (
              <Chip label={tag} key={tag} />
            ))}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NoteCard;
