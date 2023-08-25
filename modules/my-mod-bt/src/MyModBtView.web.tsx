import * as React from 'react';

import { MyModBtViewProps } from './MyModBt.types';

export default function MyModBtView(props: MyModBtViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
