# Exploring Industrial Pollution in the US
### Subtitle

## I. Introduction

In 1969, the burning of the Cuyahoga River in Cleveland, Ohio became a national symbol for the public’s outcry against industrial pollution. The public had been expressing increasing concern throughout the 1950s and 1960s, and the US reached a turning point when the Environmental Protection Agency was established in 1970. The EPA began to monitor and enforce the increasing number of environmental laws passed by Congress aimed at reducing industrial pollution.

Today there are two main programs in place that monitor industrial pollution in the United States. The Superfund program is responsible for the investigation and clean-up of contaminated sites left over from decades of unregulated industrial manufacturing and other activities. The most highly contaminated sites which require longer-term remedial action take precedence and are placed on the National Priority List (NPL). The EPA also monitors active facilities all over the country that are currently releasing toxic chemicals into our air, water, and land through the Toxic Release Inventory (TRI).

It is easy enough to obtain basic location information for both Superfund sites and TRI facilities, but an investigation into industrial pollution quickly reveals more complexity beyond locations on a map. This mapping project will be a directed narrative told through a storytelling map format that begins by visualizing the general location and distribution of Superfund sites and TRI reporting facilities, and guides the user through several interesting case studies augmented with additional data sources that explore the wider reach and effects of these sites. The user will gain a better understanding of industrial pollution and the threat it poses to both humans and the environment. As efforts are underway to [roll back](https://www.vox.com/energy-and-environment/2018/1/26/16936104/epa-trump-toxic-air-pollution) environmental regulations and budget cuts are increasing the [backlog]( https://www.latimes.com/world-nation/story/2020-01-04/backlog-of-toxic-superfund-clean-ups-grows-under-trump) of Superfund remediation projects, this map will emphasize the importance of a framework that regulates and holds industry accountable for the toxic pollution it imposes upon communities.

## II. Methodology

### A. Data

Superfund site locations were initially obtained as a csv file from the EPA's [Superfund Enterprise Management System](https://www.epa.gov/enviro/sems-search) Database. Additional data on each site, including the site's Hazard Ranking System (HRS) score, was obtained through an [advanced search](https://cumulis.epa.gov/supercpad/cursites/srchsites.cfm), downloaded as a csv file, and joined to the initial site locations using python in a Jupyter notebook.

[Toxic Release Inventory](https://www.epa.gov/toxics-release-inventory-tri-program/tri-basic-data-files-calendar-years-1987-2018) data for 2018 was downloaded in an excel workbook. Data is reported as one record for each chemical released per reporting facility. I used python in a jupyter notebook to wrangle data into one record per reporting facility, with information on total amounts released per facility. RSEI scores were then downloaded from the EPA's [EasyRSEI Dashboard](https://edap.epa.gov/public/extensions/EasyRSEI/EasyRSEI.html) and joined to the facility locations.

Once the Superfund site locations and TRI reporting facilities were wrangled and joined to their ranking scores used to compare hazard and risk respectively, I used python in a jupyter notebook to pick out some interesting case studies.

### B. Medium for delivery

This map will be presented as a storytelling map accessible across desktop and larger mobile devices. The basic technology stack includes HTML, CSS, JS, and Leaflet, delivered in a Bootstrap framework. _Storytelling library?_

After guiding the user through the storytelling map, the last 'scene' will allow the user to search for an address using the [Leaflet Control Geocoder](https://github.com/perliedman/leaflet-control-geocoder). Then [Turf.js](https://turfjs.org/) will perform buffering, point-in-polygon analysis, and measurement in the browser to find the closest Superfund site and nearby TRI reporting facilities based on the user's search.

### C. Application layout

![basic wireframe](images/wireframe-1.jpg)

### D. Thematic representation

As this is a storytelling map format that will guide the user through several 'scenes', there will be several thematic representations. The primary data sources used are Superfund sites and TRI reporting facilities. These will both be represented as points throughout the storytelling map. As the narrative develops, additional data will be brought in to contextualize the sites.

### E. User interaction

The user interaction will be a fairly simple scrolling interface. As the user scrolls through panels of descriptive narrative on the left side, the map will move to the relevant location and bring in additional layers that help visualize the narrative.

### F. Aesthetics and design considerations

I imagine this mapping project to be relatively clean and simple. It will be a dark basemap with data symbolized in colors that almost seem to glow.

## III. Conclusion