import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import  {Signup}  from "../pages/Signup";
import { Login } from "../pages/Login"
import { Dashboard } from "../pages/Dashboard"

function Routes(){

    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("@KenzieHub:token"))

        if (token){
            return setAuthenticated(true)
        }
    },[authenticated])

    return(
        <AnimatePresence>
        <Switch>
            <Route exact path="/">
                <Login 
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
                />
            </Route>
            <Route exact path="/signup">
                <Signup authenticated={authenticated}/>
            </Route>
            <Route path="/dashboard">
                <Dashboard authenticated={authenticated}/>
            </Route>
        </Switch>
        </AnimatePresence>
    )
}

export default Routes;