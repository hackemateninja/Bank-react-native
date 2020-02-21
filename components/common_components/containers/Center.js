import React from 'react';
import {CenterStyle} from "./ContainerStyles";

const Center = (props)=> {
	return (
		<CenterStyle>
			{props.children}
		</CenterStyle>
	);
}
export default Center;
