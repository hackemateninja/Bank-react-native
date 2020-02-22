import React from 'react';
import Layout from "../../components/layout/Layout";
import Header from "../../components/common_components/headers/Header";
import Button from "../../components/common_components/buttons/Button";

const PaymentConfirmScreen = ()=> {
	return (
		<Layout>
			<Header title="Confirmación de pago"/>
			<Button title="Confirmar"/>
		</Layout>
	);
}
export default PaymentConfirmScreen;
