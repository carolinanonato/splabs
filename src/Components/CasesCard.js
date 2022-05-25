import React, { useState, useEffect } from 'react'
import '../Styles/Cases.scss'

import axios from 'axios'

function CasesCard() {
    const [cases, setCases] = useState([]);

    useEffect(() => {
        const casesInfo = async () => {
            const response = await axios('https://sp-labs.vercel.app/api/cases');

            setCases(response.data.cases);
        };
        casesInfo();
    }, []);

    const useCasesInfos = cases.map((cases) => {
        return <div className="cases-component">
            <h3>{cases.title}</h3>
            <p>{cases.description}</p>
            <button>acesse<span className="material-symbols-outlined arrow">
                arrow_forward
            </span></button>

        </div>
    })

    return (
        <>
            <div className="cases">
                {useCasesInfos}
            </div>
        </>
    );
}

export default CasesCard;