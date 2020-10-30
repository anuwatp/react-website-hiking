import React from 'react';
import './Article.css';
import Article from './Article';

function Trolltunga() {
    const descriptionInfo = <>
        {`Trolltunga is one of the most scenic and spectacular cliffs in Norway, hovering 700 metres above Ringedalsvatnet lake. Situated at the western edge of the Hardangervidda plateau, near the town of Odda, Trolltunga was carved by the icecap that once covered most of Scandinavia.

        The hike through high-mountain terrain up to Trolltunga (1180 m) is long and demanding, but you are rewarded with magnificent views.
        Hikers need to be properly equipped and in good shape.`}
    </>;

    const routeInfo = <>
        {`There are three car parks in the area: Tyssedal, Skjeggedal, and Mågelitopp. Note that there is a limited number of parking spaces.

            Shuttle services connect the town of Odda with Tyssedal and Skjeggedal, and there is a shuttle bus with limited capacity between Skjeggedal and Mågelitopp.

            From the main trailhead at P2 in Skjeggedal, the round-trip hike is 28 km with an ascent of almost 800 metres. The estimated hiking time is 8–12 hours.

            There is an additional trailhead at P3 Mågelitopp. The round-trip hike from P3 Mågelitopp is 20 km with an ascent of about 320 metres. The estimated hiking time is 7–10 hours.`}
    </>;

    const seasonInfo = <>
        <p>{`You can go to Trolltunga almost year round. It is always important to take weather precautions.
    
        If you are inexperienced we recommend a nature guide, but experienced hikers can hike on their own. In off season you should only hike with a guide, if you are inexperienced.
        
        The weater can change fast and you should adapt your preparations and the equipment you bring accordingly. Should the weather indicate difficult conditions, please use walking sticks/ski poles on the hike. 
        
        A general good physical fitness is necessary. To avoid the loss of daylight on your return hike, you must not embark on this hike too late in the day. Get informed on the time for sunset as well as other weather conditions.`}</p>
    </>;

    const equipmentInfo = <>
        <h3>Backpack</h3>
        <p>
            In your backpack you should have enough room for everything you need in the Norwegian mountains. You should bring <strong>A map and compass or GPS, first-aid equipment</strong>, a fully charged <strong>mobile phone</strong>, and a <strong>headlamp</strong>. These things are just some of the things we recommend you keep in your backpack.
            </p>
        <br />
        <h3>Suitable clothing</h3>
        <p>
            Use <strong>hiking boots</strong> and leave your trainers at your base. You will walk through wet marsh, mud, and water at several points along the way. It will also be colder as you get higher, so be sure to bring some <strong>warm clothes</strong>. Wear <strong>wind and waterproof outerwear</strong>, and always pack an extra set of clothes, including a cap, a scarf, and gloves or mittens and sunglasses.
            </p>
        <br />
        <h3>Food and drink</h3>
        <p>
            Always bring enough <strong>food and drink</strong> when you set out on a trip, including plenty of water and energising snacks such as chocolate and fruit. You can fill your water bottles at the parking lot in Skjeggedal or from brooks.
            </p>
    </>;

    return (
        <Article
            // Heading
            title='Trolltunga'
            location='in Ullensvang, Vestland'
            headerImage='../images/trolltunga.jpg'
            authorPath='https://unsplash.com/@juliacaesar?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
            author='Julia Caesar'
            sourcePath='https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
            source='Unsplash'

            // About
            aboutLocation='Hardangervidda'
            difficultyColor='black'
            aboutDifficulty='Demanding'
            aboutType='Foot'
            aboutOneway='14.5 km'
            aboutDuration='8-12 hours'
            aboutSeason='Jun - Oct'
            aboutMap='google map'

            // Description
            descriptionTitle="Norway's most spectacular rock formation"
            descriptionInfo={descriptionInfo}

            // How to get there / Route
            routeInfo={routeInfo}

            // Center image
            centerImage='../images/trolltunga-2.jpg'
            centerImageAuthor='Anuwat'

            // When to go
            seasonTitle='When to go'
            seasonInfo={seasonInfo}

            // Equipment
            equipmentInfo={equipmentInfo}
        />
    );
}

export default Trolltunga;