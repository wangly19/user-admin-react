import React from 'react';

import Style from './index.less';

import { SmileTwoTone } from '@ant-design/icons';
import { Hexagonal } from '@icon-park/react';

export default function LayoutToolBars() {
  return (
    <div className={Style.layoutHeader}>
      <div className={Style.logo}>
        <SmileTwoTone />
        <Hexagonal
          theme="multi-color"
          size="24"
          fill={['#333', '#2F88FF', '#FFF', '#43CCF8']}
        />
      </div>
    </div>
  );
}
