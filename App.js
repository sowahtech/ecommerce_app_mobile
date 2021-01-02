import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import JacketList1 from './JacketList1'
import IndividualJacket from './IndividualJacket'

export default function App() {
	return (
		<View style={styles.container}>
			<JacketList1 />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#E3E1E6",
		height: 900
	}
});
