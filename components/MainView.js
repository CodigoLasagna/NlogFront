import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import RegisterView from './RegisterView';
import LoginView from './LoginView';

const MainView = () => {
	const [activeTab, setActiveTab] = useState('register');

	return (
		<View style={styles.container}>
			<View style={styles.tabs}>
				<TouchableOpacity
					style={[styles.tab, activeTab === 'register' && styles.activeTab]}
					onPress={() => setActiveTab('register')}
				>
					<Text style={[styles.tabText, activeTab === 'register' ? styles.activeTabText : null]}>Crear cuenta</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.tab, activeTab === 'login' && styles.activeTab]}
					onPress={() => setActiveTab('login')}
				>
					<Text style={[styles.tabText, activeTab === 'login' ? styles.activeTabText : null]}>Iniciar sesión</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.contentView}>
				{activeTab === 'register' ? <RegisterView /> : <LoginView />}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1B232B',
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingTop: 50,
	},
	tabs: {
		flexDirection: 'row',
		marginBottom: 20,
	},
	tab: {
		flex: 1,
		alignItems: 'center',
		paddingVertical: 10,
		borderBottomColor: '#1F3B4D',
		borderBottomWidth: 5,
	},
	activeTab: {
		borderBottomColor: '#81DC26',
	},
	tabText: {
		fontSize: 16,
		marginHorizontal: 20,
		width: 200,
		fontWeight: 'bold',
		color: '#1F3B4D',
	},
	activeTabText: {
		color: '#5FC74B',
	},
	contentView: {
		flex: 1,
		width: '80%',
		height: '80%',
	},
});

export default MainView;
