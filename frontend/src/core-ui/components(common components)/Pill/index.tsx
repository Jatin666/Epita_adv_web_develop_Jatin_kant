import React, { useState } from 'react';

function Pill({ text, bgcolor, border }: any) {
  const [pillBg, setPillBg] = useState(bgcolor);
  const [pillBorder, setPillBorder] = useState(border);
  const [pushed, setPushed] = useState(false);
  let font = '';
  const toogle = () => {
    setPushed(!pushed);
    if (pushed) {
      setPillBg('bg-transparent');
      setPillBorder('border-2 border-blue-300');
      font = 'font-bold';
    } else {
      setPillBg(bgcolor);
      setPillBorder(border);
      font = '';
    }
  };
  return (
    <div>
      <button type="button" className={`${pillBg} ${pillBorder} ${font} px-4 py-1 rounded-full text-sm`} onClick={() => { toogle(); }}>
        {text}
      </button>
    </div>
  );
}

export default Pill;
