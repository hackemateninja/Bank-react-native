import React from 'react';
import Layout from "../../components/layout/Layout";
import Header from "../../components/common_components/headers/Header";
import Button from "../../components/common_components/buttons/Button";
import CardInput from "../../components/cards/CardInput";
import {Body} from "./PaymentConfirmStyles";
import Container from "../../components/common_components/containers/Container";
import Text from "../../components/common_components/text/Text";
import Styles from "../../utils/styles";
import CardAccount from "../../components/cards/CardAccount";

const PaymentConfirmScreen = ()=> {
	return (
		<Layout>
			<Header title="Confirmación de pago"/>
			<Body>
				<Container>
					<Text
						type="subtitle"
						color={Styles.colors.dark}
						title="Seleccionar cuenta"
					/>
				</Container>
				<Container>
					<CardAccount/>
				</Container>
				<Container>
					<Text
						type="subtitle"
						color={Styles.colors.lightGrey}
						title="Ingrese su contraseña y código OTP"
					/>
				</Container>
				<CardInput title="Contraseña"/>
				<CardInput title="Codigo OTP"/>
				<Button title="Confirmar" disabled={true}/>
			</Body>
		</Layout>
	);
}
export default PaymentConfirmScreen;
