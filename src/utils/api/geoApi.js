import axios from "axios";

async function getVilles() {
    const response = await axios.get(`https://geo.api.gouv.fr/departements/987/communes`);
    return response.data;
}

export {getVilles}