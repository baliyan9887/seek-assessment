import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import routes from "./routes";
import Loader from "./components/loader";
function App() {
  const router = createBrowserRouter(routes);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
