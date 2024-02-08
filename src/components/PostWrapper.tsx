export const PostWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid col-span-2 grid-cols-1 gap-10 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
};
