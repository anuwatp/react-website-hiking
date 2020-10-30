import React from 'react';
import './Article.css';
import Article from './Article';

function Ryten() {
    const descriptionInfo = <>
        {`Ryten rises 542 meters above sea level, and has panoramic views of the beautiful Kvalvika beach and beyond the ocean! Here you get to experience real Lofoten idyll with steep mountains, emerald green sea and an impressive sandy beach that tempts the bathing lions into the waves.
        
        Kvalvika is located on Moskenesøy, but belongs to Flakstad municipality. The area you are in here is known for its many beautiful sandy beaches. In addition to Kvalvika, Yttersand, Ramberg and Skagsanden are all worth a visit if you like to go barefoot on white coral sand.

        This is a relatively easy hike suitable for families who enjoy hiking in the mountains. There are several variations on the trip, so you can adjust the length to your liking.`}
    </>;

    const routeInfo = <>
        {`Drive to the end of the valley about 500m. After the selected official trail starts. Walk across the fields on good dry trails. Then you go steeply up the hill. Then a little more gentle landscape and you can choose to take a detour around a cottage. Then you go a little further and you come to a lake where you can see the top up a long hill. If you go straight along the water and towards the sea, you arrive at Kvalvika. There you can go for a nice round after you have reached Ryten.

        Continue to Ryten where there is a magical view. There is a rock that is suitable to hang in to take a few dramatic pictures or to sit on. Be careful!`}
    </>;

    const equipmentInfo = <>
        <h3>Backpack</h3>
        <p>
            A fully charged <strong>mobile phone</strong> and a <strong>sunglass</strong>.
            </p>
        <br />
        <h3>Suitable clothing</h3>
        <p>
            Use <strong>hiking boots</strong> and leave your trainers at your base. It will also be colder as you get higher, so be sure to bring some <strong>warm clothes</strong>. Wear <strong>wind and waterproof outerwear</strong>, and always pack an extra set of clothes, including a cap, a scarf, and gloves or mittens and sunglasses. In summer season you can bring swimsuit, if you want to swim. However the water can be a little cold.
            </p>
        <br />
        <h3>Food and drink</h3>
        <p>
            Always bring enough <strong>food and drink</strong> when you set out on a trip, including plenty of water and energising snacks such as chocolate and fruit.
            </p>
    </>;

    return (
        <Article
            // Heading
            title='Ryten'
            location='in Lofoten'
            headerImage='../images/ryten.jpg'
            authorPath='https://unsplash.com/@kymellis?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
            author='Kym Ellis'
            sourcePath='https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
            source='Unsplash'

            // About
            aboutLocation='Lofoten, Vesterålen og Hinnøya'
            difficultyColor='blue'
            aboutDifficulty='Easy'
            aboutType='Foot'
            aboutOneway='5.7 km'
            aboutDuration='2 hours'
            aboutSeason='All year round'
            aboutMap='google map'

            // Description
            descriptionTitle='Beautiful panoramic views of Kalvika beach from Ryten'
            descriptionInfo={descriptionInfo}

            // How to get there / Route
            routeInfo={routeInfo}

            // Center image
            centerImage='../images/ryten-2.jpg'
            centerImageAuthorPath='https://unsplash.com/@simonmigaj?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
            centerImageAuthor='Simon Migaj'
            centerImageSourcePath='https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
            centerImageSource='Unsplash'

            // Equipment
            equipmentInfo={equipmentInfo}
        />
    );
}

export default Ryten;