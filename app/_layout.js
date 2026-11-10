import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';

export default function RootLayout() {

  const [loaded] = useFonts({
    interLight: require('../src/assets/fonts/inter-24pt-light.ttf'),
    interRegular: require('../src/assets/fonts/inter-24pt-regular.ttf'),
    interMedium: require('../src/assets/fonts/inter-24pt-medium.ttf'),
    interSemiBold: require('../src/assets/fonts/inter-24pt-semi-bold.ttf'),
    interBold: require('../src/assets/fonts/inter-24pt-bold.ttf'),
    fugazOne: require('../src/assets/fonts/fugaz-one-regular.ttf'),
    sfProDisplayRegular: require('../src/assets/fonts/sf-pro-display-regular.ttf'),
    sfProDisplayMedium: require('../src/assets/fonts/sf-pro-display-medium.ttf'),
    sfProDisplayBold: require('../src/assets/fonts/sf-pro-display-bold.ttf'),
    googleSansMedium: require('../src/assets/fonts/google-sans-medium.ttf'),
  })

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />

      <Stack.Screen name="login" options={{ headerShown: false }} />
      
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      
      <Stack.Screen name="category" options={{ headerShown: false }} />
      
      <Stack.Screen name="comming-soon" options={{ headerShown: false }} />
      
      <Stack.Screen name="map" options={{ headerShown: false }} />
      
      <Stack.Screen name="onboarding-one" options={{ headerShown: false }} />
      
      <Stack.Screen name="onboarding-two" options={{ headerShown: false }} />
      
      <Stack.Screen name="onboarding-three" options={{ headerShown: false }} />
      
      <Stack.Screen name="place-detail" options={{ headerShown: false }} />
      
      <Stack.Screen name="profile" options={{ headerShown: false }} />
    </Stack>
  );
}