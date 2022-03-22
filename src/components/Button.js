import React, { useState } from "react";

const Button = ({ value, type, state, setState }) => {
  const buttonFunc = () => {
    if (type === "op" && !state.nextNum) {
      setState({ ...state, operation: state.operation + value, nextNum: true });
    } else if (type === "num") {
      setState({
        ...state,
        operation: state.operation + value,
        nextNum: false,
      });
    } else if (value === "AC") {
      if (!state.operation) {
        setState({ ...state, previewOp1: "", previewOp2: "" });
      } else {
        setState({ ...state, operation: "" });
      }
    } else if (value === "=") {
      const result = eval(state.operation);
      setState({
        ...state,
        previewOp2: state.previewOp1,
        previewOp1: state.operation,
        operation: result,
      });
    } else if (value === "D") {
      if (state.operation.length > 1) {
        setState({
          ...state,
          nextNum: false,
          operation: state.operation.substring(0, state.operation.length - 1),
        });
      } else {
        setState({
          ...state,
          nextNum: true,
          operation: state.operation.substring(0, state.operation.length - 1),
        });
      }
    }
  };

  return value === "0" ? (
    <button
      className=" w-40 h-14 cursor-pointer bg-none text-white text-lg hover:bg-orange-400"
      onClick={buttonFunc}
    >
      {value}
    </button>
  ) : (
    <button
      className=" w-20 h-14 cursor-pointer bg-none text-white text-lg hover:bg-orange-400"
      onClick={buttonFunc}
    >
      {value}
    </button>
  );
};

export default Button;
