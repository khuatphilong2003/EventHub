import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import ButtonComponents from '@/components/ButtonComponent'
import { Card } from '@/utils/Theme'
import DarkMode from '@/utils/darkMode.context'

const HomeScreen = () => {
  const {isDarkMode} = useContext(DarkMode)
  return (
    <View>
      <ButtonComponents text='Logngmg' type onPress={()=>console.log("Longmg")}/>
      <Card isDarkMode={isDarkMode}>
        <Text>Longmg</Text>
      </Card>
    </View>
  )
}

export default HomeScreen