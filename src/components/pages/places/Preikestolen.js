import React from 'react';
import './Article.css';
import Article from './Article';

function Preikestolen() {
    const descriptionInfo = <>
        {`Preikestolen is one of Rogaland county’s most visited attractions, and one of the country’s most spectacular photo subjects. Preikestolen has been named one of the world’s most spectacular viewing points by both CNN Go and Lonely Planet. It rises 604 metres above the Lysefjord. 

        The mountain plateau of about 25 x 25 metres was most probably shaped by the expansion of ice some 10,000 years ago. Water that froze in the crevices in the mountain broke loose large edged blocks of stone that the ice glacier brought along on its course. In the old days, the name of the plateau was Hyvlatånnå (planed tooth), and was already then well known as a landmark for fjord travellers in the Lysefjord. It was not until around 1900, that the first tourist travelled to the top and Preikestolen as a touristic destination was discovered. `}
    </>;

    const routeInfo = <>
        <p>The hike starts from the parking (parking fee applies) by the Preikestolen Mountain Lodge. Located here is a service facility with toilets. The hike consists of slightly hilly terrain with a difference of altitude of 350 metres.</p>
        <h3>Get to Preikestolen by bus:</h3>
        <p>Bus to Preikestolen Mountain Lodge with provider <a target='_blanket' href='https://gofjords.com/trips/hiking-excursion-to-the-pulpit-rock'>www.gofjords.com</a> or <a target='_blanket' href='https://www.pulpitrock.no/bestill-reise'>www.pulpitrock.no</a></p>
        <h3>Get to Preikestolen by car:</h3>
        <p>From Stavanger, drive the subsea tunnel to Solbakk and follow signposting to Preikestolen Mountain Lodge. Or take car ferry from Lauvvik to Oanes, and drive to Preikestolen Mountain Lodge from there. Parking fee.</p>
        <h3>Preikestolen from the fjord</h3>
        <p>It is also wonderful to experience Preikestolen from the fjord, either from a sightseeing boat or from a car ferry going from Lauvvik, Oanes, Stavanger, or from several other places of call on Lysefjorden (Kombibåt or tourist ferry).
        See timetable at <a target='_blanket' href='https://www.norled.no'>www.norled.no</a>, <a target='_blanket' href='https://www.norled.no'>www.rodne.no</a> or <a target='_blanket' href='https://www.thefjords.no'>www.thefjords.no</a></p>
    </>;

    const equipmentInfo = <>
        <h3>Backpack</h3>
        <p>
            A fully charged <strong>mobile phone</strong> and a <strong>sunglass</strong>.
            </p>
        <br />
        <h3>Suitable clothing</h3>
        <p>
            Use <strong>hiking boots</strong> and leave your trainers at your base. It will also be colder and windy as you get higher, so be sure to bring some <strong>warm clothes</strong>. Wear <strong>wind and waterproof outerwear</strong>, and always pack an extra set of clothes and sunglasses. There is a lake almost at the top, so make sure to bring a swimsuit if you want to swim.
            </p>
        <br />
        <h3>Food and drink</h3>
        <p>
            Always bring enough <strong>food and drink</strong> when you set out on a trip, including plenty of water and energising snacks such as chocolate and fruit. You can fill your water bottles from brooks.
            </p>
    </>;

    return (
        <Article
            // Heading
            title='Preikestolen'
            location='in Strand, Rogaland'
            headerImage='../images/preikestolen.jpg'
            authorPath='https://unsplash.com/@devilcoders?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
            author='Alexey Topolyanskiy'
            sourcePath='https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
            source='Unsplash'

            // About
            aboutLocation='Ryfylkeheiane'
            difficultyColor='blue'
            aboutDifficulty='Easy'
            aboutType='Foot'
            aboutOneway='3.9 km'
            aboutDuration='2.5 hours'
            aboutSeason='All year round'
            aboutMap='google map'

            // Description
            descriptionTitle="Preikestolen the most famous tourist attraction in Ryfylke"
            descriptionInfo={descriptionInfo}

            // How to get there / Route
            routeInfo={routeInfo}

            // Center image
            centerImage='../images/kjerag-2.jpg'
            centerImageAuthorPath='https://unsplash.com/@waguluz_?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
            centerImageAuthor='Andreas Wagner'
            centerImageSourcePath='https://unsplash.com/s/photos/kjerag?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
            centerImageSource='Unsplash'

            // Equipment
            equipmentInfo={equipmentInfo}
        />
    );
}

export default Preikestolen;