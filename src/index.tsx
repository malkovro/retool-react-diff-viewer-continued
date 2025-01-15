import React from 'react'
import { type FC } from 'react'

import ReactDiffViewer from 'react-diff-viewer-continued';
import { Retool } from '@tryretool/custom-component-support'


export const DiffViewer: FC = () => {
  const [previousValue, _setPreviousValue] = Retool.useStateString({
    name: 'previousValue'
  });
  const [newValue, _setNewValue] = Retool.useStateString({
    name: 'newValue'
  });
  const [splitView, _setSplitView] = Retool.useStateBoolean({
    name: 'splitView'
  });
  const [disableWordDiff, _setDisableWordDiff] = Retool.useStateBoolean({
    name: 'disableWordDiff'
  });

  return <ReactDiffViewer disableWordDiff={disableWordDiff} oldValue={previousValue} newValue={newValue} splitView={splitView ?? true} />;
}
