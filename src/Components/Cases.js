import axios from "axios";
import React from "react";

const baseURL = "https://sp-labs.vercel.app/api/cases";
function Cases() {

    const [solution, setSolution] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setSolution(response.data);
        });
    }, []);


    return (
        <div>
            <h1>{solution}</h1>

        </div>
    );



}
export default Cases