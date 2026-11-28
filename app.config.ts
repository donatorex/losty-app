import type { ConfigContext, ExpoConfig } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Losty',
  slug: 'losty',
  version: '0.1.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'losty',
  userInterfaceStyle: 'light',
  backgroundColor: '#FBFAF7',
  platforms: ['ios'],
  ios: {
    supportsTablet: false,
    bundleIdentifier: 'com.donatorex.losty',
    infoPlist: {
      CADisableMinimumFrameDurationOnPhone: true,
    },
  },
  plugins: [
    'expo-router',
    [
      'expo-splash-screen',
      {
        backgroundColor: '#FBFAF7',
        image: './assets/images/splash-icon.png',
        imageWidth: 180,
      },
    ],
    'expo-dev-client',
    '@maplibre/maplibre-react-native',
  ],
  experiments: {
    typedRoutes: true,
  },
});
