import React from 'react';
import {RowStyle} from "./ContainerStyles";

const Row = (props)=> {
	return (
		<RowStyle>
			{props.children}
		</RowStyle>
	);
}
export default Row;
