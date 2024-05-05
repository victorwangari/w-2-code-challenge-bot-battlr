import App from "./App"
import Description from "./pages/Description";

 
const routes = [
    {
    path: "/w-2-code-challenge-bot-battlr",
    element: <App />,
   },
   {
    path: "/description/:id",
    element: <Description />,
   }, 
   
]
export default routes;