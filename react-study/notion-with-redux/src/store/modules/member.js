// action
const SET_MEMBERS = 'member/SET_MEMBERS';

// action creator - export
export const setMembersToStore = members => ({
  type: SET_MEMBERS,
  members,
});

// 초기 상태값 설정
const initState = {
  members: [],
};

// reducer 함수 정의 - export default
export default function reducer(state = initState, action) {
  switch (action.type) {
    case SET_MEMBERS:
      return {
        ...state,
        members: action.members,
      };
    default:
      return state;
  }
}