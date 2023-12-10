const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="h-screen flex items-center bg-mobile  md:bg-deskstop bg-no-repeat bg-cover justify-center">
        {children}
      </div>
    </>
  );
};

export default ClerkLayout;
