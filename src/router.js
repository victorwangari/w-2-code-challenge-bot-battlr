import App from "./App"
import Description from "./pages/Description";

 
const routes = [
    {
    path: "/",
    element: <App />,
   },
   {
    path: "/description/:id",
    element: <Description />,
   }, 
   
]
export default routes;