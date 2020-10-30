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
                                alt='Travel Image'
                                src={props.headerImage}
                            />
                            <figcaption>
                                Photo by&nbsp;
                        {/^https?:\/\//.test(props.authorPath)
                                    ? <a target='_blank' href={props.authorPath}>
                                        {props.author}&nbsp;
                                </a>
                                    : <Link to={props.authorPath}>
                                    </Link>
                                }
                        on

                        {/^https?:\/\//.test(props.sourcePath)
                                    ? <a target='_blank' href={props.sourcePath}>
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
                                    <div className='article__about__key'>Difficulty:</div>
                                    <div className='article__about__value'>
                                        <i className={`fas fa-circle ${props.difficultyColor}`}></i>
                                        {props.aboutDifficulty}
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
                        />
                        <figcaption>
                            Photo by&nbsp;
                        {/^https?:\/\//.test(props.centerImageAuthorPath)
                                ? <a target='_blank' href={props.centerImageAuthorPath}>
                                    {props.centerImageAuthor}
                                </a>
                                : <span>{props.centerImageAuthor}</span>}
                            {/^https?:\/\//.test(props.centerImageSourcePath)
                                ? <a target='_blank' href={props.centerImageSourcePath}>
                                    {props.centerImageSource}
                                </a>
                                : <Link to={props.centerImageSourcePath}>
                                </Link>
                            }
                        </figcaption>
                    </figure>
                    <section className='article__season'>
                        <h2>When to go</h2>
                        <div className='article__season__info'>{props.seasonInfo}</div>
                    </section>
                    <section className='article__equipment'>
                        <h2>Equipment</h2>
                        <div className='article__equipment__container'>
                            <div className='article__equipment__left-column'>
                                <div className='article__equipment__info'>{props.equipmentInfo}</div>
                            </div>
                            <div className='article__equipment__right-column'>
                                <img src='../images/equipment.jpg' />
                            </div>
                        </div>
                    </section>
                </div>
            </article>
            <Footer />
        </>
    );
}

export default Article;
