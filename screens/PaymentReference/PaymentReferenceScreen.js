import React from 'react';
import Layout from "../../components/layout/Layout";
import Header from "../../components/common_components/headers/Header";
import Button from "../../components/common_components/buttons/Button";

const PaymentReferenceScreen = ()=> {
	return (
		<Layout>
			<Header title="Pago referenciado"/>
			<Button title="Buscar"/>
		</Layout>
	);
}
export default PaymentReferenceScreen;
