import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Footer';

function Article(props) {
    return (
        <>
            <article>
                <div className='article__container'>
                    <div className='article__header'>
                        <h1 className='article__header__title'>{props.title}</h1>
                        <h2 className='article__header__location'>
                            <i className="fas fa-map-marker-alt" />
                            {props.location}
                        </h2>
                        <figure className='article__header__pic-wrap'>
                            <img
                                className='article__header__img'
                                alt='View from the top of the mountain'
                                src={props.headerImage}
                            />
                            <figcaption>
                                Photo by&nbsp;
                        {/^https?:\/\//.test(props.authorPath)
                                    ? <a target='_blank' rel='noopener noreferrer' href={props.authorPath}>
                                        {props.author}<span className='article__figcaption__on'>&nbsp;on</span>
                                </a>
                                    : <Link to={props.authorPath}>
                                    </Link>
                                }

                                {/^https?:\/\//.test(props.sourcePath)
                                    ? <a target='_blank' rel='noopener noreferrer' href={props.sourcePath}>
                                        &nbsp;{props.source}
                                    </a>
                                    : <Link to={props.sourcePath}>
                                    </Link>
                                }
                            </figcaption>
                        </figure>
                    </div>
                    <section className='article__about'>
                        <div className='article__about__info'>
                            <h2 className='article__about__title'>About the trip</h2>
                            <ul className='article__about__info-list'>
                                <li>
                                    <div className='article__about__key'>Location:</div>
                                    <div className='article__about__value'>
                                        <i className="fas fa-map-marker-alt" />
                                        {props.aboutLocation}
                                    </div>
                                </li>
                                <li>
                                    <div className='article__about__key'>Type:</div>
                                    <div className='article__about__value'>
                                        <i className="fas fa-hiking"></i>
                                        {props.aboutType}
                                    </div>
                                </li>
                                <li>
                                    <div className='article__about__key'>Difficulty:</div>
                                    <div className='article__about__value'>
                                        <i className={`fas fa-circle ${props.difficultyColor}`}></i>
                                        {props.aboutDifficulty}
                                    </div>
                                </li>
                                <li>
                                    <div className='article__about__key'>One-way:</div>
                                    <div className='article__about__value'>
                                        <i className="fas fa-ruler"></i>
                                        {props.aboutOneway}
                                    </div>
                                </li>
                                <li>
                                    <div className='article__about__key'>Duration:</div>
                                    <div className='article__about__value'>
                                        <i className="far fa-clock"></i>
                                        {props.aboutDuration}
                                    </div>
                                </li>
                                <li>
                                    <div className='article__about__key'>Season:</div>
                                    <div className='article__about__value'>
                                        <i className="far fa-calendar"></i>
                                        {props.aboutSeason}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='article__about__map'>
                            {props.aboutMap}
                        </div>
                    </section>
                    <section className='article__description'>
                        <h2>{props.descriptionTitle}</h2>
                        <p>{props.descriptionInfo}</p>
                    </section>
                    <section className='article__route'>
                        <h2>How to get there</h2>
                        <p>{props.routeInfo}</p>
                    </section>
                    <figure className='article__center__pic-wrap'>
                        <img className='article__center__image'
                            src={props.centerImage}
                            alt='Beautiful mountain'
                        />
                        <figcaption>
                            Photo by&nbsp;
                        {/^https?:\/\//.test(props.centerImageAuthorPath)
                                ? <a target='_blank' rel='noopener noreferrer' href={props.centerImageAuthorPath}>
                                    {props.centerImageAuthor}<span className='article__figcaption__on'>&nbsp;on</span>
                                </a>
                                : <span>{props.centerImageAuthor}</span>}

                            {/^https?:\/\//.test(props.centerImageSourcePath)
                                ? <a target='_blank' rel='noopener noreferrer' href={props.centerImageSourcePath}>
                                    &nbsp;{props.centerImageSource}
                                </a>
                                : <Link to={props.centerImageSourcePath}>
                                </Link>
                            }
                        </figcaption>
                    </figure>
                    <section className='article__season'>
                        <h2>{props.seasonTitle}</h2>
                        <div className='article__season__info'>{props.seasonInfo}</div>
                    </section>
                    <section className='article__equipment'>
                        <h2>Equipment</h2>
                        <div className='article__equipment__container'>
                            <div className='article__equipment__left-column'>
                                <div className='article__equipment__info'>{props.equipmentInfo}</div>
                            </div>
                            <figure className='article__equipment__right-column'>
                                <img alt='hiking figure' src='../images/equipment.jpg' />
                                <figcaption>
                                    <a rel='noopener noreferrer' href='https://www.freepik.com/vectors/snow'>Snow vector created by pch.vector - www.freepik.com</a>
                                </figcaption>
                            </figure>
                        </div>
                    </section>
                </div>
            </article>
            <Footer />
        </>
    );
}

export default Article;
