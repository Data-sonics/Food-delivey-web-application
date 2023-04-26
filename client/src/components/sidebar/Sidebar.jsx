import React, { useState } from "react";

function Sidebar({ isSidebarVisible }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-[35%] bg-amber-500 transform shadow-lg ${
        isSidebarVisible ? "translate-x-0" : "translate-x-full"
      } transition-all duration-300`}
    ></div>
  );
}

function MainContent() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex flex-col h-screen">
      <button onClick={toggleSidebar}>Show Sidebar</button>
      <div className="flex-1 p-4"></div>
      <div className="relative flex-none">
        <Sidebar isSidebarVisible={isSidebarVisible} />
      </div>
    </div>
  );
}

function App() {
  return <MainContent />;
}

export default App;
