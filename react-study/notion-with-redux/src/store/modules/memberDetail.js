
export const SET_MEMBER_STATE = 'SET_MEMBER_STATE'; 
export const setMemberState = ({name, value}) => {
    return {
        type: SET_MEMBER_STATE, name, value
    }
} 
const initState = {
    status: 'idle',
    member: null
}
export default function memberDetail (state = initState, action) {
    switch (action.type) {
        default: 
            return state;
        case SET_MEMBER_STATE:
            return {
                status: 'resolved',
                member: {
                    ...state.member,
                    [action.name]: action.value
                }
            }
    }
}