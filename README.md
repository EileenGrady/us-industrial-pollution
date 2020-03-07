# Exploring Toxic Pollution in the US

This idea is an offshoot of the Superfund Site Proximity map I created in MAP 675. The Superfund program was established by the Comprehensive Environmental Response, Compensation, and Liability Act (CERCLA) of 1980. The program operates under the EPA and is responsible for the investigation and clean-up of contaminated sites in the US. The most highly contaminated sites requiring longer-term remedial action are placed on the National Priority List (NPL). These sites pose grave risk to human health and the environment, and the US is seeing the [largest backlog of Superfund remediation projects](https://www.latimes.com/world-nation/story/2020-01-04/backlog-of-toxic-superfund-clean-ups-grows-under-trump) in at least 15 years.

While the Superfund program focuses on cleaning up toxins leftover from defunct industrial activities, active facilities all over the country are currently releasing toxic chemicals into our air, water, and land. These releases are regulated and monitored through the EPA's toxic release inventory (TRI), established under the 1986 Superfund Amendments and Reauthorization Act. 

The goal of this map is to geographically investigate Superfund sites and TRI reporting facilities. I will use a storymap format to first provide a general overview/distribution of both Superfund sites and TRI facilities, and then dive deeper into various aspects. I would like to include some interactivity as well as directed narrative.

## State of the Data

My approach for this project began by looking at Superfund sites and TRI reporting facility locations. I wanted to look at their nation-wide distribution, and then pull out some interesting cases/stories and pull in other data sources. I initially got caught up in wrangling the data into a format I thought I could use to tease out some stories, and then realized I had been doing a lot of work without really getting anywhere. I think I have finally found some direction after taking a step back and assessing the situation. Once I looked at where these sites were concentrated, I found some leads to follow.

The primary data sources are of course, the Superfund sites and TRI facility locations. 

- [Superfund Sites](https://catalog.data.gov/dataset/superfund-sites1e8f4) are pretty straightforward. The data was downloaded in a file geodatabase format, and converted to geojson using the command line.
- [TRI facilities](https://www.epa.gov/toxics-release-inventory-tri-program/tri-basic-data-files-calendar-years-1987-2018) for 2018 was downloaded in an excel workbook. I spent a lot of time exploring this dataset. There was one record with characteristics for each chemical reported, as well as facility information (including lat/long values). I had to wrangle the data into one record per facility, and exported to geojson.

In order to add some context to these sites, I pulled in several other data sources.

- The [Risk-Screening Environmental Indicators](https://edap.epa.gov/public/extensions/EasyRSEI/EasyRSEI.html) (RSEI) model incorporates info from the TRI on the amount of toxic chemical released, with factors such as the chemical's fate and transport through the environment, each chemical's relative toxicity, and potential human exposure.
    - I downloaded excel workbooks for the five RSEI value options for all TRI facilities in 2018. Each record represents one facility and reports its RSEI value, it also links to that facility's RSEI report which further details the score. There is a TRIFID column that I used to join to my existing TRI geojson.
    - I plan to visualize facilities that have higher scores using graduated circles.
- State and County polygon shapefiles downloaded from the Census Bureau.
- [Census Data](https://data.census.gov/cedsci/): wrangled and joined to state and county polygons
    - population estimates-used to caluclate population density
    - age group under 5
    - health inusrance coverage
    - poverty level
    - limited english
    - education level (less than high school)
- [Great Lakes Watershed Boundaries](https://www.glahf.org/watersheds/) downloaded as a large geodatabase. I viewed the data in QGIS and exported the necessary file to geojson format.
- American Indian Land shapefile downloaded from the Census Bureau. I brought the file into QGIS, and performed a 'point-in-polygon' count, to explore any concentrations worth exploring. I found that both the highest number and highest density of Superfund sites was in the Puyallup Reservation (25 sites!) near Puget Sound in Washington State.
- Top 10 Parent Companies: I explore some of the companies that own TRI facilities in one of my Jupyter notebooks. I found 10 companies that stand out as owning more than others.
    - I created a csv with the name of each company and the address of their headquarters, then geocoded the addresses, created a geodataframe from the results, and exported to geojson
    - I thought I could have the user choose a company from a dropdown, and the map would show that headquarters location. All the facilities it owns would show as smaller symbols, maybe connected to the headquarters with a line. 

## Map Design Outline

Below is a series of "slides" that I mocked up to help organize my thoughts and illustrate the ideas I have for presenting my exploration. This will be a storymap format, scrolling side panels with a map that updates in the background.

![slide 1](/images/slide-1.jpg)
![slide 2](/images/slide-2.jpg)
![slide 3](/images/slide-3.jpg)
![slide 4](/images/slide-4.jpg)
![slide 5](/images/slide-5.jpg)
![slide 6](/images/slide-6.jpg)
![slide 7](/images/slide-7.jpg)
![slide 8](/images/slide-8.jpg)
![slide 9](/images/slide-9.jpg)
![slide 10](/images/slide-10.jpg)