import React from 'react';
import {ButtonStyle} from "./ButtonsStyle";
import Text from '../text/Text';
import Styles from "../../../utils/styles";
import Center from "../containers/Center";
import Container from "../containers/Container";

const Button = ({title})=>{
	return(
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
	);
};
export default Button;
