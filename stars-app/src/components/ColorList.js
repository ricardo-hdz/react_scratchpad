import React, { useContext } from 'react';
import Color from './Color';
import { ColorContext } from '../';
import { useColors } from './color-hooks';

// export default function ColorList({
//     colors = [],
//     onRemoveColor = f => f,
//     onRateColor = f => f
// }) {
//     return (
//         <div>
//             { 
//                 colors.length === 0 ?
//                 (<p>No colors listed. (Add a color)</p>) :
//                 ( colors.map(color => 
//                     <Color key={color.id} { ...color } 
//                         onRemove={onRemoveColor}
//                         onRate={onRateColor}
//                     /> 
//                 ))
//             }
//         </div>
//     );
// }

export default function ColorList() {
    // const { colors } = useContext(ColorContext);
    const { colors } = useColors();
    return (
        <div className='color-list'>
            {colors.length === 0 ? 
                (<p>No Colors listed. (Add a color)</p>) :
                colors.map(color => <Color key={color.id} {...color} />)
            }
        </div>
    );
}