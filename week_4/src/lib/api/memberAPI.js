import axios from 'axios';

const url = 'http://ec2-13-124-127-8.ap-northeast-2.compute.amazonaws.com:3000/api/members';

const getMembersAPI = async() => {
    try {
        const {data} = await axios.get(`${url}`);
        return data.data;
    } catch (err) {
        console.log('FAIL GET MEMBERS', err);
        return err;
    }
}
const getMemberAPI = async (id) => {
    try {
        const { data } = await axios.get(`${url}/${id}`);
        console.log('[SUCCESS] GET MEMBER', data);
        return data.data;
    } catch (e) {
        console.error('[FAIL] GET MEMBER', e);
        throw(e);
    }
}

export {
    getMembersAPI,
    getMemberAPI
}; 