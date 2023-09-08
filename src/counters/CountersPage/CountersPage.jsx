import { Typography } from "@mui/material";
import { Counter } from "../Counter";

export default function CountersPage() {
  return (
    <>
      <Typography variant="h1">CountersPage</Typography>
      <Counter initialValue={34} step={4} />
      <Counter initialValue={15} step={3} />
      <Counter initialValue={-6} />
    </>
  );
}
