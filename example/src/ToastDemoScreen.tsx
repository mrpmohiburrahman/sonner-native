import { ToastDemo } from 'example/src/ToastDemo';
import { Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ToastDemoScreen: React.FC<any> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Button
        title="Show modal"
        onPress={() => {
          navigation.push('ToastDemoModal');
        }}
      />
      <ToastDemo />
    </SafeAreaView>
  );
};