import { Autocomplete, TextField } from "@mui/material";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { addTag } from "../../redux/slices/tagsSlices";
import { AppDispatch, RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
interface Props {
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}
const TagSelect: FC<Props> = ({ selectedTags, setSelectedTags }) => {
  const { tags } = useSelector((store: RootState) => store.tags);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Autocomplete
      multiple
      freeSolo
      options={tags}
      value={selectedTags}
      onChange={(_, inputTags) => {
        if (inputTags.length === 6) {
          return toast.error("Maximum tags count is 5", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
        }
        //inputtaki sonuncu etiket tanımlıysa reducer'a gönder
        if (inputTags[inputTags.length - 1]) {
          dispatch(addTag(inputTags[inputTags.length - 1]));
        }
        //inputtaki etiketleri state'e at

        setSelectedTags(inputTags);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Tags"
          variant="outlined"
          placeholder="Add new tag"
        />
      )}
    ></Autocomplete>
  );
};

export default TagSelect;
