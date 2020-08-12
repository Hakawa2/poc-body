import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from "react-native-webview";

export default function App() {
	return (
		<>
         <StatusBar translucent={true} />
		 <WebView source={{ uri: "https://bodymindsuplementos.com.br/" }} style={{ marginTop: 25 }}/>
      	</>
	)
}

