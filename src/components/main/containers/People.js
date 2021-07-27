import React, { useRef, useState } from "react";

const People = () => {
  const [val, setVal] = useState("react");
  const inputEl = useRef(null);
  const handelType = () => {
    let inputValue = inputEl.current.value;
    setVal(inputValue);
  };

  return (
    <>
      <h3>this is from useState</h3>
      <input
        type="text"
        onKeyDown={handelType}
        defaultValue={val}
        ref={inputEl}
      />
      <br />
      <h2>{val}</h2>
    </>
  );
};

export default People;
