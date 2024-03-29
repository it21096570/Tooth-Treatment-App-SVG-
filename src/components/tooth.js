import React, { useState } from 'react';
import dataObj from './method.js'
import SelectButtons from './SelectButtons.js';

function App() {


    const [showDropdown, setShowDropdown] = useState(false);
    const [dataState, setDataState] = useState(dataObj);
    const [toothNo, setToothNo] = useState(null);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const [tooltipContent, setTooltipContent] = useState('');

    console.log(dataObj)

    const handleToothClick = (pathId) => {

        if (toothNo != pathId) {
            setShowDropdown(true);
        } else {
            setShowDropdown(!showDropdown);
        }
        setToothNo(pathId)
    };

    const toothData = {};
    dataObj.forEach(tooth => {
        toothData[tooth.toothNo] = tooth;
    });

    const handleItemClick = (treatmentId) => {
        const tooth = toothData[toothNo];
        if (tooth) {
            const treatment = tooth.treatments.find(treatment => treatment.treatmentId === treatmentId);
            if (treatment) {
                treatment.isNeedToTreat = !treatment.isNeedToTreat;
                setDataState([...dataState]);
            }
        }
    };

    // const handleItemClick = (item) => {
    //     // setShowDropdown(true);

    //     const currntValue = dataState.find((tooth) => tooth.toothNo === toothNo).
    //         treatments.find((treatment) => treatment.treatmentId === item).
    //         isNeedToTreat

    //     if (!currntValue) {
    //         dataState.find((tooth) => tooth.toothNo === toothNo).
    //             treatments.find((treatment) => treatment.treatmentId === item).
    //             isNeedToTreat = true;
    //     } else {
    //         dataState.find((tooth) => tooth.toothNo === toothNo).
    //             treatments.find((treatment) => treatment.treatmentId === item).
    //             isNeedToTreat = false;
    //     }

    //     setDataState(dataState);

    // };

    const handleMouseEnter = (event, toothNumber) => {
        const treatmentsToTreat = dataObj.find(tooth => tooth.toothNo === toothNumber)?.treatments
            .filter(treatment => treatment.isNeedToTreat)
            .map(treatment => treatment.treatment);

        console.log(treatmentsToTreat);

        const tooltipContent = `Tooth ${toothNumber}\n`;
        const treatmentsContent = treatmentsToTreat.join(' | ');

        if (treatmentsContent) {
            setTooltipContent(tooltipContent + " : " + treatmentsContent);
            setTooltipPosition({ x: event.pageX, y: event.pageY });
        } else {
            setTooltipContent(tooltipContent + treatmentsContent);
            setTooltipPosition({ x: event.pageX, y: event.pageY });
        }

    };

    const handleMouseLeave = () => {
        setTooltipContent('');
    };


    return (
        <div className="App">

            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="80.000000%" height="35.000000%" viewBox="0 0 300.000000 135.000000" preserveAspectRatio="xMidYMid meet">


                <g transform="translate(0.000000,135.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">

                    {/* Tooth 01 */}
                    <g onClick={() => handleToothClick(1)} style={{ cursor: 'pointer', fill: toothNo === 1 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 1)} onMouseLeave={handleMouseLeave}>

                        <rect x="70" y="770" width="90" height="445" fill="transparent" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M95 1198 c-4 -14 -15 -98 -18 -137 -2 -19 4 -26 28 -32 50 -14 60 6 45 87 -11 67 -23 94 -42 94 -5 0 -10 -6 -13 -12z m44 -70 c1 -11 -6 -18 -17 -18 -19 0 -22 19 -7 54 8 19 9 19 16 0 4 -10 8 -27 8 -36z m9 -51 c6 -32 -5 -45 -32 -40 -21 4 -26 11 -26 35 0 26 3 29 27 26 17 -2 29 -10 31 -21z" id="path1" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M90 972 c-28 -23 -19 -69 16 -78 30 -8 40 -1 52 36 9 23 8 33 -4 45 -20 20 -37 19 -64 -3z m60 -7 c10 -12 10 -16 -1 -19 -42 -13 -44 -14 -25 -15 15 -1 16 -4 6 -15 -12 -15 -44 -10 -34 5 3 5 0 9 -5 9 -18 0 -13 28 7 39 24 14 38 13 52 -4z" id="path21" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M81 836 c-19 -22 -4 -53 27 -59 35 -7 54 9 50 42 -2 21 -9 27 -34 29 -18 2 -36 -3 -43 -12z m67 -20 c5 -22 -13 -35 -39 -29 -12 4 -19 14 -19 30 0 21 4 24 27 21 18 -2 29 -10 31 -22z" id="path48" />
                    </g>

                    {/* Tooth 02 */}
                    <g onClick={() => handleToothClick(2)} style={{ cursor: 'pointer', fill: toothNo === 2 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 2)} onMouseLeave={handleMouseLeave}>

                        <rect
                            x="235" y="810" width="80" height="390" fill="transparent"
                        />

                        <path xmlns="http://www.w3.org/2000/svg" d="M260 1185 c0 -25 -5 -65 -12 -89 -15 -56 -2 -76 48 -73 53 4 59 17 45 84 -18 80 -39 123 -62 123 -16 0 -19 -8 -19 -45z m58 -27 c10 -38 10 -38 -19 -38 -28 0 -29 2 -28 43 1 23 4 32 6 20 2 -13 9 -23 15 -23 6 0 8 11 3 28 -10 42 11 14 23 -30z m16 -64 c9 -24 7 -54 -4 -55 -58 -6 -82 3 -75 26 3 8 7 22 10 30 6 20 61 20 69 -1z" id="path2" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M280 989 c-27 -11 -40 -26 -40 -49 0 -8 6 -4 13 10 9 17 22 26 45 28 18 2 32 -1 32 -7 0 -6 0 -14 1 -18 0 -5 -10 -11 -23 -15 l-23 -6 25 -1 c18 -1 21 -4 13 -12 -15 -15 -56 -17 -66 -4 -5 6 -7 4 -5 -4 6 -21 60 -34 75 -18 6 6 13 27 15 46 4 42 -24 64 -62 50z" id="path17" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M280 851 c-27 -5 -36 -11 -38 -29 -5 -33 15 -52 54 -52 27 0 37 5 46 25 17 37 -13 64 -62 56z m54 -49 c-6 -9 -25 -18 -43 -20 -26 -3 -31 0 -31 17 0 12 -1 24 -2 28 -2 4 11 10 27 14 38 7 65 -13 49 -39z" id="path42" />
                    </g>

                    {/* Tooth 03 */}
                    <g onClick={() => handleToothClick(3)} style={{ cursor: 'pointer', fill: toothNo === 3 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 3)} onMouseLeave={handleMouseLeave}>

                        <rect x="400" y="800" width="150" height="450" fill="transparent" />


                        <path xmlns="http://www.w3.org/2000/svg" d="M455 1232 c-3 -3 -5 -24 -5 -47 0 -24 -7 -62 -15 -85 -14 -39 -14 -45 1 -61 25 -28 99 -21 108 9 3 9 -5 55 -17 101 -19 73 -25 85 -45 86 -12 1 -24 -1 -27 -3z m59 -74 c7 -37 6 -38 -24 -38 -30 0 -30 0 -29 53 l1 52 11 -35 11 -35 4 40 c4 44 13 32 26 -37z m16 -74 c14 -36 -2 -54 -48 -51 -30 2 -38 6 -40 25 -6 39 5 52 43 52 29 0 37 -5 45 -26z" id="path3" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M480 993 c-27 -10 -50 -36 -50 -57 1 -16 4 -13 15 12 13 29 19 33 47 30 23 -2 34 -9 36 -22 2 -10 0 -16 -5 -13 -4 2 -17 1 -28 -4 -19 -7 -19 -8 3 -8 27 -1 29 -17 2 -24 -12 -3 -24 1 -31 11 -8 14 -9 12 -3 -8 6 -22 5 -23 -10 -11 -10 9 -16 10 -16 2 0 -6 3 -11 8 -12 4 0 19 -2 34 -4 33 -4 47 11 50 54 3 36 -24 63 -52 54z" id="path18" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M444 847 c-19 -11 -18 -52 2 -71 33 -34 94 -9 94 38 0 13 -6 28 -12 34 -15 12 -62 11 -84 -1z m79 -6 c11 -2 8 -46 -5 -59 -22 -22 -58 -14 -68 14 -16 41 8 56 73 45z" id="path43" />

                    </g>

                    {/* Tooth 04 */}
                    <g onClick={() => handleToothClick(4)} style={{ cursor: 'pointer', fill: toothNo === 4 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 4)} onMouseLeave={handleMouseLeave}>

                        <rect x="660" y="790" width="100" height="450" fill="transparent" />

                        <path xmlns="http://www.w3.org/2000/svg" d="M702 1233 c-1 -38 -7 -92 -14 -121 -10 -49 -10 -55 9 -74 16 -16 25 -18 41 -9 27 14 32 31 22 77 -5 21 -15 72 -22 113 -17 96 -33 102 -36 14z m37 -80 c1 -16 -3 -21 -14 -17 -16 7 -21 68 -8 101 6 14 9 8 15 -22 4 -22 7 -50 7 -62z m9 -57 c12 -24 12 -30 -3 -46 -14 -15 -22 -17 -36 -9 -21 11 -23 26 -9 64 12 32 30 28 48 -9z" id="path4" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M695 976 c-29 -21 -10 -70 27 -74 23 -3 29 2 34 24 12 49 -23 78 -61 50z m50 -6 c4 -6 1 -17 -5 -25 -10 -11 -10 -15 -1 -15 7 0 9 -4 6 -10 -13 -20 -45 -10 -51 16 -9 35 33 62 51 34z" id="path22" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M698 859 c-32 -18 -15 -89 20 -89 25 0 42 20 42 50 0 43 -27 60 -62 39z m47 -44 c0 -23 -5 -31 -21 -33 -16 -2 -23 4 -28 23 -8 33 0 47 27 43 17 -2 22 -10 22 -33z" id="path33" />

                    </g>

                    {/* Tooth 05 */}
                    <g onClick={() => handleToothClick(5)} style={{ cursor: 'pointer', fill: toothNo === 5 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 5)} onMouseLeave={handleMouseLeave}>

                        <rect x="820" y="800" width="100" height="450" fill="transparent" />

                        <path xmlns="http://www.w3.org/2000/svg" d="M852 1202 c-6 -53 -14 -109 -18 -124 -5 -21 -1 -30 21 -44 25 -16 27 -16 46 3 19 18 20 25 9 84 -25 138 -32 169 -39 173 -4 3 -12 -39 -19 -92z m37 -24 c1 -29 -3 -38 -15 -38 -13 0 -15 7 -10 31 3 17 6 46 7 63 1 30 1 30 9 6 4 -14 8 -42 9 -62z m17 -91 c5 -23 2 -34 -12 -44 -26 -19 -53 8 -46 45 9 51 46 51 58 -1z" id="path5" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M846 974 c-22 -22 -20 -31 2 -11 22 20 34 21 50 5 9 -9 7 -14 -6 -24 -11 -9 -13 -13 -4 -14 21 0 3 -20 -18 -20 -10 0 -21 7 -23 15 -4 11 -4 10 -3 -2 1 -12 11 -19 29 -21 21 -3 29 2 37 23 5 14 10 28 10 30 0 9 -33 35 -45 35 -7 0 -21 -7 -29 -16z" id="path23" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M846 851 c-27 -30 -9 -76 29 -76 23 0 30 6 36 30 6 21 4 34 -8 47 -21 23 -36 23 -57 -1z m49 -36 c0 -38 -31 -47 -44 -13 -10 27 4 50 28 46 10 -2 16 -14 16 -33z" id="path34" />


                    </g>

                    {/* Tooth 06 */}
                    <g onClick={() => handleToothClick(6)} style={{ cursor: 'pointer', fill: toothNo === 6 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 6)} onMouseLeave={handleMouseLeave}>

                        <rect x="1040" y="750" width="100" height="600" fill="transparent" />

                        <path xmlns="http://www.w3.org/2000/svg" d="M1078 1313 c-2 -5 -5 -35 -6 -68 -1 -33 -8 -88 -14 -122 -13 -69 -3 -93 36 -93 34 0 47 32 36 87 -5 26 -14 81 -20 120 -11 67 -23 95 -32 76z m31 -135 c1 -29 -3 -38 -15 -38 -14 0 -16 8 -10 46 3 26 6 54 7 63 2 28 17 -32 18 -71z m14 -81 c10 -32 -4 -57 -33 -57 -20 0 -30 27 -23 65 7 35 43 31 56 -8z" id="path6" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1060 975 c-14 -17 -5 -52 19 -64 20 -11 34 -4 49 25 20 38 -40 73 -68 39z m57 -6 c17 -17 4 -39 -23 -39 -28 0 -44 28 -23 41 19 12 33 11 46 -2z" id="path24" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1061 852 c-6 -11 -7 -31 -2 -48 6 -22 13 -29 31 -29 30 0 51 46 34 73 -16 25 -51 27 -63 4z m55 -22 c2 -34 -5 -50 -22 -50 -9 0 -14 11 -14 33 0 24 -3 28 -10 17 -5 -8 -10 -10 -10 -4 0 16 23 35 40 32 8 -2 16 -14 16 -28z" id="path35" />


                    </g>

                    {/* Tooth 07 */}
                    <g onClick={() => handleToothClick(7)} style={{ cursor: 'pointer', fill: toothNo === 7 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 7)} onMouseLeave={handleMouseLeave}>

                        <rect x="1175" y="750" width="100" height="450" fill="transparent" />

                        <path xmlns="http://www.w3.org/2000/svg" d="M1205 1183 c-13 -144 -14 -138 24 -141 l34 -3 -7 63 c-10 86 -26 158 -35 158 -5 0 -11 -35 -16 -77z m34 -30 c0 -13 -5 -23 -11 -23 -9 0 -12 15 -9 52 4 47 5 49 12 23 3 -16 7 -40 8 -52z m-1 -45 c7 -7 12 -22 12 -35 0 -18 -6 -23 -25 -23 -26 0 -32 19 -19 54 7 19 16 20 32 4z" id="path7" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1194 965 c-4 -10 1 -25 13 -37 19 -18 21 -18 37 -3 24 24 16 49 -17 53 -18 2 -29 -2 -33 -13z m56 -9 c0 -16 -27 -29 -41 -20 -19 11 -9 34 16 34 15 0 25 -6 25 -14z" id="path31" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1203 864 c-18 -8 -16 -59 2 -78 29 -29 63 10 53 61 -3 18 -32 27 -55 17z m42 -39 c0 -23 -4 -30 -20 -30 -15 0 -20 7 -20 25 0 34 4 42 23 38 11 -2 17 -13 17 -33z" id="path36" />


                    </g>

                    {/* Tooth 08 */}
                    <g onClick={() => handleToothClick(8)} style={{ cursor: 'pointer', fill: toothNo === 8 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 8)} onMouseLeave={handleMouseLeave}>

                        <rect x="1310" y="750" width="100" height="450" fill="transparent" />

                        <path xmlns="http://www.w3.org/2000/svg" d="M1340 1198 c-6 -51 -13 -111 -13 -133 l-2 -40 43 -3 c40 -3 42 -2 42 25 -1 63 -40 243 -53 243 -3 0 -10 -42 -17 -92z m42 -24 c5 -38 4 -41 -14 -36 -17 4 -19 11 -14 41 3 20 6 45 7 56 0 20 0 20 8 0 5 -11 10 -39 13 -61z m8 -63 c5 -11 10 -34 10 -51 0 -29 -2 -31 -32 -28 -27 2 -34 8 -36 30 -6 55 35 90 58 49z" id="path8" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1333 983 c-20 -7 -15 -38 8 -59 22 -19 43 -13 63 18 20 32 -28 59 -71 41z m55 -11 c19 -13 3 -42 -23 -42 -27 0 -39 14 -31 35 6 16 34 19 54 7z" id="path25" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1327 863 c-11 -10 -8 -60 5 -88 24 -53 78 -14 78 57 0 37 -1 38 -38 38 -21 0 -42 -3 -45 -7z m73 -34 c0 -59 -37 -91 -59 -51 -8 15 -9 55 -2 80 1 1 15 2 31 2 27 0 30 -3 30 -31z" id="path37" />


                    </g>

                    {/* Tooth 09 */}
                    <g onClick={() => handleToothClick(9)} style={{ cursor: 'pointer', fill: toothNo === 9 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 9)} onMouseLeave={handleMouseLeave}>

                        <rect x="1535" y="750" width="100" height="450" fill="transparent" />

                        <path xmlns="http://www.w3.org/2000/svg" d="M1582 1233 c-40 -183 -40 -216 -5 -221 12 -2 32 2 43 8 18 10 21 18 17 48 -6 41 -26 193 -26 205 -1 4 -5 7 -10 7 -5 0 -14 -21 -19 -47z m27 -74 c1 -9 -7 -19 -17 -21 -17 -5 -18 -1 -11 41 4 25 9 53 10 61 1 16 17 -53 18 -81z m7 -40 c4 -7 9 -29 11 -50 4 -34 2 -39 -21 -45 -35 -8 -46 2 -46 41 0 47 38 83 56 54z" id="path9" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1568 979 c-24 -14 -23 -31 5 -57 21 -20 25 -21 45 -6 52 36 4 95 -50 63z m51 -8 c21 -13 5 -41 -23 -41 -27 0 -44 29 -24 42 17 10 30 10 47 -1z" id="path26" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1550 833 c0 -45 23 -83 50 -83 26 0 42 33 38 78 -3 36 -4 37 -45 40 l-43 3 0 -38z m74 12 c-1 -5 -5 -21 -9 -35 -5 -19 -4 -21 4 -10 14 19 14 4 1 -21 -23 -42 -60 -10 -60 51 0 29 2 31 33 28 17 -2 31 -7 31 -13z" id="path38" />


                    </g>

                    {/* Tooth 10 */}
                    <g onClick={() => handleToothClick(10)} style={{ cursor: 'pointer', fill: toothNo === 10 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 10)} onMouseLeave={handleMouseLeave}>

                        <rect x="1670" y="750" width="100" height="450" fill="transparent" />

                        <path xmlns="http://www.w3.org/2000/svg" d="M1721 1208 c-6 -29 -13 -79 -17 -110 l-6 -58 37 0 38 0 -7 43 c-4 23 -10 72 -13 110 -3 37 -9 67 -14 67 -4 0 -12 -24 -18 -52z m16 -79 c-4 -3 -1 -12 8 -19 8 -7 15 -23 15 -36 0 -19 -5 -24 -25 -24 -20 0 -25 5 -25 24 0 14 5 28 10 31 6 4 8 11 4 16 -3 5 -2 29 2 52 l8 42 6 -40 c3 -22 2 -43 -3 -46z" id="path10" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1704 966 c-8 -21 15 -58 33 -54 22 4 38 32 30 52 -8 20 -56 21 -63 2z m56 -11 c0 -9 -7 -18 -16 -22 -18 -7 -39 11 -30 26 11 17 46 13 46 -4z" id="path32" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1700 831 c0 -28 22 -61 40 -61 14 0 30 35 30 64 0 23 -4 26 -35 26 -32 0 -35 -2 -35 -29z m55 -4 c-1 -13 -5 -29 -9 -35 -12 -19 -36 5 -36 34 0 18 5 24 23 24 17 0 22 -5 22 -23z" id="path44" />


                    </g>

                    {/* Tooth 11 */}
                    <g onClick={() => handleToothClick(11)} style={{ cursor: 'pointer', fill: toothNo === 11 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 11)} onMouseLeave={handleMouseLeave}>

                        <rect x="1830" y="750" width="100" height="450" fill="transparent" />

                        <path xmlns="http://www.w3.org/2000/svg" d="M1861 1288 c-6 -18 -15 -67 -20 -108 -6 -41 -13 -84 -16 -95 -4 -13 1 -28 15 -43 17 -18 25 -20 41 -11 29 15 33 34 21 92 -7 29 -12 83 -13 120 -2 76 -12 93 -28 45z m18 -110 c1 -28 -3 -38 -14 -38 -17 0 -19 22 -8 85 6 36 7 38 14 15 4 -14 7 -42 8 -62z m11 -67 c0 -11 3 -26 6 -34 3 -8 -3 -22 -12 -31 -16 -17 -18 -16 -37 3 -18 17 -19 23 -7 50 14 35 50 43 50 12z" id="path11" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1840 975 c-15 -18 -5 -64 16 -72 19 -7 54 24 54 48 0 17 -27 39 -48 39 -5 0 -15 -7 -22 -15z m54 -17 c14 -23 -2 -39 -32 -32 -21 6 -30 33 -15 48 11 11 35 3 47 -16z" id="path27" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1842 858 c-7 -7 -12 -24 -12 -38 0 -51 53 -70 70 -24 13 34 13 40 -6 58 -19 19 -36 20 -52 4z m47 -12 c8 -10 9 -16 1 -21 -5 -3 -10 -15 -10 -26 0 -21 -29 -27 -32 -6 -4 36 -3 43 5 55 12 16 22 15 36 -2z" id="path39" />

                    </g>

                    {/* Tooth 12 */}
                    <g onClick={() => handleToothClick(12)} style={{ cursor: 'pointer', fill: toothNo === 12 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 12)} onMouseLeave={handleMouseLeave}>

                        <rect x="2030" y="750" width="100" height="450" fill="transparent" />

                        <path xmlns="http://www.w3.org/2000/svg" d="M2082 1279 c-10 -25 -33 -158 -36 -208 0 -13 8 -29 20 -37 19 -13 24 -12 44 4 23 18 23 22 12 73 -6 30 -15 86 -20 124 -8 64 -9 68 -20 44z m12 -86 c6 -44 4 -53 -9 -53 -16 0 -19 26 -9 79 8 40 10 38 18 -26z m19 -96 c7 -22 5 -32 -9 -48 -16 -18 -18 -18 -36 -3 -21 20 -21 24 -8 59 13 34 40 30 53 -8z" id="path12" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2057 975 c-11 -10 -13 -23 -8 -42 6 -22 13 -28 36 -28 22 0 30 6 38 29 8 24 6 32 -9 43 -23 17 -39 17 -57 -2z m51 -7 c14 -14 16 -32 3 -24 -5 3 -8 -2 -7 -11 0 -11 -6 -18 -18 -18 -13 0 -20 8 -21 25 -2 14 -1 28 2 33 6 11 27 9 41 -5z" id="path28" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2059 853 c-15 -17 -13 -50 3 -70 18 -22 48 -15 58 13 13 34 13 40 -6 58 -20 20 -38 20 -55 -1z m49 -15 c15 -19 -4 -60 -25 -56 -30 6 -30 68 0 68 8 0 19 -6 25 -12z" id="path40" />


                    </g>

                    {/* Tooth 13 */}
                    <g onClick={() => handleToothClick(13)} style={{ cursor: 'pointer', fill: toothNo === 13 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 13)} onMouseLeave={handleMouseLeave}>

                        <rect x="2180" y="750" width="100" height="450" fill="transparent" />

                        <path xmlns="http://www.w3.org/2000/svg" d="M2231 1268 c-5 -18 -14 -64 -20 -103 -5 -38 -12 -77 -16 -86 -4 -11 2 -25 16 -38 20 -19 25 -19 43 -7 16 10 20 23 19 52 -8 139 -17 214 -23 214 -5 0 -13 -15 -19 -32z m18 -68 c1 -50 -1 -60 -15 -60 -14 0 -15 7 -9 46 6 44 14 74 20 74 1 0 3 -27 4 -60z m11 -89 c26 -49 -10 -100 -44 -62 -16 18 -14 42 7 69 13 17 25 15 37 -7z" id="path13" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2213 983 c-7 -2 -13 -17 -13 -33 0 -54 56 -68 74 -18 15 42 -17 69 -61 51z m46 -12 c17 -11 7 -61 -14 -61 -20 0 -30 21 -14 31 11 7 10 9 -3 9 -18 0 -23 11 -11 23 9 9 25 8 42 -2z" id="path29" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2211 856 c-31 -37 9 -103 47 -80 36 23 23 94 -18 94 -10 0 -23 -6 -29 -14z m52 -14 c3 -4 3 -20 0 -35 -4 -22 -10 -27 -27 -25 -37 5 -34 68 3 68 11 0 22 -3 24 -8z" id="path41" />


                    </g>

                    {/* Tooth 14 */}
                    <g onClick={() => handleToothClick(14)} style={{ cursor: 'pointer', fill: toothNo === 14 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 14)} onMouseLeave={handleMouseLeave}>

                        <rect x="2420" y="750" width="100" height="500" fill="transparent" />

                        <path xmlns="http://www.w3.org/2000/svg" d="M2457 1233 c-4 -3 -7 -11 -7 -17 0 -6 5 -4 10 4 7 11 10 5 11 -25 l1 -40 13 35 13 35 1 -47 c1 -47 0 -48 -29 -48 -30 0 -31 1 -26 38 3 20 -3 4 -14 -37 -24 -88 -18 -101 46 -101 57 0 70 21 49 80 -8 24 -15 62 -15 86 0 39 -2 44 -23 44 -13 0 -27 -3 -30 -7z m59 -138 c10 -39 -2 -55 -39 -55 -44 0 -61 19 -47 54 8 21 16 26 45 26 29 0 36 -4 41 -25z" id="path14" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2431 986 c-12 -15 -6 -61 12 -83 15 -20 65 -16 77 6 15 29 12 49 -10 71 -23 23 -62 26 -79 6z m73 -12 c20 -20 20 -48 1 -64 -13 -11 -14 -10 -8 6 6 16 4 17 -9 6 -17 -14 -51 -6 -42 10 4 6 1 14 -6 18 -20 12 -3 40 24 40 14 0 32 -7 40 -16z" id="path19" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2427 853 c-12 -12 -7 -60 7 -72 8 -7 30 -11 48 -9 25 2 35 9 42 29 15 43 2 59 -47 59 -24 0 -47 -3 -50 -7z m89 -17 c10 -26 -15 -56 -46 -56 -23 0 -31 5 -36 24 -3 14 -3 30 1 35 10 16 75 13 81 -3z" id="path45" />


                    </g>

                    {/* Tooth 15 */}
                    <g onClick={() => handleToothClick(15)} style={{ cursor: 'pointer', fill: toothNo === 15 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 15)} onMouseLeave={handleMouseLeave}>

                        <rect x="2610" y="750" width="100" height="450" fill="transparent" />

                        <path xmlns="http://www.w3.org/2000/svg" d="M2646 1198 c-8 -18 -19 -56 -26 -85 -16 -63 -6 -81 45 -81 49 0 62 19 47 74 -7 24 -12 62 -12 84 0 34 -3 40 -21 40 -13 0 -24 -11 -33 -32z m18 -3 c-4 -15 -2 -25 4 -25 6 0 13 10 15 23 2 12 5 3 6 -20 1 -40 -1 -43 -24 -43 -28 0 -30 11 -14 59 13 37 22 41 13 6z m36 -90 c7 -8 10 -25 6 -39 -5 -22 -11 -25 -44 -23 -30 2 -38 6 -40 25 -7 45 49 72 78 37z" id="path15" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2622 983 c-11 -24 -1 -74 18 -85 9 -6 25 -6 42 1 36 13 47 54 23 81 -23 25 -71 26 -83 3z m78 -8 c7 -8 10 -25 6 -38 -4 -19 -12 -24 -33 -22 -41 3 -43 4 -37 19 3 8 1 17 -5 20 -6 4 -8 13 -4 21 7 19 57 19 73 0z" id="path20" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2620 845 c-27 -32 19 -82 66 -71 25 7 41 44 30 71 -7 20 -79 20 -96 0z m85 -5 c21 -35 -41 -72 -71 -43 -16 17 -16 16 -8 37 7 18 69 22 79 6z" id="path46" />


                    </g>

                    {/* Tooth 16 */}
                    <g onClick={() => handleToothClick(16)} style={{ cursor: 'pointer', fill: toothNo === 16 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 16)} onMouseLeave={handleMouseLeave}>

                        <rect x="2800" y="750" width="100" height="500" fill="transparent" />

                        <path xmlns="http://www.w3.org/2000/svg" d="M2821 1173 c-29 -112 -24 -140 24 -140 38 0 50 21 36 66 -6 21 -11 55 -11 75 0 29 -4 36 -20 36 -14 0 -22 -10 -29 -37z m27 -18 c2 -27 -1 -35 -14 -35 -12 0 -15 6 -10 23 3 12 6 28 6 35 0 29 16 9 18 -23z m20 -82 c3 -29 1 -32 -25 -30 -18 2 -29 9 -31 20 -6 30 6 49 30 45 18 -2 24 -11 26 -35z" id="path16" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2807 983 c-12 -12 -7 -60 7 -73 38 -31 97 28 66 65 -13 15 -61 21 -73 8z m57 -9 c18 -7 22 -34 5 -34 -5 0 -8 -4 -4 -9 8 -13 -10 -22 -29 -15 -15 6 -15 8 1 19 17 13 17 13 -2 12 -11 -1 -21 5 -23 16 -4 18 21 23 52 11z" id="path30" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2810 846 c-25 -25 -2 -66 37 -66 29 0 53 44 34 63 -15 15 -57 17 -71 3z m55 -27 c0 -29 -41 -41 -51 -15 -10 25 2 43 28 41 17 -1 23 -8 23 -26z" id="path47" />


                    </g>

                    {/* Tooth 17 */}
                    <g onClick={() => handleToothClick(17)} style={{ cursor: 'pointer', fill: toothNo === 17 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 17)} onMouseLeave={handleMouseLeave}>

                        <rect x="70" y="240" width="100" height="320" fill="transparent" />

                        <path xmlns="http://www.w3.org/2000/svg" d="M83 301 c-8 -7 -11 -21 -8 -30 4 -9 12 -44 17 -78 6 -35 14 -63 18 -63 16 0 30 29 40 79 5 29 12 57 15 62 3 5 1 18 -5 29 -12 23 -55 24 -77 1z m68 -8 c8 -8 8 -17 -1 -33 -22 -41 -74 -10 -57 34 6 15 43 14 58 -1z m-11 -85 c0 -13 -4 -29 -9 -36 -7 -11 -10 -10 -15 3 -11 29 -7 55 9 55 9 0 15 -9 15 -22z" id="path17" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M87 433 c-15 -14 -6 -53 13 -63 42 -23 72 7 54 54 -6 16 -54 22 -67 9z m45 -17 c-2 -5 2 -12 10 -17 20 -12 -5 -32 -31 -24 -14 4 -21 15 -21 31 0 21 4 25 23 22 12 -2 20 -7 19 -12z" id="path76" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M90 556 c-20 -26 -8 -60 22 -63 37 -2 54 20 40 52 -13 28 -43 33 -62 11z m50 -16 c9 -17 7 -22 -12 -29 -29 -11 -42 0 -33 28 8 27 31 27 45 1z" id="path62" />
                    </g>


                    {/* Tooth 18 */}
                    <g onClick={() => handleToothClick(18)} style={{ cursor: 'pointer', fill: toothNo === 18 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 18)} onMouseLeave={handleMouseLeave}>

                        <rect x="220" y="240" width="100" height="320" fill="transparent" />

                        <path xmlns="http://www.w3.org/2000/svg" d="M249 304 c-10 -12 -10 -24 -1 -60 7 -24 12 -62 12 -84 0 -33 3 -40 20 -40 24 0 43 36 60 112 11 46 11 60 0 73 -16 20 -74 19 -91 -1z m89 -22 c4 -30 -14 -52 -44 -52 -25 0 -33 8 -39 41 -6 32 3 40 43 37 30 -2 38 -7 40 -26z m-18 -85 c-4 -19 -12 -42 -19 -53 -10 -17 -10 -16 -5 9 4 16 2 27 -4 27 -6 0 -13 -10 -15 -22 -2 -13 -5 -4 -6 19 -1 38 1 42 27 46 15 2 28 5 28 6 1 0 -1 -14 -6 -32z" id="path18" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M258 439 c-21 -11 -24 -49 -6 -67 7 -7 26 -12 43 -12 17 0 36 5 43 12 15 15 16 55 1 64 -20 12 -63 13 -81 3z m75 -18 c5 -5 7 -17 5 -27 -5 -28 -81 -27 -86 0 -7 36 52 56 81 27z" id="path66" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M250 556 c-6 -8 -10 -25 -8 -38 2 -18 11 -24 40 -29 50 -8 77 18 60 56 -9 20 -19 25 -46 25 -18 0 -39 -7 -46 -14z m80 -11 c20 -24 4 -45 -34 -45 -41 0 -51 12 -36 40 13 24 52 27 70 5z" id="path63" />
                    </g>

                    {/* Tooth 19 */}
                    <g onClick={() => handleToothClick(19)} style={{ cursor: 'pointer', fill: toothNo === 19 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 19)} onMouseLeave={handleMouseLeave}>

                        <rect x="370" y="240" width="100" height="320" fill="transparent" />

                        <path xmlns="http://www.w3.org/2000/svg" d="M436 304 c-19 -19 -19 -13 -1 -64 8 -23 15 -62 15 -86 0 -23 5 -46 10 -49 6 -3 10 -1 10 6 0 9 3 9 14 0 8 -7 17 -8 19 -4 12 20 46 174 41 188 -10 26 -85 33 -108 9z m94 -9 c7 -8 7 -21 0 -39 -8 -21 -16 -26 -45 -26 -29 0 -36 4 -41 25 -3 14 -4 31 -1 39 7 18 72 19 87 1z m-15 -107 c-11 -57 -16 -68 -26 -63 -5 4 -7 18 -4 33 5 27 5 26 -9 -3 l-15 -30 -1 48 c0 46 1 47 31 47 29 0 30 -1 24 -32z" id="path19" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M442 438 c-19 -19 -15 -66 7 -78 54 -28 103 -1 92 52 -6 30 -10 33 -46 36 -23 2 -46 -3 -53 -10z m76 -7 c20 -12 11 -65 -11 -69 -38 -7 -67 7 -67 33 0 36 46 57 78 36z" id="path67" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M446 564 c-18 -17 -21 -60 -6 -69 20 -12 74 -14 87 -4 32 28 3 89 -42 89 -13 0 -31 -7 -39 -16z m72 -6 c13 -13 17 -58 5 -59 -73 -8 -89 3 -73 45 10 28 46 36 68 14z" id="path52" />

                    </g>

                    {/* Tooth 20 */}
                    <g onClick={() => handleToothClick(20)} style={{ cursor: 'pointer', fill: toothNo === 20 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 20)} onMouseLeave={handleMouseLeave}>

                        <rect x="640" y="240" width="100" height="320" fill="transparent" />

                        <path xmlns="http://www.w3.org/2000/svg" d="M698 316 c-20 -15 -23 -42 -8 -80 5 -14 10 -59 11 -101 2 -95 19 -95 37 1 7 38 17 89 23 113 8 36 7 47 -7 62 -20 22 -33 23 -56 5z m43 -12 c14 -13 16 -21 7 -45 -13 -37 -39 -35 -52 3 -7 19 -6 31 4 42 16 20 19 20 41 0z m-5 -121 c-3 -21 -6 -46 -6 -56 0 -10 -4 -15 -10 -12 -5 3 -10 28 -10 56 0 39 3 49 16 49 14 0 15 -7 10 -37z" id="path20" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M690 431 c-16 -31 -12 -51 15 -63 41 -18 68 18 49 66 -9 22 -51 20 -64 -3z m55 -26 c0 -31 -19 -42 -44 -26 -9 6 -11 18 -7 36 5 20 12 26 29 23 17 -2 22 -10 22 -33z" id="path68" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M690 561 c-17 -33 -12 -61 15 -73 31 -14 55 3 55 41 0 48 -49 71 -70 32z m55 -21 c0 -16 -6 -26 -19 -28 -27 -6 -40 12 -26 38 15 28 45 22 45 -10z" id="path53" />

                    </g>

                    {/* Tooth 21 */}
                    <g onClick={() => handleToothClick(21)} style={{ cursor: 'pointer', fill: toothNo === 21 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 21)} onMouseLeave={handleMouseLeave}>

                        <rect x="790" y="240" width="100" height="320" fill="transparent" />

                        <path xmlns="http://www.w3.org/2000/svg" d="M849 311 c-21 -17 -22 -22 -11 -57 6 -22 14 -74 18 -117 8 -89 19 -89 35 -1 6 32 15 81 21 107 9 41 8 51 -7 68 -22 24 -27 24 -56 0z m51 -7 c10 -11 11 -23 4 -42 -13 -37 -44 -36 -57 2 -8 24 -6 32 9 43 23 17 29 16 44 -3z m-11 -121 c-1 -21 -5 -49 -9 -63 l-8 -25 -1 25 c-1 14 -4 42 -7 63 -5 30 -4 37 10 37 12 0 16 -9 15 -37z" id="path21" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M840 425 c-13 -33 -13 -31 6 -49 33 -34 77 -5 65 41 -11 40 -57 45 -71 8z m55 5 c3 -5 -4 -10 -17 -11 l-23 -1 23 -6 c27 -8 30 -23 8 -37 -22 -14 -47 13 -40 43 6 23 38 30 49 12z" id="path69" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M840 554 c-13 -34 -13 -40 6 -58 32 -33 80 -3 69 43 -12 47 -59 57 -75 15z m58 -1 c5 -10 7 -24 5 -30 -6 -18 -42 -16 -49 2 -15 38 26 63 44 28z" id="path54" />

                    </g>

                    {/* Tooth 22 */}
                    <g onClick={() => handleToothClick(22)} style={{ cursor: 'pointer', fill: toothNo === 22 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 22)} onMouseLeave={handleMouseLeave}>

                        <rect x="990" y="240" width="100" height="320" fill="transparent" />

                        <path xmlns="http://www.w3.org/2000/svg" d="M1062 308 c-14 -14 -15 -48 -3 -81 5 -13 11 -61 13 -106 2 -46 6 -85 10 -87 10 -7 28 57 34 121 3 33 10 74 16 92 6 22 6 39 -2 53 -12 22 -49 27 -68 8z m61 -19 c12 -20 -14 -69 -37 -69 -14 0 -30 66 -20 82 9 14 46 5 57 -13z m-13 -101 c0 -13 -3 -41 -7 -63 -5 -31 -8 -35 -14 -20 -4 11 -8 39 -8 63 -1 31 3 42 14 42 9 0 15 -9 15 -22z" id="path22" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1064 429 c-23 -25 -9 -53 29 -57 35 -4 52 26 31 56 -19 27 -36 28 -60 1z m41 -7 c6 -4 11 -15 13 -24 2 -13 -4 -18 -22 -18 -28 0 -41 14 -32 35 6 16 25 19 41 7z" id="path70" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1072 578 c-32 -41 -20 -88 23 -88 37 0 48 55 17 83 -22 20 -27 21 -40 5z m43 -43 c0 -33 -31 -48 -46 -23 -12 18 -11 31 1 23 9 -6 14 8 11 28 -1 5 6 7 16 5 13 -2 18 -12 18 -33z" id="path49" />

                    </g>

                    {/* Tooth 23 */}
                    <g onClick={() => handleToothClick(23)} style={{ cursor: 'pointer', fill: toothNo === 23 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 23)} onMouseLeave={handleMouseLeave}>

                        <rect x="1144" y="215" width="100" height="320" fill="transparent" />

                        <path xmlns="http://www.w3.org/2000/svg" d="M1194 295 c-4 -9 -1 -35 5 -60 6 -24 11 -69 11 -99 0 -61 16 -76 25 -23 13 80 25 163 25 180 0 22 -58 24 -66 2z m56 -16 c0 -24 -17 -59 -29 -59 -10 0 -21 60 -14 73 2 4 13 7 24 7 13 0 19 -7 19 -21z" id="path23" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1198 415 c-14 -32 -5 -40 45 -36 33 2 14 61 -20 61 -7 0 -19 -11 -25 -25z m50 -12 c2 -8 -6 -13 -22 -13 -25 0 -33 10 -19 24 10 10 36 3 41 -11z" id="path77" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1207 569 c-32 -45 -12 -98 33 -84 26 8 27 54 2 85 l-19 23 -16 -24z m43 -45 c0 -27 -12 -36 -34 -28 -11 4 -13 11 -6 29 5 13 6 25 3 28 -3 3 -2 11 3 18 10 16 34 -17 34 -47z" id="path50" />
                    </g>

                    {/* Tooth 24 */}
                    <g onClick={() => handleToothClick(24)} style={{ cursor: 'pointer', fill: toothNo === 24 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 24)} onMouseLeave={handleMouseLeave}>

                        <rect x="1294" y="215" width="100" height="320" fill="transparent" />

                        <path xmlns="http://www.w3.org/2000/svg" d="M1334 295 c-4 -8 -1 -43 5 -78 6 -35 11 -81 11 -102 0 -68 20 -25 30 66 15 125 14 129 -15 129 -14 0 -28 -7 -31 -15z m46 -29 c0 -38 -17 -57 -31 -35 -5 8 -9 26 -9 42 0 20 5 27 20 27 16 0 20 -7 20 -34z" id="path24" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1338 415 c-13 -30 -8 -37 27 -37 14 0 29 2 32 6 11 10 -16 56 -32 56 -8 0 -21 -11 -27 -25z m50 -12 c2 -8 -6 -13 -22 -13 -25 0 -33 10 -19 24 10 10 36 3 41 -11z" id="path78" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1351 581 c-7 -5 -14 -26 -15 -47 -1 -37 1 -39 33 -42 l34 -3 -6 37 c-7 44 -26 67 -46 55z m35 -49 c6 -28 4 -32 -15 -32 -18 0 -21 5 -19 33 3 59 22 59 34 -1z" id="path51" />
                    </g>

                    {/* Tooth 25 */}
                    <g onClick={() => handleToothClick(25)} style={{ cursor: 'pointer', fill: toothNo === 25 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 25)} onMouseLeave={handleMouseLeave}>

                        <rect x="1544" y="215" width="100" height="320" fill="transparent" />

                        <path xmlns="http://www.w3.org/2000/svg" d="M1570 287 c0 -40 21 -190 28 -204 4 -7 14 36 21 97 7 60 10 114 6 120 -3 5 -17 10 -31 10 -18 0 -24 -5 -24 -23z m50 -14 c0 -16 -4 -34 -9 -42 -14 -22 -31 -3 -31 35 0 27 4 34 20 34 15 0 20 -7 20 -27z" id="path25" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1570 419 c-7 -11 -9 -27 -6 -35 7 -18 55 -18 62 0 7 19 -13 56 -31 56 -8 0 -19 -9 -25 -21z m45 -19 c0 -8 -10 -16 -22 -18 -22 -3 -32 16 -16 32 12 11 38 2 38 -14z" id="path79" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1570 554 c-17 -43 -9 -69 19 -69 33 0 48 26 35 62 -13 38 -41 42 -54 7z m38 -6 c0 -13 1 -30 3 -38 3 -9 -5 -16 -18 -18 -19 -3 -23 1 -23 23 0 14 4 24 9 21 5 -4 7 3 4 14 -4 13 0 20 10 20 8 0 15 -9 15 -22z" id="path55" />

                    </g>

                    {/* Tooth 26 */}
                    <g onClick={() => handleToothClick(26)} style={{ cursor: 'pointer', fill: toothNo === 26 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 26)} onMouseLeave={handleMouseLeave}>

                        <rect x="1650" y="217" width="100" height="320" fill="transparent" />

                        <path xmlns="http://www.w3.org/2000/svg" d="M1700 297 c0 -32 30 -208 37 -220 7 -10 19 79 26 193 2 33 0 35 -30 38 -23 2 -33 -1 -33 -11z m54 -13 c9 -22 -4 -64 -19 -64 -13 0 -25 30 -25 63 0 22 36 23 44 1z" id="path26" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1710 419 c-7 -11 -9 -27 -6 -35 7 -18 55 -18 62 0 7 19 -13 56 -31 56 -8 0 -19 -9 -25 -21z m48 -22 c3 -12 -3 -17 -22 -17 -25 0 -35 18 -19 34 12 12 38 2 41 -17z" id="path80" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1710 560 c-6 -11 -10 -33 -8 -48 2 -21 8 -27 27 -27 33 0 48 26 35 62 -12 35 -39 41 -54 13z m41 0 c5 -54 2 -65 -19 -68 -22 -3 -23 3 -13 71 2 11 31 9 32 -3z" id="path56" />


                    </g>

                    {/* Tooth 27 */}
                    <g onClick={() => handleToothClick(27)} style={{ cursor: 'pointer', fill: toothNo === 27 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 27)} onMouseLeave={handleMouseLeave}>

                        <rect x="1782" y="217" width="100" height="320" fill="transparent" />

                        <path xmlns="http://www.w3.org/2000/svg" d="M1832 299 c-10 -15 -10 -29 -3 -52 5 -18 12 -60 16 -94 7 -70 23 -125 34 -118 5 2 9 33 9 67 1 35 7 91 14 125 9 50 9 65 -2 77 -18 22 -53 20 -68 -5z m62 -4 c3 -8 3 -29 -1 -46 -4 -23 -10 -29 -26 -27 -26 4 -44 53 -27 73 16 19 46 19 54 0z m-17 -142 c-8 -74 -8 -74 -17 -38 -14 55 -11 95 6 95 14 0 15 -9 11 -57z" id="path27" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1840 436 c-6 -8 -10 -25 -8 -38 2 -19 9 -23 38 -23 41 0 52 25 24 56 -20 23 -37 24 -54 5z m55 -31 c0 -14 -8 -21 -27 -23 -22 -3 -28 1 -28 17 0 10 6 22 13 24 23 10 42 2 42 -18z" id="path71" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1842 568 c-17 -17 -15 -53 4 -72 20 -21 27 -20 48 3 35 39 -15 106 -52 69z m37 -5 c-4 -23 2 -43 11 -38 16 10 12 -11 -5 -25 -12 -10 -18 -10 -30 0 -15 13 -20 51 -8 63 9 9 33 9 32 0z" id="path57" />
                    </g>

                    {/* Tooth 28 */}
                    <g onClick={() => handleToothClick(28)} style={{ cursor: 'pointer', fill: toothNo === 28 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 28)} onMouseLeave={handleMouseLeave}>

                        <rect x="2006" y="217" width="100" height="320" fill="transparent" />

                        <path xmlns="http://www.w3.org/2000/svg" d="M2056 311 c-14 -15 -15 -26 -7 -62 6 -24 15 -73 20 -108 15 -91 28 -97 35 -15 4 38 11 91 17 117 10 42 9 51 -6 68 -23 24 -37 24 -59 0z m45 -1 c15 -8 18 -17 13 -38 -9 -35 -17 -44 -36 -37 -21 8 -32 53 -17 71 14 17 15 17 40 4z m-1 -109 c0 -10 -3 -33 -7 -52 -5 -28 -7 -30 -14 -14 -14 36 -10 85 6 85 8 0 15 -8 15 -19z" id="path28" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2055 436 c-3 -9 -7 -23 -10 -31 -5 -16 20 -45 39 -45 7 0 20 6 30 13 28 20 9 71 -27 75 -18 2 -29 -2 -32 -12z m59 -18 c7 -27 -16 -53 -38 -45 -16 6 -22 48 -9 60 14 15 41 6 47 -15z" id="path72" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2055 565 c-3 -8 -7 -22 -9 -30 -3 -7 3 -24 14 -37 15 -18 22 -21 36 -12 29 17 36 37 25 67 -8 20 -17 27 -36 27 -14 0 -28 -7 -30 -15z m54 -14 c8 -14 7 -22 -4 -31 -19 -16 -45 -6 -45 18 0 36 33 45 49 13z" id="path58" />


                    </g>

                    {/* Tooth 29 */}
                    <g onClick={() => handleToothClick(29)} style={{ cursor: 'pointer', fill: toothNo === 29 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 29)} onMouseLeave={handleMouseLeave}>

                        <rect x="2156" y="241" width="100" height="320" fill="transparent" />

                        <path xmlns="http://www.w3.org/2000/svg" d="M2206 311 c-12 -13 -14 -24 -8 -42 5 -13 12 -52 16 -86 14 -124 46 -167 46 -61 0 34 5 88 12 121 11 55 11 60 -7 73 -25 19 -39 18 -59 -5z m54 -7 c10 -11 11 -23 4 -42 -12 -34 -35 -35 -51 -2 -10 20 -9 27 4 42 20 22 27 22 43 2z m-11 -135 c-2 -27 -6 -49 -11 -49 -4 0 -8 8 -8 18 0 9 -3 34 -6 55 -6 32 -4 37 10 31 13 -5 16 -17 15 -55z" id="path29" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2206 434 c-11 -29 -6 -53 14 -64 42 -22 82 34 48 68 -17 17 -55 15 -62 -4z m62 -25 c3 -28 -16 -43 -43 -33 -15 6 -21 45 -8 58 16 16 48 1 51 -25z" id="path73" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2212 568 c-17 -17 -15 -63 3 -78 12 -10 21 -10 40 -2 25 12 32 41 19 76 -7 19 -45 21 -62 4z m53 -19 c7 -22 -7 -39 -33 -39 -16 0 -26 25 -18 45 8 23 44 18 51 -6z" id="path59" />


                    </g>

                    {/* Tooth 30 */}
                    <g onClick={() => handleToothClick(30)} style={{ cursor: 'pointer', fill: toothNo === 30 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 30)} onMouseLeave={handleMouseLeave}>

                        <rect x="2376" y="241" width="100" height="320" fill="transparent" />

                        <path xmlns="http://www.w3.org/2000/svg" d="M2426 311 c-15 -16 -14 -24 5 -102 25 -99 27 -103 45 -88 10 8 14 8 14 0 0 -6 5 -11 10 -11 6 0 10 21 10 47 0 26 7 67 17 91 15 40 15 44 0 60 -24 23 -81 25 -101 3z m87 0 c12 -2 8 -58 -5 -69 -25 -19 -62 -8 -77 22 -20 43 1 56 82 47z m-20 -90 c4 -1 7 -20 7 -43 l-1 -43 -15 30 c-13 27 -14 27 -9 5 2 -14 0 -31 -4 -39 -6 -9 -12 3 -20 38 -6 29 -11 53 -11 55 0 1 10 2 23 0 12 -1 25 -3 30 -3z" id="path30" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2431 446 c-7 -8 -11 -29 -9 -47 2 -27 9 -34 33 -41 58 -15 100 46 59 86 -19 20 -68 21 -83 2z m72 -10 c42 -32 4 -86 -47 -66 -20 7 -26 17 -26 38 0 16 3 32 7 35 11 11 47 7 66 -7z" id="path65" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2432 568 c-16 -16 -15 -53 1 -66 6 -5 26 -10 42 -10 37 0 55 14 55 42 0 31 -19 46 -55 46 -17 0 -36 -5 -43 -12z m83 -17 c10 -34 -4 -50 -43 -48 -38 2 -51 20 -38 53 8 22 73 19 81 -5z" id="path60" />


                    </g>

                    {/* Tooth 31 */}
                    <g onClick={() => handleToothClick(31)} style={{ cursor: 'pointer', fill: toothNo === 31 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 31)} onMouseLeave={handleMouseLeave}>

                        <rect x="2579" y="241" width="100" height="320" fill="transparent" />

                        <path xmlns="http://www.w3.org/2000/svg" d="M2619 313 c-10 -11 -9 -30 5 -88 10 -41 23 -78 29 -82 7 -4 8 0 3 13 -4 10 -10 32 -13 47 -5 26 -3 28 18 25 20 -2 24 -9 26 -43 0 -22 -1 -30 -4 -17 -7 34 -21 26 -20 -12 1 -27 5 -34 19 -33 14 1 18 10 18 44 0 23 5 63 12 87 9 35 9 48 -1 59 -15 19 -77 19 -92 0z m85 -16 c8 -12 8 -22 0 -34 -14 -22 -64 -29 -75 -11 -12 19 -11 56 2 60 25 8 64 0 73 -15z" id="path31" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2620 435 c-7 -9 -10 -25 -6 -40 6 -24 10 -26 54 -23 40 3 47 6 50 26 2 13 -2 30 -8 38 -16 18 -74 18 -90 -1z m78 -4 c8 -5 12 -17 10 -27 -2 -14 -13 -20 -41 -22 -39 -3 -55 13 -43 43 6 16 52 20 74 6z" id="path74" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2625 556 c-14 -21 -12 -54 4 -57 59 -12 91 0 91 35 0 49 -67 65 -95 22z m75 -1 c20 -24 3 -53 -30 -51 -40 2 -55 18 -41 45 13 24 53 28 71 6z" id="path61" />


                    </g>


                    {/* Tooth 32 */}
                    <g onClick={() => handleToothClick(32)} style={{ cursor: 'pointer', fill: toothNo === 32 ? 'rgba(85, 164, 246, 0.83)' : 'black' }} onMouseEnter={(e) => handleMouseEnter(e, 32)} onMouseLeave={handleMouseLeave}>

                        <rect x="2756" y="241" width="100" height="320" fill="transparent" />

                        <path xmlns="http://www.w3.org/2000/svg" d="M2806 308 c-10 -13 -11 -29 -6 -51 5 -18 14 -51 20 -74 14 -56 36 -56 45 0 3 23 11 57 17 75 12 38 1 57 -38 65 -17 3 -29 -2 -38 -15z m64 -28 c0 -27 -3 -30 -30 -30 -27 0 -30 3 -30 30 0 27 3 30 30 30 27 0 30 -3 30 -30z m-19 -75 c-4 -41 -13 -52 -22 -29 -14 36 -10 66 9 62 13 -2 16 -11 13 -33z" id="path32" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2812 438 c-17 -17 -15 -57 3 -64 8 -4 27 -3 41 0 21 6 25 11 22 39 -2 26 -8 33 -28 35 -14 2 -31 -3 -38 -10z m53 -29 c0 -19 -5 -24 -24 -24 -32 0 -40 25 -9 26 19 1 20 2 4 6 -15 4 -16 7 -5 14 21 13 34 5 34 -22z" id="path75" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2810 550 c-15 -28 4 -52 39 -48 22 2 26 8 26 33 0 25 -4 31 -27 33 -19 2 -30 -3 -38 -18z m58 -17 c3 -19 -1 -23 -21 -23 -26 0 -38 15 -29 38 8 22 47 10 50 -15z" id="path64" />


                    </g>

                </g>

                {/* Tooth 01 Path */}

                {dataObj.find((tooth) => tooth.toothNo === 1) && dataObj.find((tooth) => tooth.toothNo === 1).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 1).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <circle xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path103" cx="11.078286" cy="13.737076" r="1.5509602" />
                )}


                {dataObj.find((tooth) => tooth.toothNo === 1) && dataObj.find((tooth) => tooth.toothNo === 1).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 1).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 8.9180205,27.446455 1.9110045,1.689439 2.160266,-1.661743 2.049483,1.661743 v 0" id="path98" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 1) && dataObj.find((tooth) => tooth.toothNo === 1).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 1).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeOpacity: 1, strokeDasharray: 'none' }} d="m 12.298645,23.304757 0.03916,2.604648 v 0" id="path335" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 1) && dataObj.find((tooth) => tooth.toothNo === 1).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 1).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 0.969697, stroke: '#e512d2', strokeWidth: 0.65, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 13.317004,9.5569088 0.626682,51.3879672 v 0" id="path363" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 0.969697, stroke: '#e512d2', strokeWidth: 0.65, strokeDasharray: 'none', strokeOpacity: 1 }} d="M 9.8702497,9.4002375 10.340262,60.474863 v 0" id="path362" />
                    </>
                )}


                {/* Tooth 02 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 2) && dataObj.find((tooth) => tooth.toothNo === 2).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 2).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <ellipse xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path104" cx="27.474152" cy="12.740029" rx="1.5509602" ry="1.2186115" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 2) && dataObj.find((tooth) => tooth.toothNo === 2).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 2).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 25.928989,27.378193 2.506731,2.193388 3.250915,-2.075885 2.310892,1.880047 v 0" id="path208" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 2) && dataObj.find((tooth) => tooth.toothNo === 2).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 2).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 30.022009,22.090559 0.05875,2.878823 v 0" id="path336" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 2) && dataObj.find((tooth) => tooth.toothNo === 2).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 2).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 0.969697, stroke: '#e512d2', strokeWidth: 0.65, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 30.707443,7.3635197 1.253366,52.4846613 v 0" id="path365" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 0.969697, stroke: '#e512d2', strokeWidth: 0.65, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 26.477337,7.206849 0.783352,54.208038 v 0" id="path364" />
                    </>
                )}


                {/* Tooth 03 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 3) && dataObj.find((tooth) => tooth.toothNo === 3).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 3).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <ellipse xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path105" cx="46.750366" cy="11.742984" rx="1.3293945" ry="1.5509602" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 3) && dataObj.find((tooth) => tooth.toothNo === 3).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 3).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 43.98528,27.534863 3.17258,2.232557 2.898407,-2.350059 3.368418,2.350059" id="path209" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 3) && dataObj.find((tooth) => tooth.toothNo === 3).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 3).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 48.822485,22.070975 0.01958,2.741736 v 0" id="path337" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 3) && dataObj.find((tooth) => tooth.toothNo === 3).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 3).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="M 49.821261,7.7551965 C 50.682949,61.179881 50.682949,61.179881 50.682949,61.179881" id="path148" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="M 46.217836,7.9902022 C 46.844518,61.806564 46.844518,61.806564 46.844518,61.806564" id="path147" />
                    </>
                )}


                {/* Tooth 04 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 4) && dataObj.find((tooth) => tooth.toothNo === 4).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 4).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <ellipse xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path106" cx="70.901031" cy="5.8714919" rx="1.5509602" ry="1.4401772" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 4) && dataObj.find((tooth) => tooth.toothNo === 4).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 4).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 69.209252,26.477337 2.232556,2.350059 2.624233,-2.075886 1.840882,1.997551" id="path210" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 4) && dataObj.find((tooth) => tooth.toothNo === 4).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 4).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 72.518918,20.700107 0.01958,2.350059 v 0" id="path338" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 4) && dataObj.find((tooth) => tooth.toothNo === 4).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 4).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="M 69.796766,0.94002375 C 70.031772,61.336552 70.031772,61.336552 70.031772,61.336552" id="path149" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="M 72.930179,1.1750297 C 73.400191,60.788205 73.400191,60.788205 73.400191,60.788205" id="path150" />

                    </>
                )}


                {/* Tooth 05 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 5) && dataObj.find((tooth) => tooth.toothNo === 5).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 5).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <ellipse xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path107" cx="87.296898" cy="6.4254065" rx="1.3293945" ry="1.5509602" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 5) && dataObj.find((tooth) => tooth.toothNo === 5).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 5).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 84.71964,26.908181 1.801717,1.958383 2.19339,-1.527539 1.958378,1.605874 v 0" id="path211" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 5) && dataObj.find((tooth) => tooth.toothNo === 5).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 5).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 87.59847,20.386766 0.03915,2.50673 v 0" id="path339" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 5) && dataObj.find((tooth) => tooth.toothNo === 5).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 5).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>

                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 88.737075,2.7695717 c 0.44313,59.0472673 0.44313,59.0472673 0.44313,59.0472673" id="path152" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="M 85.967505,2.8803545 C 86.299852,61.927622 86.299852,61.927622 86.299852,61.927622" id="path151" />

                    </>
                )}


                {/* Tooth 06 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 6) && dataObj.find((tooth) => tooth.toothNo === 6).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 6).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <ellipse xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path108" cx="108.78877" cy="3.5450516" rx="1.5509602" ry="1.3293945" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 6) && dataObj.find((tooth) => tooth.toothNo === 6).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 6).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 106.26185,26.594839 1.76255,1.919216 2.70257,-1.997551 1.99755,1.880048 v 0" id="path212" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 6) && dataObj.find((tooth) => tooth.toothNo === 6).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 6).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 109.39527,20.034257 v 2.741736 0" id="path340" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 6) && dataObj.find((tooth) => tooth.toothNo === 6).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 6).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>

                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 110.33974,1.5509601 c 0.33235,59.2688339 0.33235,59.2688339 0.33235,59.2688339" id="path154" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 106.57312,1.2186115 c 0.44313,60.2658795 0.44313,60.2658795 0.44313,60.2658795" id="path153" />

                    </>
                )}


                {/* Tooth 07 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 7) && dataObj.find((tooth) => tooth.toothNo === 7).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 7).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <ellipse xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path109" cx="122.41507" cy="9.5273266" rx="1.2186115" ry="1.1078286" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 7) && dataObj.find((tooth) => tooth.toothNo === 7).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 7).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 119.7747,27.025684 1.37087,1.566706 2.70257,-1.684209 1.41003,1.645041" id="path213" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 7) && dataObj.find((tooth) => tooth.toothNo === 7).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 7).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 122.63394,21.0722 0.0979,2.800487 v 0" id="path341" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 7) && dataObj.find((tooth) => tooth.toothNo === 7).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 7).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 123.74446,4.098966 c 0.55392,56.610044 0.55392,56.610044 0.55392,56.610044" id="path156" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="M 121.19645,4.3205318 C 121.5288,60.819794 121.5288,60.819794 121.5288,60.819794" id="path155" />

                    </>
                )}


                {/* Tooth 08 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 8) && dataObj.find((tooth) => tooth.toothNo === 8).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 8).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <ellipse xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path110" cx="135.81979" cy="6.9793205" rx="1.3293945" ry="1.4401772" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 8) && dataObj.find((tooth) => tooth.toothNo === 8).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 8).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 133.0917,27.339025 2.58507,2.50673 2.6634,-2.115053 1.80171,1.801712" id="path214" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 8) && dataObj.find((tooth) => tooth.toothNo === 8).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 8).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 136.77346,20.406349 -0.0392,2.330476 v 0" id="path342" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 8) && dataObj.find((tooth) => tooth.toothNo === 8).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 8).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>

                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 137.92467,2.8803545 c 0.22157,59.7119645 0.22157,59.7119645 0.22157,59.7119645" id="path158" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 134.4904,2.3264401 c 0.33234,60.4874439 0.33234,60.4874439 0.33234,60.4874439" id="path157" />


                    </>
                )}



                {/* Tooth 09 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 9) && dataObj.find((tooth) => tooth.toothNo === 9).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 9).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <ellipse xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path111" cx="160.08124" cy="7.422452" rx="1.8833088" ry="1.6617429" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 9) && dataObj.find((tooth) => tooth.toothNo === 9).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 9).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 155.80894,27.809037 2.35006,2.859239 3.01591,-2.271724 1.88005,2.232556" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 9) && dataObj.find((tooth) => tooth.toothNo === 9).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 9).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 159.27528,20.30843 0.0979,2.526314 v 0" id="path343" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 9) && dataObj.find((tooth) => tooth.toothNo === 9).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 9).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>

                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 160.96751,2.8803545 c 0.55391,59.9335295 0.55391,59.9335295 0.55391,59.9335295" id="path160" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="M 157.20088,4.4313146 C 157.53323,63.03545 157.53323,63.03545 157.53323,63.03545" id="path159" />


                    </>
                )}


                {/* Tooth 10 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 10) && dataObj.find((tooth) => tooth.toothNo === 10).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 10).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <ellipse xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path112" cx="174.03989" cy="9.9704571" rx="1.8833088" ry="1.5509602" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 10) && dataObj.find((tooth) => tooth.toothNo === 10).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 10).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 170.92765,27.378193 1.64505,1.410036 2.03672,-1.370868 1.37086,1.096694" id="path216" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 10) && dataObj.find((tooth) => tooth.toothNo === 10).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 10).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 173.0623,21.503044 0.0783,2.878823 v 0" id="path344" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 10) && dataObj.find((tooth) => tooth.toothNo === 10).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 10).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>

                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 174.5938,2.8803545 c 0.88626,59.0472675 0.88626,59.0472675 0.88626,59.0472675" id="path162" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 171.82423,3.6558346 c 0.99704,58.0502224 0.99704,58.0502224 0.99704,58.0502224" id="path161" />


                    </>
                )}


                {/* Tooth 11 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 11) && dataObj.find((tooth) => tooth.toothNo === 11).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 11).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <ellipse xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path113" cx="187.88774" cy="4.2097487" rx="1.7725258" ry="1.5509602" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 11) && dataObj.find((tooth) => tooth.toothNo === 11).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 11).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 183.34381,26.869013 2.15421,1.997551 2.5459,-1.801712 1.56671,1.292533" id="path217" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 11) && dataObj.find((tooth) => tooth.toothNo === 11).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 11).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 186.79056,19.955922 0.0979,2.957158 v 0" id="path345" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 11) && dataObj.find((tooth) => tooth.toothNo === 11).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 11).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>

                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="M 188.55244,1.1078287 C 188.774,61.041359 188.774,61.041359 188.774,61.041359" id="path196" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 185.22895,1.5509601 c 0.11079,60.1550969 0.11079,60.1550969 0.11079,60.1550969" id="path195" />


                    </>
                )}



                {/* Tooth 12 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 12) && dataObj.find((tooth) => tooth.toothNo === 12).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 12).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <ellipse xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path114" cx="209.37961" cy="6.5361891" rx="1.7725258" ry="1.4401772" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 12) && dataObj.find((tooth) => tooth.toothNo === 12).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 12).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 205.12103,26.790678 1.91921,2.115053 3.17258,-1.723377 1.64504,1.723377" id="path218" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 12) && dataObj.find((tooth) => tooth.toothNo === 12).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 12).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 208.52861,20.014673 0.0196,3.152996 v 0" id="path346" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 12) && dataObj.find((tooth) => tooth.toothNo === 12).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 12).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>

                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 210.59823,2.1048745 c 0.22156,57.7178725 0.22156,57.7178725 0.22156,57.7178725" id="path198" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 206.61004,1.661743 c 0.44313,58.936485 0.44313,58.936485 0.44313,58.936485" id="path197" />


                    </>
                )}



                {/* Tooth 13 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 13) && dataObj.find((tooth) => tooth.toothNo === 13).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 13).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <ellipse xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path115" cx="224.66763" cy="5.6499262" rx="1.7725258" ry="1.4401772" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 13) && dataObj.find((tooth) => tooth.toothNo === 13).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 13).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 220.51391,26.75151 1.88005,2.193389 3.09424,-1.919215 1.13586,1.880047" id="path219" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 13) && dataObj.find((tooth) => tooth.toothNo === 13).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 13).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 223.47107,19.799251 0.0783,3.17258 v 0" id="path347" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 13) && dataObj.find((tooth) => tooth.toothNo === 13).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 13).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>

                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 225.11078,1.661743 c 1.10783,58.936485 1.10783,58.936485 1.10783,58.936485" id="path200" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 221.34416,1.4401772 c 1.44018,59.0472668 1.44018,59.0472668 1.44018,59.0472668" id="path199" />


                    </>
                )}



                {/* Tooth 14 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 14) && dataObj.find((tooth) => tooth.toothNo === 14).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 14).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <circle xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path116" cx="249.59378" cy="11.18907" r="1.6617429" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 14) && dataObj.find((tooth) => tooth.toothNo === 14).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 14).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 242.48697,26.594839 2.82007,2.310892 3.56426,-1.99755 3.13341,2.271724" id="path220" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 14) && dataObj.find((tooth) => tooth.toothNo === 14).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 14).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 247.18709,20.660939 0.0587,3.348835 v 0" id="path348" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 14) && dataObj.find((tooth) => tooth.toothNo === 14).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 14).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>

                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 249.26145,4.9852289 c 0.88626,57.7178731 0.88626,57.7178731 0.88626,57.7178731" id="path202" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 244.49779,5.4283604 c 0.99704,56.6100446 0.99704,56.6100446 0.99704,56.6100446" id="path201" />


                    </>
                )}



                {/* Tooth 15 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 15) && dataObj.find((tooth) => tooth.toothNo === 15).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 15).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <circle xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path117" cx="268.98077" cy="12.407681" r="1.7725258" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 15) && dataObj.find((tooth) => tooth.toothNo === 15).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 15).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 262.0708,26.634007 2.6634,2.271724 3.79926,-2.036718 2.35006,1.762544 v 0" id="path221" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 15) && dataObj.find((tooth) => tooth.toothNo === 15).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 15).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 266.673,21.111367 -0.0196,2.506731 v 0" id="path349" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 15) && dataObj.find((tooth) => tooth.toothNo === 15).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 15).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>

                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 268.75923,6.8685377 c 0.6647,54.1728213 0.6647,54.1728213 0.6647,54.1728213" id="path204" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 264.32792,7.2008863 c 1.21861,53.6189077 1.21861,53.6189077 1.21861,53.6189077" id="path203" />


                    </>
                )}



                {/* Tooth 16 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 16) && dataObj.find((tooth) => tooth.toothNo === 16).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 16).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <ellipse xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path118" cx="285.81979" cy="14.29099" rx="1.7725258" ry="1.6617429" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 16) && dataObj.find((tooth) => tooth.toothNo === 16).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 16).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 280.94961,27.260689 2.4284,2.036719 1.6842,-1.566706 2.11506,1.410035" id="path223" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 16) && dataObj.find((tooth) => tooth.toothNo === 16).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 16).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 283.39759,22.090559 0.0979,2.800488 v 0" id="path350" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 16) && dataObj.find((tooth) => tooth.toothNo === 16).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 16).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>

                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 286.15214,9.7488923 c 1.21861,50.5169867 1.21861,50.5169867 1.21861,50.5169867" id="path206" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 282.05317,10.745938 c 0.55392,50.073856 0.55392,50.073856 0.55392,50.073856" id="path205" />


                    </>
                )}


                {/* Tooth 17 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 17) && dataObj.find((tooth) => tooth.toothNo === 17).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 17).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <ellipse xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path119" cx="10.856721" cy="121.97193" rx="1.9940915" ry="2.1048744" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 17) && dataObj.find((tooth) => tooth.toothNo === 17).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 17).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 8.807238,107.18242 2.71418,-1.60635 2.215657,1.9387 2.104875,-1.71713 v 0" id="path225" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 17) && dataObj.find((tooth) => tooth.toothNo === 17).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 17).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 12.269203,109.97969 0.110782,3.37888 v 0" id="path351" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 17) && dataObj.find((tooth) => tooth.toothNo === 17).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 17).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>

                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 12.518464,74.556869 c 0.110783,53.618901 0.110783,53.618901 0.110783,53.618901" id="path164" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 0.969697, stroke: '#e512d2', strokeWidth: 0.65, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 9.4002375,73.478526 0.9400245,54.364714 v 0" id="path394" />


                    </>
                )}



                {/* Tooth 18 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 18) && dataObj.find((tooth) => tooth.toothNo === 18).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 18).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <ellipse xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path120" cx="26.587887" cy="122.1935" rx="1.7725258" ry="1.6617429" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 18) && dataObj.find((tooth) => tooth.toothNo === 18).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 18).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 25.341475,107.59355 3.133412,-2.03671 2.271724,2.19339 3.01591,-1.88005" id="path226" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 18) && dataObj.find((tooth) => tooth.toothNo === 18).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 18).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 29.745199,110.58899 0.0277,3.35119 v 0" id="path352" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 18) && dataObj.find((tooth) => tooth.toothNo === 18).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 18).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>

                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 31.019203,74.113737 c 0.110782,50.406203 0.110782,50.406203 0.110782,50.406203" id="path166" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="M 27.363368,73.338257 C 27.252585,126.84638 27.252585,126.84638 27.252585,126.84638" id="path165" />


                    </>
                )}


                {/* Tooth 19 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 19) && dataObj.find((tooth) => tooth.toothNo === 19).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 19).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <ellipse xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path121" cx="46.196453" cy="124.85229" rx="1.8833088" ry="1.6617429" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 19) && dataObj.find((tooth) => tooth.toothNo === 19).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 19).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 43.946112,107.86773 3.01591,-1.88005 2.976742,1.95839 3.446753,-1.99755" id="path227" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 19) && dataObj.find((tooth) => tooth.toothNo === 19).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 19).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 49.159897,110.92135 -0.0554,3.32348 v 0" id="path353" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 19) && dataObj.find((tooth) => tooth.toothNo === 19).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 19).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>

                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 49.630723,73.005908 c 0.110784,55.391432 0.110784,55.391432 0.110784,55.391432" id="path168" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 45.974889,73.227474 c 0,56.720826 0,56.720826 0,56.720826" id="path167" />


                    </>
                )}


                {/* Tooth 20 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 20) && dataObj.find((tooth) => tooth.toothNo === 20).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 20).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <ellipse xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path122" cx="71.34417" cy="129.06204" rx="1.7725258" ry="1.8833088" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 20) && dataObj.find((tooth) => tooth.toothNo === 20).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 20).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 69.130916,106.96688 2.232557,-1.84089 1.762544,1.91922 2.232558,-1.80171" id="path228" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 20) && dataObj.find((tooth) => tooth.toothNo === 20).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 20).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 72.28582,110.64439 0.08309,3.48966 v 0" id="path354" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 20) && dataObj.find((tooth) => tooth.toothNo === 20).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 20).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>

                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 73.116692,73.116692 c 0.110782,60.044318 0.110782,60.044318 0.110782,60.044318" id="path170" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 69.682423,73.338257 c 0.332348,58.714913 0.332348,58.714913 0.332348,58.714913" id="path169" />


                    </>
                )}


                {/* Tooth 21 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 21) && dataObj.find((tooth) => tooth.toothNo === 21).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 21).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <ellipse xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path123" cx="86.742981" cy="127.4003" rx="1.8833088" ry="1.7725258" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 21) && dataObj.find((tooth) => tooth.toothNo === 21).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 21).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 84.092962,106.84937 2.27172,-2.11505 2.58507,2.23256 1.919213,-1.80172" id="path229" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 21) && dataObj.find((tooth) => tooth.toothNo === 21).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 21).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 87.407678,110.22895 0.13848,3.68353 v 0" id="path355" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 21) && dataObj.find((tooth) => tooth.toothNo === 21).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 21).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>

                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 88.95864,74.22452 c 0.332347,57.60709 0.332347,57.60709 0.332347,57.60709" id="path172" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 84.758813,72.538502 0.626684,59.848178 v 0" id="path402" />

                    </>
                )}


                {/* Tooth 22 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 22) && dataObj.find((tooth) => tooth.toothNo === 22).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 22).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <circle xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path124" cx="108.45642" cy="130.61301" r="1.6617429" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 22) && dataObj.find((tooth) => tooth.toothNo === 22).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 22).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 106.34019,107.82856 1.91921,-1.91921 2.46757,2.03672 1.80171,-1.88005" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 22) && dataObj.find((tooth) => tooth.toothNo === 22).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 22).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 109.37039,111.72452 0.0277,3.29579 v 0" id="path356" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 22) && dataObj.find((tooth) => tooth.toothNo === 22).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 22).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>

                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 110.5613,72.784342 c 0.44313,60.598228 0.44313,60.598228 0.44313,60.598228" id="path174" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 107.00604,73.321855 1.09669,60.474865 v 0" id="path404" />


                    </>
                )}


                {/* Tooth 23 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 23) && dataObj.find((tooth) => tooth.toothNo === 23).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 23).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <ellipse xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path125" cx="121.97193" cy="126.7356" rx="1.8833088" ry="1.5509602" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 23) && dataObj.find((tooth) => tooth.toothNo === 23).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 23).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 120.16637,107.86773 2.11506,-1.84088 1.64504,1.48837 1.29253,-1.41003" id="path231" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 23) && dataObj.find((tooth) => tooth.toothNo === 23).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 23).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 122.22268,112.03909 0.0196,2.03671 v 0" id="path361" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 23) && dataObj.find((tooth) => tooth.toothNo === 23).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 23).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>

                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 123.41211,73.227474 c 1.21861,59.158046 1.21861,59.158046 1.21861,59.158046" id="path176" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 120.42098,72.451994 c 0.66469,60.487446 0.66469,60.487446 0.66469,60.487446" id="path175" />


                    </>
                )}


                {/* Tooth 24 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 24) && dataObj.find((tooth) => tooth.toothNo === 24).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 24).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <ellipse xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path126" cx="135.48746" cy="126.07089" rx="1.4401772" ry="1.5509602" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 24) && dataObj.find((tooth) => tooth.toothNo === 24).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 24).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 133.91422,107.94607 1.91922,-1.41004 1.13586,1.05752 1.37087,-1.25336" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 24) && dataObj.find((tooth) => tooth.toothNo === 24).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 24).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 136.10761,111.80408 0.0392,2.13464 v 0" id="path360" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 24) && dataObj.find((tooth) => tooth.toothNo === 24).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 24).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>

                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 137.24347,72.381832 c 0.94002,59.221498 0.94002,59.221498 0.94002,59.221498" id="path178" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 134.73674,72.225161 c 0,59.221499 0,59.221499 0,59.221499" id="path177" />


                    </>
                )}


                {/* Tooth 25 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 25) && dataObj.find((tooth) => tooth.toothNo === 25).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 25).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <ellipse xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path127" cx="159.74889" cy="125.73855" rx="1.5509602" ry="1.6617429" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 25) && dataObj.find((tooth) => tooth.toothNo === 25).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 25).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 157.68899,108.0244 1.60587,-1.52753 1.3317,1.4492 1.48838,-1.60588" id="path234" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 25) && dataObj.find((tooth) => tooth.toothNo === 25).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 25).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 159.88238,111.96075 0.0979,1.95838 v 0" id="path359" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 25) && dataObj.find((tooth) => tooth.toothNo === 25).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 25).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>

                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 160.63516,72.562777 c 0.88626,56.056133 0.88626,56.056133 0.88626,56.056133" id="path180" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 157.42245,72.008863 c 1.21861,58.714927 1.21861,58.714927 1.21861,58.714927" id="path179" />


                    </>
                )}


                {/* Tooth 26 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 26) && dataObj.find((tooth) => tooth.toothNo === 26).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 26).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <circle xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path128" cx="173.48596" cy="126.51404" r="1.7725258" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 26) && dataObj.find((tooth) => tooth.toothNo === 26).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 26).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 170.92765,108.1419 1.48838,-1.60587 1.52754,1.48837 1.64504,-1.52754 v 0" id="path236" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 26) && dataObj.find((tooth) => tooth.toothNo === 26).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 26).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 173.55189,111.84325 v 2.40881 0" id="path358" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 26) && dataObj.find((tooth) => tooth.toothNo === 26).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 26).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>

                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 174.92614,73.005908 c 0.55392,58.493352 0.55392,58.493352 0.55392,58.493352" id="path182" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 172.18102,73.321855 -0.31334,57.654795 v 0" id="path412" />


                    </>
                )}


                {/* Tooth 27 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 27) && dataObj.find((tooth) => tooth.toothNo === 27).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 27).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <ellipse xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path129" cx="187.33382" cy="131.38847" rx="1.6617429" ry="1.5509602" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 27) && dataObj.find((tooth) => tooth.toothNo === 27).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 27).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 183.30464,107.78939 2.42839,-1.99755 2.50673,1.91922 1.52754,-1.64504" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 27) && dataObj.find((tooth) => tooth.toothNo === 27).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 27).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 186.66913,110.89365 0.22156,5.20679 v 0" id="path357" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 27) && dataObj.find((tooth) => tooth.toothNo === 27).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 27).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>

                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 187.77696,72.784342 c 0.22156,61.152138 0.22156,61.152138 0.22156,61.152138" id="path184" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 184.24466,71.911819 0.47001,61.414881 v 0" id="path414" />



                    </>
                )}


                {/* Tooth 28 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 28) && dataObj.find((tooth) => tooth.toothNo === 28).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 28).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <ellipse xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path130" cx="208.93648" cy="127.95421" rx="1.7725258" ry="1.8833088" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 28) && dataObj.find((tooth) => tooth.toothNo === 28).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 28).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 205.16019,106.88854 2.27173,-1.68421 2.03671,1.64504 2.35006,-1.76254 v 0" id="path238" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 28) && dataObj.find((tooth) => tooth.toothNo === 28).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 28).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 208.05198,109.94835 0.22156,5.20679 v 0" id="path357-2" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 28) && dataObj.find((tooth) => tooth.toothNo === 28).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 28).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>

                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 209.82274,73.670605 c 0.55392,58.825695 0.55392,58.825695 0.55392,58.825695" id="path186" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 206.61004,74.22452 c -0.22156,57.49631 -0.22156,57.49631 -0.22156,57.49631" id="path185" />

                    </>
                )}


                {/* Tooth 29 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 29) && dataObj.find((tooth) => tooth.toothNo === 29).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 29).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <ellipse xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path131" cx="224.77844" cy="128.72969" rx="1.8833088" ry="1.7725258" />


                )}

                {dataObj.find((tooth) => tooth.toothNo === 29) && dataObj.find((tooth) => tooth.toothNo === 29).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 29).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 220.78809,106.06602 2.19338,-1.41004 2.07589,1.4492 1.52754,-1.3317" id="path239" />


                )}

                {dataObj.find((tooth) => tooth.toothNo === 29) && dataObj.find((tooth) => tooth.toothNo === 29).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 29).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 223.30475,109.58146 0.22156,5.20679" id="path357-2-8" />

                )}

                {dataObj.find((tooth) => tooth.toothNo === 29) && dataObj.find((tooth) => tooth.toothNo === 29).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 29).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>

                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 224.88922,73.338257 c 1.10782,59.601183 1.10782,59.601183 1.10782,59.601183" id="path188" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 222.00887,74.22452 0.33234,59.15805 v 0" id="path418" />



                    </>
                )}


                {/* Tooth 30 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 30) && dataObj.find((tooth) => tooth.toothNo === 30).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 30).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <circle xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path132" cx="249.59378" cy="123.52289" r="1.8833088" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 30) && dataObj.find((tooth) => tooth.toothNo === 30).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 30).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 242.33029,106.65353 3.6426,-1.91921 3.25092,1.91921 v 0 l 2.85924,-1.88005" id="path246" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 30) && dataObj.find((tooth) => tooth.toothNo === 30).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 30).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 247.2512,109.9049 0.22156,5.20679 v 0" id="path357-2-7" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 30) && dataObj.find((tooth) => tooth.toothNo === 30).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 30).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 248.48596,72.895126 c 0.99706,57.939444 0.99706,57.939444 0.99706,57.939444" id="path190" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 244.94092,72.784342 c 0.44313,57.939448 0.44313,57.939448 0.44313,57.939448" id="path189" />
                    </>
                )}

                {/* Tooth 31 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 31) && dataObj.find((tooth) => tooth.toothNo === 31).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 31).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <ellipse xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path133" cx="267.98376" cy="122.08272" rx="1.8833088" ry="1.7725258" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 31) && dataObj.find((tooth) => tooth.toothNo === 31).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 31).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 261.91413,106.10519 2.97674,-1.29254 2.78091,1.64504 2.74173,-1.48837 v 0" id="path266" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 31) && dataObj.find((tooth) => tooth.toothNo === 31).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 31).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 265.58167,108.96488 0.22156,5.20679 v 0" id="path357-2-2" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 31) && dataObj.find((tooth) => tooth.toothNo === 31).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 31).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 267.42984,72.451994 c 0.11078,57.274736 0.11078,57.274736 0.11078,57.274736" id="path192" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 263.99557,73.116692 c -0.11078,53.286558 -0.11078,53.286558 -0.11078,53.286558" id="path191" />
                    </>
                )}

                {/* Tooth 32 paths */}
                {dataObj.find((tooth) => tooth.toothNo === 32) && dataObj.find((tooth) => tooth.toothNo === 32).treatments.find((treatment) => treatment.treatmentId === 'treatment1') && dataObj.find((tooth) => tooth.toothNo === 32).treatments.find((treatment) => treatment.treatmentId === 'treatment1').isNeedToTreat && (
                    <circle xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path134" cx="283.82568" cy="119.20236" r="1.9940915" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 32) && dataObj.find((tooth) => tooth.toothNo === 32).treatments.find((treatment) => treatment.treatmentId === 'treatment2') && dataObj.find((tooth) => tooth.toothNo === 32).treatments.find((treatment) => treatment.treatmentId === 'treatment2').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 280.83211,106.41853 2.50672,-1.37088 1.95839,1.52754 1.84088,-1.25336" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 32) && dataObj.find((tooth) => tooth.toothNo === 32).treatments.find((treatment) => treatment.treatmentId === 'treatment3') && dataObj.find((tooth) => tooth.toothNo === 32).treatments.find((treatment) => treatment.treatmentId === 'treatment3').isNeedToTreat && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 283.44519,108.38164 0.22156,5.20679 v 0" id="path357-2-78" />
                )}

                {dataObj.find((tooth) => tooth.toothNo === 32) && dataObj.find((tooth) => tooth.toothNo === 32).treatments.find((treatment) => treatment.treatmentId === 'treatment4') && dataObj.find((tooth) => tooth.toothNo === 32).treatments.find((treatment) => treatment.treatmentId === 'treatment4').isNeedToTreat && (
                    <>
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 285.26588,75.332347 c 0.99704,48.079763 0.99704,48.079763 0.99704,48.079763" id="path194" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 1, stroke: '#dd17b4', strokeWidth: 0.75, strokeOpacity: 1 }} d="m 281.61005,75.44313 c 1.2186,51.07091 1.2186,51.07091 1.2186,51.07091" id="path193" />
                    </>
                )}


            </svg>

            {showDropdown && (
                <>
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                        <p style={{ fontWeight: 'bold', marginRight: '-20px', color: 'white', backgroundColor: 'ActiveCaption', padding: '10px', borderRadius: '10px' }}>Tooth Number : {toothNo}</p>
                        <SelectButtons handleItemClick={handleItemClick} />
                    </div>

                </>
            )}

            {tooltipContent && (
                <div
                    style={{
                        position: 'absolute',
                        top: tooltipPosition.y + 10,
                        left: tooltipPosition.x + 10,
                        fontSize: '13px',
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        color: '#fff',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        zIndex: 9999,
                    }}
                >
                    {tooltipContent}
                </div>
            )}


        </div>
    );
}

export default App;
