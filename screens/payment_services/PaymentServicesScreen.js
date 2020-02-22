import React from 'react';
import Layout from "../../components/layout/Layout";
import Header from "../../components/common_components/headers/Header";
import CardService from "../../components/cards/CardService";
import Styles from "../../utils/styles";
import {Body} from "./PaymentServicesStyle";
import Container from "../../components/common_components/containers/Container";
import Row from "../../components/common_components/containers/Row";


const PaymentServicesScreen = ()=> {
	return (
		<Layout>
			<Header title="Pago de servicios"/>
			<Body>
				<Container>
					<Row>
						<CardService
							icon={require('../../assets/img/Light.png')}
							title="Electricidad"
							color={Styles.colors.yellow}
						/>
						<CardService
							icon={require('../../assets/img/phone.png')}
							title="Teléfono"
							color={Styles.colors.purple}
						/>
					</Row>
					<Row>
						<CardService
							icon={require('../../assets/img/water.png')}
							title="Agua"
							color={Styles.colors.aqua}
						/>
						<CardService
							icon={require('../../assets/img/wifi.png')}
							title="Internet"
							color={Styles.colors.salmon}
						/>
					</Row>
				</Container>
			</Body>
		</Layout>
	);
}
export default PaymentServicesScreen;
