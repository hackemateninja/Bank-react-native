import styled from "styled-components/native";
import Styles from "../../../utils/styles";

export const ButtonContainer = styled.View`
	position: absolute;
	bottom: 50px;
	width: 100%;
	padding-horizontal: 16px;
`;

export const ButtonStyle = styled.TouchableOpacity`
	width: 100%;
	height: 50px;
	border-radius: ${Styles.radius.XLBig};
	background: ${Styles.colors.blue};
	padding-vertical: 16px;
	shadow-color: ${Styles.colors.light};
	shadow-radius: 10px;
	shadow-opacity: 0.5;
	elevation: ${5};
`;
export const ButtonDisableStyle = styled.View`
	width: 100%;
	height: 50px;
	border-radius: ${Styles.radius.XLBig};
	background: ${Styles.colors.lightBlue};
	padding-vertical: 16px;
	shadow-color: ${Styles.colors.light};
	shadow-radius: 10px;
	shadow-opacity: 0.5;
	elevation: ${5};
`;
export const IconButtonStyle = styled.TouchableOpacity`
	padding: 0;
	background: transparent;
`;
