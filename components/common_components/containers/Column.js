import React from 'react';
import {ColumnStyle} from "./ContainerStyles";

const Column = (props)=> {
	return (
		<ColumnStyle>
			{props.children}
		</ColumnStyle>
	);
}
export default Column;
