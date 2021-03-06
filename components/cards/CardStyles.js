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
	elevation: ${10};
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin-bottom: 16px;
`;

export const CardInputStyle = styled.View`
	width: 100%;
	background: ${Styles.colors.white};
`;
export const CardInputTopContainer = styled.View`
	padding-top: 14px;
	padding-left: 31px;
	padding-bottom: 0px;
`;
export const CardInputBottomContainer = styled.View`
	padding-horizontal: 16px;
	padding-bottom: 14px;
`;

export const CardAccountStyle = styled.View`
	background: ${Styles.colors.white};
	border-radius: ${Styles.radius.medium};
 	shadow-color: ${Styles.colors.light};
	shadow-radius: 10px;
	shadow-opacity: 0.5;
	elevation: ${10};
`;

export const CardAccountTopStyle = styled.View`
	margin-top: 13px;
	margin-bottom: 11px;
	margin-horizontal: 16px;
	padding-bottom: 11px;
	border-bottom-color: ${Styles.colors.light};
	border-bottom-width: 1px;
`;

export const IconCard = styled.Image`
	width: 38px;
	height: 40px;
`;
