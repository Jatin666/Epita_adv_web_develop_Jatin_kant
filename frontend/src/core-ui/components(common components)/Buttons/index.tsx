/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
import React from 'react';

const Buttons: React.FC<{ classes: { btn: string }, children: any, onClick?: any, style?:any }> = ({
  classes, children, onClick, style,
}) => {
  return (
    <button style={style} className={`${classes.btn} rounded-full font-medium text-sm`} onClick={onClick}>{children}</button>
  );
};

// function Buttons({
//   text, bgcolor, textcolor, wsize, hsize, isicon,
// }:any) {
//   const customeStyle = {
//     color: textcolor,
//   };

//   let customeClassName = `${wsize} ${bgcolor} rounded-full font-medium text-sm`;
//   if (isicon) {
//     customeClassName = `${hsize} ${customeClassName} flex items-center justify-center`;
//     return (
//       <button type="button" style={customeStyle} className={customeClassName}>
//         <img src="/icons/arrow-right.svg" alt="arrow icon" />
//       </button>
//     );
//   }
//   customeClassName = `py-2 ${customeClassName}`;

//   return (
//     <button type="button" style={customeStyle} className={customeClassName}>
//       {text}
//     </button>
//   );
// }

export default Buttons;
