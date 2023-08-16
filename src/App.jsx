import  { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./ui/Home"
import Menu, {loader as menuLoader} from "./features/menu/Menu"
import Cart from "./features/cart/Cart"
import CreateOrder from "./features/order/CreateOrder"
import Order from "./features/order/Order"
import AppLayout from "./ui/AppLayout"

const router = createBrowserRouter(
  // this is a function where we define our routes
  //in the below array each object is a route
  [
    {
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: "/menu",
          element: <Menu/>,
          loader: menuLoader,
        },
        {
          path: "cart",
          element: <Cart />
        },
        {
          path: "/order/new", 
          element: <CreateOrder/>
        },
        {
          path: "/order/:orderId",
          element: <Order />
        },
      ]
    },
  ]
)


function App() {
  return <RouterProvider router={router} />
}

export default App
