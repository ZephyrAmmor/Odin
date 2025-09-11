# A Front End Based Elegent and Simple to Use Weather app

A simple front end only weather app that is beautiful and easy to use.

## Features :
__Current view Will be the default view__
1. User can visit site on github pages and view data based on their location
or can manually enter the name of city to get weather of that location.
2. User will have acces to Four different types of view 
    - Week view that will provide a little current info and the cards for each day of week
    - Day view that will be information rich and will provide relevent day(from the week) info
    - Current data situation with latest information
    - A minimal clickable card with current information and can be used to embed as widget
    
3. Each view will have some default components
    1. A Nav that will hold buttons for navigating between week, day, minimal views, 
    a toggle button for toggling theme, and a toggle button for toggling between Farenheit and Celsius.
    2. A Footer that will have copyright section
4. Week view will additionaly have a default Multan weather and
    1. A search Bar for searching a specific location 
    2. A section for displaying the current weather with `Current Temprature`,  `Min and Max Temprature`,
    `feelslike`, `conditions`, `sunrise, sunset`, `description` and `humidity`
    3. A `fixed button` for going to current weather
    4. A section that holds seven clickable `cards` for displaying detailed weather of that day.
    Each Card will have `conditions` , `rain chances` and `temprature` of that day
5. Day view will additionaly have Multan's today weather and 
    1. A search bar for getting weather of a specific city
    2. A Section for display day's `weather` , `Temp`, `Min and Max of Day`, `Feels Like`,  
    `Min Feel Like and Max`, `Avg Wind`, `Wind Gust` `Wind direction`, `UV index`,`Conditions`, 
    `Cloud Cover`, `humidity`, `Day rain prob{precipprob}` `Current Time with Sun or moon`,  of the day.
    3. A section for displaying hourly weathers in `hourly cards` of `all` hours
    4. A Section showing `current hour` weather under __hourly cards__ section. This section will 
    also be used to display the info of the hour if it's card is clicked
    - hour section will have `temp`, `min max temp`, `Avg Wind`, `Cloud cover`, `rain chances`, `conditions` and `description`
    5. A `fixed button` for going to current weather 
6. Current view will be similar to day view but with current situation and no `hourly cards` and no `fixed button`
7. Minimal view will be a minimal card to be used as widget with 
    - `temp`, `feelslike` `cloudcovering` `rain chances`, `wind` `UV index`, `conditions`and 
`time` with only hours and minute

## Tech Stack
1. `Vanilla JS`
2. `Vanilla CSS`
3. `HTML`
4. `Material Icon Font`
5. `Webpack`
6. `ESLint and Prettier`

## Resources
1. `Unsplash` for getting images to use as backgrounds body for `different weathers`
2. `Google Fonts` for using a suitable `font`
3. `Visual Crossing API`, for `Weather Data`
4. `RandomQuote API` for random `quotes`
5. `Github Pages` to host app