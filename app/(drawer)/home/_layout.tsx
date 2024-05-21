import { DrawerToggleButton } from '@react-navigation/drawer';
import { Stack } from 'expo-router';

const Layout = () => {

  return <Stack
    screenOptions={{
      headerShown: false,
      headerLeft: () => <DrawerToggleButton />,
    }}
  ></Stack>;
};
export default Layout;