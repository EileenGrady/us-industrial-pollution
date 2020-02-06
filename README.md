# Final Project Ideas for New Maps Plus Program

 How do we move from interests to broad topics to focused topics?
 
 ```
 I want to design a map that X

    because I want to find out who/what/when/where/whether/why/how _________,

        in order to help the map user or audience understand better ____________.
```

## 1. Mapping Superfund Sites
### *I want to map sites of environmental contaminants because I want to find out how these toxins impact their surroundings, in order to help the user visualize these effects.*

This idea is an offshoot of the Superfund Site Proximity map I created in MAP 675. I was also inspired after hearing a podcast about Robert Bilott and how he took on DuPont chemical company in a class action lawsuit. Bilott was initially contacted by a farmer whose cows had been mysteriously dying in Parkersburg, West Virginia. Eventually Bilott discovered that the massive DuPont factory that had been operating in the area until recently had been dumping chemicals called PFOs and PFOAs, poisoning the drinking water for the surrounding towns. While this DuPont facility is not classified as a Superfund site, it got me thinking about the effects that Superfund sites might have on their surroundings, both on humans and the environment.

The goal of this map is to provide some context around Superfund sites. I want to do some analysis with Census data, providing a visual representation of the demographics around each site to show who is impacted the most. I could also include data released by the US Government Accountability Office last year showing which Superfund sites are most vulnerable to climate change (flooding, storm surge, wildfires, and sea level rise). I am also interested in doing some watershed analysis to show how toxins can travel hydrologically, or what watersheds might be most at risk if a Superfund site was compromised by climate change.

### Map Design
* Superfund sites would likely by symbolized in clusters, but I also like the idea of showing sites symbolized by the number of people living within a certain radius.
* An info box would populate when a site was clicked on showing:
    * basic site information
    * visualization of demographic data (for instance, children and elderly are more susceptible to toxins)
    * link to the site's EPA webpage
* Show relevant watershed(s) when a site is clicked on
* I could still include the geocode search that would show the closest Superfund site

### Data Sources
* [Superfund Sites](https://catalog.data.gov/dataset/superfund-sites1e8f4)
* [Census Data](https://data.census.gov/cedsci/)
* US Government Accountability Office [report](https://www.gao.gov/products/GAO-20-73) on Superfund Site vulnerability to climate change
* [Watershed Boundaries](https://nrcs.app.box.com/v/gateway/folder/39640323180)
* [EPA Superfund Website](https://www.epa.gov/superfund)


## 2. Mapping Toxic Release Inventory
### *I want to map facilities tracked by the toxic release inventory because I want to find out how the types and/or amounts of chemicals released by these facilities have changed over time, to help the user explore the effects of EPA legislation.*

This idea developed while I was looking for data related to Superfund sites. I found CSV files for the toxic release inventory for every year between 1987-2018, that contain facility locations, as well as the type and amount of chemical being released. 

The goal of this map would be to symbolize TRI facilities as graduated circles based on the amount of chemical being released. I would likely need to choose the most common toxins, and have a dropdown the user could choose from to display. There would also be a time slider to explore change over time. Given the year chosen on the time slider, I could potentially populate an info box describing relevant EPA legislation for that year.

If I do go with this idea, I think I could possibly combine some elements from the Superfund idea as well, such as visulazing watersheds that could be affected.

### Data Sources
* [TRI facilities](https://www.epa.gov/toxics-release-inventory-tri-program/tri-basic-data-files-calendar-years-1987-2018)

## 3. Mapping Refugee Data
### *I want to map global refugee data because I want to find out how refugees impact the economy of neighboring countries in which they resettle, in order to improve understanding of the refugee crisis and hopefully dispel fear and myths about refugees.*

Mapping refugee data is something I considered in MAP 674, but I couldn't figure out exactly how to go about doing so, and there are already some great maps out there that have accomplished this. For instance, [The Refugee Project](https://www.therefugeeproject.org/#/2018) does a wonderful job of displaying refugee migration data from the [UNHCR](http://popstats.unhcr.org/en/persons_of_concern). I do know that many refugees end up in neighboring countries, which could potentially cause a strain on economies, and there is a lot of rhetoric and fear out there about immigrants and refugees.

An article by Brookings, ["Much ado about nothing? The economic impact of refugee ‘invasions’"](https://www.brookings.edu/blog/future-development/2015/09/16/much-ado-about-nothing-the-economic-impact-of-refugee-invasions/), seems to dispel the myth that refugees actually have a negative impact on neighboring economies. This is still a half-baked idea, but I am interested in visualizing asylum countries with the largest numbers of refugees, and exploring economic data to see how their economies have been impacted. I could show change over time, to see if there are any patterns in economic growth/decline or changes in unemployment rates that correlate with an increase in the number of refugees.

### Data Sources
* [UNHCR Refguee Data](http://popstats.unhcr.org/en/persons_of_concern)
* [World Bank Economic Data](https://www.worldbank.org/)
* [International Monetary Fund](https://www.imf.org/en/Data)

## 4. How has redlining shaped our cities?
### *I want to map socio-demographic data and historical security maps used by the Home Owner’s Loan Corporation because I want to find out if any trends have persisted as a result of redlining, in order to help the user better understand the forces that helped shape our cities.*

Someone mentioned the [*Mapping Inequality*](https://dsl.richmond.edu/panorama/redlining/#loc=5/39.1/-94.58) project developed by Univeristy of Richmond last semester in MAP 675. The project digitized historical security maps used by the Home Owner's Loan Corporation to rate neighborhoods in cities in terms of their "mortgage security." Agents who determined these ratings did so from a "consistently white, elite standpoint", essentially isolating blacks in low-income areas by denying them home loans.

The goal of this map would be to visualize a time series of socio-demographic data in relation to the historic "redlined" areas, to explore if the same patterns of segregation and economic disadvantages still persist.

### Data Sources
* [Digitized Depression Era Redlining Maps](https://dsl.richmond.edu/panorama/redlining/#loc=5/39.1/-94.58&text=downloads)
* [Census Data](https://data.census.gov/cedsci/)
