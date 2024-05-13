import { useFonts } from 'expo-font';
import { Slot, SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { TamaguiProvider, Theme } from 'tamagui';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClientProvider } from '@tanstack/react-query';
import config from '@/tamagui.config';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
	const [loaded] = useFonts({
		Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
		InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf")
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) return null;

	// TODO Safeareaprovider, https://docs.expo.dev/router/advanced/tabs/
	return (
		<TamaguiProvider config={config}>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<Theme name={'orange'}>
					<Slot />
				</Theme>
			</GestureHandlerRootView>
		</TamaguiProvider>
	);
}
