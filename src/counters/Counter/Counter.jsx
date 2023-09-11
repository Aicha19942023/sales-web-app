import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { number } from "prop-types";
import useCounter from "../../hooks/useCounter";

export default function Counter({ initialValue = 0, step = 1 }) {
  const [counter, { increment, descrement }] = useCounter(initialValue, step);
  return (
    <Card sx={{ maxWidth: 200, margin: "1rem" }} elevation={5}>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h2" component="p">
          {counter}
        </Typography>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={increment}>+{step}</Button>
          <Button onClick={descrement}>-{step}</Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}
Counter.propTypes = {
  initialValue: number,
  step: number,
};
