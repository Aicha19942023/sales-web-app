import Counter from "./Counter";

export default function App() {
  return (
    <>
      <Counter initialValue={34} step={4} />;
      <Counter initialValue={15} step={3} />;
      <Counter initialValue={-6} />;
    </>
  );
}
