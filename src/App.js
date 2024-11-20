import MainLayout from "./components/MainLayout";
import About from "./pages/About";
import Landing from "./pages/Landing";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout>
          <Landing />
        </MainLayout>
      ),
    },
    {
      path: "/about-us",
      element: (
        <MainLayout>
          <About />
        </MainLayout>
      ),
    },
    {
      path: "/services",
      element: (
        <MainLayout>
          <Services />
        </MainLayout>
      ),
    },
    {
      path: "/contact",
      element: (
        <MainLayout>
          <Contact />
        </MainLayout>
      ),
    },

  ]);

  return (
    <div className="App">
      {/* <Navbar />
      <Landing /> */}
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
