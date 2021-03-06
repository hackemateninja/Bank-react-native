import React from 'react';
import {HeaderStyle} from "./HeaderStyles";
import Text from "../text/Text";
import Styles from "../../../utils/styles";
import IconButton from "../buttons/IconButton";


const Header = ({title})=> {

	return (
		<HeaderStyle>
			<IconButton
				size={26}
				icon={Styles.icons.arrowleft}
			/>
			<Text
				type="title"
				color={Styles.colors.dark}
				title={title}/>
		</HeaderStyle>
	);
}
export default Header;
