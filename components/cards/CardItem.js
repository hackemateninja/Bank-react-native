import React from 'react';
import Container from "../common_components/containers/Container";
import {CardItemStyle} from "./CardStyles";
import Row from "../common_components/containers/Row";
import Text from "../common_components/text/Text";
import Styles from "../../utils/styles";
import IconButton from "../common_components/buttons/IconButton";

const CardItem = ({title, route})=>{
	return (
		<Container>
			<CardItemStyle style={Styles.shadow}>
				<Row>
					<Text title={title} color={Styles.colors.dark} type="medium"/>
					<IconButton icon={Styles.icons.caretright} size={16}/>
				</Row>
			</CardItemStyle>
		</Container>
	);
};


export default CardItem;
