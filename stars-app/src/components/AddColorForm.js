// import React, { useRef } from "react";
import React from "react";
import { useInput } from './useInput';
import { useColors } from './color-hooks';

export default function AddColorForm({ onNewColor = f => f }) {
//   const txtTitle = useRef();
//   const hexColor = useRef();

//   // uncontrolled component as we mutate value of DOM directly
//   const submit = e => {
//     e.preventDefault();
//     const title = txtTitle.current.value;
//     const color = hexColor.current.value;
//     onNewColor(title, color);
//     txtTitle.current.value = "";
//     txtColor.current.value = "";
//   };

    const [titleProps, resetTitle] = useInput('');
    const [colorProps, resetColor] = useInput('');
    const { addColor } = useColors();

    const submit = e => {
        e.preventDefault();
        // onNewColor(titleProps.value, colorProps.value);
        addColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    };

    return (
    <form onSubmit={submit}>
        <input
          {...titleProps}
          type="text"
          placeholder="color title..."
          required
        />
        <input
          {...colorProps}
          type="color"
          required
        />
        <button>ADD</button>
    </form>
    );
}