import MainLayout from "./components/MainLayout";
import Landing from "./pages/Landing";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
