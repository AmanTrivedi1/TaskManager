import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="h-screen bg-heropattern  ">
        <Navbar />
        <main className="pt-52 pb-14 ">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default MarketingLayout;
