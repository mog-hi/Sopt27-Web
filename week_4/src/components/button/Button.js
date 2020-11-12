import './Button.scss';

const Button = ({ text, textColor = '#444', onClickFunc }) => {
    return (
        <span className="button" style={{ color: textColor }} onClick={onClickFunc}>
            {text}
        </span>
    );
}

export default Button; 