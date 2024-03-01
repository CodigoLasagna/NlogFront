import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';

const LoginView = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		console.log('Email:', email);
		console.log('Password:', password);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Iniciar sesión</Text>
			<TextInput
				style={styles.input}
				placeholder="Correo"
				keyboardType="email-address"
				value={email}
				onChangeText={setEmail}
			/>
			<TextInput
				style={styles.input}
				placeholder="Contraseña"
				secureTextEntry
				value={password}
				onChangeText={setPassword}
			/>
			<TouchableOpacity style={styles.button} onPress={handleLogin}>
				<Text style={styles.buttonText}>Iniciar</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1F3B4D',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 8,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#FFFFFF',
		marginBottom: 20,
	},
	input: {
		backgroundColor: '#FFFFFF',
		width: '80%',
		padding: 10,
		marginBottom: 10,
		borderRadius: 5,
	},
	button: {
		backgroundColor: '#5FC74B',
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 5,
	},
	buttonText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#FFFFFF',
	},
});

export default LoginView;
