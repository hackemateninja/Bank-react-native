import React from 'react';
import Layout from "../../../components/layout/Layout";
import Header from "../../../components/common_components/headers/Header";
import CardItem from "../../../components/cards/CardItem";
import {Body} from "./PaymenScreenStyles";

const PaymentScreen = ()=> {
	return (
		<Layout>
			<Header title="Pagos"/>
			<Body>
				<CardItem title="Pago a servicios"/>
				<CardItem title="Pago de terceros"/>
				<CardItem title="Historial de pagos"/>
			</Body>
		</Layout>
	);
}

export default PaymentScreen;
