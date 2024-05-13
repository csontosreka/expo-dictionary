import Ionicons from '@expo/vector-icons/Ionicons';
import { colorTokens } from '@tamagui/themes';
import Drawer from 'expo-router/drawer';
import { useTheme } from 'tamagui';

const Layout = () => {
  const theme = useTheme();

  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerHideStatusBarOnOpen: true,
        drawerActiveBackgroundColor: colorTokens.dark.orange.orange7,
        drawerActiveTintColor: '#fff',
        drawerLabelStyle: { marginLeft: -20 },
      }}>
      <Drawer.Screen
        name="home"
        options={{
          title: 'Expo Dictionary',
          headerShown: true,
          headerStyle: { backgroundColor: theme.orange7.get() },
          headerTintColor: '#fff',
          drawerIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />

      <Drawer.Screen
        name="favorites"
        options={{
          title: 'My Favorites',
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
};

export default Layout;