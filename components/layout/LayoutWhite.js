import React from 'react';
import {LayoutWhiteStyle} from "./LayoutStyles";

const LayoutWhite = (props)=>{
	return (
		<LayoutWhiteStyle>
			{props.children}
		</LayoutWhiteStyle>
	);
}

export default LayoutWhite;
