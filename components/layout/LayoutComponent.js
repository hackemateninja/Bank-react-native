import React from 'react';
import {Layout} from "./LayoutComponentStyles";

const LayoutComponent = (props)=>{
	return (
		<Layout>
			{props.children}
		</Layout>
	);
}

export default LayoutComponent;
