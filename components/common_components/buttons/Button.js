import React from 'react';
import {ButtonContainer, ButtonDisableStyle, ButtonStyle} from "./ButtonsStyle";
import Text from '../text/Text';
import Styles from "../../../utils/styles";
import Center from "../containers/Center";

const Button = ({title, disabled})=>{

	if (!disabled){
		return (
			<ButtonContainer>
				<ButtonStyle>
					<Center>
						<Text
							type="subtitle"
							color={Styles.colors.white}
							title={title.toString()}
						/>
					</Center>
				</ButtonStyle>
			</ButtonContainer>
		)
	}else {
		return (
			<ButtonContainer>
				<ButtonDisableStyle>
					<Center>
						<Text
							type="subtitle"
							color={Styles.colors.white}
							title={title.toString()}
						/>
					</Center>
				</ButtonDisableStyle>
			</ButtonContainer>
		)
	}
};
export default Button;
