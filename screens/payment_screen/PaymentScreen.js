import React from 'react';
import LayoutComponent from "../../components/layout/LayoutComponent";
import {Text} from "react-native";
import HeaderComponent from "../../components/common_components/headers/HeaderComponent";

const PaymentScreen = ()=> {
	return (
		<LayoutComponent>
			<HeaderComponent/>
			<Text style={{color: 'red', textAlign: 'center'}}>
				{"hola mundo"}
			</Text>
		</LayoutComponent>
	);
}
export default PaymentScreen;
