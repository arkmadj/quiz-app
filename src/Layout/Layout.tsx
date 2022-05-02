import React from "react";
import "./Layout.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout:React.FC<LayoutProps> = ({children}) => {
	return (
		<div className="layout">
			<main>{children}</main>
		</div>
	);
};

export default Layout;
