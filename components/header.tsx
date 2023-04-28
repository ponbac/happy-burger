import { AuthBar } from "./auth-bar";
import { Divider } from "./divider";
import { NavBar } from "./nav-bar";

export const Header = () => {
  return (
    <div className="flex w-fit flex-col justify-center">
      <AuthBar />
      <Divider />
      <NavBar />
    </div>
  );
};
