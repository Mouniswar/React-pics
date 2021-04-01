import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers : {
        Authorization: 'Client-ID Xc2Gg4j6rdLbo_ncE_webFX_8NyzFjY8PBFtQ2vm4ag'
    }
});