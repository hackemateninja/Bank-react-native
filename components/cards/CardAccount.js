import React from 'react';
import {CardAccountStyle, CardAccountTopStyle} from "./CardStyles";
import Styles from "../../utils/styles";
import Text from "../common_components/text/Text";
import Row from "../common_components/containers/Row";
import IconButton from "../common_components/buttons/IconButton";
import Container from "../common_components/containers/Container";

const CardAccount = ()=>{
	return(
		<CardAccountStyle>
			<CardAccountTopStyle>
				<Row>
					<Text
						title="Saldo disponible"
						type="small"
						color={Styles.colors.lightGrey}
					/>
					<IconButton icon={Styles.icons.right} size={15}/>
				</Row>
				<Text
					title="$2,800.50"
					type="subtitle"
					color={Styles.colors.dark}
				/>
			</CardAccountTopStyle>
			<Container>
				<Row>
					<Text
						title="No. de cuenta"
						type="small"
						color={Styles.colors.lightGrey}
					/>
					<Text
						title="3519205063222"
						type="small"
						color={Styles.colors.dark}
					/>
				</Row>
			</Container>
		</CardAccountStyle>
	);
};
export default CardAccount;
