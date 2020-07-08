import React from "react";

function ReviewCardView(props) {
    const {author,
        fullReviewText,
        shortReviewText,
        onReadTheRest,
        isLongReviewText} = props;


    return(
        <div className='review-card'>
            <div>
                <div className='review-author-photo'>
                </div>
            </div>
            <div className='review-wrapper'>
                <div className='review-author'>
                    <h4>
                        {`A review by ${author}`}
                    </h4>
                </div>
                <div className='review-content'>
                    <p>
                        {isLongReviewText ? shortReviewText : fullReviewText}
                        {isLongReviewText ? <a onClick={onReadTheRest}>read the rest.</a> : null}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ReviewCardView;