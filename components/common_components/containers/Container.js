import React from 'react';
import {ContainerStyle} from "./ContainerStyles";

const Container = (props)=> {
	return (
		<ContainerStyle>
			{props.children}
		</ContainerStyle>
	);
}
export default Container;
