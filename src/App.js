    import React,{lazy,Suspense} from "react";
    import ReactDOM from "react-dom/client" ;
    import Header from "./components/Header";
    import Body from "./components/Body";
    // import About from "./components/About";
    import Contact from "./components/Contact";
    import Error from "./components/Error";
    import Restropage from "./components/Restropage";
    import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";


const Grocerys = lazy(()=>import("./components/Grocerys"));

const About = lazy(()=>import("./components/About"));
    const App = ()=>{
        return (
            <div className="app">
             <Header/>
             <Outlet/>
            </div>
        )
    }
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element : <App/>,
            children:[
                {
                 path : "/",
                 element : <Body/>
                },
                {
                    path:"/About",
                    element :<Suspense fallback = {
                        <div>
                            <h1>Loading...</h1>
                            </div>
                        
                    }><About/> </Suspense>
                },
                {
                    path : "/grocerys",
                    element :<Suspense fallback = {
                        <h1>Loading...</h1>
                    }><Grocerys/> </Suspense>
                },
                {
                    path:"/Contact",
                    element :<Contact/>
                },
                {
                       path:"/Restaurant/:resId",
                       element : <Restropage/>
                }
            ],
            errorElement : <Error/>,
        }
        
    ]);

        const root = ReactDOM.createRoot(document.getElementById("main"));
        root.render(<RouterProvider router={appRouter}/>);

