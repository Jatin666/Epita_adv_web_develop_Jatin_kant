/* eslint-disable linebreak-style */
import React, { useState } from 'react';

function Checkbox({
  label, identifier,
}:any) {
  const basestyle = 'h-5 w-5 mr-2 border rounded';
  const [checked, setChecked] = useState(false);
  const [boxClass, setBoxClass] = useState('h-5 w-5 mr-2 border bg-white text-white');
  const [labelClass, setLabelClass] = useState('');
  const check = () => {
    setChecked(!checked);

    if (checked) {
      setBoxClass(`${basestyle} bg-light-blue text-light-blue`);
      setLabelClass('font-bold');
    } else {
      setBoxClass(`${basestyle} bg-white text-white`);
      setLabelClass('');
    }
  };
  return (
    <div>
      <input id={identifier} type="checkbox" style={{ display: 'none' }} />
      <div className="flex items-center">
        <div className={boxClass}>
          d
        </div>
        <label htmlFor={identifier}>
          <button type="button" onClick={() => check()} className={labelClass}>
            {label}
            {checked}
          </button>
        </label>
      </div>
    </div>
  );
}

export default Checkbox;
