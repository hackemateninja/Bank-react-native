import React from 'react';
import {Medium, Small, SubTitle, Title} from "./TextStyle";

const Text = ({color, type, title})=>{
	switch (type) {
		case 'title':
			return (<Title color={color}>{title.toString()}</Title>);
		case 'subtitle':
			return (<SubTitle color={color}>{title.toString()}</SubTitle>);
		case 'medium':
			return (<Medium color={color}>{title.toString()}</Medium>);
		case 'small':
			return (<Small color={color}>{title.toString()}</Small>);
		default:
			return null;
	}
};
export default Text;
