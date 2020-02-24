import React from 'react';
import Layout from "../../components/layout/Layout";
import Header from "../../components/common_components/headers/Header";
import Button from "../../components/common_components/buttons/Button";
import CardInput from "../../components/cards/CardInput";
import {Body} from "./PaymentReferenceScreenStyles";
import Text from "../../components/common_components/text/Text";
import Styles from "../../utils/styles";
import Container from "../../components/common_components/containers/Container";

const PaymentReferenceScreen = ()=> {
	return (
		<Layout>
			<Header title="Pago referenciado"/>
			<Body>
				<Container>
					<Text
						type="subtitle"
						color={Styles.colors.lightGrey}
						title="Ingrese la referencia de pago"/>
				</Container>
				<CardInput title="Referencia"/>
				<Button title="Buscar"/>
			</Body>
		</Layout>
	);
}
export default PaymentReferenceScreen;
