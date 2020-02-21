import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import Styles from "../../../utils/styles";
import {IconButtonStyle} from "./ButtonsStyle";

const IconButton = ({onPress})=>{

	return (
		<IconButtonStyle>
			<AntDesign
				name={Styles.icons.arrowleft}
				size={26}
				color={Styles.colors.dark}
			/>
		</IconButtonStyle>
	);
}
export default IconButton;
