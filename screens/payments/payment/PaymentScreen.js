import React from 'react';
import Layout from "../../../components/layout/Layout";
import Header from "../../../components/common_components/headers/Header";
import {View, Text, StyleSheet}from "react-native";
import Button from "../../../components/common_components/buttons/Button";

const PaymentScreen = ()=> {
	return (
		<Layout>
			<Header title="Pagos"/>
			<View elevation={20} style={styles.buttonContainer}>
				<Text style={styles.textStyle}>Shadow Applied</Text>
			</View>
			<Button title={"hola mundo"} />
		</Layout>
	);
}


const styles = StyleSheet.create({
	textStyle: {
		color: '#FFFFFF'
	},
	buttonContainer: {
		backgroundColor: '#ffff',
		borderRadius: 10,
		padding: 10,
		shadowColor: '#000000',
		shadowOffset: {
			width: 10,
			height: 10,
		},
		shadowRadius: 5,
		shadowOpacity: 1.0
	}
});
export default PaymentScreen;
