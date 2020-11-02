import React, { useState } from 'react';
import './Reviews.css';
import AddReview from './AddReview';

function Reviews() {
    const [commentList, setCommentList] = useState([]);
    const [comment, setComment] = useState('');

    const reviewList = commentList.map(comment =>
        <AddReview
            author='Guest'
            commentDate='recently'
            comment={comment}
        />
    );

    const addReview = (e) => {
        e.preventDefault();

        setCommentList(commentList => commentList.concat(comment))
        setComment('');
        console.log(commentList);
    };

    return (
        <>
            <section className='review__container'>
                <hr />
                <div className='review__header'>
                    <h2>Reviews</h2>
                    <form className='review__form' onSubmit={addReview}>
                        <div className='review__textarea'>
                            <label for='review'>Write a review</label>
                            <textarea className='review__textarea__box' value={comment} onChange={e => setComment(e.target.value)}></textarea>
                        </div>
                        <div className='review__add__button'>
                            <input type='submit' className='btn btn--success' value='Add review' />
                        </div>
                    </form>
                </div>
                <div className='review__content'>
                    <AddReview
                        author='John Doe'
                        commentDate='2 minutes ago'
                        comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
                    />
                    <AddReview
                        author='Jane Doe'
                        commentDate='4 minutes ago'
                        comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
                    />
                    {reviewList}
                </div>
            </section>
        </>
    );
}

export default Reviews;