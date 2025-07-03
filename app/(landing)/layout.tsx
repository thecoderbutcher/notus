import Header from "./components/Header";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen">
      <Header />
      {children}
    </div>
  );
};

export default LandingLayout;
