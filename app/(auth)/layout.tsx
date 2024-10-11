const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen">
      {children}
    </div>
  );
};

export default AuthLayout;
