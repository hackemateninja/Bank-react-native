import React from 'react';
import Layout from "../../components/layout/Layout";
import Header from "../../components/common_components/headers/Header";
import Button from "../../components/common_components/buttons/Button";

const PaymentDetailsScreen = ()=> {
	return (
		<Layout>
			<Header title="Pago de electricidad"/>
			<Button title="Realizar pago"/>
		</Layout>
	);
}
export default PaymentDetailsScreen;
