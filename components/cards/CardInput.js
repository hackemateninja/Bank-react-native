import React from 'react';
import {CardInputBottomContainer, CardInputStyle, CardInputTopContainer} from "./CardStyles";
import Text from "../common_components/text/Text";
import Styles from "../../utils/styles";
import InputTextComponent from "../inputs/InputTextComponent";


const CardInput = ({title})=>{
	return (
		<CardInputStyle>
			<CardInputTopContainer>
				<Text
					title={title}
					color={Styles.colors.dark}
					type="subtitle"
				/>
			</CardInputTopContainer>
			<CardInputBottomContainer>
				<InputTextComponent/>
			</CardInputBottomContainer>
		</CardInputStyle>
	);
}
export default CardInput;
