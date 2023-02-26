import PropTypes from 'prop-types';
import { Button, Wrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {

    const onClickButton = (e) =>{
        onLeaveFeedback(e.target.textContent.toLowerCase());
    }

    return(
        <Wrapper>
            {options.map((option, index) => {
                return <Button onClick={onClickButton} key={index}>{option.toUpperCase()}</Button>
            })}

            {/* <Button onClick={onClickGood}>Good 😀</Button>
            <Button onClick={onClickNeutral}>Neutral 😐</Button>
            <Button onClick={onClickBad}>Bad 😡</Button> */}
        </Wrapper>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}