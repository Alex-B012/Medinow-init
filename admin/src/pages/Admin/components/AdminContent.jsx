const AdminContent = ({ children }) => {
  return (
    <div className="admin-content lg:max-w-175 xl:max-w-220 2xl:max-w-270 px-2 py-6 sm:px-6 bg-white border border-gray-200 drop-shadow-sm">
      {children}
    </div>
  );
};

export default AdminContent;
