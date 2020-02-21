import React from 'react';
import Layout from "../../../components/layout/Layout";
import Header from "../../../components/common_components/headers/Header";
import Button from "../../../components/common_components/buttons/Button";

const PaymentThirdsScreen = ()=> {
	return (
		<Layout>
			<Header title="Pago de Terceros"/>
			<Button disabled={true} title="continuar"/>
		</Layout>
	);
}
export default PaymentThirdsScreen;
