import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
