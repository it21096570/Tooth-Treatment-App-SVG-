import React, { useState } from 'react';
import dataObj from './method.js'
import SelectButtons from './SelectButtons.js';

function App() {


    const [showDropdown, setShowDropdown] = useState(false);
    const [dataState, setDataState] = useState(dataObj);



    console.log(dataObj)

    const handleItemClick = (item) => {

        const currntValue = dataState.find((tooth) => tooth.toothNo === toothNo).
            treatments.find((treatment) => treatment.treatmentId === item).
            isNeedToTreat

        if (!currntValue) {
            dataState.find((tooth) => tooth.toothNo === toothNo).
                treatments.find((treatment) => treatment.treatmentId === item).
                isNeedToTreat = true;
        } else {
            dataState.find((tooth) => tooth.toothNo === toothNo).
                treatments.find((treatment) => treatment.treatmentId === item).
                isNeedToTreat = false;
        }

        setDataState(dataState);

    };

    console.log("After : ", dataState);


    return (
        <div className="App">

            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="80.000000%" height="35.000000%" viewBox="0 0 300.000000 135.000000" preserveAspectRatio="xMidYMid meet">

                    
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
