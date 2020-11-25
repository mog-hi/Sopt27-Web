import './Card.scss';
import { DeleteOutlined, FileImageOutlined } from '@ant-design/icons';
import {withRouter} from 'react-router-dom'
import api from '../../lib/api/memberAPI'

function Card({ memberData, history, onDeleteCard }) {
    const removeCard = async (evt) => {
        evt.stopPropagation(); // 삭제 버튼을 눌렀을때 이벤트 버블링에 의해서 뒤에 카드가 눌리는 것을 방지
        try {
            await api.deleteMember(memberData.id);
            onDeleteCard();
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="card" draggable onClick={()=> history.push(`/members/${memberData.id}`)}>
            <div className="remove-button" onClick={ removeCard }>
                <DeleteOutlined style={{ fontSize: "16px"}}/>
            </div>
            <div className="image-area">
                { memberData.profileUrl !== '' ? <img src={memberData.profileUrl} alt="profile"/> : <FileImageOutlined style={{fontSize: "40px"}}/> }
            </div>
            <div className="card__content card__text name">{memberData.name}</div>
            <div className="card__content card__text instagram">{memberData.instagram}</div>
            <div className="card__content card__text introduction">{memberData.introduction}</div>
            <div className="card__content card__text mbti">{memberData.mbti}</div>
        </div>
    );
}

export default withRouter(Card);