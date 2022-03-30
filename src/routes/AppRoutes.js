import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import DashboardRoutes from "./DashboardRoutes";


const AppRoutes = () => {
  return (

    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginScreen />}/>
            <Route path="/*" element={<DashboardRoutes />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes