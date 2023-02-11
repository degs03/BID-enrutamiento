import {createBrowserRouter} from "react-router-dom"
import Cuatro from "../src/components/Cuatro";
import Hello from "../src/components/Hello";
import Home from "../src/components/Home";
import Word from "../src/components/Word";
import Layout from "../src/layout/Layout";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                index:true, //Para que cargue de primeras la pagina 'Home', va a ser lo mismo que el path:'/', lo carga por defecto
                element: <Home/>,
            },
            {
                path: "/4",
                element: <Cuatro/>,
            },
            {
                path: "/hello",
                element: <Hello/>,
            },
            {
                path: "/:word/:color/:back",
                element: <Word/>,
            },
        ]
    },
]);     