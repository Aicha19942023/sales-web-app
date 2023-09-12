import { RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { router } from "./router";
import { queryClient } from "./queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
