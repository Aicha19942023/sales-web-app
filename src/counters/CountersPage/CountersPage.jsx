import { Counter } from "../Counter";

export default function CountersPage() {
  return (
    <>
      <h1>CountersPage</h1>
      <Counter initialValue={34} step={4} />
      <Counter initialValue={15} step={3} />
      <Counter initialValue={-6} />
    </>
  );
}
