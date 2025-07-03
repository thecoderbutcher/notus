const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center py-20 min-h-screen text-baseBackgroundDark">
      {children}
    </div>
  );
};

export default AuthLayout;
