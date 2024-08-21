import { NativeModules } from 'react-native';

type NyxPrinterReactNativeType = {
  multiply(a: number, b: number): Promise<number>;
};

const { NyxPrinterReactNative } = NativeModules;

export default NyxPrinterReactNative as NyxPrinterReactNativeType;
