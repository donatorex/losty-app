import { View } from 'react-native';

type SvgMockProps = {
  accessibilityLabel?: string;
};

export default function SvgMock({ accessibilityLabel }: SvgMockProps) {
  return <View accessible accessibilityLabel={accessibilityLabel} />;
}
