    import React,{lazy,Suspense, useEffect,useState} from "react";
    import ReactDOM from "react-dom/client" ;
    import Header from "./components/Header";
    import Body from "./components/Body";
    import About from "./components/About";
    import Contact from "./components/Contact";
    import Error from "./components/Error";
    import Restropage from "./components/Restropage";
    import UserName from "./utils/UserName";
    import { Provider } from "react-redux";
    import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
    import dataStore from "./utils/dataStore";
    import CartDetails from "./components/CartDetails" 


const Grocerys = lazy(()=>import("./components/Grocerys"));

const About = lazy(()=>import("./components/About"));
    const App = ()=>{

        const [userInfo,setUserInfo] = useState();
        useEffect(()=>{
          const data =  {
            name : "bagath singh"
          }
          setUserInfo(data.name)
        },[])
        return (
            <Provider store={dataStore}> 
                   <UserName.Provider value={{userName:userInfo,setUserInfo} }>
            <div className="app">
            <UserName.Provider value={{userName:"netaji"}}>
             <Header/>
             </UserName.Provider>
             <Outlet/>
            </div>
            </UserName.Provider>
             </Provider>
        
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
                   path : "/CartDetails",
                   element : <CartDetails/>
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

