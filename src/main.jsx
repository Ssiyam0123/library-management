import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root.jsx";
import AllBooks from "./Pages/AllBooks.jsx";
import AddBooks from "./Pages/AddBooks.jsx";
import BorrowedBooks from "./Pages/BorrowedBooks.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import BookDetails from "./Pages/BookDetails.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import CategoryBy from "./Pages/CategoryBy.jsx";
import UpdateBookPage from "./Pages/UpdateBookPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-books",
        element: <AllBooks />,
      },
      {
        path: "/add-book",
        element: <AddBooks />,
      },
      {
        path: "/borrowed-books",
        element: <BorrowedBooks />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
      },
      {
        path: "/categories/:category",
        element:<CategoryBy/>,
        loader: ({params})=> fetch(`http://localhost:5000/categories/${params.category}`)
      },
      {
        path: "/update-book/:id",
        element: <UpdateBookPage/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
