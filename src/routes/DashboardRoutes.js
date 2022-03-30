import {
    Routes,
    Route,
} from "react-router-dom";
import PaisesScreen from "../components/paises/PaisesScreen";
import PaisScreen from "../components/paises/PaisScreen";
import RegionScreen from "../components/paises/RegionScreen";
import Aside from "../shared/Aside";

const DashboardRoutes = () => {
  return (
    <div className="content__dashboard">
        <Aside />
        <div>
          <Routes>
              <Route path="paises" element={<PaisesScreen />}/>
              <Route path="region" element={<RegionScreen />}/>
              <Route path="pais" element={<PaisScreen />}/>
              <Route path="" element={<PaisesScreen />}/>   
          </Routes>
        </div>
    </div>
  )
}

export default DashboardRoutes