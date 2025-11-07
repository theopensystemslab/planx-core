// https://api.editor.planx.dev/admin/session/7ae499ac-4f0e-482c-bb1e-f8a64eacca2e/summary
export const mockPPTSession = {
  "flow": {
    "id": "6c2a19f0-0291-4acb-b29a-277eceaf76a4",
    "slug": "apply-for-planning-permission-templated",
    "team": {
      "slug": "newcastle",
      "referenceCode": "NEW"
    }
  },
  "created_at": "2025-10-29T09:09:41.84671+00:00",
  "updated_at": "2025-10-30T03:00:03.57009+00:00",
  "submitted_at": "2025-10-29T09:15:29.820312+00:00",
  "locked_at": null,
  "sanitised_at": null,
  "email": "example@example.com",
  "passport": {
    "_nots": {
      "property.constraints.planning": [
        "archaeologicalPriorityArea",
        "articleFour",
        "battlefield",
        "brownfieldSite",
        "designated.AONB",
        "designated.conservationArea",
        "greenBelt",
        "designated.nationalPark",
        "designated.nationalPark.broads",
        "designated.WHS",
        "flood",
        "listed",
        "monument",
        "nature.ASNW",
        "nature.ramsarSite",
        "nature.SAC",
        "nature.SPA",
        "nature.SSSI",
        "registeredPark",
        "road.classified",
        "tpo",
        "designated",
        "articleFour.newcastle.caz"
      ]
    },
    "_address": {
      "x": 419818,
      "y": 565316,
      "pao": "13",
      "town": "NEWCASTLE UPON TYNE",
      "uprn": "004510050603",
      "usrn": "8203356",
      "ward": "E05011437",
      "title": "13, WHARMLANDS ROAD, SCOTSWOOD",
      "source": "os",
      "street": "WHARMLANDS ROAD",
      "latitude": 54.9820623,
      "postcode": "NE15 7UB",
      "blpu_code": "2",
      "longitude": -1.6918845,
      "planx_value": "residential.house.terrace",
      "organisation": null,
      "planx_description": "Terrace",
      "single_line_address": "13, WHARMLANDS ROAD, SCOTSWOOD, NEWCASTLE UPON TYNE, NE15 7UB"
    },
    "user.role": [
      "applicant"
    ],
    "usedFOIYNPP": [
      "false"
    ],
    "_constraints": [
      {
        "metadata": {
          "tpo": {
            "name": "Tree preservation zone",
            "text": "This dataset contains the extent of groups of trees covered by a tree preservation order.\n\nIt can be used for managing and protecting important trees by preventing their unauthorised removal or damage. \n\nMembers of the public and developers use the data to check if a tree is protected and to inform planning applications or tree work proposals. The data helps ensure trees remain a significant part of the local environment and public amenity.\n\nThis dataset contains data from [a small group of local planning authorities](/about/) who we are working with to develop a [data specification for tree preservation orders](https://www.digital-land.info/guidance/specifications/tree-preservation-order).",
            "phase": "beta",
            "realm": "dataset",
            "plural": "Trees preservation zones",
            "prefix": "",
            "themes": [
              "environment"
            ],
            "dataset": "tree-preservation-zone",
            "licence": "ogl3",
            "version": "2.0",
            "end-date": "",
            "entities": "",
            "typology": "geography",
            "wikidata": "Q10884",
            "wikipedia": "Tree",
            "collection": "tree-preservation-order",
            "entry-date": "",
            "start-date": "",
            "attribution": "crown-copyright",
            "description": "An area covered by a tree preservation order",
            "entity-count": {
              "count": 51393,
              "dataset": "tree-preservation-zone"
            },
            "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "consideration": "tree-preservation-orders",
            "paint-options": "",
            "entity-maximum": 29099999,
            "entity-minimum": 19100000,
            "attribution-text": "© Crown copyright and database right 2025",
            "github-discussion": 43,
            "replacement-dataset": ""
          },
          "flood": {
            "name": "Flood risk zone",
            "text": "Flood zones are a guide produced by the Environment Agency to demonstrate the probability of river and sea flooding in areas across England. Flood zones are based on the likelihood of an area flooding, with flood zone 1 areas least likely to flood and flood zone 3 areas more likely to flood. \n\nThe flood zones were produced to help developers, councils and communities understand the flood risks present in specific locations or regions. Despite being a very useful indicator of an area’s flood risk, the zones cannot tell you whether a location will definitely flood or to what severity.",
            "phase": "live",
            "realm": "dataset",
            "plural": "Flood risk zones",
            "prefix": "",
            "themes": [
              "environment"
            ],
            "dataset": "flood-risk-zone",
            "licence": "ogl3",
            "version": "1.0",
            "end-date": "",
            "entities": "",
            "typology": "geography",
            "wikidata": "",
            "wikipedia": "",
            "collection": "flood-risk-zone",
            "entry-date": "",
            "start-date": "",
            "attribution": "crown-copyright",
            "description": "Area identified as being at risk of flooding from rivers or the sea",
            "entity-count": {
              "count": 780636,
              "dataset": "flood-risk-zone"
            },
            "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "consideration": "flood-risk-zones",
            "paint-options": "",
            "entity-maximum": 65999999,
            "entity-minimum": 65000000,
            "attribution-text": "© Crown copyright and database right 2025",
            "github-discussion": 46,
            "replacement-dataset": ""
          },
          "listed": {
            "name": "Listed building outline",
            "text": "This dataset contains geospatial boundary or extent information about listings.\n\nIt can be used for identifying and protecting buildings of special architectural or historic interest, ensuring that any work on or near these properties requires special consent and design considerations to prevent harm to the building's significance.\n\nThis spatial data can help in planning applications, conservation efforts, and policy development by showing the locations and boundaries of designated heritage assets, influencing development proposals and land use decisions. \n\nThis dataset does not consistently show the curtilage of listed buildings for planning purposes and should only be used as an indicative guide. We encourage users to make further checks before making any planning decision.\n\nData shows the extent of the land associated with the listing. This dataset is a work in progress and does not have full coverage across England.",
            "phase": "alpha",
            "realm": "dataset",
            "plural": "Listed building outlines",
            "prefix": "",
            "themes": [
              "heritage"
            ],
            "dataset": "listed-building-outline",
            "licence": "ogl3",
            "version": "3.0",
            "end-date": "",
            "entities": "",
            "typology": "geography",
            "wikidata": "Q570600",
            "wikipedia": "Listed_building",
            "collection": "listed-building",
            "entry-date": "",
            "start-date": "",
            "attribution": "crown-copyright",
            "description": "boundary of a listed building",
            "entity-count": {
              "count": 68156,
              "dataset": "listed-building-outline"
            },
            "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "consideration": "listed-buildings",
            "paint-options": {
              "colour": "#F9C744"
            },
            "entity-maximum": 43099999,
            "entity-minimum": 42100000,
            "attribution-text": "© Crown copyright and database right 2025",
            "github-discussion": 44,
            "replacement-dataset": ""
          },
          "monument": {
            "name": "Scheduled monument",
            "text": "Historic buildings or sites such as Roman remains, burial mounds, castles, bridges, earthworks, the remains of deserted villages and industrial sites can be designated scheduled monuments by the Secretary of State for [Digital, Culture, Media and Sport](https://www.gov.uk/government/organisations/department-for-digital-culture-media-sport). \n\nThis list of scheduled monuments is kept and maintained by [Historic England](https://historicengland.org.uk/).",
            "phase": "beta",
            "realm": "dataset",
            "plural": "Scheduled monuments",
            "prefix": "",
            "themes": [
              "heritage"
            ],
            "dataset": "scheduled-monument",
            "licence": "ogl3",
            "version": "1.0",
            "end-date": "",
            "entities": "",
            "typology": "geography",
            "wikidata": "Q219538",
            "wikipedia": "Scheduled_monument",
            "collection": "historic-england",
            "entry-date": "",
            "start-date": "",
            "attribution": "historic-england",
            "description": "",
            "entity-count": {
              "count": 20017,
              "dataset": "scheduled-monument"
            },
            "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "consideration": "scheduled-monuments",
            "paint-options": {
              "colour": "#0F9CDA"
            },
            "entity-maximum": 13999999,
            "entity-minimum": 13900000,
            "attribution-text": "© Historic England 2025. Contains Ordnance Survey data © Crown copyright and database right 2025.\nThe Historic England GIS Data contained in this material was obtained on [date].\nThe most publicly available up to date Historic England GIS Data can be obtained from [HistoricEngland.org.uk](https://historicengland.org.uk).",
            "github-discussion": "",
            "replacement-dataset": ""
          },
          "greenBelt": {
            "name": "Green belt",
            "text": "This dataset contains boundaries for land designated by a local planning authority as being [green belt](https://www.gov.uk/guidance/green-belt),\ngrouped using the [greenbelt core](/dataset/greenbelt-core) category.\n\nIt can be used for planning purposes, such as preparing local plans to define areas that are kept permanently open and free from urban sprawl.\n\nLocal planning authorities provide annual returns in March and we publish the data in autumn. This provides a snapshot in time and won't reflect any changes to green belt boundaries made since the local planning authorities submitted their annual returns.",
            "phase": "beta",
            "realm": "dataset",
            "plural": "Green belt",
            "prefix": "",
            "themes": [
              "environment"
            ],
            "dataset": "green-belt",
            "licence": "ogl3",
            "version": "1.0",
            "end-date": "",
            "entities": "",
            "typology": "geography",
            "wikidata": "Q2734873",
            "wikipedia": "Green_belt_(United_Kingdom)",
            "collection": "green-belt",
            "entry-date": "",
            "start-date": "",
            "attribution": "os-open-data",
            "description": "",
            "entity-count": {
              "count": 181,
              "dataset": "green-belt"
            },
            "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "consideration": "greenbelt",
            "paint-options": {
              "colour": "#85994b"
            },
            "entity-maximum": 610999,
            "entity-minimum": 610000,
            "attribution-text": "Your use of OS OpenData is subject to the terms at http://os.uk/opendata/licence\nContains Ordnance Survey data © Crown copyright and database right 2025",
            "github-discussion": 45,
            "replacement-dataset": ""
          },
          "nature.SAC": {
            "name": "Special area of conservation",
            "text": "Special areas of conservation (SACs) are area of land which have been designated by\n[DEFRA](https://www.gov.uk/government/organisations/department-for-environment-food-rural-affairs),\nwith advice from the [Joint Nature Conservation Committee](https://jncc.gov.uk/),\nto protect specific habitats and species.\n\nDEFRA and [Natural England](https://www.gov.uk/government/organisations/natural-england) publish\n[guidance](https://www.gov.uk/guidance/protected-sites-and-areas-how-to-review-planning-applications)\non how to review planning applications in protected sites and areas.",
            "phase": "beta",
            "realm": "dataset",
            "plural": "Special areas of conservation",
            "prefix": "",
            "themes": [
              "environment"
            ],
            "dataset": "special-area-of-conservation",
            "licence": "ogl3",
            "version": "1.0",
            "end-date": "",
            "entities": "",
            "typology": "geography",
            "wikidata": "Q1191622",
            "wikipedia": "Special_Area_of_Conservation",
            "collection": "special-area-of-conservation",
            "entry-date": "",
            "start-date": "",
            "attribution": "natural-england",
            "description": "",
            "entity-count": {
              "count": 260,
              "dataset": "special-area-of-conservation"
            },
            "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "consideration": "special-areas-of-conservation",
            "paint-options": {
              "colour": "#7A8705"
            },
            "entity-maximum": 14899999,
            "entity-minimum": 14800000,
            "attribution-text": "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2025.",
            "github-discussion": "",
            "replacement-dataset": ""
          },
          "nature.SPA": {
            "name": "Special protection area",
            "text": "[Special protection areas](https://naturalengland-defra.opendata.arcgis.com/maps/Defra::special-protection-areas-england/about) is an area designated \nfor the protection of birds and wildlife. This dataset is provided by [Natural England](https://www.gov.uk/government/organisations/natural-england).",
            "phase": "beta",
            "realm": "dataset",
            "plural": "Special protection areas",
            "prefix": "",
            "themes": [
              "environment"
            ],
            "dataset": "special-protection-area",
            "licence": "ogl3",
            "version": "1.0",
            "end-date": "",
            "entities": "",
            "typology": "geography",
            "wikidata": "",
            "wikipedia": "",
            "collection": "special-protection-area",
            "entry-date": "",
            "start-date": "",
            "attribution": "natural-england",
            "description": "",
            "entity-count": {
              "count": 88,
              "dataset": "special-protection-area"
            },
            "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "consideration": "special-protection-areas",
            "paint-options": "",
            "entity-maximum": 14999999,
            "entity-minimum": 14900000,
            "attribution-text": "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2025.",
            "github-discussion": "",
            "replacement-dataset": ""
          },
          "articleFour": {
            "name": "Article 4 direction area",
            "text": "This dataset contains information on areas affected by article 4 directions.\n\nIt can be used for controlling development by requiring a planning application for work that would otherwise be classed as permitted development.",
            "phase": "beta",
            "realm": "dataset",
            "plural": "Article 4 direction areas",
            "prefix": "",
            "themes": [
              "heritage"
            ],
            "dataset": "article-4-direction-area",
            "licence": "ogl3",
            "version": "3.0",
            "end-date": "",
            "entities": "",
            "typology": "geography",
            "wikidata": "",
            "wikipedia": "",
            "collection": "article-4-direction",
            "entry-date": "",
            "start-date": "",
            "attribution": "crown-copyright",
            "description": "Orders made by the local planning authority to remove all or some of the permitted development rights on a site in order to protect it",
            "entity-count": {
              "count": 4431,
              "dataset": "article-4-direction-area"
            },
            "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "consideration": "article-4-directions",
            "paint-options": "",
            "entity-maximum": 7019999999,
            "entity-minimum": 7010000000,
            "attribution-text": "© Crown copyright and database right 2025",
            "github-discussion": 30,
            "replacement-dataset": ""
          },
          "battlefield": {
            "name": "Battlefield",
            "text": "Battlefields as designated by [Historic England](https://historicengland.org.uk) in their [Register of Historic Battlefields](https://historicengland.org.uk/listing/what-is-designation/registered-battlefields/).",
            "phase": "live",
            "realm": "dataset",
            "plural": "Battlefields",
            "prefix": "",
            "themes": [
              "heritage"
            ],
            "dataset": "battlefield",
            "licence": "ogl3",
            "version": "1.0",
            "end-date": "",
            "entities": "",
            "typology": "geography",
            "wikidata": "Q4895508",
            "wikipedia": "Battlefield",
            "collection": "historic-england",
            "entry-date": "",
            "start-date": "",
            "attribution": "historic-england",
            "description": "",
            "entity-count": {
              "count": 47,
              "dataset": "battlefield"
            },
            "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "consideration": "battlefields",
            "paint-options": {
              "colour": "#4d2942",
              "opacity": 0.2
            },
            "entity-maximum": 1499999,
            "entity-minimum": 1400000,
            "attribution-text": "© Historic England 2025. Contains Ordnance Survey data © Crown copyright and database right 2025.\nThe Historic England GIS Data contained in this material was obtained on [date].\nThe most publicly available up to date Historic England GIS Data can be obtained from [HistoricEngland.org.uk](https://historicengland.org.uk).",
            "github-discussion": "",
            "replacement-dataset": ""
          },
          "nature.ASNW": {
            "name": "Ancient woodland",
            "text": "An area designated as ancient woodland by Natural England.\n\nNatural England and Forestry Commission [Guidance](https://www.gov.uk/guidance/ancient-woodland-and-veteran-trees-protection-surveys-licences)  is used in planning decisions.",
            "phase": "live",
            "realm": "dataset",
            "plural": "Ancient woodlands",
            "prefix": "",
            "themes": [
              "environment"
            ],
            "dataset": "ancient-woodland",
            "licence": "ogl3",
            "version": "1.0",
            "end-date": "",
            "entities": "",
            "typology": "geography",
            "wikidata": "Q3078732",
            "wikipedia": "Ancient_woodland",
            "collection": "ancient-woodland",
            "entry-date": "",
            "start-date": "",
            "attribution": "natural-england",
            "description": "An area that’s been wooded continuously since at least 1600 AD",
            "entity-count": {
              "count": 44373,
              "dataset": "ancient-woodland"
            },
            "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "consideration": "ancient-woodlands",
            "paint-options": {
              "colour": "#00703c",
              "opacity": 0.2
            },
            "entity-maximum": 129999999,
            "entity-minimum": 110000000,
            "attribution-text": "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2025.",
            "github-discussion": 32,
            "replacement-dataset": ""
          },
          "nature.SSSI": {
            "name": "Site of special scientific interest",
            "text": "Sites of special scientific interest (SSSI) are nationally protected sites that have features such as wildlife or geology. \n\nSSSIs are designated by [Natural England](https://www.gov.uk/government/organisations/natural-england).\nThere is [guidance](https://www.gov.uk/guidance/protected-areas-sites-of-special-scientific-interest) to help local authorities decide on planning applications in protected SSSIs.",
            "phase": "beta",
            "realm": "dataset",
            "plural": "Sites of special scientific interest",
            "prefix": "",
            "themes": [
              "environment"
            ],
            "dataset": "site-of-special-scientific-interest",
            "licence": "ogl3",
            "version": "1.0",
            "end-date": "",
            "entities": "",
            "typology": "geography",
            "wikidata": "Q422211",
            "wikipedia": "Site_of_Special_Scientific_Interest",
            "collection": "site-of-special-scientific-interest",
            "entry-date": "",
            "start-date": "",
            "attribution": "natural-england",
            "description": "",
            "entity-count": {
              "count": 4128,
              "dataset": "site-of-special-scientific-interest"
            },
            "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "consideration": "sites-of-special-scientific-interest",
            "paint-options": {
              "colour": "#308fac"
            },
            "entity-maximum": 14599999,
            "entity-minimum": 14500000,
            "attribution-text": "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2025.",
            "github-discussion": "",
            "replacement-dataset": ""
          },
          "brownfieldSite": {
            "name": "Brownfield site",
            "text": "This is an experimental dataset of the boundaries of brownfield sites found on [data.gov.uk](https://www.data.gov.uk/search?q=brownfield)\nand local planning authority web sites.\nWe expect to combine this dataset with the [brownfield land](/dataset/brownfield-land) dataset in the near future.",
            "phase": "alpha",
            "realm": "dataset",
            "plural": "Brownfield sites",
            "prefix": "",
            "themes": [
              "development"
            ],
            "dataset": "brownfield-site",
            "licence": "ogl3",
            "version": "1.0",
            "end-date": "",
            "entities": "",
            "typology": "geography",
            "wikidata": "Q896586",
            "wikipedia": "Brownfield_land",
            "collection": "brownfield-site",
            "entry-date": "",
            "start-date": "",
            "attribution": "crown-copyright",
            "description": "",
            "entity-count": {
              "count": 2852,
              "dataset": "brownfield-site"
            },
            "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "consideration": "brownfield-land",
            "paint-options": {
              "colour": "#745729"
            },
            "entity-maximum": 1899999,
            "entity-minimum": 1800000,
            "attribution-text": "© Crown copyright and database right 2025",
            "github-discussion": 28,
            "replacement-dataset": ""
          },
          "designated.WHS": {
            "name": "World heritage site buffer zone",
            "text": "A [World Heritage Site](/dataset/world-heritage-site) may have a [buffer zone](https://whc.unesco.org/en/series/25/) with implications for planning.",
            "phase": "beta",
            "realm": "dataset",
            "plural": "World heritage site buffer zones",
            "prefix": "",
            "themes": [
              "heritage"
            ],
            "dataset": "world-heritage-site-buffer-zone",
            "licence": "ogl3",
            "version": "1.0",
            "end-date": "",
            "entities": "",
            "typology": "geography",
            "wikidata": "Q9259",
            "wikipedia": "World_Heritage_Site",
            "collection": "historic-england",
            "entry-date": "",
            "start-date": "",
            "attribution": "historic-england",
            "description": "",
            "entity-count": {
              "count": 9,
              "dataset": "world-heritage-site-buffer-zone"
            },
            "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "consideration": "world-heritage-sites",
            "paint-options": {
              "colour": "#EB1EE5",
              "opacity": 0.2
            },
            "entity-maximum": 16129999,
            "entity-minimum": 16110000,
            "attribution-text": "© Historic England 2025. Contains Ordnance Survey data © Crown copyright and database right 2025.\nThe Historic England GIS Data contained in this material was obtained on [date].\nThe most publicly available up to date Historic England GIS Data can be obtained from [HistoricEngland.org.uk](https://historicengland.org.uk).",
            "github-discussion": "",
            "replacement-dataset": ""
          },
          "registeredPark": {
            "name": "Historic parks and gardens",
            "text": "Historic parks and gardens as listed by [Historic England](https://historicengland.org.uk/) in the [Register of Parks and Gardens of Special Historic Interest](https://historicengland.org.uk/listing/what-is-designation/registered-parks-and-gardens/).",
            "phase": "beta",
            "realm": "dataset",
            "plural": "Parks and gardens",
            "prefix": "",
            "themes": [
              "environment",
              "heritage"
            ],
            "dataset": "park-and-garden",
            "licence": "ogl3",
            "version": "1.0",
            "end-date": "",
            "entities": "",
            "typology": "geography",
            "wikidata": "Q6975250",
            "wikipedia": "Register_of_Historic_Parks_and_Gardens_of_Special_Historic_Interest_in_England",
            "collection": "historic-england",
            "entry-date": "",
            "start-date": "",
            "attribution": "historic-england",
            "description": "",
            "entity-count": {
              "count": 1719,
              "dataset": "park-and-garden"
            },
            "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "consideration": "",
            "paint-options": {
              "colour": "#0EB951"
            },
            "entity-maximum": 11199999,
            "entity-minimum": 11100000,
            "attribution-text": "© Historic England 2025. Contains Ordnance Survey data © Crown copyright and database right 2025.\nThe Historic England GIS Data contained in this material was obtained on [date].\nThe most publicly available up to date Historic England GIS Data can be obtained from [HistoricEngland.org.uk](https://historicengland.org.uk).",
            "github-discussion": "",
            "replacement-dataset": ""
          },
          "articleFour.caz": {
            "name": "Central activities zone",
            "text": "The [Greater London Authority](https://www.london.gov.uk/) (GLA) designates a central area of London with [implications for planning](https://www.london.gov.uk/what-we-do/planning/implementing-london-plan/london-plan-guidance-and-spgs/central-activities-zone)\nThis dataset combines data provided by the GLA with the boundary from the individual London boroughs.",
            "phase": "beta",
            "realm": "dataset",
            "plural": "Central activities zones",
            "prefix": "",
            "themes": [
              "development"
            ],
            "dataset": "central-activities-zone",
            "licence": "ogl3",
            "version": "1.0",
            "end-date": "",
            "entities": "",
            "typology": "geography",
            "wikidata": "",
            "wikipedia": "",
            "collection": "central-activities-zone",
            "entry-date": "",
            "start-date": "",
            "attribution": "crown-copyright",
            "description": "",
            "entity-count": {
              "count": 10,
              "dataset": "central-activities-zone"
            },
            "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "consideration": "central-activty-zones",
            "paint-options": "",
            "entity-maximum": 2299999,
            "entity-minimum": 2200000,
            "attribution-text": "© Crown copyright and database right 2025",
            "github-discussion": "",
            "replacement-dataset": ""
          },
          "designated.AONB": {
            "name": "Area of outstanding natural beauty",
            "text": "An area of outstanding natural beauty (AONB) as designated by [Natural England](https://www.gov.uk/government/organisations/natural-england).\n\nNatural England provides [guidance](https://www.gov.uk/guidance/protected-sites-and-areas-how-to-review-planning-applications) to help local authorities decide on planning applications in protected sites and areas.",
            "phase": "live",
            "realm": "dataset",
            "plural": "Areas of outstanding natural beauty",
            "prefix": "",
            "themes": [
              "environment"
            ],
            "dataset": "area-of-outstanding-natural-beauty",
            "licence": "ogl3",
            "version": "1.0",
            "end-date": "",
            "entities": "",
            "typology": "geography",
            "wikidata": "Q174945",
            "wikipedia": "Area_of_Outstanding_Natural_Beauty",
            "collection": "area-of-outstanding-natural-beauty",
            "entry-date": "",
            "start-date": "",
            "attribution": "natural-england",
            "description": "Land protected by law to conserve and enhance its natural beauty",
            "entity-count": {
              "count": 34,
              "dataset": "area-of-outstanding-natural-beauty"
            },
            "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "consideration": "areas-of-outstanding-natural-beauty",
            "paint-options": {
              "colour": "#d53880"
            },
            "entity-maximum": 1099999,
            "entity-minimum": 1000000,
            "attribution-text": "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2025.",
            "github-discussion": 31,
            "replacement-dataset": ""
          },
          "nature.ramsarSite": {
            "name": "Ramsar site",
            "text": "An internationally protected site listed as a wetland of international importance.\nRamsar sites are designated by [UNESCO](https://en.unesco.org/) and managed by [Natural England](https://www.gov.uk/government/organisations/natural-england).\n\nNatural England provides [guidance ](https://www.gov.uk/guidance/protected-sites-and-areas-how-to-review-planning-applications) to help local authorities decide on planning applications in protected sites and areas.",
            "phase": "beta",
            "realm": "dataset",
            "plural": "Ramsar sites",
            "prefix": "",
            "themes": [
              "environment"
            ],
            "dataset": "ramsar",
            "licence": "ogl3",
            "version": "1.0",
            "end-date": "",
            "entities": "",
            "typology": "geography",
            "wikidata": "",
            "wikipedia": "",
            "collection": "ramsar",
            "entry-date": "",
            "start-date": "",
            "attribution": "natural-england",
            "description": "",
            "entity-count": {
              "count": 73,
              "dataset": "ramsar"
            },
            "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "consideration": "ramsar",
            "paint-options": {
              "colour": "#7fcdff"
            },
            "entity-maximum": 619999,
            "entity-minimum": 612000,
            "attribution-text": "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2025.",
            "github-discussion": 41,
            "replacement-dataset": ""
          },
          "designated.nationalPark": {
            "name": "National park",
            "text": "The administrative boundaries of [national park authorities](/dataset/national-park-authority) in England as provided by the ONS for the purposes of producing statistics.",
            "phase": "beta",
            "realm": "dataset",
            "plural": "National parks",
            "prefix": "statistical-geography",
            "themes": [
              "heritage"
            ],
            "dataset": "national-park",
            "licence": "ogl3",
            "version": "1.0",
            "end-date": "",
            "entities": "",
            "typology": "geography",
            "wikidata": "Q60256727",
            "wikipedia": "National_park",
            "collection": "national-park",
            "entry-date": "",
            "start-date": "",
            "attribution": "ons-boundary",
            "description": "",
            "entity-count": {
              "count": 10,
              "dataset": "national-park"
            },
            "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "consideration": "national-parks-and-the-broads",
            "paint-options": {
              "colour": "#3DA52C"
            },
            "entity-maximum": 520999,
            "entity-minimum": 520000,
            "attribution-text": "Source: Office for National Statistics licensed under the Open Government Licence v.3.0\nContains OS data © Crown copyright and database right 2025",
            "github-discussion": "",
            "replacement-dataset": ""
          },
          "archaeologicalPriorityArea": {
            "name": "Archaeological priority area",
            "text": "The Greater London Archaeological Priority Areas (APAs) are areas in London that have significant archaeological interest or potential for new discoveries\n\nThe APAs are based on evidence in the Greater London Historic Environment Record (GLHER)\nThey were created in the 1970s and 1980s by boroughs and local museums\nThey are being updated using new evidence and standards\nThe new system assigns all land to one of four tiers based on archaeological risk",
            "phase": "live",
            "realm": "dataset",
            "plural": "Archaeological priority areas",
            "prefix": "",
            "themes": [
              "environment",
              "heritage"
            ],
            "dataset": "archaeological-priority-area",
            "licence": "ogl3",
            "version": "2.0",
            "end-date": "",
            "entities": "",
            "typology": "geography",
            "wikidata": "",
            "wikipedia": "",
            "collection": "archaeological-priority-area",
            "entry-date": "2025-02-04",
            "start-date": "",
            "attribution": "historic-england",
            "description": "Areas of Greater London where there is significant known archaeological interest or potential for new discoveries",
            "entity-count": {
              "count": 738,
              "dataset": "archaeological-priority-area"
            },
            "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "consideration": "greater-london-archaeological-priority-areas",
            "paint-options": {
              "colour": "#b54405",
              "opacity": 0.35
            },
            "entity-maximum": 59999,
            "entity-minimum": 40000,
            "attribution-text": "© Historic England 2025. Contains Ordnance Survey data © Crown copyright and database right 2025.\nThe Historic England GIS Data contained in this material was obtained on [date].\nThe most publicly available up to date Historic England GIS Data can be obtained from [HistoricEngland.org.uk](https://historicengland.org.uk).",
            "github-discussion": 89,
            "replacement-dataset": ""
          },
          "designated.conservationArea": {
            "name": "Conservation area",
            "text": "This dataset is primarily intended to be used for informing development decisions.\n\nThis dataset is incomplete, and contains some authoritative data provided by local authorities, \nas well as conservation area boundaries from Historic England, and other secondary sources found on\n[data.gov.uk](https://www.data.gov.uk/search?q=conservation+area). \nThe data currently contains a number of duplicate areas we are working to remove.",
            "phase": "beta",
            "realm": "dataset",
            "plural": "Conservation areas",
            "prefix": "",
            "themes": [
              "heritage"
            ],
            "dataset": "conservation-area",
            "licence": "ogl3",
            "version": "3.0",
            "end-date": "",
            "entities": "",
            "typology": "geography",
            "wikidata": "Q5162904",
            "wikipedia": "Conservation_area_(United_Kingdom)",
            "collection": "conservation-area",
            "entry-date": "",
            "start-date": "",
            "attribution": "historic-england",
            "description": "An area of special architectural or historic interest, the character or appearance of which it is desirable to preserve or enhance",
            "entity-count": {
              "count": 11645,
              "dataset": "conservation-area"
            },
            "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "consideration": "conservation-areas",
            "paint-options": {
              "colour": "#78AA00"
            },
            "entity-maximum": 44999999,
            "entity-minimum": 44000000,
            "attribution-text": "© Historic England 2025. Contains Ordnance Survey data © Crown copyright and database right 2025.\nThe Historic England GIS Data contained in this material was obtained on [date].\nThe most publicly available up to date Historic England GIS Data can be obtained from [HistoricEngland.org.uk](https://historicengland.org.uk).",
            "github-discussion": 33,
            "replacement-dataset": ""
          }
        },
        "constraints": {
          "tpo": {
            "fn": "tpo",
            "text": "is not in a Tree Preservation Order (TPO) zone",
            "value": false,
            "category": "Trees"
          },
          "flood": {
            "fn": "flood",
            "text": "is not in a Flood Risk Zone",
            "value": false,
            "category": "Flooding"
          },
          "listed": {
            "fn": "listed",
            "text": "is not, or is not within, a Listed Building",
            "value": false,
            "category": "Heritage and conservation"
          },
          "monument": {
            "fn": "monument",
            "text": "is not the site of a Scheduled Monument",
            "value": false,
            "category": "Heritage and conservation"
          },
          "greenBelt": {
            "fn": "greenBelt",
            "text": "is not in a Green Belt",
            "value": false,
            "category": "General policy"
          },
          "designated": {
            "value": false
          },
          "nature.SAC": {
            "fn": "nature.SAC",
            "text": "is not in a Special Area of Conservation (SAC)",
            "value": false,
            "category": "Ecology"
          },
          "nature.SPA": {
            "fn": "nature.SPA",
            "text": "is not in a Special Protection Area (SPA)",
            "value": false,
            "category": "Ecology"
          },
          "articleFour": {
            "fn": "articleFour",
            "text": "is not in an Article 4 direction area",
            "value": false,
            "category": "General policy"
          },
          "battlefield": {
            "fn": "battlefield",
            "text": "is not on a historic battlefield",
            "value": false,
            "category": "Heritage and conservation"
          },
          "nature.ASNW": {
            "fn": "nature.ASNW",
            "text": "is not in an Ancient Semi-Natural Woodland (ASNW)",
            "value": false,
            "category": "Ecology"
          },
          "nature.SSSI": {
            "fn": "nature.SSSI",
            "text": "is not a Site of Special Scientific Interest (SSSI)",
            "value": false,
            "category": "Ecology"
          },
          "brownfieldSite": {
            "fn": "brownfieldSite",
            "text": "is not on Brownfield land",
            "value": false,
            "category": "General policy"
          },
          "designated.WHS": {
            "fn": "designated.WHS",
            "text": "is not an UNESCO World Heritage Site",
            "value": false,
            "category": "Heritage and conservation"
          },
          "registeredPark": {
            "fn": "registeredPark",
            "text": "is not in a Registered Park and Garden",
            "value": false,
            "category": "Heritage and conservation"
          },
          "designated.AONB": {
            "fn": "designated.AONB",
            "text": "is not in an Area of Outstanding Natural Beauty",
            "value": false,
            "category": "Heritage and conservation"
          },
          "road.classified": {
            "fn": "road.classified",
            "text": "is not on a Classified Road",
            "value": false,
            "category": "General policy"
          },
          "nature.ramsarSite": {
            "fn": "nature.ramsarSite",
            "text": "is not in a Ramsar site",
            "value": false,
            "category": "Ecology"
          },
          "designated.nationalPark": {
            "fn": "designated.nationalPark",
            "text": "is not in a National Park",
            "value": false,
            "category": "Heritage and conservation"
          },
          "articleFour.newcastle.caz": {
            "fn": "articleFour.caz",
            "text": "is not in the Central Activities Zone",
            "value": false,
            "category": "General policy"
          },
          "archaeologicalPriorityArea": {
            "fn": "archaeologicalPriorityArea",
            "text": "is not an Archaeological Priority Area",
            "value": false,
            "category": "General policy"
          },
          "designated.conservationArea": {
            "fn": "designated.conservationArea",
            "text": "is not in a Conservation Area",
            "value": false,
            "category": "Heritage and conservation"
          },
          "designated.nationalPark.broads": {
            "fn": "designated.nationalPark.broads",
            "value": false
          }
        },
        "planxRequest": "https://api.editor.planx.dev/gis/newcastle?geom=MULTIPOLYGON+%28%28%28-1.691994+54.98212%2C+-1.69184+54.981897%2C+-1.69171+54.981936%2C+-1.6919+54.982146%2C+-1.691994+54.98212%29%29%29&vals=archaeologicalPriorityArea%2CarticleFour%2CarticleFour.caz%2Cbattlefield%2CbrownfieldSite%2Cdesignated.AONB%2Cdesignated.conservationArea%2CgreenBelt%2Cdesignated.nationalPark%2Cdesignated.nationalPark.broads%2Cdesignated.WHS%2Cflood%2Clisted%2Cmonument%2Cnature.ASNW%2Cnature.ramsarSite%2Cnature.SAC%2Cnature.SPA%2Cnature.SSSI%2CregisteredPark%2Croad.classified%2Ctpo&analytics=false&sessionId=7ae499ac-4f0e-482c-bb1e-f8a64eacca2e",
        "sourceRequest": "https://www.planning.data.gov.uk/entity.json?entries=current&geometry=MULTIPOLYGON+%28%28%28-1.691994+54.98212%2C+-1.69184+54.981897%2C+-1.69171+54.981936%2C+-1.6919+54.982146%2C+-1.691994+54.98212%29%29%29&geometry_relation=intersects&exclude_field=geometry%2Cpoint&limit=100&dataset=archaeological-priority-area&dataset=article-4-direction-area&dataset=central-activities-zone&dataset=battlefield&dataset=brownfield-land&dataset=brownfield-site&dataset=area-of-outstanding-natural-beauty&dataset=conservation-area&dataset=green-belt&dataset=national-park&dataset=world-heritage-site&dataset=world-heritage-site-buffer-zone&dataset=flood-risk-zone&dataset=listed-building&dataset=listed-building-outline&dataset=scheduled-monument&dataset=ancient-woodland&dataset=ramsar&dataset=special-area-of-conservation&dataset=special-protection-area&dataset=site-of-special-scientific-interest&dataset=park-and-garden&dataset=tree&dataset=tree-preservation-order&dataset=tree-preservation-zone"
      },
      {
        "metadata": {
          "road.classified": {
            "name": "Classified road",
            "text": "This will effect your project if you are looking to add a dropped kerb. It may also impact some agricultural or forestry projects within 25 metres of a classified road.",
            "plural": "Classified roads"
          }
        },
        "constraints": {
          "road.classified": {
            "fn": "road.classified",
            "text": "is not on a Classified Road",
            "value": false,
            "category": "General policy"
          }
        },
        "planxRequest": "https://api.editor.planx.dev/roads?usrn=8203356",
        "sourceRequest": "https://api.os.uk/features/v1/wfs?service=WFS&request=GetFeature&version=2.0.0&typeNames=Highways_RoadLink&outputFormat=GEOJSON&srsName=urn%3Aogc%3Adef%3Acrs%3AEPSG%3A%3A4326&count=1&filter=%0A++++%3Cogc%3AFilter%3E%0A++++++%3Cogc%3APropertyIsLike+wildCard%3D%22%25%22+singleChar%3D%22%23%22+escapeChar%3D%22%21%22%3E%0A++++++++%3Cogc%3APropertyName%3EFormsPartOf%3C%2Fogc%3APropertyName%3E%0A++++++++%3Cogc%3ALiteral%3E%25Street%23usrn8203356%25%3C%2Fogc%3ALiteral%3E%0A++++++%3C%2Fogc%3APropertyIsLike%3E%0A++++%3C%2Fogc%3AFilter%3E%0A++&"
      }
    ],
    "multipleFees": [
      "false"
    ],
    "newMaterials": [
      "true"
    ],
    "newFloorspace": [
      "true"
    ],
    "otherDocument": [
      {
        "url": "https://api.editor.planx.dev/file/private/z2qbfn68/Wharmlands%20Spec%20%281%29.pdf",
        "rule": {
          "condition": "NotRequired"
        },
        "filename": "Wharmlands Spec (1).pdf",
        "cachedSlot": {
          "id": "mti-8uoj9ojATxn1GjROg",
          "url": "https://api.editor.planx.dev/file/private/z2qbfn68/Wharmlands%20Spec%20%281%29.pdf",
          "file": {
            "name": "Wharmlands Spec (1).pdf",
            "path": "./Wharmlands Spec (1).pdf",
            "size": 264307,
            "type": "application/pdf"
          },
          "status": "success",
          "progress": 1
        }
      },
      {
        "url": "https://api.editor.planx.dev/file/private/sptzdk3k/LocationPlan.pdf",
        "rule": {
          "condition": "NotRequired"
        },
        "filename": "LocationPlan.pdf",
        "cachedSlot": {
          "id": "WokIKS8KqSLiwtfcBiwLF",
          "url": "https://api.editor.planx.dev/file/private/sptzdk3k/LocationPlan.pdf",
          "file": {
            "name": "LocationPlan.pdf",
            "path": "./LocationPlan.pdf",
            "size": 565369,
            "type": "application/pdf"
          },
          "status": "success",
          "progress": 1
        }
      }
    ],
    "property.type": [
      "residential.house.terrace"
    ],
    "property.ward": [
      "Benwell & Scotswood"
    ],
    "proposal.site": {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [-1.691994, 54.98212],
              [-1.69184, 54.981897],
              [-1.69171, 54.981936],
              [-1.6919, 54.982146],
              [-1.691994, 54.98212]
            ]
          ]
        ]
      },
      "properties": {
        "name": "",
        "entity": 12000777693,
        "prefix": "title-boundary",
        "dataset": "title-boundary",
        "end-date": "",
        "typology": "geography",
        "reference": "25454120",
        "entry-date": "2024-05-06",
        "start-date": "2008-10-03",
        "dataset-name": "",
        "organisation-entity": "13"
      }
    },
    "applicant.type": [
      "individual"
    ],
    "_requestedFiles": {
      "optional": [
        "photographs.existing",
        "otherDrawing",
        "otherDocument",
        "visualisations"
      ],
      "required": [
        "sitePlan.proposed",
        "sitePlan.existing",
        "elevations.existing",
        "elevations.proposed",
        "floorPlan.existing",
        "floorPlan.proposed"
      ],
      "recommended": []
    },
    "applicant.email": "example@example.com",
    "bopsSendEventId": "5cb4e447-a052-42e2-9561-2e94540dc2e2",
    "property.region": [
      "North East"
    ],
    "application.type": [
      "pp.full.householder"
    ],
    "emailSendEventId": "6e5fc66c-e2af-4f4f-96cd-88057dd8af92",
    "proposal.started": [
      "false"
    ],
    "siteAreaProvided": [
      "true"
    ],
    "property.boundary": {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [-1.691994, 54.98212],
              [-1.69184, 54.981897],
              [-1.69171, 54.981936],
              [-1.6919, 54.982146],
              [-1.691994, 54.98212]
            ]
          ]
        ]
      },
      "properties": {
        "name": "",
        "entity": 12000777693,
        "prefix": "title-boundary",
        "dataset": "title-boundary",
        "end-date": "",
        "typology": "geography",
        "reference": "25454120",
        "entry-date": "2024-05-06",
        "start-date": "2008-10-03",
        "dataset-name": "",
        "organisation-entity": "13"
      }
    },
    "sitePlan.existing": [
      {
        "url": "https://api.editor.planx.dev/file/private/gmd7vtaz/13-Wharmland-Road-amended-plans.pdf",
        "rule": {
          "fn": "sitePlan.existing.rule",
          "val": "required",
          "operator": "Equals",
          "condition": "RequiredIf"
        },
        "filename": "13-Wharmland-Road-amended-plans.pdf",
        "cachedSlot": {
          "id": "P3t5_vSYlMdks4K7C7FGi",
          "url": "https://api.editor.planx.dev/file/private/gmd7vtaz/13-Wharmland-Road-amended-plans.pdf",
          "file": {
            "name": "13-Wharmland-Road-amended-plans.pdf",
            "path": "./13-Wharmland-Road-amended-plans.pdf",
            "size": 3243635,
            "type": "application/pdf"
          },
          "status": "success",
          "progress": 1
        }
      }
    ],
    "sitePlan.proposed": [
      {
        "url": "https://api.editor.planx.dev/file/private/gmd7vtaz/13-Wharmland-Road-amended-plans.pdf",
        "rule": {
          "fn": "sitePlan.proposed.rule",
          "val": "required",
          "operator": "Equals",
          "condition": "RequiredIf"
        },
        "filename": "13-Wharmland-Road-amended-plans.pdf",
        "cachedSlot": {
          "id": "P3t5_vSYlMdks4K7C7FGi",
          "url": "https://api.editor.planx.dev/file/private/gmd7vtaz/13-Wharmland-Road-amended-plans.pdf",
          "file": {
            "name": "13-Wharmland-Road-amended-plans.pdf",
            "path": "./13-Wharmland-Road-amended-plans.pdf",
            "size": 3243635,
            "type": "application/pdf"
          },
          "status": "success",
          "progress": 1
        }
      }
    ],
    "_contact.applicant": {
      "applicant": {
        "email": "example@example.com",
        "phone": "+11111111111",
        "title": "",
        "lastName": "Examplefirst",
        "firstName": "Examplelast",
        "organisation": ""
      }
    },
    "applicant.resident": [
      "true"
    ],
    "floorPlan.existing": [
      {
        "url": "https://api.editor.planx.dev/file/private/gmd7vtaz/13-Wharmland-Road-amended-plans.pdf",
        "rule": {
          "fn": "floorPlan.existing.rule",
          "val": "required",
          "operator": "Equals",
          "condition": "RequiredIf"
        },
        "filename": "13-Wharmland-Road-amended-plans.pdf",
        "cachedSlot": {
          "id": "P3t5_vSYlMdks4K7C7FGi",
          "url": "https://api.editor.planx.dev/file/private/gmd7vtaz/13-Wharmland-Road-amended-plans.pdf",
          "file": {
            "name": "13-Wharmland-Road-amended-plans.pdf",
            "path": "./13-Wharmland-Road-amended-plans.pdf",
            "size": 3243635,
            "type": "application/pdf"
          },
          "status": "success",
          "progress": 1
        }
      }
    ],
    "floorPlan.proposed": [
      {
        "url": "https://api.editor.planx.dev/file/private/gmd7vtaz/13-Wharmland-Road-amended-plans.pdf",
        "rule": {
          "fn": "floorPlan.proposed.rule",
          "val": "required",
          "operator": "Equals",
          "condition": "RequiredIf"
        },
        "filename": "13-Wharmland-Road-amended-plans.pdf",
        "cachedSlot": {
          "id": "P3t5_vSYlMdks4K7C7FGi",
          "url": "https://api.editor.planx.dev/file/private/gmd7vtaz/13-Wharmland-Road-amended-plans.pdf",
          "file": {
            "name": "13-Wharmland-Road-amended-plans.pdf",
            "path": "./13-Wharmland-Road-amended-plans.pdf",
            "size": 3243635,
            "type": "application/pdf"
          },
          "status": "success",
          "progress": 1
        }
      }
    ],
    "proposal.materials": [
      {
        "type": "window",
        "existing": "UPVC",
        "proposed": "UPVC"
      },
      {
        "type": "wall",
        "existing": "Brick",
        "proposed": "Brick"
      },
      {
        "type": "roof",
        "existing": "Slate Tiles",
        "proposed": "Slate Tiles"
      }
    ],
    "proposal.site.area": 211.7,
    "applicant.name.last": "Examplelast",
    "drawBoundary.action": "Accepted the title boundary",
    "elevations.existing": [
      {
        "url": "https://api.editor.planx.dev/file/private/gmd7vtaz/13-Wharmland-Road-amended-plans.pdf",
        "rule": {
          "fn": "elevations.existing.rule",
          "val": "required",
          "operator": "Equals",
          "condition": "RequiredIf"
        },
        "filename": "13-Wharmland-Road-amended-plans.pdf",
        "cachedSlot": {
          "id": "P3t5_vSYlMdks4K7C7FGi",
          "url": "https://api.editor.planx.dev/file/private/gmd7vtaz/13-Wharmland-Road-amended-plans.pdf",
          "file": {
            "name": "13-Wharmland-Road-amended-plans.pdf",
            "path": "./13-Wharmland-Road-amended-plans.pdf",
            "size": 3243635,
            "type": "application/pdf"
          },
          "status": "success",
          "progress": 1
        }
      }
    ],
    "elevations.proposed": [
      {
        "url": "https://api.editor.planx.dev/file/private/gmd7vtaz/13-Wharmland-Road-amended-plans.pdf",
        "rule": {
          "fn": "elevations.proposed.rule",
          "val": "required",
          "operator": "Equals",
          "condition": "RequiredIf"
        },
        "filename": "13-Wharmland-Road-amended-plans.pdf",
        "cachedSlot": {
          "id": "P3t5_vSYlMdks4K7C7FGi",
          "url": "https://api.editor.planx.dev/file/private/gmd7vtaz/13-Wharmland-Road-amended-plans.pdf",
          "file": {
            "name": "13-Wharmland-Road-amended-plans.pdf",
            "path": "./13-Wharmland-Road-amended-plans.pdf",
            "size": 3243635,
            "type": "application/pdf"
          },
          "status": "success",
          "progress": 1
        }
      }
    ],
    "findProperty.action": "Selected an existing address",
    "applicant.agent.form": [
      "No"
    ],
    "applicant.name.first": "Mailili",
    "proposal.description": "Erection of first floor extension above garage to side and single storey full width extension to rear",
    "proposal.extend.area": 5,
    "proposal.projectType": [
      "alter",
      "extend"
    ],
    "application.CIL.result": [
      "notLiable"
    ],
    "property.boundary.area": 211.7,
    "property.heritageAsset": [
      "no"
    ],
    "property.trees.present": [
      "false"
    ],
    "proposal.floorArea.new": [
      "lessThan100"
    ],
    "proposal.site.buffered": {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-1.69281061582569, 54.9830921409892],
            [-1.69311189737532, 54.9829878389928],
            [-1.69337404579007, 54.9828531588821],
            [-1.69358788477855, 54.9826928152479],
            [-1.69374592942466, 54.9825124209931],
            [-1.69384264815242, 54.9823182908225],
            [-1.69387465627106, 54.9821172201729],
            [-1.69384083433685, 54.9819162473265],
            [-1.69374236720441, 54.9817224070378],
            [-1.69358835901801, 54.9814994092463],
            [-1.69342993354633, 54.9813206090232],
            [-1.69321658354646, 54.981161721242],
            [-1.692955679789, 54.9810282346763],
            [-1.69265623551342, 54.9809247605655],
            [-1.69232859506589, 54.9808548733498],
            [-1.69198407659829, 54.9808209872184],
            [-1.69163458116346, 54.9808242727317],
            [-1.69129218169757, 54.9808646163952],
            [-1.69096870607189, 54.9809406245792],
            [-1.69083870832235, 54.9809796236501],
            [-1.69053083066256, 54.9810952999264],
            [-1.69026810157533, 54.981243166853],
            [-1.6900605811538, 54.9814175628026],
            [-1.68991621593355, 54.981611810308],
            [-1.68984053455154, 54.9818184717022],
            [-1.68983643593274, 54.9820296338778],
            [-1.68990407813289, 54.9822372112668],
            [-1.69004087211708, 54.982433255443],
            [-1.69023086573918, 54.9826432580442],
            [-1.69042763699998, 54.9828174271282],
            [-1.69067887869513, 54.9829667577413],
            [-1.69097529657371, 54.9830857253299],
            [-1.69130592476234, 54.9831699285908],
            [-1.69165853148355, 54.983216252332],
            [-1.69202007165538, 54.9832229827477],
            [-1.69237716961357, 54.9831898708371],
            [-1.69271661407828, 54.9831181416188],
            [-1.69281061582569, 54.9830921409892]
          ]
        ]
      },
      "properties": {
        "name": "",
        "entity": 12000777693,
        "prefix": "title-boundary",
        "dataset": "title-boundary",
        "end-date": "",
        "typology": "geography",
        "reference": "25454120",
        "entry-date": "2024-05-06",
        "start-date": "2008-10-03",
        "dataset-name": "",
        "organisation-entity": "13"
      }
    },
    "proposal.site.hectares": 0.02117,
    "proposal.treeWorksOnly": [
      "false"
    ],
    "sitePlan.existing.rule": [
      "required"
    ],
    "sitePlan.proposed.rule": [
      "required"
    ],
    "applicant.phone.primary": "+1111111111",
    "applicant.researchOptIn": [
      "false"
    ],
    "application.fee.payable": 528,
    "floorPlan.existing.rule": [
      "required"
    ],
    "floorPlan.proposed.rule": [
      "required"
    ],
    "application.preAppAdvice": [
      "false"
    ],
    "elevations.existing.rule": [
      "required"
    ],
    "elevations.proposed.rule": [
      "required"
    ],
    "floodRiskAssessment.rule": [
      "unknown"
    ],
    "send.analytics.userAgent": {
      "os": {
        "name": "Windows",
        "version": "NT 10.0",
        "versionName": "10"
      },
      "engine": {
        "name": "Blink"
      },
      "browser": {
        "name": "Microsoft Edge",
        "version": "141.0.0.0"
      },
      "platform": {
        "type": "desktop"
      }
    },
    "applicant.sameAddress.form": [
      "Yes"
    ],
    "applicant.siteContact.role": [
      "applicant"
    ],
    "application.fee.calculated": 528,
    "planningConstraints.action": "Accepted all planning constraints",
    "propertyInformation.action": "Accepted the property type",
    "proposal.visibility.public": [
      "false"
    ],
    "application.fee.payable.VAT": 0,
    "proposal.materials.one.type": "window",
    "proposal.materials.two.type": "wall",
    "applicant.ownership.interest": [
      "owner.sole"
    ],
    "application.CIL.newDwellings": [
      "false"
    ],
    "application.fee.category.six": [
      "true"
    ],
    "eligibilityCheck.householder": [
      "true"
    ],
    "proposal.changeNumberOfHomes": [
      "noChange"
    ],
    "application.preAppAdvice.form": [
      "No"
    ],
    "proposal.materials.three.type": "roof",
    "application.CIL.s73Application": [
      "false"
    ],
    "proposal.floorArea.new.100Plus": [
      "false"
    ],
    "applicant.ownership.certificate": [
      "a"
    ],
    "property.boundary.area.hectares": 0.02117,
    "property.localAuthorityDistrict": [
      "Newcastle upon Tyne"
    ],
    "property.localPlanningAuthority": [
      "Newcastle upon Tyne LPA"
    ],
    "proposal.materials.one.existing": "UPVC",
    "proposal.materials.one.proposed": "UPVC",
    "proposal.materials.two.existing": "Brick",
    "proposal.materials.two.proposed": "Brick",
    "application.declaration.accurate": [
      "true"
    ],
    "application.fee.reduction.sports": [
      "false"
    ],
    "proposal.materials.three.existing": "Slate Tiles",
    "proposal.materials.three.proposed": "Slate Tiles",
    "application.declaration.connection": [
      "none"
    ],
    "proposal.materials.total.listItems": 3,
    "proposal.siteArea.oneHectareOrMore": [
      "false"
    ],
    "application.fee.category.six.number": 1,
    "proposal.residentialAnnexeExtension": [
      "false"
    ],
    "application.CIL.declaration.accurate": [
      "true"
    ],
    "application.CIL.floorAreaHundredPlus": [
      "false"
    ],
    "application.fee.exemption.demolition": [
      "false"
    ],
    "application.fee.exemption.disability": [
      "false"
    ],
    "application.declaration.accurate.form": [
      "Yes"
    ],
    "application.fee.reduction.alternative": [
      "false"
    ],
    "property.ownership.agriculturalTenants": [
      "false"
    ],
    "application.declaration.connection.form": [
      "No connections"
    ],
    "application.fee.reduction.parishCouncil": [
      "false"
    ],
    "proposal.changeNonResidentialFloorspace": [
      "false"
    ],
    "application.CIL.existingPermissionPrecedingCIL": [
      "false"
    ],
    "applicant.ownership.certificate.declaration.accurate": [
      "true"
    ]
  },
  "breadcrumbs": {
    "0anwI4KNHH": {
      "auto": false,
      "answers": [
        "5kOCCy0bLi"
      ]
    },
    "0nQlvtDRtH": {
      "auto": true,
      "answers": [
        "24MwVowLTu"
      ]
    },
    "10MHrBB58o": {
      "auto": true,
      "data": {
        "proposal.siteArea.oneHectareOrMore": [
          "false"
        ]
      }
    },
    "1VN5EwcmWM": {
      "auto": true,
      "data": {
        "proposal.changeNonResidentialFloorspace": [
          "false"
        ]
      }
    },
    "1aEnDyL8VL": {
      "auto": true
    },
    "1g3j0cSDDQ": {
      "auto": true,
      "answers": [
        "IwE1KYAexf"
      ]
    },
    "1jNok6yr6s": {
      "auto": true,
      "data": {
        "sitePlan.proposed.rule": [
          "required"
        ]
      }
    },
    "1kxriJ4hdY": {
      "auto": true,
      "data": {
        "application.fee.category.six.number": 1
      }
    },
    "1woqjPa8F8": {
      "auto": true
    },
    "2BTvCEtHSg": {
      "auto": false,
      "answers": [
        "w0zJ4Jkv6E"
      ]
    },
    "2CdQmWOFpi": {
      "auto": true,
      "answers": [
        "SMx1vsSmnn"
      ]
    },
    "2fPL5Pa8F8": {
      "auto": true,
      "answers": [
        "ywnW8Pa8F8"
      ]
    },
    "2u5dQPa8F8": {
      "auto": true
    },
    "3DgodrO3OB": {
      "auto": false,
      "answers": [
        "StQv6NRfAB"
      ]
    },
    "3jtleKMI7B": {
      "auto": true,
      "data": {
        "property.type.noValue": [null]
      }
    },
    "3sIYdXs79N": {
      "auto": true,
      "data": {
        "application.fee.calculated": 528
      }
    },
    "6FL5k5zovo": {
      "auto": true
    },
    "6OZQkurQKW": {
      "auto": false,
      "answers": [
        "Uz3yrzFxgL"
      ]
    },
    "7CLclW6T8Y": {
      "auto": true,
      "answers": [
        "taazE7bqLL"
      ]
    },
    "7IOLSySJVJ": {
      "auto": true,
      "data": {
        "proposal.floorArea.new": [
          "lessThan100"
        ]
      }
    },
    "7LRoeT8TYj": {
      "auto": false,
      "answers": [
        "0JVNILGWf4"
      ]
    },
    "7Ov1cGcbY7": {
      "auto": true,
      "answers": [
        "Ykg4uOyZus"
      ]
    },
    "7ULJJy4Sw8": {
      "auto": false,
      "answers": [
        "fUHwDy5sl2"
      ]
    },
    "7Zhc1AACVv": {
      "auto": true,
      "data": {
        "application.type": [
          "pp.full.householder"
        ]
      }
    },
    "7uJKQPa8F8": {
      "auto": true,
      "data": {
        "application.fee.payable": 528
      }
    },
    "8UBvIufLLb": {
      "auto": true,
      "data": {
        "application.fee.reduction.sports": [
          "false"
        ]
      }
    },
    "8kaCyhvpH7": {
      "auto": false,
      "answers": [
        "PsRnXEO2x7"
      ]
    },
    "8koSnGwYvy": {
      "auto": false
    },
    "8wZyQOS3J4": {
      "auto": false,
      "answers": [
        "N6ES7GjaIA"
      ]
    },
    "9JX00iAQqj": {
      "auto": false
    },
    "9OMGTgLZsn": {
      "auto": true,
      "answers": [
        "CHhc4QbuMO"
      ]
    },
    "9PFweqiXLP": {
      "auto": true
    },
    "9izOwtkCc3": {
      "auto": false,
      "data": {
        "_requestedFiles": {
          "optional": [],
          "required": [],
          "recommended": []
        },
        "proposal.materials": [
          {
            "type": "window",
            "existing": "UPVC",
            "proposed": "UPVC"
          },
          {
            "type": "wall",
            "existing": "Brick",
            "proposed": "Brick"
          },
          {
            "type": "roof",
            "existing": "Slate Tiles",
            "proposed": "Slate Tiles"
          }
        ],
        "proposal.materials.one.type": "window",
        "proposal.materials.two.type": "wall",
        "proposal.materials.three.type": "roof",
        "proposal.materials.one.existing": "UPVC",
        "proposal.materials.one.proposed": "UPVC",
        "proposal.materials.two.existing": "Brick",
        "proposal.materials.two.proposed": "Brick",
        "proposal.materials.three.existing": "Slate Tiles",
        "proposal.materials.three.proposed": "Slate Tiles",
        "proposal.materials.total.listItems": 3
      }
    },
    "A0EETUnZ4X": {
      "auto": true,
      "answers": [
        "BpFaxuqgUB"
      ]
    },
    "A1tiG8eLfg": {
      "auto": true,
      "data": {
        "applicant.ownership.certificate": [
          "a"
        ]
      }
    },
    "APVNXwxLWJ": {
      "auto": true,
      "answers": [
        "vKlKlwxLWJ"
      ]
    },
    "Aapi33SQp6": {
      "auto": true,
      "answers": [
        "JLLJU40ga3"
      ]
    },
    "BDulPzfy0y": {
      "auto": true,
      "answers": [
        "pUpoxdQoL7"
      ]
    },
    "BdXeZDGaRO": {
      "auto": true
    },
    "BjszvIBbCe": {
      "auto": true
    },
    "Bndv1Pa8F8": {
      "auto": true
    },
    "BzAiR8XGj6": {
      "auto": false
    },
    "BzxBRizYza": {
      "auto": true,
      "answers": [
        "Hql1AzHfGq"
      ]
    },
    "CkIqZC5QqE": {
      "auto": true
    },
    "Csbl2rZnrQ": {
      "auto": true,
      "answers": [
        "Mdq6WjH0mu"
      ]
    },
    "DRDCupIVGF": {
      "auto": false,
      "answers": [
        "qJOuaBYmPV"
      ]
    },
    "DVELONhqdE": {
      "auto": false,
      "answers": [
        "CrmJZIRP1b"
      ]
    },
    "DaoRpK8IcU": {
      "auto": true,
      "answers": [
        "kH5OjMhpf7"
      ]
    },
    "E63e1zXlP8": {
      "auto": false,
      "answers": [
        "Ldu681Wb3o"
      ]
    },
    "E68NWOC826": {
      "auto": false,
      "data": {
        "bopsSendEventId": "5cb4e447-a052-42e2-9561-2e94540dc2e2",
        "emailSendEventId": "6e5fc66c-e2af-4f4f-96cd-88057dd8af92",
        "send.analytics.userAgent": {
          "os": {
            "name": "Windows",
            "version": "NT 10.0",
            "versionName": "10"
          },
          "engine": {
            "name": "Blink"
          },
          "browser": {
            "name": "Microsoft Edge",
            "version": "141.0.0.0"
          },
          "platform": {
            "type": "desktop"
          }
        }
      }
    },
    "EBrctXnUw0": {
      "auto": false,
      "answers": [
        "qVce6XGoEE"
      ]
    },
    "F3VeLYcZ5R": {
      "auto": true,
      "data": {
        "proposal.floorArea.new": [
          "lessThan100"
        ]
      }
    },
    "FUeCSgzTXn": {
      "auto": false
    },
    "Fg6uR2jfLV": {
      "auto": true,
      "answers": [
        "wKXbrP7yC3"
      ]
    },
    "FpXLKXdzW0": {
      "auto": true,
      "data": {
        "application.declaration.connection.form": [
          "No connections"
        ]
      }
    },
    "FrGLGYu91A": {
      "auto": true,
      "answers": [
        "VegP1eFdUY"
      ]
    },
    "GAzi3fxK9w": {
      "auto": true,
      "data": {
        "applicant.researchOptIn": [
          "false"
        ]
      }
    },
    "GPy5gPhULZ": {
      "auto": false,
      "answers": [
        "yZCebOEUnT"
      ]
    },
    "Gj20wDmb5z": {
      "auto": true,
      "data": {
        "application.fee.reduction.parishCouncil": [
          "false"
        ]
      }
    },
    "GldCNPwiJS": {
      "auto": true,
      "answers": [
        "g4PbqsRcOl"
      ]
    },
    "HPgngm6P4D": {
      "auto": false,
      "answers": [
        "H918QPmzvb"
      ]
    },
    "Ha9LQ35aA0": {
      "auto": true,
      "answers": [
        "EKfIJTrRU5"
      ]
    },
    "HhYzm4KNHH": {
      "auto": true,
      "answers": [
        "HICy54KNHH"
      ]
    },
    "Is47BIC1QI": {
      "auto": false,
      "answers": [
        "rhtZzvHYLN"
      ]
    },
    "Iy9jpb2ntr": {
      "auto": false
    },
    "JCgjR3djgo": {
      "auto": true,
      "data": {
        "proposal.residentialAnnexeExtension": [
          "false"
        ]
      }
    },
    "JLH4vAGZvv": {
      "auto": true,
      "answers": [
        "6zhciAGZvv",
        "6zhciAGZvv",
        "6zhciAGZvv"
      ]
    },
    "JU98xBB58o": {
      "auto": false,
      "answers": [
        "heTwiBB58o"
      ]
    },
    "JkyukIyZ5r": {
      "auto": true
    },
    "JnNYJBB58o": {
      "auto": true
    },
    "K3rhyPa8F8": {
      "auto": false,
      "answers": [
        "BFrOnPa8F8"
      ]
    },
    "KTAXBpnCYH": {
      "auto": true,
      "answers": [
        "TxOW7bBYgm"
      ]
    },
    "KgwCfTzGvl": {
      "auto": false
    },
    "L6ct9bQKMT": {
      "auto": true,
      "answers": [
        "iRK7jNIyrC"
      ]
    },
    "L7jClEPwU1": {
      "auto": true,
      "answers": [
        "6rNQLrYMxA"
      ]
    },
    "L7w2xgw3Db": {
      "auto": true
    },
    "LHXJHBB58o": {
      "auto": true,
      "answers": [
        "xHLbMBB58o"
      ]
    },
    "M2hMrYnaJO": {
      "auto": true,
      "answers": [
        "W2rUqMU6ua"
      ]
    },
    "MYYrTRkO2D": {
      "auto": false,
      "data": {
        "propertyInformation.action": "Accepted the property type"
      }
    },
    "Mil8JC1tFe": {
      "auto": true,
      "answers": [
        "2IIzeyrgQf"
      ]
    },
    "NDskDdtgKf": {
      "auto": true
    },
    "NJWtVNVjKP": {
      "auto": true,
      "answers": [
        "d7xv6xR05a"
      ]
    },
    "NMVsy54dRf": {
      "auto": false,
      "answers": [
        "zJa3DSzjf0"
      ]
    },
    "NMv6bveXnn": {
      "auto": true,
      "data": {
        "property.type": [
          "parent.street"
        ]
      }
    },
    "NOOsoNqwEz": {
      "auto": false,
      "answers": [
        "Qb0tIxIXOB"
      ]
    },
    "NQitoAgqyr": {
      "auto": true
    },
    "NyiTrPu5YP": {
      "auto": false
    },
    "O5NfimNPJ8": {
      "auto": true,
      "answers": [
        "q9gjaaAAnh"
      ]
    },
    "OaX0ysc0Aq": {
      "auto": true,
      "answers": [
        "7f27uKTLwO"
      ]
    },
    "P1MKXcylXr": {
      "auto": true,
      "data": {
        "application.CIL.newDwellings": [
          "false"
        ]
      }
    },
    "PdibnhWYLn": {
      "auto": true,
      "data": {
        "property.type": [
          "parent.property"
        ]
      }
    },
    "Q2axEoIVxF": {
      "auto": true,
      "data": {
        "application.fee.exemption.demolition": [
          "false"
        ]
      }
    },
    "QT8UOdb6GG": {
      "auto": true,
      "answers": [
        "OWWiRhbm6M"
      ]
    },
    "QpyTVHV0gZ": {
      "auto": true,
      "data": {
        "application.CIL.s73Application": [
          "false"
        ]
      }
    },
    "RHHM01SdDC": {
      "auto": true,
      "answers": [
        "tRSUGQKQOM"
      ]
    },
    "RLbpPn36il": {
      "auto": true,
      "data": {
        "floorPlan.proposed.rule": [
          "required"
        ]
      }
    },
    "RnEKNzq4Am": {
      "auto": true,
      "answers": [
        "Vj8MV8oymb"
      ]
    },
    "RnvWOlPB8N": {
      "auto": false
    },
    "S1e02Pa8F8": {
      "auto": true
    },
    "S6yd0x87iv": {
      "auto": true,
      "data": {
        "application.fee.payable": 528,
        "application.fee.calculated": 528,
        "application.fee.payable.VAT": 0
      }
    },
    "SJRiZ1gkrY": {
      "auto": true,
      "data": {
        "applicant.sameAddress.form": [
          "Yes"
        ]
      }
    },
    "SoLrKPa8F8": {
      "auto": true,
      "answers": [
        "QUedSPa8F8"
      ]
    },
    "T2QtM64BpR": {
      "auto": true,
      "data": {
        "applicant.agent.form": [
          "No"
        ]
      }
    },
    "UoQ2HEKgZE": {
      "auto": true,
      "data": {
        "proposal.floorArea.new.100Plus": [
          "false"
        ]
      }
    },
    "V6PJfv3iG6": {
      "auto": true
    },
    "VPdGI8Va7r": {
      "auto": true,
      "data": {
        "usedFOIYNPP": [
          "false"
        ]
      }
    },
    "ViOKPyGTVg": {
      "auto": true
    },
    "VmutpdgQR8": {
      "auto": true
    },
    "WYSQcqJELE": {
      "auto": true,
      "data": {
        "application.CIL.result": [
          "notLiable"
        ]
      }
    },
    "WYdhkwcRi1": {
      "auto": true,
      "answers": [
        "La3Mxu5aC9"
      ]
    },
    "Wts2yIPVoN": {
      "auto": false,
      "data": {
        "proposal.extend.area": 5
      }
    },
    "Wx1wJNBBTt": {
      "auto": true,
      "answers": [
        "SHve8sok2z"
      ]
    },
    "YXFs9z2vJa": {
      "auto": true,
      "data": {
        "newFloorspace": [
          "true"
        ]
      }
    },
    "YpjlW4XczF": {
      "auto": true,
      "data": {
        "eligibilityCheck.householder": [
          "true"
        ]
      }
    },
    "ZDKhxk6xbG": {
      "auto": true,
      "answers": [
        "VIYy62J1CN"
      ]
    },
    "aci0YnySmC": {
      "auto": true,
      "data": {
        "application.fee.reduction.alternative": [
          "false"
        ]
      }
    },
    "b63XejfsBr": {
      "auto": false
    },
    "bWsWD6wJLM": {
      "auto": true,
      "answers": [
        "ZgjTqeFnKe"
      ]
    },
    "bfdTRHa0Hk": {
      "auto": true,
      "data": {
        "newMaterials": [
          "true"
        ]
      }
    },
    "bvQ1DVdGZn": {
      "auto": true
    },
    "c0lbdMLG5V": {
      "auto": true,
      "data": {
        "multipleFees": [
          "false"
        ]
      }
    },
    "c8ns239Tww": {
      "auto": true
    },
    "cZnb2AGZvv": {
      "auto": true
    },
    "cha9NAGZvv": {
      "auto": true,
      "answers": [
        "kdQOjAGZvv",
        "kdQOjAGZvv"
      ]
    },
    "dSy4sALWQK": {
      "auto": true,
      "answers": [
        "nYYzromrIZ"
      ]
    },
    "dVZovwxLWJ": {
      "auto": true,
      "data": {
        "siteAreaProvided": [
          "true"
        ]
      }
    },
    "dknMGPa8F8": {
      "auto": true,
      "answers": [
        "hz5h3Pa8F8"
      ]
    },
    "dmLxAgaCKV": {
      "auto": true,
      "data": {
        "floodRiskAssessment.rule": [
          "unknown"
        ]
      }
    },
    "eJg0x3Wo92": {
      "auto": false,
      "data": {
        "otherDocument": [
          {
            "url": "https://api.editor.planx.dev/file/private/z2qbfn68/Wharmlands%20Spec%20%281%29.pdf",
            "rule": {
              "condition": "NotRequired"
            },
            "filename": "Wharmlands Spec (1).pdf",
            "cachedSlot": {
              "id": "mti-8uoj9ojATxn1GjROg",
              "url": "https://api.editor.planx.dev/file/private/z2qbfn68/Wharmlands%20Spec%20%281%29.pdf",
              "file": {
                "name": "Wharmlands Spec (1).pdf",
                "path": "./Wharmlands Spec (1).pdf",
                "size": 264307,
                "type": "application/pdf"
              },
              "status": "success",
              "progress": 1
            }
          },
          {
            "url": "https://api.editor.planx.dev/file/private/sptzdk3k/LocationPlan.pdf",
            "rule": {
              "condition": "NotRequired"
            },
            "filename": "LocationPlan.pdf",
            "cachedSlot": {
              "id": "WokIKS8KqSLiwtfcBiwLF",
              "url": "https://api.editor.planx.dev/file/private/sptzdk3k/LocationPlan.pdf",
              "file": {
                "name": "LocationPlan.pdf",
                "path": "./LocationPlan.pdf",
                "size": 565369,
                "type": "application/pdf"
              },
              "status": "success",
              "progress": 1
            }
          }
        ],
        "_requestedFiles": {
          "optional": [
            "photographs.existing",
            "otherDrawing",
            "otherDocument",
            "visualisations"
          ],
          "required": [
            "sitePlan.proposed",
            "sitePlan.existing",
            "elevations.existing",
            "elevations.proposed",
            "floorPlan.existing",
            "floorPlan.proposed"
          ],
          "recommended": []
        },
        "sitePlan.existing": [
          {
            "url": "https://api.editor.planx.dev/file/private/gmd7vtaz/13-Wharmland-Road-amended-plans.pdf",
            "rule": {
              "fn": "sitePlan.existing.rule",
              "val": "required",
              "operator": "Equals",
              "condition": "RequiredIf"
            },
            "filename": "13-Wharmland-Road-amended-plans.pdf",
            "cachedSlot": {
              "id": "P3t5_vSYlMdks4K7C7FGi",
              "url": "https://api.editor.planx.dev/file/private/gmd7vtaz/13-Wharmland-Road-amended-plans.pdf",
              "file": {
                "name": "13-Wharmland-Road-amended-plans.pdf",
                "path": "./13-Wharmland-Road-amended-plans.pdf",
                "size": 3243635,
                "type": "application/pdf"
              },
              "status": "success",
              "progress": 1
            }
          }
        ],
        "sitePlan.proposed": [
          {
            "url": "https://api.editor.planx.dev/file/private/gmd7vtaz/13-Wharmland-Road-amended-plans.pdf",
            "rule": {
              "fn": "sitePlan.proposed.rule",
              "val": "required",
              "operator": "Equals",
              "condition": "RequiredIf"
            },
            "filename": "13-Wharmland-Road-amended-plans.pdf",
            "cachedSlot": {
              "id": "P3t5_vSYlMdks4K7C7FGi",
              "url": "https://api.editor.planx.dev/file/private/gmd7vtaz/13-Wharmland-Road-amended-plans.pdf",
              "file": {
                "name": "13-Wharmland-Road-amended-plans.pdf",
                "path": "./13-Wharmland-Road-amended-plans.pdf",
                "size": 3243635,
                "type": "application/pdf"
              },
              "status": "success",
              "progress": 1
            }
          }
        ],
        "floorPlan.existing": [
          {
            "url": "https://api.editor.planx.dev/file/private/gmd7vtaz/13-Wharmland-Road-amended-plans.pdf",
            "rule": {
              "fn": "floorPlan.existing.rule",
              "val": "required",
              "operator": "Equals",
              "condition": "RequiredIf"
            },
            "filename": "13-Wharmland-Road-amended-plans.pdf",
            "cachedSlot": {
              "id": "P3t5_vSYlMdks4K7C7FGi",
              "url": "https://api.editor.planx.dev/file/private/gmd7vtaz/13-Wharmland-Road-amended-plans.pdf",
              "file": {
                "name": "13-Wharmland-Road-amended-plans.pdf",
                "path": "./13-Wharmland-Road-amended-plans.pdf",
                "size": 3243635,
                "type": "application/pdf"
              },
              "status": "success",
              "progress": 1
            }
          }
        ],
        "floorPlan.proposed": [
          {
            "url": "https://api.editor.planx.dev/file/private/gmd7vtaz/13-Wharmland-Road-amended-plans.pdf",
            "rule": {
              "fn": "floorPlan.proposed.rule",
              "val": "required",
              "operator": "Equals",
              "condition": "RequiredIf"
            },
            "filename": "13-Wharmland-Road-amended-plans.pdf",
            "cachedSlot": {
              "id": "P3t5_vSYlMdks4K7C7FGi",
              "url": "https://api.editor.planx.dev/file/private/gmd7vtaz/13-Wharmland-Road-amended-plans.pdf",
              "file": {
                "name": "13-Wharmland-Road-amended-plans.pdf",
                "path": "./13-Wharmland-Road-amended-plans.pdf",
                "size": 3243635,
                "type": "application/pdf"
              },
              "status": "success",
              "progress": 1
            }
          }
        ],
        "elevations.existing": [
          {
            "url": "https://api.editor.planx.dev/file/private/gmd7vtaz/13-Wharmland-Road-amended-plans.pdf",
            "rule": {
              "fn": "elevations.existing.rule",
              "val": "required",
              "operator": "Equals",
              "condition": "RequiredIf"
            },
            "filename": "13-Wharmland-Road-amended-plans.pdf",
            "cachedSlot": {
              "id": "P3t5_vSYlMdks4K7C7FGi",
              "url": "https://api.editor.planx.dev/file/private/gmd7vtaz/13-Wharmland-Road-amended-plans.pdf",
              "file": {
                "name": "13-Wharmland-Road-amended-plans.pdf",
                "path": "./13-Wharmland-Road-amended-plans.pdf",
                "size": 3243635,
                "type": "application/pdf"
              },
              "status": "success",
              "progress": 1
            }
          }
        ],
        "elevations.proposed": [
          {
            "url": "https://api.editor.planx.dev/file/private/gmd7vtaz/13-Wharmland-Road-amended-plans.pdf",
            "rule": {
              "fn": "elevations.proposed.rule",
              "val": "required",
              "operator": "Equals",
              "condition": "RequiredIf"
            },
            "filename": "13-Wharmland-Road-amended-plans.pdf",
            "cachedSlot": {
              "id": "P3t5_vSYlMdks4K7C7FGi",
              "url": "https://api.editor.planx.dev/file/private/gmd7vtaz/13-Wharmland-Road-amended-plans.pdf",
              "file": {
                "name": "13-Wharmland-Road-amended-plans.pdf",
                "path": "./13-Wharmland-Road-amended-plans.pdf",
                "size": 3243635,
                "type": "application/pdf"
              },
              "status": "success",
              "progress": 1
            }
          }
        ]
      }
    },
    "fLVlIcYbXD": {
      "auto": false,
      "answers": [
        "06bA9iXPTC"
      ]
    },
    "g3R3gPa8F8": {
      "auto": true
    },
    "g60hb1YCs5": {
      "auto": true
    },
    "gfgkezhiIl": {
      "auto": true
    },
    "grZh1Pa8F8": {
      "auto": true
    },
    "hMqbtTSoWj": {
      "auto": true
    },
    "hYuHtPa8F8": {
      "auto": true,
      "answers": [
        "3HkLBPa8F8"
      ]
    },
    "hrajyiwbGF": {
      "auto": true,
      "answers": [
        "3EieqlCeyw"
      ]
    },
    "hy4BpkgxiS": {
      "auto": true,
      "data": {
        "application.preAppAdvice.form": [
          "No"
        ]
      }
    },
    "i25MDohe3S": {
      "auto": true,
      "data": {
        "application.type": [
          "pp.full"
        ]
      }
    },
    "iJ4VkAGZvv": {
      "auto": true,
      "data": {
        "property.heritageAsset": [
          "no"
        ]
      }
    },
    "iSmESG2Q2r": {
      "auto": true,
      "answers": [
        "dwikpJ7eVS"
      ]
    },
    "irT26QIGfm": {
      "auto": true,
      "data": {
        "application.CIL.existingPermissionPrecedingCIL": [
          "false"
        ]
      }
    },
    "jIQ21LjZV6": {
      "auto": false
    },
    "jhW9jPa8F8": {
      "auto": true,
      "answers": [
        "jqor9Pa8F8"
      ]
    },
    "jkGS7Pa8F8": {
      "auto": true,
      "answers": [
        "pDbALPa8F8"
      ]
    },
    "jrxYY8niKD": {
      "auto": true,
      "answers": [
        "ozUgoWWFhe"
      ]
    },
    "jxc15C8AGu": {
      "auto": false,
      "data": {
        "_address": {
          "x": 419818,
          "y": 565316,
          "pao": "13",
          "town": "NEWCASTLE UPON TYNE",
          "uprn": "004510050603",
          "usrn": "8203356",
          "ward": "E05011437",
          "title": "13, WHARMLANDS ROAD, SCOTSWOOD",
          "source": "os",
          "street": "WHARMLANDS ROAD",
          "latitude": 54.9820623,
          "postcode": "NE15 7UB",
          "blpu_code": "2",
          "longitude": -1.6918845,
          "planx_value": "residential.house.terrace",
          "organisation": null,
          "planx_description": "Terrace",
          "single_line_address": "13, WHARMLANDS ROAD, SCOTSWOOD, NEWCASTLE UPON TYNE, NE15 7UB"
        },
        "property.type": [
          "residential.house.terrace"
        ],
        "property.ward": [
          "Benwell & Scotswood"
        ],
        "property.region": [
          "North East"
        ],
        "property.boundary": {
          "type": "Feature",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [-1.691994, 54.98212],
                  [-1.69184, 54.981897],
                  [-1.69171, 54.981936],
                  [-1.6919, 54.982146],
                  [-1.691994, 54.98212]
                ]
              ]
            ]
          },
          "properties": {
            "name": "",
            "entity": 12000777693,
            "prefix": "title-boundary",
            "dataset": "title-boundary",
            "end-date": "",
            "typology": "geography",
            "reference": "25454120",
            "entry-date": "2024-05-06",
            "start-date": "2008-10-03",
            "dataset-name": "",
            "organisation-entity": "13"
          }
        },
        "findProperty.action": "Selected an existing address",
        "property.boundary.area": 211.7,
        "property.boundary.area.hectares": 0.02117,
        "property.localAuthorityDistrict": [
          "Newcastle upon Tyne"
        ],
        "property.localPlanningAuthority": [
          "Newcastle upon Tyne LPA"
        ]
      }
    },
    "kH8LlPa8F8": {
      "auto": true,
      "answers": [
        "bKvEoPa8F8"
      ]
    },
    "kR19MtsKuU": {
      "auto": true
    },
    "km9PqBvmfP": {
      "auto": true
    },
    "koiLvAGZvv": {
      "auto": true,
      "answers": [
        "nbzhqAGZvv"
      ]
    },
    "kv3bJIhXpj": {
      "auto": false
    },
    "kvHeNiLH1Y": {
      "auto": false,
      "answers": [
        "kemowZxew5"
      ]
    },
    "lCfRyXcbqm": {
      "auto": false,
      "answers": [
        "GCh1PmH3vR"
      ]
    },
    "lElZ7ZYdvV": {
      "auto": false,
      "answers": [
        "FBp0thf3DI"
      ]
    },
    "lMy9g3WJeI": {
      "auto": false,
      "answers": [
        "9ciucqOCIv"
      ]
    },
    "lxsulYnqy2": {
      "auto": true,
      "answers": [
        "6rUKVnaNOH"
      ]
    },
    "m1ywRbgU2j": {
      "auto": true,
      "data": {
        "application.declaration.accurate.form": [
          "Yes"
        ]
      }
    },
    "nQmWPDQ3V1": {
      "auto": false,
      "answers": [
        "3mMD4BbIJd"
      ]
    },
    "notjwRy86D": {
      "auto": true,
      "answers": [
        "hZNYbbtjhd"
      ]
    },
    "oYWhHJn9Qh": {
      "auto": true,
      "data": {
        "proposal.changeNumberOfHomes": [
          "noChange"
        ]
      }
    },
    "p11Ci13HQ3": {
      "auto": false,
      "data": {
        "applicant.email": "example@example.com",
        "_contact.applicant": {
          "applicant": {
            "email": "example@example.com",
            "phone": "+1111111111",
            "title": "",
            "lastName": "Examplefirst",
            "firstName": "Examplelast",
            "organisation": ""
          }
        },
        "applicant.name.last": "Examplefirst",
        "applicant.name.first": "Examplelast",
        "applicant.phone.primary": "+1111111111"
      }
    },
    "pDAOatz5vO": {
      "auto": true,
      "data": {
        "usedFOIYNPPCheck": [
          "true"
        ]
      }
    },
    "pLO3rdvUCO": {
      "auto": true,
      "data": {
        "property.type": [
          "parent"
        ]
      }
    },
    "pRgayFXPtq": {
      "auto": true
    },
    "pW3oZopLAT": {
      "auto": true,
      "answers": [
        "wSUZvO1mHl"
      ]
    },
    "q5LVfGw1Ae": {
      "auto": true,
      "answers": [
        "ajv2I8Es0H"
      ]
    },
    "qkIH803Llz": {
      "auto": true,
      "answers": [
        "qTRKUhZfWg"
      ]
    },
    "qnIQQjtuyZ": {
      "auto": true,
      "answers": [
        "FzxUyFVncF"
      ]
    },
    "rO9gYU7xDr": {
      "auto": true,
      "data": {
        "elevations.existing.rule": [
          "required"
        ]
      }
    },
    "rTqQ7nfCdP": {
      "auto": true,
      "answers": [
        "jZ2vbTp8eH"
      ]
    },
    "rn24bP984W": {
      "auto": true,
      "answers": [
        "FjNhfgUIIf"
      ]
    },
    "s2aMN1hmj5": {
      "auto": true,
      "data": {
        "elevations.proposed.rule": [
          "required"
        ]
      }
    },
    "syT5Q8jRQR": {
      "auto": false
    },
    "t2kNBb8iZM": {
      "auto": true,
      "data": {
        "application.CIL.floorAreaHundredPlus": [
          "false"
        ]
      }
    },
    "tClUld3roO": {
      "auto": true,
      "answers": [
        "InXbWQrzAo"
      ]
    },
    "tjcNLCdV3P": {
      "auto": true,
      "data": {
        "proposal.changeNumberOfHomes": [
          "noChange"
        ]
      }
    },
    "u8Xp4iiNSt": {
      "auto": true,
      "data": {
        "application.fee.category.six": [
          "true"
        ]
      }
    },
    "uM6p5pAZAi": {
      "auto": true,
      "data": {
        "proposal.treeWorksOnly": [
          "false"
        ]
      }
    },
    "uNjNorFcCv": {
      "auto": true,
      "answers": [
        "FWsTiwcFRE"
      ]
    },
    "uiFmsL3prW": {
      "auto": true,
      "answers": [
        "fBFBI389cX"
      ]
    },
    "vxHAXwgR9G": {
      "auto": false,
      "data": {
        "_nots": {
          "property.constraints.planning": [
            "archaeologicalPriorityArea",
            "articleFour",
            "battlefield",
            "brownfieldSite",
            "designated.AONB",
            "designated.conservationArea",
            "greenBelt",
            "designated.nationalPark",
            "designated.nationalPark.broads",
            "designated.WHS",
            "flood",
            "listed",
            "monument",
            "nature.ASNW",
            "nature.ramsarSite",
            "nature.SAC",
            "nature.SPA",
            "nature.SSSI",
            "registeredPark",
            "road.classified",
            "tpo",
            "designated",
            "articleFour.newcastle.caz"
          ]
        },
        "_constraints": [
          {
            "metadata": {
              "tpo": {
                "name": "Tree preservation zone",
                "text": "This dataset contains the extent of groups of trees covered by a tree preservation order.\n\nIt can be used for managing and protecting important trees by preventing their unauthorised removal or damage. \n\nMembers of the public and developers use the data to check if a tree is protected and to inform planning applications or tree work proposals. The data helps ensure trees remain a significant part of the local environment and public amenity.\n\nThis dataset contains data from [a small group of local planning authorities](/about/) who we are working with to develop a [data specification for tree preservation orders](https://www.digital-land.info/guidance/specifications/tree-preservation-order).",
                "phase": "beta",
                "realm": "dataset",
                "plural": "Trees preservation zones",
                "prefix": "",
                "themes": [
                  "environment"
                ],
                "dataset": "tree-preservation-zone",
                "licence": "ogl3",
                "version": "2.0",
                "end-date": "",
                "entities": "",
                "typology": "geography",
                "wikidata": "Q10884",
                "wikipedia": "Tree",
                "collection": "tree-preservation-order",
                "entry-date": "",
                "start-date": "",
                "attribution": "crown-copyright",
                "description": "An area covered by a tree preservation order",
                "entity-count": {
                  "count": 51393,
                  "dataset": "tree-preservation-zone"
                },
                "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "consideration": "tree-preservation-orders",
                "paint-options": "",
                "entity-maximum": 29099999,
                "entity-minimum": 19100000,
                "attribution-text": "© Crown copyright and database right 2025",
                "github-discussion": 43,
                "replacement-dataset": ""
              },
              "flood": {
                "name": "Flood risk zone",
                "text": "Flood zones are a guide produced by the Environment Agency to demonstrate the probability of river and sea flooding in areas across England. Flood zones are based on the likelihood of an area flooding, with flood zone 1 areas least likely to flood and flood zone 3 areas more likely to flood. \n\nThe flood zones were produced to help developers, councils and communities understand the flood risks present in specific locations or regions. Despite being a very useful indicator of an area’s flood risk, the zones cannot tell you whether a location will definitely flood or to what severity.",
                "phase": "live",
                "realm": "dataset",
                "plural": "Flood risk zones",
                "prefix": "",
                "themes": [
                  "environment"
                ],
                "dataset": "flood-risk-zone",
                "licence": "ogl3",
                "version": "1.0",
                "end-date": "",
                "entities": "",
                "typology": "geography",
                "wikidata": "",
                "wikipedia": "",
                "collection": "flood-risk-zone",
                "entry-date": "",
                "start-date": "",
                "attribution": "crown-copyright",
                "description": "Area identified as being at risk of flooding from rivers or the sea",
                "entity-count": {
                  "count": 780636,
                  "dataset": "flood-risk-zone"
                },
                "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "consideration": "flood-risk-zones",
                "paint-options": "",
                "entity-maximum": 65999999,
                "entity-minimum": 65000000,
                "attribution-text": "© Crown copyright and database right 2025",
                "github-discussion": 46,
                "replacement-dataset": ""
              },
              "listed": {
                "name": "Listed building outline",
                "text": "This dataset contains geospatial boundary or extent information about listings.\n\nIt can be used for identifying and protecting buildings of special architectural or historic interest, ensuring that any work on or near these properties requires special consent and design considerations to prevent harm to the building's significance.\n\nThis spatial data can help in planning applications, conservation efforts, and policy development by showing the locations and boundaries of designated heritage assets, influencing development proposals and land use decisions. \n\nThis dataset does not consistently show the curtilage of listed buildings for planning purposes and should only be used as an indicative guide. We encourage users to make further checks before making any planning decision.\n\nData shows the extent of the land associated with the listing. This dataset is a work in progress and does not have full coverage across England.",
                "phase": "alpha",
                "realm": "dataset",
                "plural": "Listed building outlines",
                "prefix": "",
                "themes": [
                  "heritage"
                ],
                "dataset": "listed-building-outline",
                "licence": "ogl3",
                "version": "3.0",
                "end-date": "",
                "entities": "",
                "typology": "geography",
                "wikidata": "Q570600",
                "wikipedia": "Listed_building",
                "collection": "listed-building",
                "entry-date": "",
                "start-date": "",
                "attribution": "crown-copyright",
                "description": "boundary of a listed building",
                "entity-count": {
                  "count": 68156,
                  "dataset": "listed-building-outline"
                },
                "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "consideration": "listed-buildings",
                "paint-options": {
                  "colour": "#F9C744"
                },
                "entity-maximum": 43099999,
                "entity-minimum": 42100000,
                "attribution-text": "© Crown copyright and database right 2025",
                "github-discussion": 44,
                "replacement-dataset": ""
              },
              "monument": {
                "name": "Scheduled monument",
                "text": "Historic buildings or sites such as Roman remains, burial mounds, castles, bridges, earthworks, the remains of deserted villages and industrial sites can be designated scheduled monuments by the Secretary of State for [Digital, Culture, Media and Sport](https://www.gov.uk/government/organisations/department-for-digital-culture-media-sport). \n\nThis list of scheduled monuments is kept and maintained by [Historic England](https://historicengland.org.uk/).",
                "phase": "beta",
                "realm": "dataset",
                "plural": "Scheduled monuments",
                "prefix": "",
                "themes": [
                  "heritage"
                ],
                "dataset": "scheduled-monument",
                "licence": "ogl3",
                "version": "1.0",
                "end-date": "",
                "entities": "",
                "typology": "geography",
                "wikidata": "Q219538",
                "wikipedia": "Scheduled_monument",
                "collection": "historic-england",
                "entry-date": "",
                "start-date": "",
                "attribution": "historic-england",
                "description": "",
                "entity-count": {
                  "count": 20017,
                  "dataset": "scheduled-monument"
                },
                "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "consideration": "scheduled-monuments",
                "paint-options": {
                  "colour": "#0F9CDA"
                },
                "entity-maximum": 13999999,
                "entity-minimum": 13900000,
                "attribution-text": "© Historic England 2025. Contains Ordnance Survey data © Crown copyright and database right 2025.\nThe Historic England GIS Data contained in this material was obtained on [date].\nThe most publicly available up to date Historic England GIS Data can be obtained from [HistoricEngland.org.uk](https://historicengland.org.uk).",
                "github-discussion": "",
                "replacement-dataset": ""
              },
              "greenBelt": {
                "name": "Green belt",
                "text": "This dataset contains boundaries for land designated by a local planning authority as being [green belt](https://www.gov.uk/guidance/green-belt),\ngrouped using the [greenbelt core](/dataset/greenbelt-core) category.\n\nIt can be used for planning purposes, such as preparing local plans to define areas that are kept permanently open and free from urban sprawl.\n\nLocal planning authorities provide annual returns in March and we publish the data in autumn. This provides a snapshot in time and won't reflect any changes to green belt boundaries made since the local planning authorities submitted their annual returns.",
                "phase": "beta",
                "realm": "dataset",
                "plural": "Green belt",
                "prefix": "",
                "themes": [
                  "environment"
                ],
                "dataset": "green-belt",
                "licence": "ogl3",
                "version": "1.0",
                "end-date": "",
                "entities": "",
                "typology": "geography",
                "wikidata": "Q2734873",
                "wikipedia": "Green_belt_(United_Kingdom)",
                "collection": "green-belt",
                "entry-date": "",
                "start-date": "",
                "attribution": "os-open-data",
                "description": "",
                "entity-count": {
                  "count": 181,
                  "dataset": "green-belt"
                },
                "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "consideration": "greenbelt",
                "paint-options": {
                  "colour": "#85994b"
                },
                "entity-maximum": 610999,
                "entity-minimum": 610000,
                "attribution-text": "Your use of OS OpenData is subject to the terms at http://os.uk/opendata/licence\nContains Ordnance Survey data © Crown copyright and database right 2025",
                "github-discussion": 45,
                "replacement-dataset": ""
              },
              "nature.SAC": {
                "name": "Special area of conservation",
                "text": "Special areas of conservation (SACs) are area of land which have been designated by\n[DEFRA](https://www.gov.uk/government/organisations/department-for-environment-food-rural-affairs),\nwith advice from the [Joint Nature Conservation Committee](https://jncc.gov.uk/),\nto protect specific habitats and species.\n\nDEFRA and [Natural England](https://www.gov.uk/government/organisations/natural-england) publish\n[guidance](https://www.gov.uk/guidance/protected-sites-and-areas-how-to-review-planning-applications)\non how to review planning applications in protected sites and areas.",
                "phase": "beta",
                "realm": "dataset",
                "plural": "Special areas of conservation",
                "prefix": "",
                "themes": [
                  "environment"
                ],
                "dataset": "special-area-of-conservation",
                "licence": "ogl3",
                "version": "1.0",
                "end-date": "",
                "entities": "",
                "typology": "geography",
                "wikidata": "Q1191622",
                "wikipedia": "Special_Area_of_Conservation",
                "collection": "special-area-of-conservation",
                "entry-date": "",
                "start-date": "",
                "attribution": "natural-england",
                "description": "",
                "entity-count": {
                  "count": 260,
                  "dataset": "special-area-of-conservation"
                },
                "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "consideration": "special-areas-of-conservation",
                "paint-options": {
                  "colour": "#7A8705"
                },
                "entity-maximum": 14899999,
                "entity-minimum": 14800000,
                "attribution-text": "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2025.",
                "github-discussion": "",
                "replacement-dataset": ""
              },
              "nature.SPA": {
                "name": "Special protection area",
                "text": "[Special protection areas](https://naturalengland-defra.opendata.arcgis.com/maps/Defra::special-protection-areas-england/about) is an area designated \nfor the protection of birds and wildlife. This dataset is provided by [Natural England](https://www.gov.uk/government/organisations/natural-england).",
                "phase": "beta",
                "realm": "dataset",
                "plural": "Special protection areas",
                "prefix": "",
                "themes": [
                  "environment"
                ],
                "dataset": "special-protection-area",
                "licence": "ogl3",
                "version": "1.0",
                "end-date": "",
                "entities": "",
                "typology": "geography",
                "wikidata": "",
                "wikipedia": "",
                "collection": "special-protection-area",
                "entry-date": "",
                "start-date": "",
                "attribution": "natural-england",
                "description": "",
                "entity-count": {
                  "count": 88,
                  "dataset": "special-protection-area"
                },
                "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "consideration": "special-protection-areas",
                "paint-options": "",
                "entity-maximum": 14999999,
                "entity-minimum": 14900000,
                "attribution-text": "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2025.",
                "github-discussion": "",
                "replacement-dataset": ""
              },
              "articleFour": {
                "name": "Article 4 direction area",
                "text": "This dataset contains information on areas affected by article 4 directions.\n\nIt can be used for controlling development by requiring a planning application for work that would otherwise be classed as permitted development.",
                "phase": "beta",
                "realm": "dataset",
                "plural": "Article 4 direction areas",
                "prefix": "",
                "themes": [
                  "heritage"
                ],
                "dataset": "article-4-direction-area",
                "licence": "ogl3",
                "version": "3.0",
                "end-date": "",
                "entities": "",
                "typology": "geography",
                "wikidata": "",
                "wikipedia": "",
                "collection": "article-4-direction",
                "entry-date": "",
                "start-date": "",
                "attribution": "crown-copyright",
                "description": "Orders made by the local planning authority to remove all or some of the permitted development rights on a site in order to protect it",
                "entity-count": {
                  "count": 4431,
                  "dataset": "article-4-direction-area"
                },
                "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "consideration": "article-4-directions",
                "paint-options": "",
                "entity-maximum": 7019999999,
                "entity-minimum": 7010000000,
                "attribution-text": "© Crown copyright and database right 2025",
                "github-discussion": 30,
                "replacement-dataset": ""
              },
              "battlefield": {
                "name": "Battlefield",
                "text": "Battlefields as designated by [Historic England](https://historicengland.org.uk) in their [Register of Historic Battlefields](https://historicengland.org.uk/listing/what-is-designation/registered-battlefields/).",
                "phase": "live",
                "realm": "dataset",
                "plural": "Battlefields",
                "prefix": "",
                "themes": [
                  "heritage"
                ],
                "dataset": "battlefield",
                "licence": "ogl3",
                "version": "1.0",
                "end-date": "",
                "entities": "",
                "typology": "geography",
                "wikidata": "Q4895508",
                "wikipedia": "Battlefield",
                "collection": "historic-england",
                "entry-date": "",
                "start-date": "",
                "attribution": "historic-england",
                "description": "",
                "entity-count": {
                  "count": 47,
                  "dataset": "battlefield"
                },
                "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "consideration": "battlefields",
                "paint-options": {
                  "colour": "#4d2942",
                  "opacity": 0.2
                },
                "entity-maximum": 1499999,
                "entity-minimum": 1400000,
                "attribution-text": "© Historic England 2025. Contains Ordnance Survey data © Crown copyright and database right 2025.\nThe Historic England GIS Data contained in this material was obtained on [date].\nThe most publicly available up to date Historic England GIS Data can be obtained from [HistoricEngland.org.uk](https://historicengland.org.uk).",
                "github-discussion": "",
                "replacement-dataset": ""
              },
              "nature.ASNW": {
                "name": "Ancient woodland",
                "text": "An area designated as ancient woodland by Natural England.\n\nNatural England and Forestry Commission [Guidance](https://www.gov.uk/guidance/ancient-woodland-and-veteran-trees-protection-surveys-licences)  is used in planning decisions.",
                "phase": "live",
                "realm": "dataset",
                "plural": "Ancient woodlands",
                "prefix": "",
                "themes": [
                  "environment"
                ],
                "dataset": "ancient-woodland",
                "licence": "ogl3",
                "version": "1.0",
                "end-date": "",
                "entities": "",
                "typology": "geography",
                "wikidata": "Q3078732",
                "wikipedia": "Ancient_woodland",
                "collection": "ancient-woodland",
                "entry-date": "",
                "start-date": "",
                "attribution": "natural-england",
                "description": "An area that’s been wooded continuously since at least 1600 AD",
                "entity-count": {
                  "count": 44373,
                  "dataset": "ancient-woodland"
                },
                "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "consideration": "ancient-woodlands",
                "paint-options": {
                  "colour": "#00703c",
                  "opacity": 0.2
                },
                "entity-maximum": 129999999,
                "entity-minimum": 110000000,
                "attribution-text": "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2025.",
                "github-discussion": 32,
                "replacement-dataset": ""
              },
              "nature.SSSI": {
                "name": "Site of special scientific interest",
                "text": "Sites of special scientific interest (SSSI) are nationally protected sites that have features such as wildlife or geology. \n\nSSSIs are designated by [Natural England](https://www.gov.uk/government/organisations/natural-england).\nThere is [guidance](https://www.gov.uk/guidance/protected-areas-sites-of-special-scientific-interest) to help local authorities decide on planning applications in protected SSSIs.",
                "phase": "beta",
                "realm": "dataset",
                "plural": "Sites of special scientific interest",
                "prefix": "",
                "themes": [
                  "environment"
                ],
                "dataset": "site-of-special-scientific-interest",
                "licence": "ogl3",
                "version": "1.0",
                "end-date": "",
                "entities": "",
                "typology": "geography",
                "wikidata": "Q422211",
                "wikipedia": "Site_of_Special_Scientific_Interest",
                "collection": "site-of-special-scientific-interest",
                "entry-date": "",
                "start-date": "",
                "attribution": "natural-england",
                "description": "",
                "entity-count": {
                  "count": 4128,
                  "dataset": "site-of-special-scientific-interest"
                },
                "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "consideration": "sites-of-special-scientific-interest",
                "paint-options": {
                  "colour": "#308fac"
                },
                "entity-maximum": 14599999,
                "entity-minimum": 14500000,
                "attribution-text": "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2025.",
                "github-discussion": "",
                "replacement-dataset": ""
              },
              "brownfieldSite": {
                "name": "Brownfield site",
                "text": "This is an experimental dataset of the boundaries of brownfield sites found on [data.gov.uk](https://www.data.gov.uk/search?q=brownfield)\nand local planning authority web sites.\nWe expect to combine this dataset with the [brownfield land](/dataset/brownfield-land) dataset in the near future.",
                "phase": "alpha",
                "realm": "dataset",
                "plural": "Brownfield sites",
                "prefix": "",
                "themes": [
                  "development"
                ],
                "dataset": "brownfield-site",
                "licence": "ogl3",
                "version": "1.0",
                "end-date": "",
                "entities": "",
                "typology": "geography",
                "wikidata": "Q896586",
                "wikipedia": "Brownfield_land",
                "collection": "brownfield-site",
                "entry-date": "",
                "start-date": "",
                "attribution": "crown-copyright",
                "description": "",
                "entity-count": {
                  "count": 2852,
                  "dataset": "brownfield-site"
                },
                "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "consideration": "brownfield-land",
                "paint-options": {
                  "colour": "#745729"
                },
                "entity-maximum": 1899999,
                "entity-minimum": 1800000,
                "attribution-text": "© Crown copyright and database right 2025",
                "github-discussion": 28,
                "replacement-dataset": ""
              },
              "designated.WHS": {
                "name": "World heritage site buffer zone",
                "text": "A [World Heritage Site](/dataset/world-heritage-site) may have a [buffer zone](https://whc.unesco.org/en/series/25/) with implications for planning.",
                "phase": "beta",
                "realm": "dataset",
                "plural": "World heritage site buffer zones",
                "prefix": "",
                "themes": [
                  "heritage"
                ],
                "dataset": "world-heritage-site-buffer-zone",
                "licence": "ogl3",
                "version": "1.0",
                "end-date": "",
                "entities": "",
                "typology": "geography",
                "wikidata": "Q9259",
                "wikipedia": "World_Heritage_Site",
                "collection": "historic-england",
                "entry-date": "",
                "start-date": "",
                "attribution": "historic-england",
                "description": "",
                "entity-count": {
                  "count": 9,
                  "dataset": "world-heritage-site-buffer-zone"
                },
                "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "consideration": "world-heritage-sites",
                "paint-options": {
                  "colour": "#EB1EE5",
                  "opacity": 0.2
                },
                "entity-maximum": 16129999,
                "entity-minimum": 16110000,
                "attribution-text": "© Historic England 2025. Contains Ordnance Survey data © Crown copyright and database right 2025.\nThe Historic England GIS Data contained in this material was obtained on [date].\nThe most publicly available up to date Historic England GIS Data can be obtained from [HistoricEngland.org.uk](https://historicengland.org.uk).",
                "github-discussion": "",
                "replacement-dataset": ""
              },
              "registeredPark": {
                "name": "Historic parks and gardens",
                "text": "Historic parks and gardens as listed by [Historic England](https://historicengland.org.uk/) in the [Register of Parks and Gardens of Special Historic Interest](https://historicengland.org.uk/listing/what-is-designation/registered-parks-and-gardens/).",
                "phase": "beta",
                "realm": "dataset",
                "plural": "Parks and gardens",
                "prefix": "",
                "themes": [
                  "environment",
                  "heritage"
                ],
                "dataset": "park-and-garden",
                "licence": "ogl3",
                "version": "1.0",
                "end-date": "",
                "entities": "",
                "typology": "geography",
                "wikidata": "Q6975250",
                "wikipedia": "Register_of_Historic_Parks_and_Gardens_of_Special_Historic_Interest_in_England",
                "collection": "historic-england",
                "entry-date": "",
                "start-date": "",
                "attribution": "historic-england",
                "description": "",
                "entity-count": {
                  "count": 1719,
                  "dataset": "park-and-garden"
                },
                "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "consideration": "",
                "paint-options": {
                  "colour": "#0EB951"
                },
                "entity-maximum": 11199999,
                "entity-minimum": 11100000,
                "attribution-text": "© Historic England 2025. Contains Ordnance Survey data © Crown copyright and database right 2025.\nThe Historic England GIS Data contained in this material was obtained on [date].\nThe most publicly available up to date Historic England GIS Data can be obtained from [HistoricEngland.org.uk](https://historicengland.org.uk).",
                "github-discussion": "",
                "replacement-dataset": ""
              },
              "articleFour.caz": {
                "name": "Central activities zone",
                "text": "The [Greater London Authority](https://www.london.gov.uk/) (GLA) designates a central area of London with [implications for planning](https://www.london.gov.uk/what-we-do/planning/implementing-london-plan/london-plan-guidance-and-spgs/central-activities-zone)\nThis dataset combines data provided by the GLA with the boundary from the individual London boroughs.",
                "phase": "beta",
                "realm": "dataset",
                "plural": "Central activities zones",
                "prefix": "",
                "themes": [
                  "development"
                ],
                "dataset": "central-activities-zone",
                "licence": "ogl3",
                "version": "1.0",
                "end-date": "",
                "entities": "",
                "typology": "geography",
                "wikidata": "",
                "wikipedia": "",
                "collection": "central-activities-zone",
                "entry-date": "",
                "start-date": "",
                "attribution": "crown-copyright",
                "description": "",
                "entity-count": {
                  "count": 10,
                  "dataset": "central-activities-zone"
                },
                "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "consideration": "central-activty-zones",
                "paint-options": "",
                "entity-maximum": 2299999,
                "entity-minimum": 2200000,
                "attribution-text": "© Crown copyright and database right 2025",
                "github-discussion": "",
                "replacement-dataset": ""
              },
              "designated.AONB": {
                "name": "Area of outstanding natural beauty",
                "text": "An area of outstanding natural beauty (AONB) as designated by [Natural England](https://www.gov.uk/government/organisations/natural-england).\n\nNatural England provides [guidance](https://www.gov.uk/guidance/protected-sites-and-areas-how-to-review-planning-applications) to help local authorities decide on planning applications in protected sites and areas.",
                "phase": "live",
                "realm": "dataset",
                "plural": "Areas of outstanding natural beauty",
                "prefix": "",
                "themes": [
                  "environment"
                ],
                "dataset": "area-of-outstanding-natural-beauty",
                "licence": "ogl3",
                "version": "1.0",
                "end-date": "",
                "entities": "",
                "typology": "geography",
                "wikidata": "Q174945",
                "wikipedia": "Area_of_Outstanding_Natural_Beauty",
                "collection": "area-of-outstanding-natural-beauty",
                "entry-date": "",
                "start-date": "",
                "attribution": "natural-england",
                "description": "Land protected by law to conserve and enhance its natural beauty",
                "entity-count": {
                  "count": 34,
                  "dataset": "area-of-outstanding-natural-beauty"
                },
                "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "consideration": "areas-of-outstanding-natural-beauty",
                "paint-options": {
                  "colour": "#d53880"
                },
                "entity-maximum": 1099999,
                "entity-minimum": 1000000,
                "attribution-text": "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2025.",
                "github-discussion": 31,
                "replacement-dataset": ""
              },
              "nature.ramsarSite": {
                "name": "Ramsar site",
                "text": "An internationally protected site listed as a wetland of international importance.\nRamsar sites are designated by [UNESCO](https://en.unesco.org/) and managed by [Natural England](https://www.gov.uk/government/organisations/natural-england).\n\nNatural England provides [guidance ](https://www.gov.uk/guidance/protected-sites-and-areas-how-to-review-planning-applications) to help local authorities decide on planning applications in protected sites and areas.",
                "phase": "beta",
                "realm": "dataset",
                "plural": "Ramsar sites",
                "prefix": "",
                "themes": [
                  "environment"
                ],
                "dataset": "ramsar",
                "licence": "ogl3",
                "version": "1.0",
                "end-date": "",
                "entities": "",
                "typology": "geography",
                "wikidata": "",
                "wikipedia": "",
                "collection": "ramsar",
                "entry-date": "",
                "start-date": "",
                "attribution": "natural-england",
                "description": "",
                "entity-count": {
                  "count": 73,
                  "dataset": "ramsar"
                },
                "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "consideration": "ramsar",
                "paint-options": {
                  "colour": "#7fcdff"
                },
                "entity-maximum": 619999,
                "entity-minimum": 612000,
                "attribution-text": "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2025.",
                "github-discussion": 41,
                "replacement-dataset": ""
              },
              "designated.nationalPark": {
                "name": "National park",
                "text": "The administrative boundaries of [national park authorities](/dataset/national-park-authority) in England as provided by the ONS for the purposes of producing statistics.",
                "phase": "beta",
                "realm": "dataset",
                "plural": "National parks",
                "prefix": "statistical-geography",
                "themes": [
                  "heritage"
                ],
                "dataset": "national-park",
                "licence": "ogl3",
                "version": "1.0",
                "end-date": "",
                "entities": "",
                "typology": "geography",
                "wikidata": "Q60256727",
                "wikipedia": "National_park",
                "collection": "national-park",
                "entry-date": "",
                "start-date": "",
                "attribution": "ons-boundary",
                "description": "",
                "entity-count": {
                  "count": 10,
                  "dataset": "national-park"
                },
                "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "consideration": "national-parks-and-the-broads",
                "paint-options": {
                  "colour": "#3DA52C"
                },
                "entity-maximum": 520999,
                "entity-minimum": 520000,
                "attribution-text": "Source: Office for National Statistics licensed under the Open Government Licence v.3.0\nContains OS data © Crown copyright and database right 2025",
                "github-discussion": "",
                "replacement-dataset": ""
              },
              "archaeologicalPriorityArea": {
                "name": "Archaeological priority area",
                "text": "The Greater London Archaeological Priority Areas (APAs) are areas in London that have significant archaeological interest or potential for new discoveries\n\nThe APAs are based on evidence in the Greater London Historic Environment Record (GLHER)\nThey were created in the 1970s and 1980s by boroughs and local museums\nThey are being updated using new evidence and standards\nThe new system assigns all land to one of four tiers based on archaeological risk",
                "phase": "live",
                "realm": "dataset",
                "plural": "Archaeological priority areas",
                "prefix": "",
                "themes": [
                  "environment",
                  "heritage"
                ],
                "dataset": "archaeological-priority-area",
                "licence": "ogl3",
                "version": "2.0",
                "end-date": "",
                "entities": "",
                "typology": "geography",
                "wikidata": "",
                "wikipedia": "",
                "collection": "archaeological-priority-area",
                "entry-date": "2025-02-04",
                "start-date": "",
                "attribution": "historic-england",
                "description": "Areas of Greater London where there is significant known archaeological interest or potential for new discoveries",
                "entity-count": {
                  "count": 738,
                  "dataset": "archaeological-priority-area"
                },
                "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "consideration": "greater-london-archaeological-priority-areas",
                "paint-options": {
                  "colour": "#b54405",
                  "opacity": 0.35
                },
                "entity-maximum": 59999,
                "entity-minimum": 40000,
                "attribution-text": "© Historic England 2025. Contains Ordnance Survey data © Crown copyright and database right 2025.\nThe Historic England GIS Data contained in this material was obtained on [date].\nThe most publicly available up to date Historic England GIS Data can be obtained from [HistoricEngland.org.uk](https://historicengland.org.uk).",
                "github-discussion": 89,
                "replacement-dataset": ""
              },
              "designated.conservationArea": {
                "name": "Conservation area",
                "text": "This dataset is primarily intended to be used for informing development decisions.\n\nThis dataset is incomplete, and contains some authoritative data provided by local authorities, \nas well as conservation area boundaries from Historic England, and other secondary sources found on\n[data.gov.uk](https://www.data.gov.uk/search?q=conservation+area). \nThe data currently contains a number of duplicate areas we are working to remove.",
                "phase": "beta",
                "realm": "dataset",
                "plural": "Conservation areas",
                "prefix": "",
                "themes": [
                  "heritage"
                ],
                "dataset": "conservation-area",
                "licence": "ogl3",
                "version": "3.0",
                "end-date": "",
                "entities": "",
                "typology": "geography",
                "wikidata": "Q5162904",
                "wikipedia": "Conservation_area_(United_Kingdom)",
                "collection": "conservation-area",
                "entry-date": "",
                "start-date": "",
                "attribution": "historic-england",
                "description": "An area of special architectural or historic interest, the character or appearance of which it is desirable to preserve or enhance",
                "entity-count": {
                  "count": 11645,
                  "dataset": "conservation-area"
                },
                "licence-text": "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "consideration": "conservation-areas",
                "paint-options": {
                  "colour": "#78AA00"
                },
                "entity-maximum": 44999999,
                "entity-minimum": 44000000,
                "attribution-text": "© Historic England 2025. Contains Ordnance Survey data © Crown copyright and database right 2025.\nThe Historic England GIS Data contained in this material was obtained on [date].\nThe most publicly available up to date Historic England GIS Data can be obtained from [HistoricEngland.org.uk](https://historicengland.org.uk).",
                "github-discussion": 33,
                "replacement-dataset": ""
              }
            },
            "constraints": {
              "tpo": {
                "fn": "tpo",
                "text": "is not in a Tree Preservation Order (TPO) zone",
                "value": false,
                "category": "Trees"
              },
              "flood": {
                "fn": "flood",
                "text": "is not in a Flood Risk Zone",
                "value": false,
                "category": "Flooding"
              },
              "listed": {
                "fn": "listed",
                "text": "is not, or is not within, a Listed Building",
                "value": false,
                "category": "Heritage and conservation"
              },
              "monument": {
                "fn": "monument",
                "text": "is not the site of a Scheduled Monument",
                "value": false,
                "category": "Heritage and conservation"
              },
              "greenBelt": {
                "fn": "greenBelt",
                "text": "is not in a Green Belt",
                "value": false,
                "category": "General policy"
              },
              "designated": {
                "value": false
              },
              "nature.SAC": {
                "fn": "nature.SAC",
                "text": "is not in a Special Area of Conservation (SAC)",
                "value": false,
                "category": "Ecology"
              },
              "nature.SPA": {
                "fn": "nature.SPA",
                "text": "is not in a Special Protection Area (SPA)",
                "value": false,
                "category": "Ecology"
              },
              "articleFour": {
                "fn": "articleFour",
                "text": "is not in an Article 4 direction area",
                "value": false,
                "category": "General policy"
              },
              "battlefield": {
                "fn": "battlefield",
                "text": "is not on a historic battlefield",
                "value": false,
                "category": "Heritage and conservation"
              },
              "nature.ASNW": {
                "fn": "nature.ASNW",
                "text": "is not in an Ancient Semi-Natural Woodland (ASNW)",
                "value": false,
                "category": "Ecology"
              },
              "nature.SSSI": {
                "fn": "nature.SSSI",
                "text": "is not a Site of Special Scientific Interest (SSSI)",
                "value": false,
                "category": "Ecology"
              },
              "brownfieldSite": {
                "fn": "brownfieldSite",
                "text": "is not on Brownfield land",
                "value": false,
                "category": "General policy"
              },
              "designated.WHS": {
                "fn": "designated.WHS",
                "text": "is not an UNESCO World Heritage Site",
                "value": false,
                "category": "Heritage and conservation"
              },
              "registeredPark": {
                "fn": "registeredPark",
                "text": "is not in a Registered Park and Garden",
                "value": false,
                "category": "Heritage and conservation"
              },
              "designated.AONB": {
                "fn": "designated.AONB",
                "text": "is not in an Area of Outstanding Natural Beauty",
                "value": false,
                "category": "Heritage and conservation"
              },
              "road.classified": {
                "fn": "road.classified",
                "text": "is not on a Classified Road",
                "value": false,
                "category": "General policy"
              },
              "nature.ramsarSite": {
                "fn": "nature.ramsarSite",
                "text": "is not in a Ramsar site",
                "value": false,
                "category": "Ecology"
              },
              "designated.nationalPark": {
                "fn": "designated.nationalPark",
                "text": "is not in a National Park",
                "value": false,
                "category": "Heritage and conservation"
              },
              "articleFour.newcastle.caz": {
                "fn": "articleFour.caz",
                "text": "is not in the Central Activities Zone",
                "value": false,
                "category": "General policy"
              },
              "archaeologicalPriorityArea": {
                "fn": "archaeologicalPriorityArea",
                "text": "is not an Archaeological Priority Area",
                "value": false,
                "category": "General policy"
              },
              "designated.conservationArea": {
                "fn": "designated.conservationArea",
                "text": "is not in a Conservation Area",
                "value": false,
                "category": "Heritage and conservation"
              },
              "designated.nationalPark.broads": {
                "fn": "designated.nationalPark.broads",
                "value": false
              }
            },
            "planxRequest": "https://api.editor.planx.dev/gis/newcastle?geom=MULTIPOLYGON+%28%28%28-1.691994+54.98212%2C+-1.69184+54.981897%2C+-1.69171+54.981936%2C+-1.6919+54.982146%2C+-1.691994+54.98212%29%29%29&vals=archaeologicalPriorityArea%2CarticleFour%2CarticleFour.caz%2Cbattlefield%2CbrownfieldSite%2Cdesignated.AONB%2Cdesignated.conservationArea%2CgreenBelt%2Cdesignated.nationalPark%2Cdesignated.nationalPark.broads%2Cdesignated.WHS%2Cflood%2Clisted%2Cmonument%2Cnature.ASNW%2Cnature.ramsarSite%2Cnature.SAC%2Cnature.SPA%2Cnature.SSSI%2CregisteredPark%2Croad.classified%2Ctpo&analytics=false&sessionId=7ae499ac-4f0e-482c-bb1e-f8a64eacca2e",
            "sourceRequest": "https://www.planning.data.gov.uk/entity.json?entries=current&geometry=MULTIPOLYGON+%28%28%28-1.691994+54.98212%2C+-1.69184+54.981897%2C+-1.69171+54.981936%2C+-1.6919+54.982146%2C+-1.691994+54.98212%29%29%29&geometry_relation=intersects&exclude_field=geometry%2Cpoint&limit=100&dataset=archaeological-priority-area&dataset=article-4-direction-area&dataset=central-activities-zone&dataset=battlefield&dataset=brownfield-land&dataset=brownfield-site&dataset=area-of-outstanding-natural-beauty&dataset=conservation-area&dataset=green-belt&dataset=national-park&dataset=world-heritage-site&dataset=world-heritage-site-buffer-zone&dataset=flood-risk-zone&dataset=listed-building&dataset=listed-building-outline&dataset=scheduled-monument&dataset=ancient-woodland&dataset=ramsar&dataset=special-area-of-conservation&dataset=special-protection-area&dataset=site-of-special-scientific-interest&dataset=park-and-garden&dataset=tree&dataset=tree-preservation-order&dataset=tree-preservation-zone"
          },
          {
            "metadata": {
              "road.classified": {
                "name": "Classified road",
                "text": "This will effect your project if you are looking to add a dropped kerb. It may also impact some agricultural or forestry projects within 25 metres of a classified road.",
                "plural": "Classified roads"
              }
            },
            "constraints": {
              "road.classified": {
                "fn": "road.classified",
                "text": "is not on a Classified Road",
                "value": false,
                "category": "General policy"
              }
            },
            "planxRequest": "https://api.editor.planx.dev/roads?usrn=8203356",
            "sourceRequest": "https://api.os.uk/features/v1/wfs?service=WFS&request=GetFeature&version=2.0.0&typeNames=Highways_RoadLink&outputFormat=GEOJSON&srsName=urn%3Aogc%3Adef%3Acrs%3AEPSG%3A%3A4326&count=1&filter=%0A++++%3Cogc%3AFilter%3E%0A++++++%3Cogc%3APropertyIsLike+wildCard%3D%22%25%22+singleChar%3D%22%23%22+escapeChar%3D%22%21%22%3E%0A++++++++%3Cogc%3APropertyName%3EFormsPartOf%3C%2Fogc%3APropertyName%3E%0A++++++++%3Cogc%3ALiteral%3E%25Street%23usrn8203356%25%3C%2Fogc%3ALiteral%3E%0A++++++%3C%2Fogc%3APropertyIsLike%3E%0A++++%3C%2Fogc%3AFilter%3E%0A++&"
          }
        ],
        "planningConstraints.action": "Accepted all planning constraints"
      }
    },
    "wQBOCNDwwJ": {
      "auto": true
    },
    "wg66iPa8F8": {
      "auto": true
    },
    "wvSu1lmvFM": {
      "auto": true,
      "answers": [
        "BpgBkSjjo2"
      ]
    },
    "x3YXiotP6I": {
      "auto": true,
      "data": {
        "floorPlan.existing.rule": [
          "required"
        ]
      }
    },
    "xWWYFFQYzQ": {
      "auto": false,
      "data": {
        "proposal.site": {
          "type": "Feature",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [-1.691994, 54.98212],
                  [-1.69184, 54.981897],
                  [-1.69171, 54.981936],
                  [-1.6919, 54.982146],
                  [-1.691994, 54.98212]
                ]
              ]
            ]
          },
          "properties": {
            "name": "",
            "entity": 12000777693,
            "prefix": "title-boundary",
            "dataset": "title-boundary",
            "end-date": "",
            "typology": "geography",
            "reference": "25454120",
            "entry-date": "2024-05-06",
            "start-date": "2008-10-03",
            "dataset-name": "",
            "organisation-entity": "13"
          }
        },
        "proposal.site.area": 211.7,
        "drawBoundary.action": "Accepted the title boundary",
        "proposal.site.buffered": {
          "type": "Feature",
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [-1.69281061582569, 54.9830921409892],
                [-1.69311189737532, 54.9829878389928],
                [-1.69337404579007, 54.9828531588821],
                [-1.69358788477855, 54.9826928152479],
                [-1.69374592942466, 54.9825124209931],
                [-1.69384264815242, 54.9823182908225],
                [-1.69387465627106, 54.9821172201729],
                [-1.69384083433685, 54.9819162473265],
                [-1.69374236720441, 54.9817224070378],
                [-1.69358835901801, 54.9814994092463],
                [-1.69342993354633, 54.9813206090232],
                [-1.69321658354646, 54.981161721242],
                [-1.692955679789, 54.9810282346763],
                [-1.69265623551342, 54.9809247605655],
                [-1.69232859506589, 54.9808548733498],
                [-1.69198407659829, 54.9808209872184],
                [-1.69163458116346, 54.9808242727317],
                [-1.69129218169757, 54.9808646163952],
                [-1.69096870607189, 54.9809406245792],
                [-1.69083870832235, 54.9809796236501],
                [-1.69053083066256, 54.9810952999264],
                [-1.69026810157533, 54.981243166853],
                [-1.6900605811538, 54.9814175628026],
                [-1.68991621593355, 54.981611810308],
                [-1.68984053455154, 54.9818184717022],
                [-1.68983643593274, 54.9820296338778],
                [-1.68990407813289, 54.9822372112668],
                [-1.69004087211708, 54.982433255443],
                [-1.69023086573918, 54.9826432580442],
                [-1.69042763699998, 54.9828174271282],
                [-1.69067887869513, 54.9829667577413],
                [-1.69097529657371, 54.9830857253299],
                [-1.69130592476234, 54.9831699285908],
                [-1.69165853148355, 54.983216252332],
                [-1.69202007165538, 54.9832229827477],
                [-1.69237716961357, 54.9831898708371],
                [-1.69271661407828, 54.9831181416188],
                [-1.69281061582569, 54.9830921409892]
              ]
            ]
          },
          "properties": {
            "name": "",
            "entity": 12000777693,
            "prefix": "title-boundary",
            "dataset": "title-boundary",
            "end-date": "",
            "typology": "geography",
            "reference": "25454120",
            "entry-date": "2024-05-06",
            "start-date": "2008-10-03",
            "dataset-name": "",
            "organisation-entity": "13"
          }
        },
        "proposal.site.hectares": 0.02117
      }
    },
    "xYwhRN0XhT": {
      "auto": true,
      "answers": [
        "N6lbZHYM8C"
      ]
    },
    "xejgC6vvhV": {
      "auto": false,
      "data": {
        "proposal.description": "Erection of first floor extension above garage to side and single storey full width extension to rear"
      }
    },
    "zU77XQIzoJ": {
      "auto": true,
      "answers": [
        "rN1A1XSngh"
      ]
    },
    "zUg8XBn5IM": {
      "auto": true,
      "data": {
        "property.type.noValue": [
          "false"
        ]
      }
    },
    "zlQqsTMu6B": {
      "auto": true,
      "data": {
        "sitePlan.existing.rule": [
          "required"
        ]
      }
    },
    "ztEGQPy8eA": {
      "auto": true,
      "answers": [
        "VpIfBLpKO6"
      ]
    },
    "zwHS8byx4h": {
      "auto": true
    }
  },
  "payments": [],
  "invitations_to_pay": []
}