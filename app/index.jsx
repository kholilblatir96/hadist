import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';


const index = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 40 }}>SELAMAT DATANG</Text>
      <TouchableOpacity style={{ padding: 20, backgroundColor: 'yellow', borderRadius: 10, }} onPress={() => router.push({})pathname: '/Hadist' }>
        <Text>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  )
}

export default index