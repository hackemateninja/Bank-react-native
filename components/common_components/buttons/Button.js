import React from 'react';
import {ButtonDisableStyle, ButtonStyle} from "./ButtonsStyle";
import Text from '../text/Text';
import Styles from "../../../utils/styles";
import Center from "../containers/Center";
import Container from "../containers/Container";
import isDisabled from "react-native-web/dist/modules/AccessibilityUtil/isDisabled";

const Button = ({title, disabled})=>{

	if (!disabled){
		return (
			<Container>
				<ButtonStyle>
					<Center>
						<Text
							type="subtitle"
							color={Styles.colors.white}
							title={title.toString()}
						/>
					</Center>
				</ButtonStyle>
			</Container>
		)
	}else {
		return (
			<Container>
				<ButtonDisableStyle>
					<Center>
						<Text
							type="subtitle"
							color={Styles.colors.white}
							title={title.toString()}
						/>
					</Center>
				</ButtonDisableStyle>
			</Container>
		)
	}
};
export default Button;
