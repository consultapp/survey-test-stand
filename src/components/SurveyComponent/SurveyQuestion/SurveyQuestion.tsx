import Box from "@mui/material/Box";
import { useQuestion } from "@/context/SurveyContext/hooks";

type Props = { id: string };

export default function SurveyQuestion({ id }: Props) {
  const question = useQuestion(id);

  if (!question) return;

  const { name } = question;

  return (
    <Box
      component="section"
      sx={{
        p: 2,
        border: "1px solid black",
        borderRadius: "1rem",
      }}
    >
      <h3>{name}</h3>
    </Box>
  );
}
