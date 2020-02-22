import React from 'react';
import {Medium, Small, SubTitle, Title} from "./TextStyle";

const Text = ({color, type, title})=>{
	switch (type) {
		case 'title':
			return (<Title style={{color: color}}>{title.toString()}</Title>);
		case 'subtitle':
			return (<SubTitle style={{color: color}}>{title.toString()}</SubTitle>);
		case 'medium':
			return (<Medium style={{color: color}}>{title.toString()}</Medium>);
		case 'small':
			return (<Small style={{color: color}}>{title.toString()}</Small>);
		default:
			return null;
	}
};
export default Text;
