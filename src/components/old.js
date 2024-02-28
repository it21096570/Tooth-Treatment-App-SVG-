import React, { useState } from 'react';
import dataObj from './method.js'

function App() {


    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedItem, setSelectedItem] = useState([]);
    const [pathId, setPathId] = useState(null);

    console.log(dataObj)

    const handleToothClick = (pathId) => {
        // setPathId(pathId);
        dataObj.toothNo = pathId

        setSelectedItem(null);
        setShowDropdown(!showDropdown);
    };

    const handleItemClick = (item) => {
        // console.log(item);

        for (let i = 0; i < dataObj.treatments.length; i++) {
            if (dataObj.treatments[i].treatment === item) {
                dataObj.treatments[i].isNeedToTreat = true;
            }
        }

        // setSelectedItem(item);
        setShowDropdown(false);
    };

    console.log("After : ", dataObj);


    return (
        <div className="App">

            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="80.000000%" height="35.000000%" viewBox="0 0 300.000000 135.000000" preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,135.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">


                    {/* Tooth 01 */}
                    <g onClick={() => handleToothClick("path1")}>
                        <path xmlns="http://www.w3.org/2000/svg" d="M95 1198 c-4 -14 -15 -98 -18 -137 -2 -19 4 -26 28 -32 50 -14 60 6 45 87 -11 67 -23 94 -42 94 -5 0 -10 -6 -13 -12z m44 -70 c1 -11 -6 -18 -17 -18 -19 0 -22 19 -7 54 8 19 9 19 16 0 4 -10 8 -27 8 -36z m9 -51 c6 -32 -5 -45 -32 -40 -21 4 -26 11 -26 35 0 26 3 29 27 26 17 -2 29 -10 31 -21z" id="path1" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M90 972 c-28 -23 -19 -69 16 -78 30 -8 40 -1 52 36 9 23 8 33 -4 45 -20 20 -37 19 -64 -3z m60 -7 c10 -12 10 -16 -1 -19 -42 -13 -44 -14 -25 -15 15 -1 16 -4 6 -15 -12 -15 -44 -10 -34 5 3 5 0 9 -5 9 -18 0 -13 28 7 39 24 14 38 13 52 -4z" id="path21" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M81 836 c-19 -22 -4 -53 27 -59 35 -7 54 9 50 42 -2 21 -9 27 -34 29 -18 2 -36 -3 -43 -12z m67 -20 c5 -22 -13 -35 -39 -29 -12 4 -19 14 -19 30 0 21 4 24 27 21 18 -2 29 -10 31 -22z" id="path48" />
                    </g>


                    {/* Tooth 02 */}
                    <g onClick={() => handleToothClick("path2")}>
                        <path xmlns="http://www.w3.org/2000/svg" d="M260 1185 c0 -25 -5 -65 -12 -89 -15 -56 -2 -76 48 -73 53 4 59 17 45 84 -18 80 -39 123 -62 123 -16 0 -19 -8 -19 -45z m58 -27 c10 -38 10 -38 -19 -38 -28 0 -29 2 -28 43 1 23 4 32 6 20 2 -13 9 -23 15 -23 6 0 8 11 3 28 -10 42 11 14 23 -30z m16 -64 c9 -24 7 -54 -4 -55 -58 -6 -82 3 -75 26 3 8 7 22 10 30 6 20 61 20 69 -1z" id="path2" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M280 989 c-27 -11 -40 -26 -40 -49 0 -8 6 -4 13 10 9 17 22 26 45 28 18 2 32 -1 32 -7 0 -6 0 -14 1 -18 0 -5 -10 -11 -23 -15 l-23 -6 25 -1 c18 -1 21 -4 13 -12 -15 -15 -56 -17 -66 -4 -5 6 -7 4 -5 -4 6 -21 60 -34 75 -18 6 6 13 27 15 46 4 42 -24 64 -62 50z" id="path17" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M280 851 c-27 -5 -36 -11 -38 -29 -5 -33 15 -52 54 -52 27 0 37 5 46 25 17 37 -13 64 -62 56z m54 -49 c-6 -9 -25 -18 -43 -20 -26 -3 -31 0 -31 17 0 12 -1 24 -2 28 -2 4 11 10 27 14 38 7 65 -13 49 -39z" id="path42" />
                    </g>

                    {/* Tooth 03 */}
                    <g onClick={() => handleToothClick("path11")}>
                        <path xmlns="http://www.w3.org/2000/svg" d="M455 1232 c-3 -3 -5 -24 -5 -47 0 -24 -7 -62 -15 -85 -14 -39 -14 -45 1 -61 25 -28 99 -21 108 9 3 9 -5 55 -17 101 -19 73 -25 85 -45 86 -12 1 -24 -1 -27 -3z m59 -74 c7 -37 6 -38 -24 -38 -30 0 -30 0 -29 53 l1 52 11 -35 11 -35 4 40 c4 44 13 32 26 -37z m16 -74 c14 -36 -2 -54 -48 -51 -30 2 -38 6 -40 25 -6 39 5 52 43 52 29 0 37 -5 45 -26z" id="path11" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M480 993 c-27 -10 -50 -36 -50 -57 1 -16 4 -13 15 12 13 29 19 33 47 30 23 -2 34 -9 36 -22 2 -10 0 -16 -5 -13 -4 2 -17 1 -28 -4 -19 -7 -19 -8 3 -8 27 -1 29 -17 2 -24 -12 -3 -24 1 -31 11 -8 14 -9 12 -3 -8 6 -22 5 -23 -10 -11 -10 9 -16 10 -16 2 0 -6 3 -11 8 -12 4 0 19 -2 34 -4 33 -4 47 11 50 54 3 36 -24 63 -52 54z" id="path18" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M444 847 c-19 -11 -18 -52 2 -71 33 -34 94 -9 94 38 0 13 -6 28 -12 34 -15 12 -62 11 -84 -1z m79 -6 c11 -2 8 -46 -5 -59 -22 -22 -58 -14 -68 14 -16 41 8 56 73 45z" id="path43" />

                    </g>

                    {/* Tooth 04 */}
                    <g onClick={() => handleToothClick("path3")}>
                        <path xmlns="http://www.w3.org/2000/svg" d="M702 1233 c-1 -38 -7 -92 -14 -121 -10 -49 -10 -55 9 -74 16 -16 25 -18 41 -9 27 14 32 31 22 77 -5 21 -15 72 -22 113 -17 96 -33 102 -36 14z m37 -80 c1 -16 -3 -21 -14 -17 -16 7 -21 68 -8 101 6 14 9 8 15 -22 4 -22 7 -50 7 -62z m9 -57 c12 -24 12 -30 -3 -46 -14 -15 -22 -17 -36 -9 -21 11 -23 26 -9 64 12 32 30 28 48 -9z" id="path3" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M695 976 c-29 -21 -10 -70 27 -74 23 -3 29 2 34 24 12 49 -23 78 -61 50z m50 -6 c4 -6 1 -17 -5 -25 -10 -11 -10 -15 -1 -15 7 0 9 -4 6 -10 -13 -20 -45 -10 -51 16 -9 35 33 62 51 34z" id="path22" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M698 859 c-32 -18 -15 -89 20 -89 25 0 42 20 42 50 0 43 -27 60 -62 39z m47 -44 c0 -23 -5 -31 -21 -33 -16 -2 -23 4 -28 23 -8 33 0 47 27 43 17 -2 22 -10 22 -33z" id="path33" />

                    </g>

                    {/* Tooth 05 */}
                    <g onClick={() => handleToothClick("path4")}>
                        <path xmlns="http://www.w3.org/2000/svg" d="M852 1202 c-6 -53 -14 -109 -18 -124 -5 -21 -1 -30 21 -44 25 -16 27 -16 46 3 19 18 20 25 9 84 -25 138 -32 169 -39 173 -4 3 -12 -39 -19 -92z m37 -24 c1 -29 -3 -38 -15 -38 -13 0 -15 7 -10 31 3 17 6 46 7 63 1 30 1 30 9 6 4 -14 8 -42 9 -62z m17 -91 c5 -23 2 -34 -12 -44 -26 -19 -53 8 -46 45 9 51 46 51 58 -1z" id="path4" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M846 974 c-22 -22 -20 -31 2 -11 22 20 34 21 50 5 9 -9 7 -14 -6 -24 -11 -9 -13 -13 -4 -14 21 0 3 -20 -18 -20 -10 0 -21 7 -23 15 -4 11 -4 10 -3 -2 1 -12 11 -19 29 -21 21 -3 29 2 37 23 5 14 10 28 10 30 0 9 -33 35 -45 35 -7 0 -21 -7 -29 -16z" id="path23" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M846 851 c-27 -30 -9 -76 29 -76 23 0 30 6 36 30 6 21 4 34 -8 47 -21 23 -36 23 -57 -1z m49 -36 c0 -38 -31 -47 -44 -13 -10 27 4 50 28 46 10 -2 16 -14 16 -33z" id="path34" />


                    </g>

                    {/* Tooth 06 */}
                    <g onClick={() => handleToothClick("path1")}>
                        <path xmlns="http://www.w3.org/2000/svg" d="M1078 1313 c-2 -5 -5 -35 -6 -68 -1 -33 -8 -88 -14 -122 -13 -69 -3 -93 36 -93 34 0 47 32 36 87 -5 26 -14 81 -20 120 -11 67 -23 95 -32 76z m31 -135 c1 -29 -3 -38 -15 -38 -14 0 -16 8 -10 46 3 26 6 54 7 63 2 28 17 -32 18 -71z m14 -81 c10 -32 -4 -57 -33 -57 -20 0 -30 27 -23 65 7 35 43 31 56 -8z" id="path1" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1060 975 c-14 -17 -5 -52 19 -64 20 -11 34 -4 49 25 20 38 -40 73 -68 39z m57 -6 c17 -17 4 -39 -23 -39 -28 0 -44 28 -23 41 19 12 33 11 46 -2z" id="path24" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1061 852 c-6 -11 -7 -31 -2 -48 6 -22 13 -29 31 -29 30 0 51 46 34 73 -16 25 -51 27 -63 4z m55 -22 c2 -34 -5 -50 -22 -50 -9 0 -14 11 -14 33 0 24 -3 28 -10 17 -5 -8 -10 -10 -10 -4 0 16 23 35 40 32 8 -2 16 -14 16 -28z" id="path35" />


                    </g>

                    {/* Tooth 07 */}
                    <g onClick={() => handleToothClick("path9")}>
                        <path xmlns="http://www.w3.org/2000/svg" d="M1205 1183 c-13 -144 -14 -138 24 -141 l34 -3 -7 63 c-10 86 -26 158 -35 158 -5 0 -11 -35 -16 -77z m34 -30 c0 -13 -5 -23 -11 -23 -9 0 -12 15 -9 52 4 47 5 49 12 23 3 -16 7 -40 8 -52z m-1 -45 c7 -7 12 -22 12 -35 0 -18 -6 -23 -25 -23 -26 0 -32 19 -19 54 7 19 16 20 32 4z" id="path9" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1194 965 c-4 -10 1 -25 13 -37 19 -18 21 -18 37 -3 24 24 16 49 -17 53 -18 2 -29 -2 -33 -13z m56 -9 c0 -16 -27 -29 -41 -20 -19 11 -9 34 16 34 15 0 25 -6 25 -14z" id="path31" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1203 864 c-18 -8 -16 -59 2 -78 29 -29 63 10 53 61 -3 18 -32 27 -55 17z m42 -39 c0 -23 -4 -30 -20 -30 -15 0 -20 7 -20 25 0 34 4 42 23 38 11 -2 17 -13 17 -33z" id="path36" />


                    </g>

                    {/* Tooth 08 */}
                    <g onClick={() => handleToothClick("path7")}>
                        <path xmlns="http://www.w3.org/2000/svg" d="M1340 1198 c-6 -51 -13 -111 -13 -133 l-2 -40 43 -3 c40 -3 42 -2 42 25 -1 63 -40 243 -53 243 -3 0 -10 -42 -17 -92z m42 -24 c5 -38 4 -41 -14 -36 -17 4 -19 11 -14 41 3 20 6 45 7 56 0 20 0 20 8 0 5 -11 10 -39 13 -61z m8 -63 c5 -11 10 -34 10 -51 0 -29 -2 -31 -32 -28 -27 2 -34 8 -36 30 -6 55 35 90 58 49z" id="path7" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1333 983 c-20 -7 -15 -38 8 -59 22 -19 43 -13 63 18 20 32 -28 59 -71 41z m55 -11 c19 -13 3 -42 -23 -42 -27 0 -39 14 -31 35 6 16 34 19 54 7z" id="path25" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1327 863 c-11 -10 -8 -60 5 -88 24 -53 78 -14 78 57 0 37 -1 38 -38 38 -21 0 -42 -3 -45 -7z m73 -34 c0 -59 -37 -91 -59 -51 -8 15 -9 55 -2 80 1 1 15 2 31 2 27 0 30 -3 30 -31z" id="path37" />


                    </g>

                    {/* Tooth 09 */}
                    <g onClick={() => handleToothClick("path8")}>
                        <path xmlns="http://www.w3.org/2000/svg" d="M1582 1233 c-40 -183 -40 -216 -5 -221 12 -2 32 2 43 8 18 10 21 18 17 48 -6 41 -26 193 -26 205 -1 4 -5 7 -10 7 -5 0 -14 -21 -19 -47z m27 -74 c1 -9 -7 -19 -17 -21 -17 -5 -18 -1 -11 41 4 25 9 53 10 61 1 16 17 -53 18 -81z m7 -40 c4 -7 9 -29 11 -50 4 -34 2 -39 -21 -45 -35 -8 -46 2 -46 41 0 47 38 83 56 54z" id="path8" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1568 979 c-24 -14 -23 -31 5 -57 21 -20 25 -21 45 -6 52 36 4 95 -50 63z m51 -8 c21 -13 5 -41 -23 -41 -27 0 -44 29 -24 42 17 10 30 10 47 -1z" id="path26" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1550 833 c0 -45 23 -83 50 -83 26 0 42 33 38 78 -3 36 -4 37 -45 40 l-43 3 0 -38z m74 12 c-1 -5 -5 -21 -9 -35 -5 -19 -4 -21 4 -10 14 19 14 4 1 -21 -23 -42 -60 -10 -60 51 0 29 2 31 33 28 17 -2 31 -7 31 -13z" id="path38" />


                    </g>

                    {/* Tooth 10 */}
                    <g onClick={() => handleToothClick("path10")}>
                        <path xmlns="http://www.w3.org/2000/svg" d="M1721 1208 c-6 -29 -13 -79 -17 -110 l-6 -58 37 0 38 0 -7 43 c-4 23 -10 72 -13 110 -3 37 -9 67 -14 67 -4 0 -12 -24 -18 -52z m16 -79 c-4 -3 -1 -12 8 -19 8 -7 15 -23 15 -36 0 -19 -5 -24 -25 -24 -20 0 -25 5 -25 24 0 14 5 28 10 31 6 4 8 11 4 16 -3 5 -2 29 2 52 l8 42 6 -40 c3 -22 2 -43 -3 -46z" id="path10" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1704 966 c-8 -21 15 -58 33 -54 22 4 38 32 30 52 -8 20 -56 21 -63 2z m56 -11 c0 -9 -7 -18 -16 -22 -18 -7 -39 11 -30 26 11 17 46 13 46 -4z" id="path32" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1700 831 c0 -28 22 -61 40 -61 14 0 30 35 30 64 0 23 -4 26 -35 26 -32 0 -35 -2 -35 -29z m55 -4 c-1 -13 -5 -29 -9 -35 -12 -19 -36 5 -36 34 0 18 5 24 23 24 17 0 22 -5 22 -23z" id="path44" />


                    </g>

                    {/* Tooth 11 */}
                    <g onClick={() => handleToothClick("path2")}>
                        <path xmlns="http://www.w3.org/2000/svg" d="M1861 1288 c-6 -18 -15 -67 -20 -108 -6 -41 -13 -84 -16 -95 -4 -13 1 -28 15 -43 17 -18 25 -20 41 -11 29 15 33 34 21 92 -7 29 -12 83 -13 120 -2 76 -12 93 -28 45z m18 -110 c1 -28 -3 -38 -14 -38 -17 0 -19 22 -8 85 6 36 7 38 14 15 4 -14 7 -42 8 -62z m11 -67 c0 -11 3 -26 6 -34 3 -8 -3 -22 -12 -31 -16 -17 -18 -16 -37 3 -18 17 -19 23 -7 50 14 35 50 43 50 12z" id="path2" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1840 975 c-15 -18 -5 -64 16 -72 19 -7 54 24 54 48 0 17 -27 39 -48 39 -5 0 -15 -7 -22 -15z m54 -17 c14 -23 -2 -39 -32 -32 -21 6 -30 33 -15 48 11 11 35 3 47 -16z" id="path27" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M1842 858 c-7 -7 -12 -24 -12 -38 0 -51 53 -70 70 -24 13 34 13 40 -6 58 -19 19 -36 20 -52 4z m47 -12 c8 -10 9 -16 1 -21 -5 -3 -10 -15 -10 -26 0 -21 -29 -27 -32 -6 -4 36 -3 43 5 55 12 16 22 15 36 -2z" id="path39" />

                    </g>

                    {/* Tooth 12 */}
                    <g onClick={() => handleToothClick("path5")}>
                        <path xmlns="http://www.w3.org/2000/svg" d="M2082 1279 c-10 -25 -33 -158 -36 -208 0 -13 8 -29 20 -37 19 -13 24 -12 44 4 23 18 23 22 12 73 -6 30 -15 86 -20 124 -8 64 -9 68 -20 44z m12 -86 c6 -44 4 -53 -9 -53 -16 0 -19 26 -9 79 8 40 10 38 18 -26z m19 -96 c7 -22 5 -32 -9 -48 -16 -18 -18 -18 -36 -3 -21 20 -21 24 -8 59 13 34 40 30 53 -8z" id="path5" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2057 975 c-11 -10 -13 -23 -8 -42 6 -22 13 -28 36 -28 22 0 30 6 38 29 8 24 6 32 -9 43 -23 17 -39 17 -57 -2z m51 -7 c14 -14 16 -32 3 -24 -5 3 -8 -2 -7 -11 0 -11 -6 -18 -18 -18 -13 0 -20 8 -21 25 -2 14 -1 28 2 33 6 11 27 9 41 -5z" id="path28" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2059 853 c-15 -17 -13 -50 3 -70 18 -22 48 -15 58 13 13 34 13 40 -6 58 -20 20 -38 20 -55 -1z m49 -15 c15 -19 -4 -60 -25 -56 -30 6 -30 68 0 68 8 0 19 -6 25 -12z" id="path40" />


                    </g>

                    {/* Tooth 13 */}
                    <g onClick={() => handleToothClick("path6")}>
                        <path xmlns="http://www.w3.org/2000/svg" d="M2231 1268 c-5 -18 -14 -64 -20 -103 -5 -38 -12 -77 -16 -86 -4 -11 2 -25 16 -38 20 -19 25 -19 43 -7 16 10 20 23 19 52 -8 139 -17 214 -23 214 -5 0 -13 -15 -19 -32z m18 -68 c1 -50 -1 -60 -15 -60 -14 0 -15 7 -9 46 6 44 14 74 20 74 1 0 3 -27 4 -60z m11 -89 c26 -49 -10 -100 -44 -62 -16 18 -14 42 7 69 13 17 25 15 37 -7z" id="path6" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2213 983 c-7 -2 -13 -17 -13 -33 0 -54 56 -68 74 -18 15 42 -17 69 -61 51z m46 -12 c17 -11 7 -61 -14 -61 -20 0 -30 21 -14 31 11 7 10 9 -3 9 -18 0 -23 11 -11 23 9 9 25 8 42 -2z" id="path29" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2211 856 c-31 -37 9 -103 47 -80 36 23 23 94 -18 94 -10 0 -23 -6 -29 -14z m52 -14 c3 -4 3 -20 0 -35 -4 -22 -10 -27 -27 -25 -37 5 -34 68 3 68 11 0 22 -3 24 -8z" id="path41" />


                    </g>

                    {/* Tooth 14 */}
                    <g onClick={() => handleToothClick("path12")}>
                        <path xmlns="http://www.w3.org/2000/svg" d="M2457 1233 c-4 -3 -7 -11 -7 -17 0 -6 5 -4 10 4 7 11 10 5 11 -25 l1 -40 13 35 13 35 1 -47 c1 -47 0 -48 -29 -48 -30 0 -31 1 -26 38 3 20 -3 4 -14 -37 -24 -88 -18 -101 46 -101 57 0 70 21 49 80 -8 24 -15 62 -15 86 0 39 -2 44 -23 44 -13 0 -27 -3 -30 -7z m59 -138 c10 -39 -2 -55 -39 -55 -44 0 -61 19 -47 54 8 21 16 26 45 26 29 0 36 -4 41 -25z" id="path12" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2431 986 c-12 -15 -6 -61 12 -83 15 -20 65 -16 77 6 15 29 12 49 -10 71 -23 23 -62 26 -79 6z m73 -12 c20 -20 20 -48 1 -64 -13 -11 -14 -10 -8 6 6 16 4 17 -9 6 -17 -14 -51 -6 -42 10 4 6 1 14 -6 18 -20 12 -3 40 24 40 14 0 32 -7 40 -16z" id="path19" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2427 853 c-12 -12 -7 -60 7 -72 8 -7 30 -11 48 -9 25 2 35 9 42 29 15 43 2 59 -47 59 -24 0 -47 -3 -50 -7z m89 -17 c10 -26 -15 -56 -46 -56 -23 0 -31 5 -36 24 -3 14 -3 30 1 35 10 16 75 13 81 -3z" id="path45" />


                    </g>

                    {/* Tooth 15 */}
                    <g onClick={() => handleToothClick("path14")}>
                        <path xmlns="http://www.w3.org/2000/svg" d="M2646 1198 c-8 -18 -19 -56 -26 -85 -16 -63 -6 -81 45 -81 49 0 62 19 47 74 -7 24 -12 62 -12 84 0 34 -3 40 -21 40 -13 0 -24 -11 -33 -32z m18 -3 c-4 -15 -2 -25 4 -25 6 0 13 10 15 23 2 12 5 3 6 -20 1 -40 -1 -43 -24 -43 -28 0 -30 11 -14 59 13 37 22 41 13 6z m36 -90 c7 -8 10 -25 6 -39 -5 -22 -11 -25 -44 -23 -30 2 -38 6 -40 25 -7 45 49 72 78 37z" id="path14" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2622 983 c-11 -24 -1 -74 18 -85 9 -6 25 -6 42 1 36 13 47 54 23 81 -23 25 -71 26 -83 3z m78 -8 c7 -8 10 -25 6 -38 -4 -19 -12 -24 -33 -22 -41 3 -43 4 -37 19 3 8 1 17 -5 20 -6 4 -8 13 -4 21 7 19 57 19 73 0z" id="path20" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2620 845 c-27 -32 19 -82 66 -71 25 7 41 44 30 71 -7 20 -79 20 -96 0z m85 -5 c21 -35 -41 -72 -71 -43 -16 17 -16 16 -8 37 7 18 69 22 79 6z" id="path46" />


                    </g>

                    {/* Tooth 16 */}
                    <g onClick={() => handleToothClick("path16")}>
                        <path xmlns="http://www.w3.org/2000/svg" d="M2821 1173 c-29 -112 -24 -140 24 -140 38 0 50 21 36 66 -6 21 -11 55 -11 75 0 29 -4 36 -20 36 -14 0 -22 -10 -29 -37z m27 -18 c2 -27 -1 -35 -14 -35 -12 0 -15 6 -10 23 3 12 6 28 6 35 0 29 16 9 18 -23z m20 -82 c3 -29 1 -32 -25 -30 -18 2 -29 9 -31 20 -6 30 6 49 30 45 18 -2 24 -11 26 -35z" id="path16" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2807 983 c-12 -12 -7 -60 7 -73 38 -31 97 28 66 65 -13 15 -61 21 -73 8z m57 -9 c18 -7 22 -34 5 -34 -5 0 -8 -4 -4 -9 8 -13 -10 -22 -29 -15 -15 6 -15 8 1 19 17 13 17 13 -2 12 -11 -1 -21 5 -23 16 -4 18 21 23 52 11z" id="path30" />
                        <path xmlns="http://www.w3.org/2000/svg" d="M2810 846 c-25 -25 -2 -66 37 -66 29 0 53 44 34 63 -15 15 -57 17 -71 3z m55 -27 c0 -29 -41 -41 -51 -15 -10 25 2 43 28 41 17 -1 23 -8 23 -26z" id="path47" />


                    </g>

                </g>

                {/* Tooth 01 paths */}
                {selectedItem === 'FILLING' && pathId === 'path15' && (
                    <circle xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path103" cx="11.078286" cy="13.737076" r="1.5509602" />
                )}

                {selectedItem === 'IMPLANT' && pathId === 'path15' && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 8.9180205,27.446455 1.9110045,1.689439 2.160266,-1.661743 2.049483,1.661743 v 0" id="path98" />
                )}

                {selectedItem === 'CUT' && pathId === 'path15' && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeOpacity: 1, strokeDasharray: 'none' }} d="m 12.298645,23.304757 0.03916,2.604648 v 0" id="path335" />
                )}

                {selectedItem === 'ROOT CANAL' && pathId === 'path15' && (
                    <>
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 0.969697, stroke: '#e512d2', strokeWidth: 0.65, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 13.317004,9.5569088 0.626682,51.3879672 v 0" id="path363" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 0.969697, stroke: '#e512d2', strokeWidth: 0.65, strokeDasharray: 'none', strokeOpacity: 1 }} d="M 9.8702497,9.4002375 10.340262,60.474863 v 0" id="path362" />
                    </>
                )}



                {/* Tooth 02 paths */}
                {selectedItem === 'FILLING' && pathId === 'path13' && (
                    <ellipse xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff0000', fillRule: 'evenodd', strokeWidth: 0.75 }} id="path104" cx="27.474152" cy="12.740029" rx="1.5509602" ry="1.2186115" />
                )}

                {selectedItem === 'IMPLANT' && pathId === 'path13' && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none', stroke: '#466ee5', strokeWidth: 0.35 }} d="m 25.928989,27.378193 2.506731,2.193388 3.250915,-2.075885 2.310892,1.880047 v 0" id="path208" />
                )}

                {selectedItem === 'CUT' && pathId === 'path13' && (
                    <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#00ff00', fillOpacity: 0.969697, stroke: '#3ee512', strokeWidth: 0.55, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 30.022009,22.090559 0.05875,2.878823 v 0" id="path336" />
                )}

                {selectedItem === 'ROOT CANAL' && pathId === 'path13' && (
                    <>
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 0.969697, stroke: '#e512d2', strokeWidth: 0.65, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 30.707443,7.3635197 1.253366,52.4846613 v 0" id="path365" />
                        <path xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ff00ff', fillOpacity: 0.969697, stroke: '#e512d2', strokeWidth: 0.65, strokeDasharray: 'none', strokeOpacity: 1 }} d="m 26.477337,7.206849 0.783352,54.208038 v 0" id="path364" />
                    </>
                )}

            </svg>

            {showDropdown && (
                <div className="dropdown" style={{ top: '50px', left: '50px', padding: '5px' }}>
                    <ul>
                        <button style={{ backgroundColor: '#a3c3f7', border: 'none', padding: '10px', cursor: 'pointer', borderRadius: '5px', marginRight: '5px' }} onClick={() => handleItemClick("Filling")}>FILLING</button>
                        <button style={{ backgroundColor: '#a3c3f7', border: 'none', padding: '10px', cursor: 'pointer', borderRadius: '5px', marginRight: '5px' }} onClick={() => handleItemClick("Implant")}>IMPLANT</button>
                        <button style={{ backgroundColor: '#a3c3f7', border: 'none', padding: '10px', cursor: 'pointer', borderRadius: '5px', marginRight: '5px' }} onClick={() => handleItemClick("Cut")}>CUT</button>
                        <button style={{ backgroundColor: '#a3c3f7', border: 'none', padding: '10px', cursor: 'pointer', borderRadius: '5px', marginRight: '5px' }} onClick={() => handleItemClick("Root Canal")}>ROOT CANAL</button>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default App;
