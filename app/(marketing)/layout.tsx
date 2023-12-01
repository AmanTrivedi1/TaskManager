import { Navbar } from "./_components/navbar";
import InfoPage from "../infopage/infopage";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="sm:h-screen  shadow-lg shadow-[#0d1117] h-full sm:bg-deskstop bg-mobile  bg-no-repeat ">
        <Navbar />
        <main className="pt-52 pb-14 ">{children}</main>
        <InfoPage />
      </div>
    </>
  );
};

export default MarketingLayout;
