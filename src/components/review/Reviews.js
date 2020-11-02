import React from 'react';
import './Reviews.css';
import AddReview from './AddReview';

function Reviews() {
    return (
        <>
            <section className='review__container'>
                <hr />
                <h2>Reviews</h2>
                <div className='review__textarea'>
                    <label for='review'>Write a review</label>
                    <textarea className='review__textarea__box' aria-placeholder='Write a review'></textarea>
                </div>
                <div className='review__add__button'>
                    <button className='btn btn--success'>Add review</button>
                </div>
                <hr />
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
            </section>
        </>
    );
}

export default Reviews;