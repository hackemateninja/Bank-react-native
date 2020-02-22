import styled from "styled-components/native";
import Styles from "../../utils/styles";

export const CardItemStyle = styled.View`
	background: ${Styles.colors.white};
	padding: 17px;
	border-radius: ${Styles.radius.medium};
	shadow-color: ${Styles.colors.light};
	shadow-radius: 10px;
	shadow-opacity: 0.5;
	elevation: ${5};
`;

export const CardServiceStyle = styled.TouchableOpacity`
	width: 48%;
	height: 120px;
	background: ${props => props.color};
	border-radius: ${Styles.radius.medium};
	shadow-color: ${Styles.colors.light};
	shadow-radius: 10px;
	shadow-opacity: 0.5;
	elevation: ${5};
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin-bottom: 16px;
`;


export const IconCard = styled.Image`
	width: 38px;
	height: 40px;
`;
