import React, { useState } from 'react';
import './App.css';
import Button from './components/Button'
import CurrentOp from './components/CurrentOp'
import PreviewOp from './components/PreviewOp'

export default function App() {

  const [ state, setState ] = useState({
    nextNum: true,
    previewOp1: '',
    previewOp2: '',
    operation: ''
  })

  console.log(state)

  const numAndOp = buttonPress => {
    setState({...state, operation: state.operation + buttonPress})
  }

  return (
    <div className='background'>
      <div className="calculator">
        <div className='box-results'>
          <PreviewOp value={state.previewOp2} />
          <PreviewOp value={state.previewOp1} />
          <CurrentOp operation={state.operation} />
        </div>
        <div className="box-buttons">
          <Button value={'AC'} type={'func'} state={state} setState={setState} />
          <Button value={'D'} type={'func'} state={state} setState={setState} />
          <Button value={'%'} type={'op'} state={state} setState={setState} />
          <Button value={'/'} type={'op'} state={state} setState={setState} />
          <Button value={'7'} type={'num'} state={state} setState={setState} />
          <Button value={'8'} type={'num'} state={state} setState={setState} />
          <Button value={'9'} type={'num'} state={state} setState={setState} />
          <Button value={'*'} type={'op'} state={state} setState={setState} />
          <Button value={'4'} type={'num'} state={state} setState={setState} />
          <Button value={'5'} type={'num'} state={state} setState={setState} />
          <Button value={'6'} type={'num'} state={state} setState={setState} />
          <Button value={'-'} type={'op'} state={state} setState={setState} />
          <Button value={'1'} type={'num'} state={state} setState={setState} />
          <Button value={'2'} type={'num'} state={state} setState={setState} />
          <Button value={'3'} type={'num'} state={state} setState={setState} />
          <Button value={'+'} type={'op'} state={state} setState={setState} />
          <Button value={'0'} type={'num'} state={state} setState={setState} />
          <Button value={'.'} type={'op'} state={state} setState={setState} />
          <Button value={'='} type={'func equal'} state={state} setState={setState} />
        </div>
      </div>
    </div>
  );
}
