import React from "react";
import Sidebar from "../Sidebar";
import { Menu } from "../../Context/MenuContext";
import TopBar from "../TopBar";

const withLayout = (WrappedComponent) => {


  const WithLayout = (props) => (
    <div className="flex flex-col h-screen w-[100%] z-20 bg-white  text-black dark:bg-[#0a0908] dark:text-white overflow-hidden">
    <TopBar/>
    <div className="flex h-full">
      <div className="z-10 h-full">
        <Sidebar/>
      </div>
      <div className="w-full h-full overflow-y-auto pb-8">
        <WrappedComponent {...props} /> 
      </div>
    </div>
    </div>
  );

 
  WithLayout.displayName = `withLayout(${getDisplayName(WrappedComponent)})`;

  return WithLayout;
};

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};

export default withLayout;
