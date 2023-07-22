import { Link, useRoutes } from "react-router-dom";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
import "./App.css";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <ShowCreators />,
    },
    {
      path: "/edit/:id",
      element: <EditCreator />,
    },
    {
      path: "/add",
      element: <AddCreator />,
    },
    {
      path: "/:id",
      element: <ViewCreator />,
    },
  ]);

  return (
    <>
      <div className="flex align-middle justify-center ">
        <Link to="./" className="p-2 mt-2 bg-gray-400 rounded-md">
          Home
        </Link>
      </div>
      {routes}
    </>
  );
}

export default App;
