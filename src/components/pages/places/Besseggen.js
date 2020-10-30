import React from 'react';
import './Article.css';
import Article from './Article';

function Besseggen() {
    const descriptionInfo = <>
        {`Some would argue that it is a must-do hike for all Norwegians. An estimated 60,000 people walk the Besseggen ridge every year. The green waters of the Gjende lake, cradled amidst the steep mountains of the majestic Jotunheimen National Park, create the perfect scenery. Bessvatnet lake, on the opposite side of the ridge, is considered to be Norway's clearest lake, where you can see as far as 30 meters below the surface of the water.`}
    </>;

    const routeInfo = <>
        {`It is possible to walk the Besseggen ridge in both directions. You can either start westward at Gjendeosen or take the Gjende boat to Memurubu and trek eastward back to Gjendeosen. Lots of people come here during high season. During low season and on weekdays, it is not so busy and you can enjoy the tranquility of nature and the stunning surroundings.
        
        You can drive to Gjendesheim with your car, and Gjendesheim tourist lodge is placed by the docks. Most people take the ferry to Memurubu, and then start their hike from there over the famous Besseggen. You could also take the opposite direction, by starting your hike up Besseggen from Gjendesheim.
        
        Find timetable for the ferry at `} <a target='_blanket' href='https://www.gjende.no/en/'>https://www.gjende.no/en/</a>
    </>;

    const seasonInfo = <>
        <p>You can go to Besseggen almost year round. You can go to Besseggen almost year round. It is always important to take weather precautions.</p>
        <h3>June - October</h3>
        <p>In this season for Besseggen are when the Gjende Boat is running, from middle of June to middle of October. If you are inexperienced we recommend a nature guide, but experienced hikers can hike on their own.</p>
        <h3>November - May</h3>
        <p>In the winter time, the ridge is filled with snow and ice, and it´s often snow on the ridge to middle of june. The weater can change fast and you should adapt your preparations and the equipment you bring accordingly. We recommend hiking with a nature guide if you are inexperienced.</p>
    </>;

    const equipmentInfo = <>
        <p>Don't forget to bring cash or bank card for the boat and souvenirs.</p>
        <br />
        <h3>Backpack</h3>
        <p>
            In your backpack you should have enough room for everything you need in the Norwegian mountains. You should bring <strong>A map and compass or GPS, first-aid equipment</strong>, a fully charged <strong>mobile phone</strong>, and a <strong>headlamp</strong>. These things are just some of the things we recommend you keep in your backpack.
            </p>
        <br />
        <h3>Suitable clothing</h3>
        <p>
            Use <strong>hiking boots</strong> and leave your trainers at your base. It will also be colder as you get higher, so be sure to bring some <strong>warm clothes</strong>. Wear <strong>wind and waterproof outerwear</strong>, and always pack an extra set of clothes, including a cap, a scarf, and gloves or mittens and sunglasses.
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
            title='Besseggen'
            location='in Vågå, Innlandet'
            headerImage='../images/besseggen.jpg'
            authorPath='https://unsplash.com/@sebastiengoldberg?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
            author='Sébastien Goldberg'
            sourcePath='https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
            source='Unsplash'

            // About
            aboutLocation='Jotunheimen'
            difficultyColor='blue'
            aboutDifficulty='Easy'
            aboutType='Foot'
            aboutOneway='16.8 km'
            aboutDuration='6-8 hours'
            aboutSeason='Jun - Sep'
            aboutMap='google map'

            // Description
            descriptionTitle="Besseggen is considered to be Norway's clearest lake"
            descriptionInfo={descriptionInfo}

            // How to get there / Route
            routeInfo={routeInfo}

            // Center image
            centerImage='../images/besseggen-2.jpg'
            centerImageAuthorPath='https://unsplash.com/@jessedebacker?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
            centerImageAuthor='Jesse De Backer'
            centerImageSourcePath='https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
            centerImageSource='Unsplash'

            // When to go
            seasonTitle='When to go'
            seasonInfo={seasonInfo}

            // Equipment
            equipmentInfo={equipmentInfo}
        />
    );
}

export default Besseggen;