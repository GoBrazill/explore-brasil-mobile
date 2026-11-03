import { StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import OnboardingOne from './src/screens/OnboardingOne';
import OnboardingThree from './src/screens/OnboardingThree';
import OnboardingTwo from './src/screens/OnboardingTwo';

export default function App() {

  const [loaded] = useFonts({
    interLight: require('./src/assets/fonts/inter-24pt-light.ttf'),
    interRegular: require('./src/assets/fonts/inter-24pt-regular.ttf'),
    interSemiBold: require('./src/assets/fonts/inter-24pt-semi-bold.ttf'),
    interBold: require('./src/assets/fonts/inter-24pt-bold.ttf'),
    fugazOne: require('./src/assets/fonts/fugaz-one-regular.ttf'),
    sfProDisplayRegular: require('./src/assets/fonts/sf-pro-display-regular.ttf'),
    sfProDisplayMedium: require('./src/assets/fonts/sf-pro-display-medium.ttf'),
    sfProDisplayBold: require('./src/assets/fonts/sf-pro-display-bold.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <SafeAreaView>
      <View>
        {/* <OnboardingOne /> */}
        {/* <OnboardingTwo/> */}
        {/* <OnboardingThree/> */}
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

