import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header"
import Verizon from "./components/Verizon"
import Infosys from "./components/Infosys"
import Experience from "./components/Experience";
import About from "./components/About";
import MainContainer from "./components/MainContainer";
import Projects from "./components/Projects";
import ThinkMax from "./components/ThinkMax";
import ScrollToTopOnNavigate from "./components/ScrollToToponNavigate";
import React from "react";
import Exp2 from "./components/Exp2"
import Contact from "./components/Contact";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="bg-navy max-w-full w-full h-full min-h-screen">
        <Header /> {/* Include the Header component */}
        <Outlet /> {/* This is where child routes will be rendered */}
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/experience",
        element: <Exp2/>,
      },{
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      }

    ],
  },
]);

function App() {
  return ( 
    <RouterProvider router={appRouter}>
      <ScrollToTopOnNavigate/>
      {Outlet}
      </RouterProvider>

  )};
  
export default App;
