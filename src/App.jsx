import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import { Globalstyle } from "./styles/global"

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
      <Globalstyle />
    </ThemeProvider>
  )
}
