import React, {useState} from "react";
import ReviewCardView from "./review-card-view";
import './review-card.css';

function ReviewCardContainer(props) {
    const {review} = props;
    const author = review.author;
    const fullReviewText = review.content;
    const shortReviewText = fullReviewText.slice(0,600) + '... ';
    const [isLongReviewText, setIsLongReviewText] = useState(fullReviewText.length > 600);

    const onReadTheRest = () => {
        setIsLongReviewText(false);
    };

    return <ReviewCardView author={author}
                           fullReviewText={fullReviewText}
                           shortReviewText={shortReviewText}
                           onReadTheRest={onReadTheRest}
                           isLongReviewText={isLongReviewText}/>;
}

export default ReviewCardContainer;