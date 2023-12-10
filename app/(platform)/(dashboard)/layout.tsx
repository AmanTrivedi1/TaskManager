import { Navbar } from "./_components/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="  bg-bg bg-no-repeat bg-center bg-contain ">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default DashboardLayout;
