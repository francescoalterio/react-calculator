import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import CurrentOp from "./components/CurrentOp";
import PreviewOp from "./components/PreviewOp";

export default function App() {
  const [state, setState] = useState({
    nextNum: true,
    previewOp1: "",
    previewOp2: "",
    operation: "",
  });

  console.log(state);

  const numAndOp = (buttonPress) => {
    setState({ ...state, operation: state.operation + buttonPress });
  };

  return (
    <div className=" w-full h-screen flex justify-center items-center bg-slate-600">
      <div className="w-80 bg-orange-400">
        <div className="w-full h-1/3 flex flex-col mb-px">
          <PreviewOp value={state.previewOp2} />
          <PreviewOp value={state.previewOp1} />
          <CurrentOp operation={state.operation} />
        </div>
        <div className="w-full flex flex-wrap bg-slate-900">
          <Button
            value={"AC"}
            type={"func"}
            state={state}
            setState={setState}
          />
          <Button value={"D"} type={"func"} state={state} setState={setState} />
          <Button value={"%"} type={"op"} state={state} setState={setState} />
          <Button value={"/"} type={"op"} state={state} setState={setState} />
          <Button value={"7"} type={"num"} state={state} setState={setState} />
          <Button value={"8"} type={"num"} state={state} setState={setState} />
          <Button value={"9"} type={"num"} state={state} setState={setState} />
          <Button value={"*"} type={"op"} state={state} setState={setState} />
          <Button value={"4"} type={"num"} state={state} setState={setState} />
          <Button value={"5"} type={"num"} state={state} setState={setState} />
          <Button value={"6"} type={"num"} state={state} setState={setState} />
          <Button value={"-"} type={"op"} state={state} setState={setState} />
          <Button value={"1"} type={"num"} state={state} setState={setState} />
          <Button value={"2"} type={"num"} state={state} setState={setState} />
          <Button value={"3"} type={"num"} state={state} setState={setState} />
          <Button value={"+"} type={"op"} state={state} setState={setState} />
          <Button value={"0"} type={"num"} state={state} setState={setState} />
          <Button value={"."} type={"op"} state={state} setState={setState} />
          <Button
            value={"="}
            type={"func equal"}
            state={state}
            setState={setState}
          />
        </div>
      </div>
    </div>
  );
}
