import React from 'react'
import { SearchBar } from 'react-native-elements';
import { StyleSheet } from 'react-native'

export default class App extends React.Component {
	state = {
		search: '',
	};

	updateSearch = (search) => {
		this.setState({ search });
	};

	render() {
		const { search } = this.state;

		return (
			<SearchBar round
				style={styles.searchBar}
				searchIcon={false}
				placeholderTextColor="white"
				placeholder="Search Jacket"
				onChangeText={this.updateSearch}
				value={search}
				lightTheme={true}
				containerStyle={styles.searchcontainer}
			/>
		);
	}
}

const styles = StyleSheet.create({
	searchBar: {
		height: 50,
		width: 300,
		borderWidth: 0,
		shadowColor: 'white'
	},
	searchcontainer: {
		borderWidth: 0, //no effect
		shadowColor: 'white', //no effect
	},
})