import React from 'react';
import './Article.css';
import Article from './Article';

function Kjerag() {
    const descriptionInfo = <>
        {`The Majesty of the Lysefjord, in Ryfylke. At 1084 metres, Kjerag towers above the other peaks along the Lysefjord. NB! Do not hike to Kjerag in the winter! Go with a nature guide off season.
        
        At 1084 metres, Kjerag towers above the other peaks along the Lysefjord. It has been traditional to admire this mountain face from the fjord, but in recent years, it has become increasingly popular to walk up the path to the plateau. 
        
        Most people are happy just to enjoy the view of the Lysefjord from the plateau itself, but for some hikers, the climax of the excursion is to be photographed on the Kjeragbolten, a round rock wedged solidly in a mountain crevice. Kjerag has also become a popular attraction for mountain climbers and base jumpers.`}
    </>;

    const routeInfo = <>
        {`The hike starts from the parking (fee) at Øygardstøl south of the Lysefjord by Lysevegen above Lysebotn. Located here is a service facility with toilets and tourist information.
        
        During summer, you can get to Kjerag by taking the tourist car ferry (The Fjords) to Lysebotn and then go by car or taxi further up to Øygardstøl, the starting point of the trip. 
        
        In high season, you can also go by bus from Stavanger to Øygardstøl (Go Fjords or Boreal Reiser). If you have your own car, you can either take the ferry or drive through Sirdal to Lysebotn (closed road during winter from around October to May/June, contact Statens vegvesen, phone 175). 
        
        Parking: There is parking with a fee at Øygardstøl. If you are travelling without a car, there are several options for car rentals in the region. It is possible to pick up your rental car at the Stavanger International Airport, Sola.`}
    </>;

    const seasonInfo = <>
        <p>You can go to Kjerag almost year round. It is always important to take weather precautions.</p>
        <p>If there is snow in the mountain it is not recommended to do the hike, or you should use a nature guide.Should the weather indicate difficult conditions, please use walking sticks/ski poles on the hike. A general good physical fitness is necessary. To avoid the loss of daylight on your return hike, you must not embark on this hike too late in the day. Get informed on the time for sunset as well as other weather conditions.</p>
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
            Always bring enough <strong>food and drink</strong> when you set out on a trip, including plenty of water and energising snacks such as chocolate and fruit. You can fill your water bottles from brooks.
            </p>
    </>;

    return (
        <Article
            // Heading
            title='Kjerag'
            location='in Sandnes, Rogaland'
            headerImage='../images/kjerag.jpg'
            authorPath='https://unsplash.com/@herrherrmann?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
            author='Sebastian Herrmann'
            sourcePath='https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
            source='Unsplash'

            // About
            aboutLocation='Ryfylkeheiane'
            difficultyColor='red'
            aboutDifficulty='More demanding'
            aboutType='Foot'
            aboutOneway='4.5 km'
            aboutDuration='3-6 hours'
            aboutSeason='Jun - Oct'
            aboutMap='google map'

            // Description
            descriptionTitle="Beautiful view of the Lysefjord from the plateau"
            descriptionInfo={descriptionInfo}

            // How to get there / Route
            routeInfo={routeInfo}

            // Center image
            centerImage='../images/kjerag-2.jpg'
            centerImageAuthorPath='https://unsplash.com/@waguluz_?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
            centerImageAuthor='Andreas Wagner'
            centerImageSourcePath='https://unsplash.com/s/photos/kjerag?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
            centerImageSource='Unsplash'

            // When to go
            seasonTitle='When to go'
            seasonInfo={seasonInfo}

            // Equipment
            equipmentInfo={equipmentInfo}
        />
    );
}

export default Kjerag;