import { Outlet } from "react-router-dom";
import Header from "../components/header";

function MainLayout() {
  return (
    <div>
      <Header />
      <div className="  p-6 md:p-15 lg:p-20">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
