import React from 'react'

function SelectButtons({handleItemClick}) {


    return (
        <div className="dropdown" style={{ top: '50px', left: '50px', padding: '5px' }}>
            <ul>
                <button style={{ backgroundColor: '#a3c3f7', border: 'none', padding: '10px', cursor: 'pointer', borderRadius: '5px', marginRight: '5px' }} onClick={() => handleItemClick("treatment1")}>FILLING</button>
                <button style={{ backgroundColor: '#a3c3f7', border: 'none', padding: '10px', cursor: 'pointer', borderRadius: '5px', marginRight: '5px' }} onClick={() => handleItemClick("treatment2")}>IMPLANT</button>
                <button style={{ backgroundColor: '#a3c3f7', border: 'none', padding: '10px', cursor: 'pointer', borderRadius: '5px', marginRight: '5px' }} onClick={() => handleItemClick("treatment3")}>CUT</button>
                <button style={{ backgroundColor: '#a3c3f7', border: 'none', padding: '10px', cursor: 'pointer', borderRadius: '5px', marginRight: '5px' }} onClick={() => handleItemClick("treatment4")}>ROOT CANAL</button>
            </ul>
        </div>
    )
}

export default SelectButtons
