import { AuthBar, Divider, NavBar } from ".";

export const Header = () => {
  return (
    <div className="flex w-fit flex-col justify-center">
      <AuthBar />
      <Divider />
      <NavBar />
    </div>
  );
};
