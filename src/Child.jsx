import { forwardRef, useImperativeHandle, useState } from "react";

const Child = (props, ref) => {
  const [openModel, setOpenModel] = useState(false);
  useImperativeHandle(ref, () => ({
    openModel: (value) => setOpenModel(value),
  }));

  if (!openModel) return null;     

  return (
    <div>
      <p>This is Child Model</p>
      <button onClick={() => setOpenModel(false)}>Close Model</button>
    </div>
  );
};

export default forwardRef(Child);            // use of forwardRef is helpful as it help to get through parent model to child model and vice-versa 
