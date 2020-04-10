# Exploring Toxic Pollution in the US

This idea is an offshoot of the Superfund Site Proximity map I created in MAP 675. The Superfund program was established by the Comprehensive Environmental Response, Compensation, and Liability Act (CERCLA) of 1980. The program operates under the EPA and is responsible for the investigation and clean-up of contaminated sites in the US. The most highly contaminated sites requiring longer-term remedial action are placed on the National Priority List (NPL). These sites pose grave risk to human health and the environment, and the US is seeing the [largest backlog of Superfund remediation projects](https://www.latimes.com/world-nation/story/2020-01-04/backlog-of-toxic-superfund-clean-ups-grows-under-trump) in at least 15 years.

While the Superfund program focuses on cleaning up toxins leftover from defunct industrial activities, active facilities all over the country are currently releasing toxic chemicals into our air, water, and land. These releases are regulated and monitored through the EPA's toxic release inventory (TRI), established under the 1986 Superfund Amendments and Reauthorization Act. 

The goal of this map is to geographically investigate Superfund sites and TRI reporting facilities. I will use a storymap format to first provide a general overview/distribution of both Superfund sites and TRI facilities, and then dive deeper into various aspects. I would like to include some interactivity as well as directed narrative.

## State of the Data

My approach for this project began by looking at Superfund sites and TRI reporting facility locations. I wanted to look at their nation-wide distribution, and then pull out some interesting cases/stories and pull in other data sources. I initially got caught up in wrangling the data into a format I thought I could use to tease out some stories, and then realized I had been doing a lot of work without really getting anywhere. I think I have finally found some direction after taking a step back and assessing the situation. Once I looked at where these sites were concentrated, I found some leads to follow.

The primary data sources are the Superfund sites and TRI facility locations. 

- [Superfund Sites](https://catalog.data.gov/dataset/superfund-sites1e8f4) are pretty straightforward. The data was downloaded in a file geodatabase format, and converted to geojson using the command line.
- [TRI facilities](https://www.epa.gov/toxics-release-inventory-tri-program/tri-basic-data-files-calendar-years-1987-2018) for 2018 was downloaded in an excel workbook. I spent a lot of time exploring this dataset. There was one record with characteristics for each chemical reported, as well as facility information (including lat/long values). I had to wrangle the data into one record per facility, and exported to geojson.

In order to add some context to these sites, I pulled in several other data sources. First I added more information to explore which sites might pose more risk than others.
- The [Risk-Screening Environmental Indicators](https://edap.epa.gov/public/extensions/EasyRSEI/EasyRSEI.html) (RSEI) model incorporates info from the TRI on the amount of toxic chemical released, with factors such as the chemical's fate and transport through the environment, each chemical's relative toxicity, and potential human exposure.
    - I downloaded excel workbooks for the RSEI Score, RSEI Cancer Score, RSEI Non-Cancer, and RSEI modeled hazard score for all TRI facilities in 2018. Each record represents one facility and reports its RSEI value, it also links to that facility's RSEI report which further details the score. There is a TRIFID column that I used to join to my existing TRI geojson.
    - I used these scores to find areas more at risk from toxic releases.
    - I plan to visualize facilities that have higher scores using graduated circles.
- I found more details about Superfund sites through an advanced search on the EPA's website that I was able to join to the geojson I had converted. This data included each site's Hazard Ranking System (HRS) score, and whether or not each site has human exposure and groundwater mitigation under control.

After identifying some areas or sites that were the highest risk, I pulled in even more data to explore these further.

- [National Air Toxics Assessment](https://www.epa.gov/national-air-toxics-assessment/2014-national-air-toxics-assessment) (NATA) data from the EPA. Once I found that Harris County, Texas (Houston) had the highest RSEI score in the country, I explored further to find that a cluster of facilities were releasing high amounts of ethylene oxide (a known carcinogen) into the air. I joined the air data to Harris County census tracts to overlay with the TRI facilities.
- Census tract polygons downloaded from the Census Bureau
- After Houston, Chicago has the highest RSEI total score for US cities. I pulled in tract-level [Census Data](https://data.census.gov/cedsci/) for Chicago to explore patterns of site location vs. vulnerable populations.
    - population estimates-used to caluclate population density
    - age group under 5
    - age group over 65
    - health inusrance coverage
    - poverty level
    - limited english
    - education level (less than high school)

I was also interested in the geography of who owns TRI facilities vs where these sites are located.
- Top 10 Parent Companies: I explore some of the companies that own TRI facilities in one of my Jupyter notebooks. I found 10 companies that stand out as owning more than others.
    - I created a csv with the name of each company and the address of their headquarters, then geocoded the addresses, created a geodataframe from the results, and exported to geojson
    - I thought I could have the user choose a company from a dropdown, and the map would show that headquarters location. All the facilities it owns would show as smaller symbols, maybe connected to the headquarters with a line. 

## Map Design Outline

Storymap format, scrolling side panels with a map that updates in the background.

1.	Intro about pollution in general: different types, the EPA—map shows EPA regions, introduce the TRI and Superfund Program
2.	TRI inventory introduction- show general location of all TRI sites (clustered)
3.	Superfund sites- show general location and info about program (clustered) The sites shown are on the NPL, with a hazard ranking score above 28.5
4.	Where are all these sites concentrated? hexgrid choropleth showing total site density--created with node.js script
5.	What does the TRI monitor? Look at total lbs released vs risk score. How risk assessment has to take other factors than just amount into consideration- RSEI scores, graduated circles, dropdown between total release in pounds and RSEI scores to show how total release doesn’t necessarily convey the total risk or hazard
6.	For example, Harris County Texas has the highest total RSEI score
    - Show all TRI facilities in the county, graduated circles based on score
    - bring in ethylene oxide releasing facilities that are causing the high score—bring in air quality for Texas census tracts, show reach of air pollution
7.	After Houston, which is in Harris County, Chicago has the next highest RSEI score-look at census data for vulnerable populations underneath TRI facilities (symbolized by graduated circles)
8.	Who is operating these facilities—parent company map—narrative about different industries, bar graph of breakdown? 
9.	Superfund sites on the other hand are mostly the result of facilities that are no longer in service and that operated prior to EPA regulations, leaving toxic waste behind. These sites are all highly contaminated but some are more serious than others. The Superfund program classifies sites as to whether or not they have groundwater mitigation/human exposure under control and HRS score helps classify which pose the most risk-show sites that don’t have at least one factor under control, symbolized with graduated circles according to HRS score. Then zoom into 3 different Superfund Site stories:
    - GE - Housatonic River in Pittsfield MA-clean-up activities scheduled all the way down Housatonic river through Connecticut (https://semspub.epa.gov/work/01/644045.pdf)
        - First zoom to site and talk about contamination there,
        - then zoom all the way out to river and mention how contaminants travelled.
    - Zoom to Depue/New Jersey Zinc/Mobil Chemical Corp. in Depue IL-info-georeferenced site map showing outlines (https://www2.illinois.gov/epa/topics/community-relations/sites/new-jersey-zinc/Pages/default.aspx)
        - Zoom to area, showing georeferenced [map](https://www2.illinois.gov/epa/Documents/iepa/community-relations/new-jersey-zinc/site-map.pdf) of actual outlines of entire site
    - Old Lead Mining Belt in Missouri-7 Superfund NPL sites encompass 4 entire counties in Missouri.
        - Zoom to area and discuss
        - Then bring in TRI facilities that still contribute to pollution here
10.	How does this affect you? Address search—create buffer around point, find TRI facilities with buffer populate info box with release total release amounts and scores, find Superfund sites within buffer, and show distance to closest one (link to site’s webpage)
