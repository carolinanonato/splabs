import '../Styles/Cases.scss'


// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const baseURL = "https://sp-labs.vercel.app/api/cases";
function CasesCard(props) {

    // const [solution, setSolution] = useState(null);

    // const fetchApi = async () => {
    //     try {
    //         const resp = await axios(baseURL, {
    //             headers: {
    //                 Accept: 'application/json'
    //             }
    //         });
    //         console.log(resp);
    //     } catch (error) {

    //     }
    // }

    // useEffect(() => {
    //     axios.get(`${baseURL}`).then((response) => {
    //         console.log(response)
    //         // setSolution(response.data);
    //     });
    // }, []);


    return (

        <div className="cases-component">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <button>acesse<span class="material-symbols-outlined">
                arrow_forward
            </span></button>

        </div>

    );



}
export default CasesCard