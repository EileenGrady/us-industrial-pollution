# Final Project Ideas for New Maps Plus Program

How do we move from interests to broad topics to focused topics?

```
I want to design a map that X

   because I want to find out who/what/when/where/whether/why/how _________,

       in order to help the map user or audience understand better ____________.
```

## 1. Mapping Superfund Sites

_I want to map sites of environmental contaminants because I want to find out how these toxins impact their surroundings, in order to help the user visualize these effects._

This idea is an offshoot of the Superfund Site Proximity map I created in MAP 675. I was also inspired after hearing a podcast about Robert Bilott and how he took on DuPont chemical company in a class action lawsuit. Bilott was initially contacted by a farmer whose cows had been mysteriously dying in Parkersburg, West Virginia. Eventually Bilott discovered that the massive DuPont factory that had been operating in the area until recently had been dumping chemicals called PFOs and PFOAs, poisoning the drinking water for the surrounding towns. While this DuPont facility is not classified as a Superfund site, it got me thinking about the effects that Superfund sites might have on their surroundings, both on humans and the environment.

The Superfund program was established by the Comprehensive Environmental Response, Compensation, and Liability Act (CERCLA) of 1980. The program operates under the EPA and is responsible for the investigation and clean-up of contaminated sites in the US. The most highly contaminated sites requiring longer-term remedial action are placed on the National Priority List (NPL). These sites pose grave risk to human health and the environment, and the US is seeing the [largest backlog of Superfund remediation projects](https://www.latimes.com/world-nation/story/2020-01-04/backlog-of-toxic-superfund-clean-ups-grows-under-trump) in at least 15 years.

While the Superfund program focuses on cleaning up toxins leftover from defunct industrial activities, active facilities all over the country are currently releasing toxic chemicals into our air, water, and land. These releases are regulated and monitored through the toxic release inventory (TRI), established under the 1986 Superfund Amendments and Reauthorization Act. The law was pushed through after "a cloud of extremely toxic methyl isocyanate gas escaped from a Union Carbide Chemical plant in Bhopal, India. Thousands of people died that night in what is widely considered to be the worst industrial disaster in history. Thousands more died later as a result of their exposure, and survivors continue to suffer with permanent disabilities" [EPA.gov](https://www.epa.gov/toxics-release-inventory-tri-program/timeline-toxics-release-inventory-milestones)

The goal of this map is to provide some context around Superfund sites. I want to do some analysis with Census data, providing a visual representation of the demographics around each site to show who is impacted the most. I could also include data released by the US Government Accountability Office last year showing which Superfund sites are most vulnerable to climate change (flooding, storm surge, wildfires, and sea level rise). I am also interested in doing some watershed analysis to show how toxins can travel hydrologically, or what watersheds might be most at risk if a Superfund site was compromised by climate change.

### Further Notes
- Superfund site redevelopment?
- search specific chemical?
- [TOXMAP: A GIS-Based Gateway to Environmental Health Resources](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2703818/)

### Map Design

- Superfund sites would likely by symbolized in clusters, but I also like the idea of showing sites symbolized by the number of people living within a certain radius.
- An info box would populate when a site was clicked on showing:
  - basic site information
  - visualization of demographic data (for instance, children and elderly are more susceptible to toxins)
  - link to the site's EPA webpage
- Show relevant watershed(s) when a site is clicked on
- I could still include the geocode search that would show the closest Superfund site

### Data Sources

- [Superfund Sites](https://catalog.data.gov/dataset/superfund-sites1e8f4)
- [Census Data](https://data.census.gov/cedsci/)
- US Government Accountability Office [report](https://www.gao.gov/products/GAO-20-73) on Superfund Site vulnerability to climate change
- [Watershed Boundaries](https://nrcs.app.box.com/v/gateway/folder/39640323180)
- [EPA Superfund Website](https://www.epa.gov/superfund)


The Superfund and TRI sites will be the primary data source, and then others such as Census data and watershed boundaries will be pulled in to provide context around these sites. After showing general distribution of superfund sites and TRI sites, there will likely be some concentrations of these sites that I can dig into. 

The Superfund data is pretty straight forward. It is mostly just the facility locations and names. The data does contain an ID field though that can be linked back to that sites page on the EPA website. The TRI data contains a row for each chemical being released by each facility. I need to wrangle this data so that there is a row for each facility, with a field that lists each type of chemical it releases. Then I would like to narrow down to facilites that have a greater chance of groundwater contamination based on the type of chemical and method it is released by. The Census data contains a lot of extra information and needs to be wrangled quite a bit to narrow it down just to what I need, and then join the data to a US county shapefile or geojson. Once the Census data is wrangled, I can analyze it based on buffers around each Superfund and TRI site, and hopefully pull out some significant areas or clusters to focus on.

The superfund sites and TRI facilities will likely be loaded in as geojsons. I will use Jupyter notebooks or node.js to perfom the Census data analysis and exploration, and then load the appropriate data in as either geojsons or csv.

## 2. Mapping Toxic Release Inventory

_I want to map facilities tracked by the toxic release inventory because I want to find out how the types and/or amounts of chemicals released by these facilities have changed over time, to help the user explore the effects of EPA legislation._

This idea developed while I was looking for data related to Superfund sites. I found CSV files for the toxic release inventory for every year between 1987-2018, that contain facility locations, as well as the type and amount of chemical being released.

The goal of this map would be to symbolize TRI facilities as graduated circles based on the amount of chemical being released. I would likely need to choose the most common toxins, and have a dropdown the user could choose from to display. There would also be a time slider to explore change over time. Given the year chosen on the time slider, I could potentially populate an info box describing relevant EPA legislation for that year.

If I do go with this idea, I think I could possibly combine some elements from the Superfund idea as well, such as visulazing watersheds that could be affected.

### Data Sources

- [TRI facilities](https://www.epa.gov/toxics-release-inventory-tri-program/tri-basic-data-files-calendar-years-1987-2018)

## 3. Mapping Refugee Data

_I want to map global refugee data because I want to find out how refugees impact the economy of neighboring countries in which they resettle, in order to improve understanding of the refugee crisis and hopefully dispel fear and myths about refugees._

Mapping refugee data is something I considered in MAP 674, but I couldn't figure out exactly how to go about doing so, and there are already some great maps out there that have accomplished this. For instance, [The Refugee Project](https://www.therefugeeproject.org/#/2018) does a wonderful job of displaying refugee migration data from the [UNHCR](http://popstats.unhcr.org/en/persons_of_concern). I do know that many refugees end up in neighboring countries, which could potentially cause a strain on economies, and there is a lot of rhetoric and fear out there about immigrants and refugees.

An article by Brookings, ["Much ado about nothing? The economic impact of refugee ‘invasions’"](https://www.brookings.edu/blog/future-development/2015/09/16/much-ado-about-nothing-the-economic-impact-of-refugee-invasions/), seems to dispel the myth that refugees actually have a negative impact on neighboring economies. This is still a half-baked idea, but I am interested in visualizing asylum countries with the largest numbers of refugees, and exploring economic data to see how their economies have been impacted. I could show change over time, to see if there are any patterns in economic growth/decline or changes in unemployment rates that correlate with an increase in the number of refugees.

### Data Sources

- [UNHCR Refguee Data](http://popstats.unhcr.org/en/persons_of_concern)
- [World Bank Economic Data](https://www.worldbank.org/)
- [International Monetary Fund](https://www.imf.org/en/Data)

## 4. How has redlining shaped our cities?

_I want to map socio-demographic data and historical security maps used by the Home Owner’s Loan Corporation because I want to find out if any trends have persisted as a result of redlining, in order to help the user better understand the forces that helped shape our cities._

Someone mentioned the [_Mapping Inequality_](https://dsl.richmond.edu/panorama/redlining/#loc=5/39.1/-94.58) project developed by Univeristy of Richmond last semester in MAP 675. The project digitized historical security maps used by the Home Owner's Loan Corporation to rate neighborhoods in cities in terms of their "mortgage security." Agents who determined these ratings did so from a "consistently white, elite standpoint", essentially isolating blacks in low-income areas by denying them home loans.

The goal of this map would be to visualize a time series of socio-demographic data in relation to the historic "redlined" areas, to explore if the same patterns of segregation and economic disadvantages still persist.

### Data Sources

- [Digitized Depression Era Redlining Maps](https://dsl.richmond.edu/panorama/redlining/#loc=5/39.1/-94.58&text=downloads)
- [Census Data](https://data.census.gov/cedsci/)
