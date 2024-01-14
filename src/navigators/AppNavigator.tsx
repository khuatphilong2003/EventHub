import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomNavigator from './BottomNavigator'
import { AppStackParamList } from './type'

const Stack = createNativeStackNavigator<AppStackParamList>()
const AppNavigator = () => {
    
    
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }}
    >
        <Stack.Screen
        name='Root'
        component={BottomNavigator}
        />
    </Stack.Navigator>
  )
}

export default AppNavigator