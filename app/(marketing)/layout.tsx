import { Navbar } from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="sm:h-screen  shadow-lg shadow-[#0d1117] h-full   bg-bg  bg-center   sm:bg-cover  bg-no-repeat ">
        <Navbar />
        <main className="pt-52 pb-14 ">{children}</main>
      </div>
    </>
  );
};

export default MarketingLayout;
