import React from 'react';
import './Reviews.css';

function AddReview(props) {
    return (
        <>
            <div className='review__comment'>
                <div className='review__comment__header'>
                    <div className='review__comment__header-author'>{props.author}</div>
                    <div className='review__comment__header-date'>{props.commentDate}</div>
                </div>
                <div className='review__comment__content'>
                    <p>{props.comment}</p>
                </div>
            </div>
        </>
    );
}

export default AddReview;