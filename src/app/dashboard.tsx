import { Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native';
import { router } from 'expo-router';


export default function Dashboard() {
    const handleBack = () => {        // Handle back navigation
        router.back();
    }
    return (
      <View>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>dashboard</Text>
        <Button title="Voltar" onPress={handleBack} />
      </View>
    )
}