
// action 
export const SET_MEMBER_STATE = 'SET_MEMBER_STATE'; 
// action creator 
export const setMemberState = ({name, value}) => {
    return {
        type: SET_MEMBER_STATE, name, value
    }
} 
// 초기 상태값 설정
const initState = {
    status: 'idle',
    member: null
}
// reducer
export default function reducer(state = initState, action) {
    switch (action.type) {
        case SET_MEMBER_STATE:
            return {
                status: 'resolved',
                member: {
                    ...state.member,
                    [action.name]: action.value
                }
            };
        default:
            return state;
      }
}