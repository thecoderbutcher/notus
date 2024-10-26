const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen text-baseBackgroundDark">
      {children}
    </div>
  );
};

export default AuthLayout;
