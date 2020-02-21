import React from 'react';
import {LayoutStyle} from "./LayoutStyles";

const Layout = (props)=>{
	return (
		<LayoutStyle>
			{props.children}
		</LayoutStyle>
	);
}

export default Layout;
