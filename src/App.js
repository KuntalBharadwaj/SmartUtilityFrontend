import { router } from "./Routes/Routes";
import {RouterProvider} from "react-router-dom"

function App() {
  return (
    <div className="bg-gradient-to-tr from-secondary via-secondary to-primary min-h-screen">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
