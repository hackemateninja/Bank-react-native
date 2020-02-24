import styled from "styled-components/native";
import Styles from "../../../utils/styles";

export const Title = styled.Text`
	font-size: ${Styles.fonts.xl};
	font-weight: ${Styles.fonts.bold};
	color: ${props => props.color};
`;

export const SubTitle = styled.Text`
	font-size: ${Styles.fonts.l};
	font-weight: ${Styles.fonts.semiBold};
	color: ${props => props.color};
`;

export const Medium = styled.Text`
	font-size: ${Styles.fonts.m};
 	font-weight: ${Styles.fonts.medium};
 	color: ${props => props.color};
`;

export const Small = styled.Text`
	font-size: ${Styles.fonts.s};
	font-weight: ${Styles.fonts.medium};
	color: ${props => props.color};
`;
