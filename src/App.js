import MainLayout from "./components/MainLayout";
import About from "./pages/About";
import Landing from "./pages/Landing";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PageTransition from "./components/PageTransition";
import Media from "./pages/Media";
import MediaItem from "./pages/MediaItem";
import { Toaster } from "react-hot-toast";

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
      path: "/media",
      element: (
        <MainLayout>
          <Media />
        </MainLayout>
      ),
    },
    {
      path: "/media/:id",
      element: (
        <MainLayout>
          <MediaItem />
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
    <div className="App relative">
      {/* <Navbar />
      <Landing /> */}
      <RouterProvider router={router} />
      <Toaster position="bottom-center" />
    </div>
  );
}

export default App;
