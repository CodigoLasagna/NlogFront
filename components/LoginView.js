import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';

const LoginView = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [p_key, setPkey] = useState('');
	const [responseText, setResponseText] = useState('');

	const handleLogin = () => {
		const url = `http://localhost:5196/api/User/login/${p_key}`;

		const loginData = {
			email: email,
			password: password
		};

		axios.post(url, loginData)
			.then(response => {
				console.log('Respuesta del servidor:', response.data);
				setResponseText(response.data);
			})
			.catch(error => {
				console.error('Error al realizar la solicitud:', error);
			});
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
			<TextInput
				style={styles.input}
				placeholder="Llave"
				secureTextEntry
				value={p_key}
				onChangeText={setPkey}
			/>
			<TouchableOpacity style={styles.button} onPress={handleLogin}>
				<Text style={styles.buttonText}>Iniciar</Text>
			</TouchableOpacity>
			<Text style={styles.responseText}>{responseText}</Text>
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
	responseText: {
		margin: 10,
		fontSize: 24,
		maxWidth: 300,
		flexWrap: 'wrap',
		backgroundColor: '#4D65B4',
		borderRadius: 8,
		padding: 10,
	},
});

export default LoginView;
