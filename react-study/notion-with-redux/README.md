# Web Part Notion App에 redux 적용하기
### 패캐지 설치
`npm install redux react-redux`

### member, memberDetail 모듈 생성
src/store/modules/member
```javascript
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
```
### combinedReducers
src/store/modules/index
```javascript
import { combineReducers } from 'redux';
import memberDetail from './memberDetail';
import member from './member';

export default combineReducers({
    memberDetail,
    member,
});
```

### dispatch
src/pages/member/memberList
```javascript
...
// member reducer dispatch 정의 및 호출
// redux 사용
import { setMembersToStore } from '../../store/modules/member';
import { useDispatch } from 'react-redux';

function MemberList({ history, match }) {
    // dispatch 정의
    const dispatch = useDispatch();
    const saveMembersToStore = data => dispatch(setMembersToStore(data));
    ...
```
### store 적용
src/index.js
```javascript
...
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/modules';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

```
  
