import { Card, CardContent, Typography } from "@mui/material";
import { Counter } from "../../ds/organisms";

//import Counter from "../../ds/organisms

export default function CountersPage() {
  return (
    <Card>
      <CardContent>
        <Typography>CountersPage</Typography>
        <Counter initialValue={34} step={4} />
        <Counter initialValue={15} step={3} />
        <Counter initialValue={-6} />
      </CardContent>
    </Card>
  );
}
