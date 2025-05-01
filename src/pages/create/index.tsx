import { FC } from "react";
import { Typography } from "@mui/material";
import PageContainer from "../../styled/pageContainer";
import Form from "../../components/form";
const Create: FC = () => {
  return (
    <PageContainer>
      <Typography variant="h5">Create Note</Typography>
      <Form />
    </PageContainer>
  );
};

export default Create;
