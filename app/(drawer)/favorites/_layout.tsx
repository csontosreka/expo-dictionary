import { DrawerToggleButton } from '@react-navigation/drawer';
import { Stack } from 'expo-router';
import { useTheme } from 'tamagui';


const Layout = () => {
  const theme = useTheme();

  return <Stack
    screenOptions={{
      headerShown: true,
      headerStyle: { backgroundColor: theme.color7.get() },
      headerTintColor: '#fff',
      headerLeft: () => <DrawerToggleButton tintColor='#fff'/>,
    }}
  ></Stack>;
};
export default Layout;