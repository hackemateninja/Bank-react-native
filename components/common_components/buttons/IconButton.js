import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import Styles from "../../../utils/styles";
import {IconButtonStyle} from "./ButtonsStyle";

const IconButton = ({icon, size, onPress})=>{

	return (
		<IconButtonStyle>
			<AntDesign
				name={icon}
				size={size}
				color={Styles.colors.dark}
			/>
		</IconButtonStyle>
	);
}
export default IconButton;
