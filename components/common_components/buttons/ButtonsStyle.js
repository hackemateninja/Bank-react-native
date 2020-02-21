import styled from "styled-components/native";
import Styles from "../../../utils/styles";

export const ButtonStyle = styled.TouchableOpacity`
	width: 100%;
	height: 50px;
	border-radius: ${Styles.radius.XLBig};
	background: ${Styles.colors.blue};
	padding: 16px;
`;
export const ButtonDisableStyle = styled.View`
	width: 100%;
	height: 50px;
	border-radius: ${Styles.radius.XLBig};
	background: ${Styles.colors.lightBlue};
	padding: 16px;
`;
export const IconButtonStyle = styled.TouchableOpacity`
	padding: 0;
	background: transparent;
`;
