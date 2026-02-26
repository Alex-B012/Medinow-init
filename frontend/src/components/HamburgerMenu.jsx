const HamburgerMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className="hamburger-menu w-9 h-9 group cursor-pointer mr-1 md:hidden z-50 flex justify-center items-center"
      onClick={() => setShowMenu((prev) => !prev)}
    >
      {showMenu ? (
        <div className="hamburger-menu__close w-6 mb-1 flex relative">
          <div className="w-full bg-emerald-500 h-1 group-hover:bg-emerald-600 transition-colors duration-700 absolute rotate-45"></div>
          <div className="w-full bg-emerald-500 h-1 group-hover:bg-emerald-600 transition-colors duration-700 absolute -rotate-45"></div>
        </div>
      ) : (
        <div className="hamburger-menu__open w-7 flex flex-col items-end gap-1.5">
          <div className="w-full bg-emerald-500 h-1 group-hover:bg-emerald-600 transition-colors duration-700"></div>
          <div className="w-[83%] bg-emerald-500 h-1 group-hover:bg-emerald-600 transition-colors duration-700"></div>
          <div className="w-[66%] bg-emerald-500 h-1 group-hover:bg-emerald-600 transition-colors duration-700"></div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
