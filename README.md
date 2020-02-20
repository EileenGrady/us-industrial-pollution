# Exploring Toxic Pollution in the US

_I want to map sites of environmental contaminants because I want to find out how these toxins impact their surroundings, in order to help the user visualize these effects._

This idea is an offshoot of the Superfund Site Proximity map I created in MAP 675. I was also inspired after hearing a podcast about Robert Bilott and how he took on DuPont chemical company in a class action lawsuit. Bilott was initially contacted by a farmer whose cows had been mysteriously dying in Parkersburg, West Virginia. Eventually Bilott discovered that the massive DuPont factory that had been operating in the area until recently had been dumping chemicals called PFOs and PFOAs, poisoning the drinking water for the surrounding towns. While this DuPont facility is not classified as a Superfund site, it got me thinking about the effects that Superfund sites might have on their surroundings, both on humans and the environment.

The goal of this map is to explore some effects that Superfund Sites, and facilities involved in the TRI inventory, have on their surroundings. I am thinking of adopting a storymap format for this report, to provide the user with a directed narrative. I would like to include some interacitivy as well as narrative. First I can show general distribution of both Superfund sites and TRI facilties. 

I also want to do some analysis with Census data, providing a visual representation of the demographics around each site to show who is impacted the most. Some factors to look at include total population around each site, age groups, income level, and insurance coverage.

According to [Factors to Consider when using Toxic Release Inventory Data](https://www.epa.gov/sites/production/files/2019-03/documents/factors_to_consider_march_2019.pdf), there are factors to consider when assessing a site's environmental hazard risk. Once I dig into the TRI data some more, I think I can isolate the sites that pose the most risk to groundwater contamination, and then do some watershed analysis on these risks.

## State of the Data

This project will pull in data from multiple sources. The Superfund and TRI sites will be the primary data source, and then others such as Census data and watershed boundaries will be pulled in to provide context around these sites. After showing general distribution of superfund sites and TRI sites, there will likely be some concentrations of these sites that I can dig into. 

The Superfund data is prettu straight forward. It is mostly just the facility locations and names. The data does contain an ID field though that can be linked back to that sites page on the EPA website. The TRI data contains a row for each chemical being released by each facility. I need to wrangle this data so that there is a row for each facility, with a field that lists each type of chemical it releases. Then I would like to narrow down to facilites that have a greater chance of groundwater contamination based on the type of chemical and method it is released by. The Census data contains a lot of extra information and needs to be wrangled quite a bit to narrow it down just to what I need, and then join the data to a US county shapefile or geojson. Once the Census data is wrangled, I can analyze it based on buffers around each Superfund and TRI site, and hopefully pull out some significant areas or clusters to focus on.

The superfund sites and TRI facilities will likely be loaded in as geojsons. I will use Jupyter notebooks or node.js to perfom the Census data analysis and exploration, and then load the appropriate data in as either geojsons or csv.

### Data Sources

- [Superfund Sites](https://catalog.data.gov/dataset/superfund-sites1e8f4)
- [TRI facilities](https://www.epa.gov/toxics-release-inventory-tri-program/tri-basic-data-files-calendar-years-1987-2018)
- [Census Data](https://data.census.gov/cedsci/)
    - [2018 population estimates](https://factfinder.census.gov/faces/tableservices/jsf/pages/productview.xhtml?pid=PEP_2018_PEPANNRES&prodType=table)
    - [2018 population estimates by age group](https://factfinder.census.gov/faces/tableservices/jsf/pages/productview.xhtml?pid=PEP_2018_PEPAGESEX&prodType=table)
    - [2018 health insurance](https://factfinder.census.gov/faces/tableservices/jsf/pages/productview.xhtml?pid=ACS_17_5YR_B27001&prodType=table)
    - [2017 household income](https://factfinder.census.gov/faces/tableservices/jsf/pages/productview.xhtml?pid=ACS_17_5YR_S1901&prodType=table)
- [Watershed Boundaries](https://nrcs.app.box.com/v/gateway/folder/39640323180)
