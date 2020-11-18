import './MemberList.scss'
import Button from '../../components/button/Button';
import Card from '../../components/card/Card';
import { useEffect, useState } from 'react';
import Loading from '../../components/loading/Loading';
import { getMembersAPI } from '../../lib/api/memberAPI';

// member reducer dispatch 정의 및 호출
// redux 사용
import { setMembersToStore } from '../../store/modules/member';
import { useDispatch } from 'react-redux';

function MemberList({ history, match }) {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    // dispatch 정의
    const dispatch = useDispatch();
    const saveMembersToStore = data => dispatch(setMembersToStore(data));

    useEffect(() => {
        (async () => {
            const result = await getMembersAPI();
            setMembers(result);
            setTimeout(() => setLoading(false), 800); // 테스트용으로 setTimeout을 실행!
                    
            // store에 저장
            saveMembersToStore(result);
        })();
    }, []);

    const removeCard = (evt) => {
        evt.stopPropagation();
    };

    switch (loading) {
        case true:
            return <Loading />;

        default:
            return (
                <div className="member-list">
                    <div className="member-list__title">파트원 소개</div>
                    <div className="member-list__header member-list-header">
                        <div className="member-list-header__nav">Gallery View</div>
                        <div className="member-list-header__empty"></div>
                        <Button text="Properties" textColor="#777"></Button>
                        <Button text="Filter" textColor="#777"></Button>
                        <Button text="Sort" textColor="#777"></Button>
                        <Button text="Search" textColor="#777" icon="search"></Button>
                        <Button text="..." textColor="#777"></Button>
                    </div>
                    <hr />
                    <div className="member-list-content-wrapper">
                        {members.map((member, i) =>
                            <Card key={"card-" + i} route={{ history, match }} memberData={member} onRemoveCard={removeCard} />)}
                    </div>
                </div>
            );
    }
}

export default MemberList;