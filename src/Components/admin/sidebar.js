const Sidebar = ({
  activeTab,
  handleTabChange,
  isSidebarOpen,
  isMobile,
  toggleSidebar,
}) => {
  return (
    <div
      className={`${isSidebarOpen ? "block" : "hidden"} md:block fixed md:relative inset-0 z-50 md:z-auto w-64 bg-[#6AAF02] text-white md:translate-x-0 transition-transform duration-300 ease-in-out`}
      style={{ height: isMobile ? "100vh" : "auto" }}
    >
      <div className="p-4 border-b border-green-700 hidden md:block">
        <h1 className="text-xl font-bold text-green-700">GO GREEN</h1>
        <p className="text-sm">Dashboard</p>
      </div>

      <nav className="p-4">
        <ul>
          {["dashboard", "packages", "orders", "customers"].map((tab) => (
            <li className="mb-2" key={tab}>
              <button
                onClick={() => handleTabChange(tab)}
                className={`w-full text-left p-2 rounded ${
                  activeTab === tab ? "bg-[#4D8F00]" : "hover:bg-green-700"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
