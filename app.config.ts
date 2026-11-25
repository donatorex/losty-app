import type { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Losty",
  slug: "losty",
  version: "0.1.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "losty",
  userInterfaceStyle: "light",
  backgroundColor: "#FFFFFF",
  platforms: ["ios"],
  ios: {
    supportsTablet: false,
    bundleIdentifier: "com.anonymous.losty",
    infoPlist: {
      CADisableMinimumFrameDurationOnPhone: true,
    },
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        backgroundColor: "#FFFFFF",
        image: "./assets/images/splash-icon.png",
        imageWidth: 76,
      },
    ],
    "expo-dev-client",
  ],
  experiments: {
    typedRoutes: true,
  },
});
