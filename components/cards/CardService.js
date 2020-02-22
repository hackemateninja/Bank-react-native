import React from 'react';
import {CardServiceStyle, IconCard} from "./CardStyles";
import Text from "../common_components/text/Text";
import Styles from "../../utils/styles";


const CardService = ({color, title, icon})=>{
	return (
		<CardServiceStyle color={color}>
			<IconCard source={icon}/>
			<Text
				color={Styles.colors.white}
				title={title}
				type="medium"
			/>
		</CardServiceStyle>
	)
};

export default CardService;
