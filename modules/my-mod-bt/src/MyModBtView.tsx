import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { MyModBtViewProps } from './MyModBt.types';

const NativeView: React.ComponentType<MyModBtViewProps> =
  requireNativeViewManager('MyModBt');

export default function MyModBtView(props: MyModBtViewProps) {
  return <NativeView {...props} />;
}
