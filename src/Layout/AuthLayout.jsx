import { Outlet } from "react-router";
import authImg from "../../src/assets/authImage.png";
import Logo from "../Component/logo/Logo";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col max-w-7xl mx-auto px-2">

      <main className="flex min-h-screen">

        {/* Left side */}
        <div className="flex-1 h-screen flex flex-col">

          {/* Logo always top */}
          <div className="p-4">
            <Logo />
          </div>

          {/* Outlet centered vertically and horizontally */}
          <div className="flex-1 flex items-center">
            <Outlet />
          </div>
        </div>

        {/* Right side image */}
        <div className="bg-[#DEF29F] flex-1 h-screen flex items-center justify-center">
          <img src={authImg} alt="" className="max-w-full max-h-full" />
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
