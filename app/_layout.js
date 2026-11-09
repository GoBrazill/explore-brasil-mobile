import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* Hides the header for the login screen */}
      <Stack.Screen name="login" options={{ headerShown: false }} />
      {/* Home screen can have a header */}
      <Stack.Screen name="index" options={{ title: 'Home' }} />
    </Stack>
  );
}