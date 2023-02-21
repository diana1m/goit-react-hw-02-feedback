import PropTypes from 'prop-types';
import { Button, Wrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({options:{onClickGood, onClickNeutral, onClickBad}}) => {
    return(
        <Wrapper>
            <Button onClick={onClickGood}>Good 😀</Button>
            <Button onClick={onClickNeutral}>Neutral 😐</Button>
            <Button onClick={onClickBad}>Bad 😡</Button>
        </Wrapper>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.shape({
        onClickGood: PropTypes.func.isRequired,
        onClickNeutral: PropTypes.func.isRequired,
        onClickBad: PropTypes.func.isRequired
    }).isRequired,
}