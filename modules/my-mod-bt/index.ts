import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to MyModBt.web.ts
// and on native platforms to MyModBt.ts
import MyModBtModule from './src/MyModBtModule';
import MyModBtView from './src/MyModBtView';
import { ChangeEventPayload, MyModBtViewProps } from './src/MyModBt.types';

// Get the native constant value.
export const PI = MyModBtModule.PI;

export function hello(): string {
  return MyModBtModule.hello();
}

export async function setValueAsync(value: string) {
  return await MyModBtModule.setValueAsync(value);
}

const emitter = new EventEmitter(MyModBtModule ?? NativeModulesProxy.MyModBt);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { MyModBtView, MyModBtViewProps, ChangeEventPayload };
