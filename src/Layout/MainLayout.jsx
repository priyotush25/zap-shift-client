import { Outlet, useRouteError } from "react-router";
import Footer from "../Component/footer/Footer";
import Navbar from "../Component/navbar/Navbar";
import ErrorPage from "../Pages/error/ErrorPage";

const MainLayout = () => {
  const error = useRouteError();

  return (
    <div className="bg-gray-200">
      <div className="min-h-screen flex flex-col items-center max-w-7xl mx-auto px-2">
        <Navbar />
        <main className="flex-1 py-6 w-full">
          {error ? <ErrorPage /> : <Outlet />}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
