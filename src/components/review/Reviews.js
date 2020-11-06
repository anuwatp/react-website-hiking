import React, { useState } from 'react';
import './Reviews.css';
import AddReview, { TimeStamp } from './AddReview';

function Reviews() {
    const [comment, setComment] = useState('');
    const [reviewList, setReviewList] = useState([]);

    const reviewDummyData = [
        {
            id: 1,
            author: 'John Doe',
            date: '2 days ago',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
            id: 2,
            author: 'Jane Doe',
            date: '3 days ago',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        }
    ];
    const showDummyData = reviewDummyData.map(data =>
        <AddReview
            author={data.author}
            commentDate={data.date}
            comment={data.comment}
        />
    );

    const showReview = reviewList.map(data =>
        <AddReview
            author={data.author}
            commentDate={TimeStamp(Date.now(), data.date)}
            comment={data.comment}
        />
    );

    const addReview = (e) => {
        e.preventDefault();

        const newReview = {
            author: 'Guest',
            date: Date.now(),
            comment: comment
        }
        setReviewList(reviewList => [newReview, ...reviewList]);
        setComment('');
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
                            <textarea required className='review__textarea__box' value={comment} onChange={e => setComment(e.target.value)}></textarea>
                        </div>
                        <div className='review__add__button'>
                            <input type='submit' className='btn btn--success' value='Add review' />
                        </div>
                    </form>
                </div>
                <div className='review__content'>
                    {showReview}
                    {/* Dummy data */}
                    {showDummyData}
                </div>
            </section>
        </>
    );
}

export default Reviews;