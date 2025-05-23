// https://api.editor.planx.dev/admin/session/81bcaa0f-baf5-4573-ba0a-ea868c573faf/summary
export const mockPlanningPermissionSession = {
  flow: {
    id: "01e38c5d-e701-4e44-acdc-4d6b5cc3b854",
    slug: "apply-for-planning-permission",
    team: {
      slug: "lambeth",
      referenceCode: "LBH",
    },
  },
  created_at: "2023-08-31T17:33:46.22695+00:00",
  updated_at: "2023-09-21T09:49:05.072265+00:00",
  submitted_at: null,
  locked_at: null,
  sanitised_at: null,
  email: "example@example.com",
  passport: {
    "proposal.parking": [
      {
        type: "cars",
        existing: 0,
        proposed: 1,
      },
      {
        type: "disabled",
        existing: 1,
        proposed: 0,
      },
      {
        type: "cycles",
        existing: 1,
        proposed: 3,
      },
      {
        type: "offStreet.residential",
        existing: 1,
        proposed: 2,
      },
    ],
    "proposal.materials": [
      {
        type: "window",
        existing: "Glaze window",
        proposed: "Glaze window",
      },
      {
        type: "wall",
        existing: "Red bricks",
        proposed: "Brown bricks",
      },
    ],
    _nots: {
      "property.constraints.planning": [
        "articleFour",
        "listed",
        "locallyListed",
        "registeredPark",
        "designated.conservationArea",
        "designated.AONB",
        "designated.nationalPark",
        "designated.nationalPark.broads",
        "designated.WHS",
        "nature.SPA",
        "monument",
        "tpo",
        "nature.SSSI",
        "nature.SAC",
        "nature.ASNW",
        "designated",
        "articleFour.lambeth.caz",
        "road.classified",
      ],
    },
    _address: {
      x: 530787,
      y: 175754,
      pao: "40",
      town: "LONDON",
      uprn: "100021892955",
      usrn: "21901294",
      title: "40, STANSFIELD ROAD, LONDON",
      source: "os",
      street: "STANSFIELD ROAD",
      latitude: 51.4656522,
      postcode: "SW9 9RZ",
      blpu_code: "2",
      longitude: -0.1185926,
      planx_value: "residential.house.terrace",
      organisation: null,
      planx_description: "Terrace",
      single_line_address: "40, STANSFIELD ROAD, LONDON, LAMBETH, SW9 9RZ",
    },
    "user.role": ["proxy"],
    "0Dyfs4S5jG": "Metallic cladding, reflective. Multiple colours.",
    BpAMJoP25E: "Zinc panels",
    O9Uej0Dk9H: "Wood, painted.",
    R3zAy6ez8n: "Wooden sash windows, painted white",
    frGuJV6OZa: "London stock brick",
    k9c3xtUhBN: "Grey slate",
    rH87NM67xt: "No door present",
    v9fPz73Nuh: "Brushed steel.",
    _constraints: [
      {
        metadata: {
          tpo: {
            name: "Tree preservation zone",
            text: "A Tree Preservation Order (TPO) can be placed on single trees, groups of trees and even whole woodlands. Tree Preservation Orders are made by local planning authorities following [guidance](https://www.gov.uk/guidance/tree-preservation-orders-and-trees-in-conservation-areas) provided by the [Department for Levelling Up, Housing and Communities](https://www.gov.uk/government/organisations/department-for-levelling-up-housing-and-communities).\n\nEach [tree preservation order](/dataset/tree-preservation-order) may apply to a number of tree preservation order zones, and a number of individual [trees](/dataset/tree).\n\nThis dataset contains data from [a small group of local planning authorities](/about/) who we are working with to develop a [data specification for tree preservation orders](https://www.digital-land.info/guidance/specifications/tree-preservation-order).",
            plural: "Trees preservation zones",
            prefix: "",
            themes: ["environment"],
            dataset: "tree-preservation-zone",
            licence: "ogl3",
            "end-date": "",
            entities: "",
            typology: "geography",
            wikidata: "Q10884",
            wikipedia: "Tree",
            collection: "tree-preservation-order",
            "entry-date": "",
            "start-date": "",
            attribution: "crown-copyright",
            description: "An area covered by a tree preservation order",
            "entity-count": {
              count: 13161,
              dataset: "tree-preservation-zone",
            },
            "licence-text":
              "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "paint-options": "",
            "attribution-text": "© Crown copyright and database right 2023",
          },
          listed: {
            name: "Listed building outline",
            text: "The geospatial boundary for [listed buildings](https://historicengland.org.uk/listing/what-is-designation/listed-buildings) as designated by [Historic England](https://historicengland.org.uk/) as collected from local planning authorities.\n\nWe are [working with a group of local planning authorities](/about/) to help them publish their data to inform planning decisions, and to develop a [data specification for listed building outlines](https://www.digital-land.info/guidance/specifications/listed-building).\n\nWe expect to eventually merge this dataset with the [listed building](/dataset/listed-building) dataset.",
            plural: "Listed building outlines",
            prefix: "",
            themes: ["heritage"],
            dataset: "listed-building-outline",
            licence: "ogl3",
            "end-date": "",
            entities: "",
            typology: "geography",
            wikidata: "Q570600",
            wikipedia: "Listed_building",
            collection: "listed-building",
            "entry-date": "",
            "start-date": "",
            attribution: "crown-copyright",
            description: "boundary of a listed building",
            "entity-count": {
              count: 12237,
              dataset: "listed-building-outline",
            },
            "licence-text":
              "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "paint-options": {
              colour: "#F9C744",
            },
            "attribution-text": "© Crown copyright and database right 2023",
          },
          articleFour: {
            name: "Article 4 direction area",
            text: "A local planning authority may create an [article 4 direction](https://www.gov.uk/guidance/when-is-permission-required#article-4-direction) to alter or remove [permitted development rights](https://www.gov.uk/government/publications/permitted-development-rights-for-householders-technical-guidance) from a building or area.\n\nEach [article 4 direction](/dataset/article-4-direction) may apply to one or more article 4 direction areas, each with one or more [article 4 direction rules](/dataset/article-4-direction-rule).\n\nThis dataset contains data from [a small group of local planning authorities](/about/) who we are working with to develop a [data specification for article 4 directions](https://www.digital-land.info/guidance/specifications/article-4-direction).",
            plural: "Article 4 direction areas",
            prefix: "",
            themes: ["heritage"],
            dataset: "article-4-direction-area",
            licence: "ogl3",
            "end-date": "",
            entities: "",
            typology: "geography",
            wikidata: "",
            wikipedia: "",
            collection: "article-4-direction",
            "entry-date": "",
            "start-date": "",
            attribution: "crown-copyright",
            description:
              "Orders made by the local planning authority to remove all or some of the permitted development rights on a site in order to protect it",
            "entity-count": {
              count: 1369,
              dataset: "article-4-direction-area",
            },
            "licence-text":
              "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "paint-options": "",
            "attribution-text": "© Crown copyright and database right 2023",
          },
          monument: {
            name: "Scheduled monument",
            text: "Historic buildings or sites such as Roman remains, burial mounds, castles, bridges, earthworks, the remains of deserted villages and industrial sites can be designated scheduled monuments by the Secretary of State for [Digital, Culture, Media and Sport](https://www.gov.uk/government/organisations/department-for-digital-culture-media-sport). \n\nThis list of scheduled monuments is kept and maintained by [Historic England](https://historicengland.org.uk/).",
            plural: "Scheduled monuments",
            prefix: "",
            themes: ["heritage"],
            dataset: "scheduled-monument",
            licence: "ogl3",
            "end-date": "",
            entities: "",
            typology: "geography",
            wikidata: "Q219538",
            wikipedia: "Scheduled_monument",
            collection: "historic-england",
            "entry-date": "",
            "start-date": "",
            attribution: "historic-england",
            description: "",
            "entity-count": {
              count: 19935,
              dataset: "scheduled-monument",
            },
            "licence-text":
              "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "paint-options": {
              colour: "#0F9CDA",
            },
            "attribution-text":
              "© Historic England 2023. Contains Ordnance Survey data © Crown copyright and database right 2023.\nThe Historic England GIS Data contained in this material was obtained on [date].\nThe most publicly available up to date Historic England GIS Data can be obtained from [HistoricEngland.org.uk](https://historicengland.org.uk).",
          },
          "nature.SAC": {
            name: "Special area of conservation",
            text: "Special areas of conservation (SACs) are area of land which have been designated by\n[DEFRA](https://www.gov.uk/government/organisations/department-for-environment-food-rural-affairs),\nwith advice from the [Joint Nature Conservation Committee](https://jncc.gov.uk/),\nto protect specific habitats and species.\n\nDEFRA and [Natural England](https://www.gov.uk/government/organisations/natural-england) publish\n[guidance](https://www.gov.uk/guidance/protected-sites-and-areas-how-to-review-planning-applications)\non how to review planning applications in protected sites and areas.",
            plural: "Special areas of conservation",
            prefix: "",
            themes: ["environment"],
            dataset: "special-area-of-conservation",
            licence: "ogl3",
            "end-date": "",
            entities: "",
            typology: "geography",
            wikidata: "Q1191622",
            wikipedia: "Special_Area_of_Conservation",
            collection: "special-area-of-conservation",
            "entry-date": "",
            "start-date": "",
            attribution: "natural-england",
            description: "",
            "entity-count": {
              count: 256,
              dataset: "special-area-of-conservation",
            },
            "licence-text":
              "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "paint-options": {
              colour: "#7A8705",
            },
            "attribution-text":
              "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2023.",
          },
          "nature.ASNW": {
            name: "Ancient woodland",
            text: "An area designated as ancient woodland by Natural England.\n\nNatural England and Forestry Commission [Guidance](https://www.gov.uk/guidance/ancient-woodland-and-veteran-trees-protection-surveys-licences)  is used in planning decisions.",
            plural: "Ancient woodlands",
            prefix: "",
            themes: ["environment"],
            dataset: "ancient-woodland",
            licence: "ogl3",
            "end-date": "",
            entities: "",
            typology: "geography",
            wikidata: "Q3078732",
            wikipedia: "Ancient_woodland",
            collection: "ancient-woodland",
            "entry-date": "",
            "start-date": "",
            attribution: "natural-england",
            description:
              "An area that’s been wooded continuously since at least 1600 AD",
            "entity-count": {
              count: 44355,
              dataset: "ancient-woodland",
            },
            "licence-text":
              "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "paint-options": {
              colour: "#00703c",
              opacity: 0.2,
            },
            "attribution-text":
              "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2023.",
          },
          "nature.SSSI": {
            name: "Site of special scientific interest",
            text: "Sites of special scientific interest (SSSI) are nationally protected sites that have features such as wildlife or geology. \n\nSSSIs are designated by [Natural England](https://www.gov.uk/government/organisations/natural-england).\nThere is [guidance](https://www.gov.uk/guidance/protected-areas-sites-of-special-scientific-interest) to help local authorities decide on planning applications in protected SSSIs.",
            plural: "Sites of special scientific interest",
            prefix: "",
            themes: ["environment"],
            dataset: "site-of-special-scientific-interest",
            licence: "ogl3",
            "end-date": "",
            entities: "",
            typology: "geography",
            wikidata: "Q422211",
            wikipedia: "Site_of_Special_Scientific_Interest",
            collection: "site-of-special-scientific-interest",
            "entry-date": "",
            "start-date": "",
            attribution: "natural-england",
            description: "",
            "entity-count": {
              count: 4128,
              dataset: "site-of-special-scientific-interest",
            },
            "licence-text":
              "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "paint-options": {
              colour: "#308fac",
            },
            "attribution-text":
              "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2023.",
          },
          "articleFour.caz": {
            name: "Central activities zone",
            text: "The [Greater London Authority](https://www.london.gov.uk/) (GLA) designates a central area of London with [implications for planning](https://www.london.gov.uk/what-we-do/planning/implementing-london-plan/london-plan-guidance-and-spgs/central-activities-zone)\nThis dataset combines data provided by the GLA with the boundary from the individual London boroughs.",
            plural: "Central activities zones",
            prefix: "",
            themes: ["development"],
            dataset: "central-activities-zone",
            licence: "ogl3",
            "end-date": "",
            entities: "",
            typology: "geography",
            wikidata: "",
            wikipedia: "",
            collection: "central-activities-zone",
            "entry-date": "",
            "start-date": "",
            attribution: "crown-copyright",
            description: "",
            "entity-count": {
              count: 10,
              dataset: "central-activities-zone",
            },
            "licence-text":
              "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "paint-options": "",
            "attribution-text": "© Crown copyright and database right 2023",
          },
          locallyListed: {
            name: "Locally listed building",
            text: "A building or site in a local planning authority’s area that make a positive contribution to its local character and sense of place because of their heritage value. Although such heritage assets may not be nationally designated or even located within the boundaries of a conservation area, they may be offered some level of protection by the local planning authority identifying them on a formally adopted list of local heritage assets.\n\nThis is an experimental dataset of locally listed buildings found on [data.gov.uk](https://www.data.gov.uk/search?q=locally+listed+buildings).\nWe are [working with a group of local planning authorities](/about/) to help them publish their locally listed buildings, and to develop a data specification for locally listed buildings.",
            plural: "Locally listed buildings",
            prefix: "",
            themes: ["heritage"],
            dataset: "locally-listed-building",
            licence: "ogl3",
            "end-date": "",
            entities: "",
            typology: "geography",
            wikidata: "Q570600",
            wikipedia: "Listed_building#Locally_listed_buildings",
            collection: "listed-building",
            "entry-date": "",
            "start-date": "",
            attribution: "crown-copyright",
            description: "locally listed heritage assets, including buildings",
            "entity-count": {
              count: 448,
              dataset: "locally-listed-building",
            },
            "licence-text":
              "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "paint-options": {
              colour: "#F9C744",
            },
            "attribution-text": "© Crown copyright and database right 2023",
          },
          "nature.SPA": {
            name: "Special protection area",
            text: "[Special protection areas](https://naturalengland-defra.opendata.arcgis.com/maps/Defra::special-protection-areas-england/about) is an area designated \nfor the protection of birds and wildlife. This dataset is provided by [Natural England](https://www.gov.uk/government/organisations/natural-england).",
            plural: "Special protection areas",
            prefix: "",
            themes: ["environment"],
            dataset: "special-protection-area",
            licence: "ogl3",
            "end-date": "",
            entities: "",
            typology: "geography",
            wikidata: "",
            wikipedia: "",
            collection: "special-protection-area",
            "entry-date": "",
            "start-date": "",
            attribution: "natural-england",
            description: "",
            "entity-count": {
              count: 88,
              dataset: "special-protection-area",
            },
            "licence-text":
              "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "paint-options": "",
            "attribution-text":
              "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2023.",
          },
          "designated.WHS": {
            name: "World heritage site buffer zone",
            text: "A [World Heritage Site](/dataset/world-heritage-site) may have a [buffer zone](https://whc.unesco.org/en/series/25/) with implications for planning.",
            plural: "World heritage site buffer zones",
            prefix: "",
            themes: ["heritage"],
            dataset: "world-heritage-site-buffer-zone",
            licence: "ogl3",
            "end-date": "",
            entities: "",
            typology: "geography",
            wikidata: "Q9259",
            wikipedia: "World_Heritage_Site",
            collection: "historic-england",
            "entry-date": "",
            "start-date": "",
            attribution: "historic-england",
            description: "",
            "entity-count": {
              count: 8,
              dataset: "world-heritage-site-buffer-zone",
            },
            "licence-text":
              "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "paint-options": {
              colour: "#EB1EE5",
            },
            "attribution-text":
              "© Historic England 2023. Contains Ordnance Survey data © Crown copyright and database right 2023.\nThe Historic England GIS Data contained in this material was obtained on [date].\nThe most publicly available up to date Historic England GIS Data can be obtained from [HistoricEngland.org.uk](https://historicengland.org.uk).",
          },
          registeredPark: {
            name: "Historic parks and gardens",
            text: "Historic parks and gardens as listed by [Historic England](https://historicengland.org.uk/) in the [Register of Parks and Gardens of Special Historic Interest](https://historicengland.org.uk/listing/what-is-designation/registered-parks-and-gardens/).",
            plural: "Parks and gardens",
            prefix: "",
            themes: ["environment", "heritage"],
            dataset: "park-and-garden",
            licence: "ogl3",
            "end-date": "",
            entities: "",
            typology: "geography",
            wikidata: "Q6975250",
            wikipedia:
              "Register_of_Historic_Parks_and_Gardens_of_Special_Historic_Interest_in_England",
            collection: "historic-england",
            "entry-date": "",
            "start-date": "",
            attribution: "historic-england",
            description: "",
            "entity-count": {
              count: 1699,
              dataset: "park-and-garden",
            },
            "licence-text":
              "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "paint-options": {
              colour: "#0EB951",
            },
            "attribution-text":
              "© Historic England 2023. Contains Ordnance Survey data © Crown copyright and database right 2023.\nThe Historic England GIS Data contained in this material was obtained on [date].\nThe most publicly available up to date Historic England GIS Data can be obtained from [HistoricEngland.org.uk](https://historicengland.org.uk).",
          },
          "designated.AONB": {
            name: "Area of outstanding natural beauty",
            text: "An area of outstanding natural beauty (AONB) as designated by [Natural England](https://www.gov.uk/government/organisations/natural-england).\n\nNatural England provides [guidance](https://www.gov.uk/guidance/protected-sites-and-areas-how-to-review-planning-applications) to help local authorities decide on planning applications in protected sites and areas.",
            plural: "Areas of outstanding natural beauty",
            prefix: "",
            themes: ["environment"],
            dataset: "area-of-outstanding-natural-beauty",
            licence: "ogl3",
            "end-date": "",
            entities: "",
            typology: "geography",
            wikidata: "Q174945",
            wikipedia: "Area_of_Outstanding_Natural_Beauty",
            collection: "area-of-outstanding-natural-beauty",
            "entry-date": "",
            "start-date": "",
            attribution: "natural-england",
            description:
              "Land protected by law to conserve and enhance its natural beauty",
            "entity-count": {
              count: 34,
              dataset: "area-of-outstanding-natural-beauty",
            },
            "licence-text":
              "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "paint-options": {
              colour: "#d53880",
            },
            "attribution-text":
              "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2023.",
          },
          "designated.nationalPark": {
            name: "National park",
            text: "The administrative boundaries of [national park authorities](/dataset/national-park-authority) in England as provided by the ONS for the purposes of producing statistics.",
            plural: "National parks",
            prefix: "statistical-geography",
            themes: ["heritage"],
            dataset: "national-park",
            licence: "ogl3",
            "end-date": "",
            entities: "",
            typology: "geography",
            wikidata: "Q60256727",
            wikipedia: "National_park",
            collection: "national-park",
            "entry-date": "",
            "start-date": "",
            attribution: "ons-boundary",
            description: "",
            "entity-count": {
              count: 10,
              dataset: "national-park",
            },
            "licence-text":
              "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "paint-options": {
              colour: "#3DA52C",
            },
            "attribution-text":
              "Source: Office for National Statistics licensed under the Open Government Licence v.3.0\nContains OS data © Crown copyright and database right 2023",
          },
          "designated.conservationArea": {
            name: "Conservation area",
            text: "Local planning authorities are responsible for designating conservation areas, though [Historic England](https://historicengland.org.uk/) and the Secretary of State also have powers to create them.\n\nThis dataset also contains the boundaries of conservation areas from Historic England, as well as other data found on [data.gov.uk](https://www.data.gov.uk/search?q=conservation+area) and currently contains a number of duplicate areas we are working to remove.\n\nWe are also [working with a group of local planning authorities](/about/) to help them publish their conservation areas, and to develop a [data specification for conservation areas](https://www.digital-land.info/guidance/specifications/conservation-area).\n\nHistoric England provide [guidance](https://historicengland.org.uk/advice/your-home/owning-historic-property/conservation-area/) to help householders understand the implications of living in a conservation area for planning applications.",
            plural: "Conservation areas",
            prefix: "",
            themes: ["heritage"],
            dataset: "conservation-area",
            licence: "ogl3",
            "end-date": "",
            entities: "",
            typology: "geography",
            wikidata: "Q5162904",
            wikipedia: "Conservation_area_(United_Kingdom)",
            collection: "conservation-area",
            "entry-date": "",
            "start-date": "",
            attribution: "historic-england",
            description:
              "Special architectural or historic interest, the character or appearance of which it is desirable to preserve or enhance",
            "entity-count": {
              count: 8600,
              dataset: "conservation-area",
            },
            "licence-text":
              "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "paint-options": {
              colour: "#78AA00",
            },
            "attribution-text":
              "© Historic England 2023. Contains Ordnance Survey data © Crown copyright and database right 2023.\nThe Historic England GIS Data contained in this material was obtained on [date].\nThe most publicly available up to date Historic England GIS Data can be obtained from [HistoricEngland.org.uk](https://historicengland.org.uk).",
          },
        },
        constraints: {
          tpo: {
            fn: "tpo",
            text: "is not in a Tree Preservation Order (TPO) Zone",
            value: false,
            category: "Trees",
          },
          listed: {
            fn: "listed",
            text: "is not, or is not within, a Listed Building",
            value: false,
            category: "Heritage and conservation",
          },
          articleFour: {
            fn: "articleFour",
            text: "is not subject to local permitted development restrictions (known as Article 4 directions)",
            value: false,
            category: "General policy",
          },
          monument: {
            fn: "monument",
            text: "is not the site of a Scheduled Monument",
            value: false,
            category: "Heritage and conservation",
          },
          designated: {
            value: false,
          },
          "nature.SAC": {
            fn: "nature.SAC",
            text: "is not in a Special Area of Conservation (SAC)",
            value: false,
            category: "Ecology",
          },
          "nature.ASNW": {
            fn: "nature.ASNW",
            text: "is not in an Ancient Semi-Natural Woodland (ASNW)",
            value: false,
            category: "Ecology",
          },
          "nature.SSSI": {
            fn: "nature.SSSI",
            text: "is not a Site of Special Scientific Interest (SSSI)",
            value: false,
            category: "Ecology",
          },
          locallyListed: {
            fn: "locallyListed",
            text: "is not, or is not within, a Locally Listed Building",
            value: false,
            category: "Heritage and conservation",
          },
          "nature.SPA": {
            fn: "nature.SPA",
            text: "is not in a Special Protection Area (SPA)",
            value: false,
            category: "Heritage and conservation",
          },
          "designated.WHS": {
            fn: "designated.WHS",
            text: "is not an UNESCO World Heritage Site",
            value: false,
            category: "Heritage and conservation",
          },
          registeredPark: {
            fn: "registeredPark",
            text: "is not in a Historic Park or Garden",
            value: false,
            category: "Heritage and conservation",
          },
          "designated.AONB": {
            fn: "designated.AONB",
            text: "is not in an Area of Outstanding Natural Beauty",
            value: false,
            category: "Heritage and conservation",
          },
          "articleFour.lambeth.caz": {
            fn: "articleFour.caz",
            text: "is not in the Central Activities Zone",
            value: false,
            category: "General policy",
          },
          "designated.nationalPark": {
            fn: "designated.nationalPark",
            text: "is not in a National Park",
            value: false,
            category: "Heritage and conservation",
          },
          "designated.conservationArea": {
            fn: "designated.conservationArea",
            text: "is not in a Conservation Area",
            value: false,
            category: "Heritage and conservation",
          },
          "designated.nationalPark.broads": {
            fn: "designated.nationalPark.broads",
            value: false,
          },
        },
        planxRequest:
          "https://api.editor.planx.dev/gis/lambeth?geom=POLYGON+%28%28-0.1186569035053321+51.465703531871384%2C+-0.1185938715934822+51.465724418998775%2C+-0.1184195280075143+51.46552473766957%2C+-0.11848390102387167+51.4655038504508%2C+-0.1186569035053321+51.465703531871384%29%29&analytics=false&sessionId=81bcaa0f-baf5-4573-ba0a-ea868c573faf",
        sourceRequest:
          "https://www.planning.data.gov.uk/entity.json?entries=current&geometry=POLYGON+%28%28-0.1186569035053321+51.465703531871384%2C+-0.1185938715934822+51.465724418998775%2C+-0.1184195280075143+51.46552473766957%2C+-0.11848390102387167+51.4655038504508%2C+-0.1186569035053321+51.465703531871384%29%29&geometry_relation=intersects&limit=100&dataset=article-4-direction-area&dataset=central-activities-zone&dataset=listed-building&dataset=listed-building-outline&dataset=locally-listed-building&dataset=park-and-garden&dataset=conservation-area&dataset=area-of-outstanding-natural-beauty&dataset=national-park&dataset=world-heritage-site&dataset=world-heritage-site-buffer-zone&dataset=special-protection-area&dataset=scheduled-monument&dataset=tree&dataset=tree-preservation-order&dataset=tree-preservation-zone&dataset=site-of-special-scientific-interest&dataset=special-area-of-conservation&dataset=ancient-woodland",
      },
      {
        metadata: {
          "road.classified": {
            name: "Classified road",
            text: "This will effect your project if you are looking to add a dropped kerb. It may also impact some agricultural or forestry projects within 25 metres of a classified road.",
            plural: "Classified roads",
          },
        },
        constraints: {
          "road.classified": {
            fn: "road.classified",
            text: "is not on a Classified Road",
            value: false,
            category: "General policy",
          },
        },
        planxRequest: "https://api.editor.planx.dev/roads?usrn=21901294",
        sourceRequest:
          "https://api.os.uk/features/v1/wfs?service=WFS&request=GetFeature&version=2.0.0&typeNames=Highways_RoadLink&outputFormat=GEOJSON&srsName=urn%3Aogc%3Adef%3Acrs%3AEPSG%3A%3A4326&count=1&filter=%0A++++%3Cogc%3AFilter%3E%0A++++++%3Cogc%3APropertyIsLike+wildCard%3D%22%25%22+singleChar%3D%22%23%22+escapeChar%3D%22%21%22%3E%0A++++++++%3Cogc%3APropertyName%3EFormsPartOf%3C%2Fogc%3APropertyName%3E%0A++++++++%3Cogc%3ALiteral%3E%25Street%23usrn21901294%25%3C%2Fogc%3ALiteral%3E%0A++++++%3C%2Fogc%3APropertyIsLike%3E%0A++++%3C%2Fogc%3AFilter%3E%0A++&",
      },
    ],
    "property.EPC": ["false"],
    "property.type": ["residential.house.terrace"],
    "applicant.type": ["individual"],
    "applicant.title": "Mr",
    "property.region": ["London"],
    "application.type": ["pp.full.householder"],
    "proposal.started": ["false"],
    "applicant.interest": ["owner.sole"],
    "applicant.resident": ["true"],
    "applicant.name.last": "Bowie",
    "proposal.start.date": "2024-05-01",
    "applicant.agent.form": ["Yes"],
    "applicant.name.first": "David",
    "property.titleNumber": ["unknown"],
    "proposal.description":
      "Roof extension to the rear of the property, incorporating starship launchpad.",
    "proposal.extend.area": 45,
    "proposal.projectType": ["extend.roof.dormer"],
    "applicant.agent.email": "ziggy@example.com",
    "applicant.agent.title": "Mx",
    "applicant.siteContact.role": ["proxy"],
    "property.EPCKnown.form": ["The property does not have one"],
    "proposal.site.area": 125.92,
    "proposal.site": {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-0.1186569035053321, 51.465703531871384],
            [-0.1185938715934822, 51.465724418998775],
            [-0.1184195280075143, 51.46552473766957],
            [-0.11848390102387167, 51.4655038504508],
            [-0.1186569035053321, 51.465703531871384],
          ],
        ],
      },
      properties: null,
    },
    "proposal.floorArea.new": ["lessThan100"],
    "proposal.treeWorksOnly": ["false"],
    "applicant.agent.address": {
      town: "London",
      line1: "40 Stansfield Road",
      line2: "Brixton",
      county: "Greater London",
      country: "UK",
      postcode: "SW9 9RZ",
    },
    "applicant.interest.form": ["Sole owner"],
    "application.fee.payable": 206,
    "proposal.vehicleParking": [
      "cars.offStreet.residents",
      "bicycles.offStreet",
    ],
    "_contact.applicant.agent": {
      "applicant.agent": {
        email: "ziggy@example.com",
        phone: "01100 0110 0011",
        title: "Mx",
        lastName: "Stardust",
        firstName: "Ziggy",
        organisation: "",
      },
    },
    "application.preAppAdvice": ["false"],
    "application.resubmission": ["false"],
    "heritageStatement.needed": ["no"],
    "proposal.completion.date": "2024-05-02",
    "proposal.droppedKerbOnly": ["false"],
    "applicant.agent.name.last": "Stardust",
    "roofPlan.existing": [
      {
        url: "https://api.editor.planx.dev/file/private/vg0av01p/RoofPlan.pdf",
        rule: {
          fn: "proposal.projectType",
          val: "extend.roof",
          operator: "Equals",
          condition: "RequiredIf",
        },
        filename: "RoofPlan.pdf",
        cachedSlot: {
          id: "PuYGWU1IgUhlnUTwKaenu",
          url: "https://api.editor.planx.dev/file/private/vg0av01p/RoofPlan.pdf",
          file: {
            path: "RoofPlan.pdf",
            size: 79416,
            type: "application/pdf",
          },
          status: "success",
          progress: 1,
        },
      },
    ],
    "sitePlan.existing": [
      {
        url: "https://api.editor.planx.dev/file/private/ka97yl2c/Site%20plan.pdf",
        rule: {
          fn: "application.sitePlan.recommended",
          val: "true",
          operator: "Equals",
          condition: "RequiredIf",
        },
        filename: "Site plan.pdf",
        cachedSlot: {
          id: "ECplQji8z7HJFdHdZNsZU",
          url: "https://api.editor.planx.dev/file/private/ka97yl2c/Site%20plan.pdf",
          file: {
            path: "Site plan.pdf",
            size: 1041815,
            type: "application/pdf",
          },
          status: "success",
          progress: 1,
        },
      },
    ],
    "roofPlan.proposed": [
      {
        url: "https://api.editor.planx.dev/file/private/vg0av01p/RoofPlan.pdf",
        rule: {
          fn: "proposal.projectType",
          val: "extend.roof",
          operator: "Equals",
          condition: "RequiredIf",
        },
        filename: "RoofPlan.pdf",
        cachedSlot: {
          id: "PuYGWU1IgUhlnUTwKaenu",
          url: "https://api.editor.planx.dev/file/private/vg0av01p/RoofPlan.pdf",
          file: {
            path: "RoofPlan.pdf",
            size: 79416,
            type: "application/pdf",
          },
          status: "success",
          progress: 1,
        },
      },
    ],
    "sitePlan.proposed": [
      {
        url: "https://api.editor.planx.dev/file/private/ka97yl2c/Site%20plan.pdf",
        rule: {
          fn: "application.sitePlan.recommended",
          val: "true",
          operator: "Equals",
          condition: "RequiredIf",
        },
        filename: "Site plan.pdf",
        cachedSlot: {
          id: "ECplQji8z7HJFdHdZNsZU",
          url: "https://api.editor.planx.dev/file/private/ka97yl2c/Site%20plan.pdf",
          file: {
            path: "Site plan.pdf",
            size: 1041815,
            type: "application/pdf",
          },
          status: "success",
          progress: 1,
        },
      },
    ],
    "applicant.agent.name.first": "Ziggy",
    "applicant.sameAddress.form": ["Yes"],
    "application.fee.calculated": 206,
    "elevations.existing": [
      {
        url: "https://api.editor.planx.dev/file/private/osprppqo/Elevations.pdf",
        rule: {
          fn: "application.elevations.recommended",
          val: "true",
          operator: "Equals",
          condition: "RequiredIf",
        },
        filename: "Elevations.pdf",
        cachedSlot: {
          id: "hREAKPzyrCX0PeFTk0KQP",
          url: "https://api.editor.planx.dev/file/private/osprppqo/Elevations.pdf",
          file: {
            path: "Elevations.pdf",
            size: 116018,
            type: "application/pdf",
          },
          status: "success",
          progress: 1,
        },
      },
    ],
    "floorPlan.existing": [
      {
        url: "https://api.editor.planx.dev/file/private/cri3ziaj/Plan.pdf",
        rule: {
          fn: "application.floorPlan.recommended",
          val: "true",
          operator: "Equals",
          condition: "RequiredIf",
        },
        filename: "Plan.pdf",
        cachedSlot: {
          id: "wFnggIhAk85UsfDY2Cx8C",
          url: "https://api.editor.planx.dev/file/private/cri3ziaj/Plan.pdf",
          file: {
            path: "Plan.pdf",
            size: 85548,
            type: "application/pdf",
          },
          status: "success",
          progress: 1,
        },
      },
    ],
    "elevations.proposed": [
      {
        url: "https://api.editor.planx.dev/file/private/osprppqo/Elevations.pdf",
        rule: {
          fn: "application.elevations.recommended",
          val: "true",
          operator: "Equals",
          condition: "RequiredIf",
        },
        filename: "Elevations.pdf",
        cachedSlot: {
          id: "hREAKPzyrCX0PeFTk0KQP",
          url: "https://api.editor.planx.dev/file/private/osprppqo/Elevations.pdf",
          file: {
            path: "Elevations.pdf",
            size: 116018,
            type: "application/pdf",
          },
          status: "success",
          progress: 1,
        },
      },
    ],
    "floorPlan.proposed": [
      {
        url: "https://api.editor.planx.dev/file/private/cri3ziaj/Plan.pdf",
        rule: {
          fn: "application.floorPlan.recommended",
          val: "true",
          operator: "Equals",
          condition: "RequiredIf",
        },
        filename: "Plan.pdf",
        cachedSlot: {
          id: "wFnggIhAk85UsfDY2Cx8C",
          url: "https://api.editor.planx.dev/file/private/cri3ziaj/Plan.pdf",
          file: {
            path: "Plan.pdf",
            size: 85548,
            type: "application/pdf",
          },
          status: "success",
          progress: 1,
        },
      },
    ],
    "applicant.agent.phone.primary": "01100 0110 0011",
    "application.preAppAdvice.form": ["No"],
    "proposal.cars.number.existing": 1,
    "proposal.cars.number.proposed": 1,
    "property.titleNumberKnown.form": ["No"],
    "applicant.ownership.certificate": ["a"],
    "proposal.site.area.hectares": 0.012592,
    "proposal.site.buffered": {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-0.11960965083371834, 51.46538315936233],
            [-0.11943664539774211, 51.465183479343686],
            [-0.11931928543457863, 51.4650747997052],
            [-0.1191704216742312, 51.46498230072536],
            [-0.11899566818313785, 51.464909470690905],
            [-0.11880161527066553, 51.46485905612597],
            [-0.1185955809698827, 51.464832958227824],
            [-0.11838533509046834, 51.46483216117893],
            [-0.11817880624506308, 51.46485669503692],
            [-0.11798378289081246, 51.46490563460123],
            [-0.11791941048943819, 51.464926521546175],
            [-0.11773979059125952, 51.46499975082598],
            [-0.11758689174978668, 51.465093618329306],
            [-0.11746672474803242, 51.465204434033396],
            [-0.11738401375124456, 51.46532784163636],
            [-0.11734201056826696, 51.465458989796396],
            [-0.11734236677558456, 51.46559272283597],
            [-0.11738506873739776, 51.46572378341594],
            [-0.1174684380844562, 51.465847019213165],
            [-0.11764277873977036, 51.46604670195268],
            [-0.11776117132495001, 51.46615549898301],
            [-0.11791118748934425, 51.46624792524081],
            [-0.11808713020281, 51.46632047063018],
            [-0.11828231771386549, 51.46637038006127],
            [-0.11848933731696491, 51.46639575809297],
            [-0.11870032689540404, 51.46639564092588],
            [-0.11890727354233499, 51.4663700330097],
            [-0.11910231791211683, 51.466319906874375],
            [-0.11916535041380635, 51.466299019474384],
            [-0.11934270010976643, 51.466225456700705],
            [-0.11949349013034068, 51.46613168124391],
            [-0.11961188084501818, 51.46602132484859],
            [-0.11969328748603446, 51.46589866137915],
            [-0.11973455768111596, 51.465768441290464],
            [-0.11973409349603951, 51.465635707645276],
            [-0.11969191326666717, 51.46550560080558],
            [-0.11960965083371834, 51.46538315936233],
          ],
        ],
      },
      properties: {},
    },
    "property.localAuthorityDistrict": ["Lambeth"],
    "proposal.visibleFromPublicRealm": ["Information not provided"],
    "applicant.provideApplicantsEmail": ["false"],
    "applicant.provideApplicantsPhone": ["false"],
    "application.declaration.accurate": ["true"],
    "application.fee.reduction.sports": ["false"],
    "application.fee.reference.govPay": {
      moto: false,
      state: {
        status: "created",
        finished: false,
      },
      _links: {
        self: {
          href: "https://publicapi.payments.service.gov.uk/v1/payments/5673suh81flgoh8idng0jjhq8g",
          method: "GET",
        },
        cancel: {
          href: "https://publicapi.payments.service.gov.uk/v1/payments/5673suh81flgoh8idng0jjhq8g/cancel",
          method: "POST",
        },
        events: {
          href: "https://publicapi.payments.service.gov.uk/v1/payments/5673suh81flgoh8idng0jjhq8g/events",
          method: "GET",
        },
        refunds: {
          href: "https://publicapi.payments.service.gov.uk/v1/payments/5673suh81flgoh8idng0jjhq8g/refunds",
          method: "GET",
        },
        next_url: {
          href: "https://card.payments.service.gov.uk/secure/a9bd4cd2-ca11-447e-a26a-886d362a4c4f",
          method: "GET",
        },
        next_url_post: {
          href: "https://card.payments.service.gov.uk/secure",
          type: "application/x-www-form-urlencoded",
          method: "POST",
          params: {
            chargeTokenId: "a9bd4cd2-ca11-447e-a26a-886d362a4c4f",
          },
        },
      },
      amount: 206,
      language: "en",
      reference: "81bcaa0f-baf5-4573-ba0a-ea868c573faf",
      payment_id: "5673suh81flgoh8idng0jjhq8g",
      return_url:
        "https://editor.planx.dev/lambeth/apply-for-planning-permission/published?sessionId=81bcaa0f-baf5-4573-ba0a-ea868c573faf&email=example%40example.com",
      description: "New application",
      created_date: "2023-08-31T17:50:43.647Z",
      refund_summary: {
        status: "pending",
        amount_available: 20600,
        amount_submitted: 0,
      },
      delayed_capture: false,
      payment_provider: "sandbox",
      authorisation_mode: "web",
      settlement_summary: {},
    },
    "application.sitePlan.recommended": ["true"],
    "application.floorPlan.recommended": ["true"],
    "proposal.bicycles.number.existing": 2,
    "proposal.bicycles.number.proposed": 2,
    "application.declaration.connection": ["none"],
    "application.elevations.recommended": ["true"],
    "proposal.cars.club.number.existing": 0,
    "proposal.cars.club.number.proposed": 0,
    "application.fee.exemption.disability": ["false"],
    "application.declaration.accurate.form": ["Yes"],
    "application.fee.reduction.alternative": ["false"],
    "application.fee.exemption.resubmission": ["false"],
    "proposal.cars.disabled.number.existing": 0,
    "proposal.cars.disabled.number.proposed": 0,
    "application.declaration.connection.form": ["No connections"],
    "application.fee.reduction.parishCouncil": ["false"],
    "application.floorPlanProposed.recommended": ["true"],
    "application.elevationsProposed.recommended": ["true"],
    "proposal.bicycles.offStreet.number.existing": 2,
    "proposal.bicycles.offStreet.number.proposed": 2,
    "proposal.cars.offStreet.residents.number.existing": 1,
    "proposal.cars.offStreet.residents.number.proposed": 1,
  },
  breadcrumbs: {
    "0Dyfs4S5jG": {
      auto: false,
      data: {
        "0Dyfs4S5jG": "Metallic cladding, reflective. Multiple colours.",
      },
    },
    "0UTLAZwv5M": {
      auto: false,
    },
    "0qk0juZgvT": {
      auto: true,
      answers: ["6cLJGhc43X"],
    },
    "2BTvCEtHSg": {
      auto: false,
      answers: ["w0zJ4Jkv6E"],
    },
    "2fPL5miNqx": {
      auto: true,
      answers: ["ywnW81Ru65"],
    },
    "34Qx5DNCwn": {
      auto: true,
      answers: ["kKl0G7oPno"],
    },
    "3bWKJZwv5M": {
      auto: true,
      answers: ["igwGPZwv5M"],
    },
    "3nucvbEiod": {
      auto: false,
      answers: ["XgfkAdHqJE"],
    },
    "4SS9lfFTTq": {
      auto: false,
      data: {
        "proposal.start.date": "2024-05-01",
      },
    },
    "5BvOSdcGqe": {
      auto: false,
      answers: ["phNHyuVqvs"],
    },
    "6AiepfFTTq": {
      auto: true,
      answers: ["iM0mLjWFVD"],
    },
    "74H8rZwv5M": {
      auto: false,
      data: {
        _nots: {
          "property.constraints.planning": [
            "articleFour",
            "listed",
            "locallyListed",
            "registeredPark",
            "designated.conservationArea",
            "designated.AONB",
            "designated.nationalPark",
            "designated.nationalPark.broads",
            "designated.WHS",
            "nature.SPA",
            "monument",
            "tpo",
            "nature.SSSI",
            "nature.SAC",
            "nature.ASNW",
            "designated",
            "articleFour.lambeth.caz",
            "road.classified",
          ],
        },
        _constraints: [
          {
            metadata: {
              tpo: {
                name: "Tree preservation zone",
                text: "A Tree Preservation Order (TPO) can be placed on single trees, groups of trees and even whole woodlands. Tree Preservation Orders are made by local planning authorities following [guidance](https://www.gov.uk/guidance/tree-preservation-orders-and-trees-in-conservation-areas) provided by the [Department for Levelling Up, Housing and Communities](https://www.gov.uk/government/organisations/department-for-levelling-up-housing-and-communities).\n\nEach [tree preservation order](/dataset/tree-preservation-order) may apply to a number of tree preservation order zones, and a number of individual [trees](/dataset/tree).\n\nThis dataset contains data from [a small group of local planning authorities](/about/) who we are working with to develop a [data specification for tree preservation orders](https://www.digital-land.info/guidance/specifications/tree-preservation-order).",
                plural: "Trees preservation zones",
                prefix: "",
                themes: ["environment"],
                dataset: "tree-preservation-zone",
                licence: "ogl3",
                "end-date": "",
                entities: "",
                typology: "geography",
                wikidata: "Q10884",
                wikipedia: "Tree",
                collection: "tree-preservation-order",
                "entry-date": "",
                "start-date": "",
                attribution: "crown-copyright",
                description: "An area covered by a tree preservation order",
                "entity-count": {
                  count: 13161,
                  dataset: "tree-preservation-zone",
                },
                "licence-text":
                  "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "paint-options": "",
                "attribution-text":
                  "© Crown copyright and database right 2023",
              },
              listed: {
                name: "Listed building outline",
                text: "The geospatial boundary for [listed buildings](https://historicengland.org.uk/listing/what-is-designation/listed-buildings) as designated by [Historic England](https://historicengland.org.uk/) as collected from local planning authorities.\n\nWe are [working with a group of local planning authorities](/about/) to help them publish their data to inform planning decisions, and to develop a [data specification for listed building outlines](https://www.digital-land.info/guidance/specifications/listed-building).\n\nWe expect to eventually merge this dataset with the [listed building](/dataset/listed-building) dataset.",
                plural: "Listed building outlines",
                prefix: "",
                themes: ["heritage"],
                dataset: "listed-building-outline",
                licence: "ogl3",
                "end-date": "",
                entities: "",
                typology: "geography",
                wikidata: "Q570600",
                wikipedia: "Listed_building",
                collection: "listed-building",
                "entry-date": "",
                "start-date": "",
                attribution: "crown-copyright",
                description: "boundary of a listed building",
                "entity-count": {
                  count: 12237,
                  dataset: "listed-building-outline",
                },
                "licence-text":
                  "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "paint-options": {
                  colour: "#F9C744",
                },
                "attribution-text":
                  "© Crown copyright and database right 2023",
              },
              articleFour: {
                name: "Article 4 direction area",
                text: "A local planning authority may create an [article 4 direction](https://www.gov.uk/guidance/when-is-permission-required#article-4-direction) to alter or remove [permitted development rights](https://www.gov.uk/government/publications/permitted-development-rights-for-householders-technical-guidance) from a building or area.\n\nEach [article 4 direction](/dataset/article-4-direction) may apply to one or more article 4 direction areas, each with one or more [article 4 direction rules](/dataset/article-4-direction-rule).\n\nThis dataset contains data from [a small group of local planning authorities](/about/) who we are working with to develop a [data specification for article 4 directions](https://www.digital-land.info/guidance/specifications/article-4-direction).",
                plural: "Article 4 direction areas",
                prefix: "",
                themes: ["heritage"],
                dataset: "article-4-direction-area",
                licence: "ogl3",
                "end-date": "",
                entities: "",
                typology: "geography",
                wikidata: "",
                wikipedia: "",
                collection: "article-4-direction",
                "entry-date": "",
                "start-date": "",
                attribution: "crown-copyright",
                description:
                  "Orders made by the local planning authority to remove all or some of the permitted development rights on a site in order to protect it",
                "entity-count": {
                  count: 1369,
                  dataset: "article-4-direction-area",
                },
                "licence-text":
                  "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "paint-options": "",
                "attribution-text":
                  "© Crown copyright and database right 2023",
              },
              monument: {
                name: "Scheduled monument",
                text: "Historic buildings or sites such as Roman remains, burial mounds, castles, bridges, earthworks, the remains of deserted villages and industrial sites can be designated scheduled monuments by the Secretary of State for [Digital, Culture, Media and Sport](https://www.gov.uk/government/organisations/department-for-digital-culture-media-sport). \n\nThis list of scheduled monuments is kept and maintained by [Historic England](https://historicengland.org.uk/).",
                plural: "Scheduled monuments",
                prefix: "",
                themes: ["heritage"],
                dataset: "scheduled-monument",
                licence: "ogl3",
                "end-date": "",
                entities: "",
                typology: "geography",
                wikidata: "Q219538",
                wikipedia: "Scheduled_monument",
                collection: "historic-england",
                "entry-date": "",
                "start-date": "",
                attribution: "historic-england",
                description: "",
                "entity-count": {
                  count: 19935,
                  dataset: "scheduled-monument",
                },
                "licence-text":
                  "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "paint-options": {
                  colour: "#0F9CDA",
                },
                "attribution-text":
                  "© Historic England 2023. Contains Ordnance Survey data © Crown copyright and database right 2023.\nThe Historic England GIS Data contained in this material was obtained on [date].\nThe most publicly available up to date Historic England GIS Data can be obtained from [HistoricEngland.org.uk](https://historicengland.org.uk).",
              },
              "nature.SAC": {
                name: "Special area of conservation",
                text: "Special areas of conservation (SACs) are area of land which have been designated by\n[DEFRA](https://www.gov.uk/government/organisations/department-for-environment-food-rural-affairs),\nwith advice from the [Joint Nature Conservation Committee](https://jncc.gov.uk/),\nto protect specific habitats and species.\n\nDEFRA and [Natural England](https://www.gov.uk/government/organisations/natural-england) publish\n[guidance](https://www.gov.uk/guidance/protected-sites-and-areas-how-to-review-planning-applications)\non how to review planning applications in protected sites and areas.",
                plural: "Special areas of conservation",
                prefix: "",
                themes: ["environment"],
                dataset: "special-area-of-conservation",
                licence: "ogl3",
                "end-date": "",
                entities: "",
                typology: "geography",
                wikidata: "Q1191622",
                wikipedia: "Special_Area_of_Conservation",
                collection: "special-area-of-conservation",
                "entry-date": "",
                "start-date": "",
                attribution: "natural-england",
                description: "",
                "entity-count": {
                  count: 256,
                  dataset: "special-area-of-conservation",
                },
                "licence-text":
                  "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "paint-options": {
                  colour: "#7A8705",
                },
                "attribution-text":
                  "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2023.",
              },
              "nature.ASNW": {
                name: "Ancient woodland",
                text: "An area designated as ancient woodland by Natural England.\n\nNatural England and Forestry Commission [Guidance](https://www.gov.uk/guidance/ancient-woodland-and-veteran-trees-protection-surveys-licences)  is used in planning decisions.",
                plural: "Ancient woodlands",
                prefix: "",
                themes: ["environment"],
                dataset: "ancient-woodland",
                licence: "ogl3",
                "end-date": "",
                entities: "",
                typology: "geography",
                wikidata: "Q3078732",
                wikipedia: "Ancient_woodland",
                collection: "ancient-woodland",
                "entry-date": "",
                "start-date": "",
                attribution: "natural-england",
                description:
                  "An area that’s been wooded continuously since at least 1600 AD",
                "entity-count": {
                  count: 44355,
                  dataset: "ancient-woodland",
                },
                "licence-text":
                  "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "paint-options": {
                  colour: "#00703c",
                  opacity: 0.2,
                },
                "attribution-text":
                  "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2023.",
              },
              "nature.SSSI": {
                name: "Site of special scientific interest",
                text: "Sites of special scientific interest (SSSI) are nationally protected sites that have features such as wildlife or geology. \n\nSSSIs are designated by [Natural England](https://www.gov.uk/government/organisations/natural-england).\nThere is [guidance](https://www.gov.uk/guidance/protected-areas-sites-of-special-scientific-interest) to help local authorities decide on planning applications in protected SSSIs.",
                plural: "Sites of special scientific interest",
                prefix: "",
                themes: ["environment"],
                dataset: "site-of-special-scientific-interest",
                licence: "ogl3",
                "end-date": "",
                entities: "",
                typology: "geography",
                wikidata: "Q422211",
                wikipedia: "Site_of_Special_Scientific_Interest",
                collection: "site-of-special-scientific-interest",
                "entry-date": "",
                "start-date": "",
                attribution: "natural-england",
                description: "",
                "entity-count": {
                  count: 4128,
                  dataset: "site-of-special-scientific-interest",
                },
                "licence-text":
                  "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "paint-options": {
                  colour: "#308fac",
                },
                "attribution-text":
                  "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2023.",
              },
              "articleFour.caz": {
                name: "Central activities zone",
                text: "The [Greater London Authority](https://www.london.gov.uk/) (GLA) designates a central area of London with [implications for planning](https://www.london.gov.uk/what-we-do/planning/implementing-london-plan/london-plan-guidance-and-spgs/central-activities-zone)\nThis dataset combines data provided by the GLA with the boundary from the individual London boroughs.",
                plural: "Central activities zones",
                prefix: "",
                themes: ["development"],
                dataset: "central-activities-zone",
                licence: "ogl3",
                "end-date": "",
                entities: "",
                typology: "geography",
                wikidata: "",
                wikipedia: "",
                collection: "central-activities-zone",
                "entry-date": "",
                "start-date": "",
                attribution: "crown-copyright",
                description: "",
                "entity-count": {
                  count: 10,
                  dataset: "central-activities-zone",
                },
                "licence-text":
                  "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "paint-options": "",
                "attribution-text":
                  "© Crown copyright and database right 2023",
              },
              locallyListed: {
                name: "Locally listed building",
                text: "A building or site in a local planning authority’s area that make a positive contribution to its local character and sense of place because of their heritage value. Although such heritage assets may not be nationally designated or even located within the boundaries of a conservation area, they may be offered some level of protection by the local planning authority identifying them on a formally adopted list of local heritage assets.\n\nThis is an experimental dataset of locally listed buildings found on [data.gov.uk](https://www.data.gov.uk/search?q=locally+listed+buildings).\nWe are [working with a group of local planning authorities](/about/) to help them publish their locally listed buildings, and to develop a data specification for locally listed buildings.",
                plural: "Locally listed buildings",
                prefix: "",
                themes: ["heritage"],
                dataset: "locally-listed-building",
                licence: "ogl3",
                "end-date": "",
                entities: "",
                typology: "geography",
                wikidata: "Q570600",
                wikipedia: "Listed_building#Locally_listed_buildings",
                collection: "listed-building",
                "entry-date": "",
                "start-date": "",
                attribution: "crown-copyright",
                description:
                  "locally listed heritage assets, including buildings",
                "entity-count": {
                  count: 448,
                  dataset: "locally-listed-building",
                },
                "licence-text":
                  "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "paint-options": {
                  colour: "#F9C744",
                },
                "attribution-text":
                  "© Crown copyright and database right 2023",
              },
              "nature.SPA": {
                name: "Special protection area",
                text: "[Special protection areas](https://naturalengland-defra.opendata.arcgis.com/maps/Defra::special-protection-areas-england/about) is an area designated \nfor the protection of birds and wildlife. This dataset is provided by [Natural England](https://www.gov.uk/government/organisations/natural-england).",
                plural: "Special protection areas",
                prefix: "",
                themes: ["environment"],
                dataset: "special-protection-area",
                licence: "ogl3",
                "end-date": "",
                entities: "",
                typology: "geography",
                wikidata: "",
                wikipedia: "",
                collection: "special-protection-area",
                "entry-date": "",
                "start-date": "",
                attribution: "natural-england",
                description: "",
                "entity-count": {
                  count: 88,
                  dataset: "special-protection-area",
                },
                "licence-text":
                  "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "paint-options": "",
                "attribution-text":
                  "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2023.",
              },
              "designated.WHS": {
                name: "World heritage site buffer zone",
                text: "A [World Heritage Site](/dataset/world-heritage-site) may have a [buffer zone](https://whc.unesco.org/en/series/25/) with implications for planning.",
                plural: "World heritage site buffer zones",
                prefix: "",
                themes: ["heritage"],
                dataset: "world-heritage-site-buffer-zone",
                licence: "ogl3",
                "end-date": "",
                entities: "",
                typology: "geography",
                wikidata: "Q9259",
                wikipedia: "World_Heritage_Site",
                collection: "historic-england",
                "entry-date": "",
                "start-date": "",
                attribution: "historic-england",
                description: "",
                "entity-count": {
                  count: 8,
                  dataset: "world-heritage-site-buffer-zone",
                },
                "licence-text":
                  "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "paint-options": {
                  colour: "#EB1EE5",
                },
                "attribution-text":
                  "© Historic England 2023. Contains Ordnance Survey data © Crown copyright and database right 2023.\nThe Historic England GIS Data contained in this material was obtained on [date].\nThe most publicly available up to date Historic England GIS Data can be obtained from [HistoricEngland.org.uk](https://historicengland.org.uk).",
              },
              registeredPark: {
                name: "Historic parks and gardens",
                text: "Historic parks and gardens as listed by [Historic England](https://historicengland.org.uk/) in the [Register of Parks and Gardens of Special Historic Interest](https://historicengland.org.uk/listing/what-is-designation/registered-parks-and-gardens/).",
                plural: "Parks and gardens",
                prefix: "",
                themes: ["environment", "heritage"],
                dataset: "park-and-garden",
                licence: "ogl3",
                "end-date": "",
                entities: "",
                typology: "geography",
                wikidata: "Q6975250",
                wikipedia:
                  "Register_of_Historic_Parks_and_Gardens_of_Special_Historic_Interest_in_England",
                collection: "historic-england",
                "entry-date": "",
                "start-date": "",
                attribution: "historic-england",
                description: "",
                "entity-count": {
                  count: 1699,
                  dataset: "park-and-garden",
                },
                "licence-text":
                  "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "paint-options": {
                  colour: "#0EB951",
                },
                "attribution-text":
                  "© Historic England 2023. Contains Ordnance Survey data © Crown copyright and database right 2023.\nThe Historic England GIS Data contained in this material was obtained on [date].\nThe most publicly available up to date Historic England GIS Data can be obtained from [HistoricEngland.org.uk](https://historicengland.org.uk).",
              },
              "designated.AONB": {
                name: "Area of outstanding natural beauty",
                text: "An area of outstanding natural beauty (AONB) as designated by [Natural England](https://www.gov.uk/government/organisations/natural-england).\n\nNatural England provides [guidance](https://www.gov.uk/guidance/protected-sites-and-areas-how-to-review-planning-applications) to help local authorities decide on planning applications in protected sites and areas.",
                plural: "Areas of outstanding natural beauty",
                prefix: "",
                themes: ["environment"],
                dataset: "area-of-outstanding-natural-beauty",
                licence: "ogl3",
                "end-date": "",
                entities: "",
                typology: "geography",
                wikidata: "Q174945",
                wikipedia: "Area_of_Outstanding_Natural_Beauty",
                collection: "area-of-outstanding-natural-beauty",
                "entry-date": "",
                "start-date": "",
                attribution: "natural-england",
                description:
                  "Land protected by law to conserve and enhance its natural beauty",
                "entity-count": {
                  count: 34,
                  dataset: "area-of-outstanding-natural-beauty",
                },
                "licence-text":
                  "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "paint-options": {
                  colour: "#d53880",
                },
                "attribution-text":
                  "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2023.",
              },
              "designated.nationalPark": {
                name: "National park",
                text: "The administrative boundaries of [national park authorities](/dataset/national-park-authority) in England as provided by the ONS for the purposes of producing statistics.",
                plural: "National parks",
                prefix: "statistical-geography",
                themes: ["heritage"],
                dataset: "national-park",
                licence: "ogl3",
                "end-date": "",
                entities: "",
                typology: "geography",
                wikidata: "Q60256727",
                wikipedia: "National_park",
                collection: "national-park",
                "entry-date": "",
                "start-date": "",
                attribution: "ons-boundary",
                description: "",
                "entity-count": {
                  count: 10,
                  dataset: "national-park",
                },
                "licence-text":
                  "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "paint-options": {
                  colour: "#3DA52C",
                },
                "attribution-text":
                  "Source: Office for National Statistics licensed under the Open Government Licence v.3.0\nContains OS data © Crown copyright and database right 2023",
              },
              "designated.conservationArea": {
                name: "Conservation area",
                text: "Local planning authorities are responsible for designating conservation areas, though [Historic England](https://historicengland.org.uk/) and the Secretary of State also have powers to create them.\n\nThis dataset also contains the boundaries of conservation areas from Historic England, as well as other data found on [data.gov.uk](https://www.data.gov.uk/search?q=conservation+area) and currently contains a number of duplicate areas we are working to remove.\n\nWe are also [working with a group of local planning authorities](/about/) to help them publish their conservation areas, and to develop a [data specification for conservation areas](https://www.digital-land.info/guidance/specifications/conservation-area).\n\nHistoric England provide [guidance](https://historicengland.org.uk/advice/your-home/owning-historic-property/conservation-area/) to help householders understand the implications of living in a conservation area for planning applications.",
                plural: "Conservation areas",
                prefix: "",
                themes: ["heritage"],
                dataset: "conservation-area",
                licence: "ogl3",
                "end-date": "",
                entities: "",
                typology: "geography",
                wikidata: "Q5162904",
                wikipedia: "Conservation_area_(United_Kingdom)",
                collection: "conservation-area",
                "entry-date": "",
                "start-date": "",
                attribution: "historic-england",
                description:
                  "Special architectural or historic interest, the character or appearance of which it is desirable to preserve or enhance",
                "entity-count": {
                  count: 8600,
                  dataset: "conservation-area",
                },
                "licence-text":
                  "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "paint-options": {
                  colour: "#78AA00",
                },
                "attribution-text":
                  "© Historic England 2023. Contains Ordnance Survey data © Crown copyright and database right 2023.\nThe Historic England GIS Data contained in this material was obtained on [date].\nThe most publicly available up to date Historic England GIS Data can be obtained from [HistoricEngland.org.uk](https://historicengland.org.uk).",
              },
            },
            constraints: {
              tpo: {
                fn: "tpo",
                text: "is not in a Tree Preservation Order (TPO) Zone",
                value: false,
                category: "Trees",
              },
              listed: {
                fn: "listed",
                text: "is not, or is not within, a Listed Building",
                value: false,
                category: "Heritage and conservation",
              },
              articleFour: {
                fn: "articleFour",
                text: "is not subject to local permitted development restrictions (known as Article 4 directions)",
                value: false,
                category: "General policy",
              },
              monument: {
                fn: "monument",
                text: "is not the site of a Scheduled Monument",
                value: false,
                category: "Heritage and conservation",
              },
              designated: {
                value: false,
              },
              "nature.SAC": {
                fn: "nature.SAC",
                text: "is not in a Special Area of Conservation (SAC)",
                value: false,
                category: "Ecology",
              },
              "nature.ASNW": {
                fn: "nature.ASNW",
                text: "is not in an Ancient Semi-Natural Woodland (ASNW)",
                value: false,
                category: "Ecology",
              },
              "nature.SSSI": {
                fn: "nature.SSSI",
                text: "is not a Site of Special Scientific Interest (SSSI)",
                value: false,
                category: "Ecology",
              },
              locallyListed: {
                fn: "locallyListed",
                text: "is not, or is not within, a Locally Listed Building",
                value: false,
                category: "Heritage and conservation",
              },
              "nature.SPA": {
                fn: "nature.SPA",
                text: "is not in a Special Protection Area (SPA)",
                value: false,
                category: "Heritage and conservation",
              },
              "designated.WHS": {
                fn: "designated.WHS",
                text: "is not an UNESCO World Heritage Site",
                value: false,
                category: "Heritage and conservation",
              },
              registeredPark: {
                fn: "registeredPark",
                text: "is not in a Historic Park or Garden",
                value: false,
                category: "Heritage and conservation",
              },
              "designated.AONB": {
                fn: "designated.AONB",
                text: "is not in an Area of Outstanding Natural Beauty",
                value: false,
                category: "Heritage and conservation",
              },
              "articleFour.lambeth.caz": {
                fn: "articleFour.caz",
                text: "is not in the Central Activities Zone",
                value: false,
                category: "General policy",
              },
              "designated.nationalPark": {
                fn: "designated.nationalPark",
                text: "is not in a National Park",
                value: false,
                category: "Heritage and conservation",
              },
              "designated.conservationArea": {
                fn: "designated.conservationArea",
                text: "is not in a Conservation Area",
                value: false,
                category: "Heritage and conservation",
              },
              "designated.nationalPark.broads": {
                fn: "designated.nationalPark.broads",
                value: false,
              },
            },
            planxRequest:
              "https://api.editor.planx.dev/gis/lambeth?geom=POLYGON+%28%28-0.1186569035053321+51.465703531871384%2C+-0.1185938715934822+51.465724418998775%2C+-0.1184195280075143+51.46552473766957%2C+-0.11848390102387167+51.4655038504508%2C+-0.1186569035053321+51.465703531871384%29%29&analytics=false&sessionId=81bcaa0f-baf5-4573-ba0a-ea868c573faf",
            sourceRequest:
              "https://www.planning.data.gov.uk/entity.json?entries=current&geometry=POLYGON+%28%28-0.1186569035053321+51.465703531871384%2C+-0.1185938715934822+51.465724418998775%2C+-0.1184195280075143+51.46552473766957%2C+-0.11848390102387167+51.4655038504508%2C+-0.1186569035053321+51.465703531871384%29%29&geometry_relation=intersects&limit=100&dataset=article-4-direction-area&dataset=central-activities-zone&dataset=listed-building&dataset=listed-building-outline&dataset=locally-listed-building&dataset=park-and-garden&dataset=conservation-area&dataset=area-of-outstanding-natural-beauty&dataset=national-park&dataset=world-heritage-site&dataset=world-heritage-site-buffer-zone&dataset=special-protection-area&dataset=scheduled-monument&dataset=tree&dataset=tree-preservation-order&dataset=tree-preservation-zone&dataset=site-of-special-scientific-interest&dataset=special-area-of-conservation&dataset=ancient-woodland",
          },
          {
            metadata: {
              "road.classified": {
                name: "Classified road",
                text: "This will effect your project if you are looking to add a dropped kerb. It may also impact some agricultural or forestry projects within 25 metres of a classified road.",
                plural: "Classified roads",
              },
            },
            constraints: {
              "road.classified": {
                fn: "road.classified",
                text: "is not on a Classified Road",
                value: false,
                category: "General policy",
              },
            },
            planxRequest: "https://api.editor.planx.dev/roads?usrn=21901294",
            sourceRequest:
              "https://api.os.uk/features/v1/wfs?service=WFS&request=GetFeature&version=2.0.0&typeNames=Highways_RoadLink&outputFormat=GEOJSON&srsName=urn%3Aogc%3Adef%3Acrs%3AEPSG%3A%3A4326&count=1&filter=%0A++++%3Cogc%3AFilter%3E%0A++++++%3Cogc%3APropertyIsLike+wildCard%3D%22%25%22+singleChar%3D%22%23%22+escapeChar%3D%22%21%22%3E%0A++++++++%3Cogc%3APropertyName%3EFormsPartOf%3C%2Fogc%3APropertyName%3E%0A++++++++%3Cogc%3ALiteral%3E%25Street%23usrn21901294%25%3C%2Fogc%3ALiteral%3E%0A++++++%3C%2Fogc%3APropertyIsLike%3E%0A++++%3C%2Fogc%3AFilter%3E%0A++&",
          },
        ],
      },
    },
    "7R9gJrBQoE": {
      auto: true,
      data: {
        "application.sitePlan.recommended": ["true"],
      },
    },
    "7dcr1Je2K0": {
      auto: false,
      answers: ["iPCoroMMoS"],
    },
    "7uJKQQSUh3": {
      auto: true,
      data: {
        "application.fee.payable": 206,
      },
    },
    "7uoJwZwv5M": {
      auto: false,
    },
    "8OipifFTTq": {
      auto: true,
      data: {
        "proposal.bicycles.number.proposed": 2,
      },
    },
    "8Wz7TKJbeD": {
      auto: false,
      answers: ["8qqEbCGj97"],
    },
    "8kaCyhvpH7": {
      auto: false,
      answers: ["FuyhClwlwt"],
    },
    "8wv6JfFTTq": {
      auto: true,
      data: {
        "property.EPCKnown.form": ["The property does not have one"],
      },
    },
    "9jgV3fFTTq": {
      auto: true,
      data: {
        "property.titleNumber": ["unknown"],
      },
    },
    A6UR0s9Jpd: {
      auto: false,
      data: {
        "applicant.title": "Mr",
      },
    },
    BDulPzfy0y: {
      auto: true,
      answers: ["pUpoxdQoL7"],
    },
    BpAMJoP25E: {
      auto: false,
      data: {
        BpAMJoP25E: "Zinc panels",
      },
    },
    CeTm3SnDk8: {
      auto: true,
      answers: ["d5CGylG8Nr"],
    },
    D5kgv5wDtQ: {
      auto: true,
      answers: ["HY4F4Okno7"],
    },
    DRDCupIVGF: {
      auto: false,
      answers: ["qJOuaBYmPV"],
    },
    DxkPbC5fU8: {
      auto: false,
      answers: ["nucUNAlrcH"],
    },
    EDvPrvWQsB: {
      auto: true,
      answers: ["mZXSevhAi0"],
    },
    Ee6KoNMnoz: {
      auto: false,
      answers: ["dXedv9G09U"],
    },
    EpQ6MqN0bc: {
      auto: false,
      data: {
        "applicant.name.first": "David",
      },
    },
    FMTSaAgSJU: {
      auto: false,
      data: {
        "applicant.agent.email": "ziggy@example.com",
        "applicant.agent.title": "Mx",
        "_contact.applicant.agent": {
          "applicant.agent": {
            email: "ziggy@example.com",
            phone: "01100 0110 0011",
            title: "Mx",
            lastName: "Stardust",
            firstName: "Ziggy",
            organisation: "",
          },
        },
        "applicant.agent.name.last": "Stardust",
        "applicant.agent.name.first": "Ziggy",
        "applicant.agent.phone.primary": "01100 0110 0011",
      },
    },
    Ft7nQ96FWN: {
      auto: true,
      answers: ["HpbTYicfdV"],
    },
    G8r7PDapxD: {
      auto: false,
      data: {
        "applicant.name.last": "Bowie",
      },
    },
    H149aYxMJs: {
      auto: true,
      data: {
        "application.fee.reduction.alternative": ["false"],
      },
    },
    H5vt0Zwv5M: {
      auto: false,
      data: {
        "proposal.site.area": 125.92,
        "proposal.site": {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [-0.1186569035053321, 51.465703531871384],
                [-0.1185938715934822, 51.465724418998775],
                [-0.1184195280075143, 51.46552473766957],
                [-0.11848390102387167, 51.4655038504508],
                [-0.1186569035053321, 51.465703531871384],
              ],
            ],
          },
          properties: null,
        },
        "proposal.site.area.hectares": 0.012592,
        "proposal.site.buffered": {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [-0.11960965083371834, 51.46538315936233],
                [-0.11943664539774211, 51.465183479343686],
                [-0.11931928543457863, 51.4650747997052],
                [-0.1191704216742312, 51.46498230072536],
                [-0.11899566818313785, 51.464909470690905],
                [-0.11880161527066553, 51.46485905612597],
                [-0.1185955809698827, 51.464832958227824],
                [-0.11838533509046834, 51.46483216117893],
                [-0.11817880624506308, 51.46485669503692],
                [-0.11798378289081246, 51.46490563460123],
                [-0.11791941048943819, 51.464926521546175],
                [-0.11773979059125952, 51.46499975082598],
                [-0.11758689174978668, 51.465093618329306],
                [-0.11746672474803242, 51.465204434033396],
                [-0.11738401375124456, 51.46532784163636],
                [-0.11734201056826696, 51.465458989796396],
                [-0.11734236677558456, 51.46559272283597],
                [-0.11738506873739776, 51.46572378341594],
                [-0.1174684380844562, 51.465847019213165],
                [-0.11764277873977036, 51.46604670195268],
                [-0.11776117132495001, 51.46615549898301],
                [-0.11791118748934425, 51.46624792524081],
                [-0.11808713020281, 51.46632047063018],
                [-0.11828231771386549, 51.46637038006127],
                [-0.11848933731696491, 51.46639575809297],
                [-0.11870032689540404, 51.46639564092588],
                [-0.11890727354233499, 51.4663700330097],
                [-0.11910231791211683, 51.466319906874375],
                [-0.11916535041380635, 51.466299019474384],
                [-0.11934270010976643, 51.466225456700705],
                [-0.11949349013034068, 51.46613168124391],
                [-0.11961188084501818, 51.46602132484859],
                [-0.11969328748603446, 51.46589866137915],
                [-0.11973455768111596, 51.465768441290464],
                [-0.11973409349603951, 51.465635707645276],
                [-0.11969191326666717, 51.46550560080558],
                [-0.11960965083371834, 51.46538315936233],
              ],
            ],
          },
          properties: {},
        },
      },
    },
    HDSr8Rwp6W: {
      auto: true,
      answers: ["xN61YyRRc8"],
    },
    HeC2dqzhhB: {
      auto: true,
      answers: ["YEkrICi69x"],
    },
    I03hRPF3ck: {
      auto: true,
      answers: ["87KjOi5c82"],
    },
    JR13ec91W3: {
      auto: false,
      data: {
        "applicant.agent.address": {
          town: "London",
          line1: "40 Stansfield Road",
          line2: "Brixton",
          county: "Greater London",
          country: "UK",
          postcode: "SW9 9RZ",
        },
      },
    },
    Ju4DgE4qY6: {
      auto: true,
      answers: ["5bdLPFNuCS"],
    },
    KdV4SfFTTq: {
      auto: false,
      answers: ["xM888fFTTq"],
    },
    L5N8dfFTTq: {
      auto: false,
      data: {
        "proposal.cars.offStreet.residents.number.proposed": 1,
      },
    },
    LKIH1WsOMk: {
      auto: true,
      answers: ["uZS1uVe6H0"],
    },
    LmVLqJ2KsL: {
      auto: true,
      answers: ["QGyTbhkVTw"],
    },
    MJXLDfFTTq: {
      auto: false,
      answers: ["607jgfFTTq", "ld8wffFTTq"],
    },
    MekHg7Dd9n: {
      auto: false,
      data: {
        "roofPlan.existing": [
          {
            url: "https://api.editor.planx.dev/file/private/vg0av01p/RoofPlan.pdf",
            rule: {
              fn: "proposal.projectType",
              val: "extend.roof",
              operator: "Equals",
              condition: "RequiredIf",
            },
            filename: "RoofPlan.pdf",
            cachedSlot: {
              id: "PuYGWU1IgUhlnUTwKaenu",
              url: "https://api.editor.planx.dev/file/private/vg0av01p/RoofPlan.pdf",
              file: {
                path: "RoofPlan.pdf",
                size: 79416,
                type: "application/pdf",
              },
              status: "success",
              progress: 1,
            },
          },
        ],
        "sitePlan.existing": [
          {
            url: "https://api.editor.planx.dev/file/private/ka97yl2c/Site%20plan.pdf",
            rule: {
              fn: "application.sitePlan.recommended",
              val: "true",
              operator: "Equals",
              condition: "RequiredIf",
            },
            filename: "Site plan.pdf",
            cachedSlot: {
              id: "ECplQji8z7HJFdHdZNsZU",
              url: "https://api.editor.planx.dev/file/private/ka97yl2c/Site%20plan.pdf",
              file: {
                path: "Site plan.pdf",
                size: 1041815,
                type: "application/pdf",
              },
              status: "success",
              progress: 1,
            },
          },
        ],
        "roofPlan.proposed": [
          {
            url: "https://api.editor.planx.dev/file/private/vg0av01p/RoofPlan.pdf",
            rule: {
              fn: "proposal.projectType",
              val: "extend.roof",
              operator: "Equals",
              condition: "RequiredIf",
            },
            filename: "RoofPlan.pdf",
            cachedSlot: {
              id: "PuYGWU1IgUhlnUTwKaenu",
              url: "https://api.editor.planx.dev/file/private/vg0av01p/RoofPlan.pdf",
              file: {
                path: "RoofPlan.pdf",
                size: 79416,
                type: "application/pdf",
              },
              status: "success",
              progress: 1,
            },
          },
        ],
        "sitePlan.proposed": [
          {
            url: "https://api.editor.planx.dev/file/private/ka97yl2c/Site%20plan.pdf",
            rule: {
              fn: "application.sitePlan.recommended",
              val: "true",
              operator: "Equals",
              condition: "RequiredIf",
            },
            filename: "Site plan.pdf",
            cachedSlot: {
              id: "ECplQji8z7HJFdHdZNsZU",
              url: "https://api.editor.planx.dev/file/private/ka97yl2c/Site%20plan.pdf",
              file: {
                path: "Site plan.pdf",
                size: 1041815,
                type: "application/pdf",
              },
              status: "success",
              progress: 1,
            },
          },
        ],
        "elevations.existing": [
          {
            url: "https://api.editor.planx.dev/file/private/osprppqo/Elevations.pdf",
            rule: {
              fn: "application.elevations.recommended",
              val: "true",
              operator: "Equals",
              condition: "RequiredIf",
            },
            filename: "Elevations.pdf",
            cachedSlot: {
              id: "hREAKPzyrCX0PeFTk0KQP",
              url: "https://api.editor.planx.dev/file/private/osprppqo/Elevations.pdf",
              file: {
                path: "Elevations.pdf",
                size: 116018,
                type: "application/pdf",
              },
              status: "success",
              progress: 1,
            },
          },
        ],
        "floorPlan.existing": [
          {
            url: "https://api.editor.planx.dev/file/private/cri3ziaj/Plan.pdf",
            rule: {
              fn: "application.floorPlan.recommended",
              val: "true",
              operator: "Equals",
              condition: "RequiredIf",
            },
            filename: "Plan.pdf",
            cachedSlot: {
              id: "wFnggIhAk85UsfDY2Cx8C",
              url: "https://api.editor.planx.dev/file/private/cri3ziaj/Plan.pdf",
              file: {
                path: "Plan.pdf",
                size: 85548,
                type: "application/pdf",
              },
              status: "success",
              progress: 1,
            },
          },
        ],
        "elevations.proposed": [
          {
            url: "https://api.editor.planx.dev/file/private/osprppqo/Elevations.pdf",
            rule: {
              fn: "application.elevations.recommended",
              val: "true",
              operator: "Equals",
              condition: "RequiredIf",
            },
            filename: "Elevations.pdf",
            cachedSlot: {
              id: "hREAKPzyrCX0PeFTk0KQP",
              url: "https://api.editor.planx.dev/file/private/osprppqo/Elevations.pdf",
              file: {
                path: "Elevations.pdf",
                size: 116018,
                type: "application/pdf",
              },
              status: "success",
              progress: 1,
            },
          },
        ],
        "floorPlan.proposed": [
          {
            url: "https://api.editor.planx.dev/file/private/cri3ziaj/Plan.pdf",
            rule: {
              fn: "application.floorPlan.recommended",
              val: "true",
              operator: "Equals",
              condition: "RequiredIf",
            },
            filename: "Plan.pdf",
            cachedSlot: {
              id: "wFnggIhAk85UsfDY2Cx8C",
              url: "https://api.editor.planx.dev/file/private/cri3ziaj/Plan.pdf",
              file: {
                path: "Plan.pdf",
                size: 85548,
                type: "application/pdf",
              },
              status: "success",
              progress: 1,
            },
          },
        ],
      },
    },
    Mil8JC1tFe: {
      auto: true,
      answers: ["2IIzeyrgQf"],
    },
    NgCP1Zwv5M: {
      auto: false,
    },
    O5NfimNPJ8: {
      auto: true,
      answers: ["ZmN073xKA9"],
    },
    O9Uej0Dk9H: {
      auto: false,
      data: {
        O9Uej0Dk9H: "Wood, painted.",
      },
    },
    OOiDEfFTTq: {
      auto: false,
      answers: ["P7W34fFTTq"],
    },
    OPdu2dxcS9: {
      auto: true,
      data: {
        "applicant.ownership.certificate": ["a"],
      },
    },
    PLZZznpzgq: {
      auto: false,
      answers: ["KWpbQlgGMx"],
    },
    PuMmafFTTq: {
      auto: true,
      data: {
        "proposal.bicycles.number.existing": 2,
      },
    },
    QAZWTVrm3T: {
      auto: true,
      data: {
        "application.fee.reduction.parishCouncil": ["false"],
      },
    },
    QEw7EiwKAH: {
      auto: true,
      data: {
        "application.declaration.connection.form": ["No connections"],
      },
    },
    QgI87UIDEx: {
      auto: true,
      answers: ["C8JdGplv5s"],
    },
    QvbjAiD1xp: {
      auto: true,
      answers: ["abygwkOpZp"],
    },
    R3zAy6ez8n: {
      auto: false,
      data: {
        R3zAy6ez8n: "Wooden sash windows, painted white",
      },
    },
    RGLWyfFTTq: {
      auto: false,
      data: {
        "proposal.bicycles.offStreet.number.existing": 2,
      },
    },
    RHp8fZwv5M: {
      auto: false,
      answers: ["0L3nNZwv5M"],
    },
    RLbpPn36il: {
      auto: true,
      data: {
        "application.floorPlanProposed.recommended": ["true"],
      },
    },
    RQsUof5f4e: {
      auto: true,
      answers: ["eISlfQWz8J"],
    },
    RxPc5fFTTq: {
      auto: false,
      answers: ["XE2ySfFTTq"],
    },
    SJRiZ1gkrY: {
      auto: true,
      data: {
        "applicant.sameAddress.form": ["Yes"],
      },
    },
    SoLrKSKj7H: {
      auto: true,
      answers: ["QUedStxP6e"],
    },
    T2mIeZwv5M: {
      auto: true,
      answers: ["3AheTZwv5M"],
    },
    T3RoEZwv5M: {
      auto: false,
      data: {
        _address: {
          x: 530787,
          y: 175754,
          pao: "40",
          paoEnd: "",
          sao: "",
          saoEnd: "",
          town: "LONDON",
          uprn: "100021892955",
          usrn: "21901294",
          title: "40, STANSFIELD ROAD, LONDON",
          source: "os",
          street: "STANSFIELD ROAD",
          latitude: 51.4656522,
          postcode: "SW9 9RZ",
          blpu_code: "2",
          longitude: -0.1185926,
          planx_value: "residential.house.terrace",
          organisation: null,
          planx_description: "Terrace",
          single_line_address: "40, STANSFIELD ROAD, LONDON, LAMBETH, SW9 9RZ",
        },
        "property.type": ["residential.house.terrace"],
        "property.region": ["London"],
        "property.localAuthorityDistrict": ["Lambeth"],
      },
    },
    ToPelZwv5M: {
      auto: false,
      data: {
        "application.fee.reference.govPay": {
          moto: false,
          state: {
            status: "created",
            finished: false,
          },
          _links: {
            self: {
              href: "https://publicapi.payments.service.gov.uk/v1/payments/5673suh81flgoh8idng0jjhq8g",
              method: "GET",
            },
            cancel: {
              href: "https://publicapi.payments.service.gov.uk/v1/payments/5673suh81flgoh8idng0jjhq8g/cancel",
              method: "POST",
            },
            events: {
              href: "https://publicapi.payments.service.gov.uk/v1/payments/5673suh81flgoh8idng0jjhq8g/events",
              method: "GET",
            },
            refunds: {
              href: "https://publicapi.payments.service.gov.uk/v1/payments/5673suh81flgoh8idng0jjhq8g/refunds",
              method: "GET",
            },
            next_url: {
              href: "https://card.payments.service.gov.uk/secure/a9bd4cd2-ca11-447e-a26a-886d362a4c4f",
              method: "GET",
            },
            next_url_post: {
              href: "https://card.payments.service.gov.uk/secure",
              type: "application/x-www-form-urlencoded",
              method: "POST",
              params: {
                chargeTokenId: "a9bd4cd2-ca11-447e-a26a-886d362a4c4f",
              },
            },
          },
          amount: 206,
          language: "en",
          reference: "81bcaa0f-baf5-4573-ba0a-ea868c573faf",
          payment_id: "5673suh81flgoh8idng0jjhq8g",
          return_url:
            "https://editor.planx.dev/lambeth/apply-for-planning-permission/published?sessionId=81bcaa0f-baf5-4573-ba0a-ea868c573faf&email=example%40example.com",
          description: "New application",
          created_date: "2023-08-31T17:50:43.647Z",
          refund_summary: {
            status: "pending",
            amount_available: 20600,
            amount_submitted: 0,
          },
          delayed_capture: false,
          payment_provider: "sandbox",
          authorisation_mode: "web",
          settlement_summary: {},
        },
      },
    },
    UgIznfFTTq: {
      auto: true,
      data: {
        "proposal.cars.club.number.proposed": 0,
      },
    },
    UpEO0beCvB: {
      auto: false,
      answers: ["Yq3RbeuQhZ"],
    },
    VAiZjeFPOz: {
      auto: false,
      answers: ["fuyWwkmK1U"],
    },
    WBkwbvfPBi: {
      auto: true,
      answers: ["Zuv7Q2EMh7"],
    },
    WJWP8eaQR3: {
      auto: true,
      data: {
        "applicant.agent.form": ["Yes"],
      },
    },
    XDz4UfFTTq: {
      auto: false,
      data: {
        "proposal.cars.offStreet.residents.number.existing": 1,
      },
    },
    XZ8ZKy8z6U: {
      auto: true,
      data: {
        "application.type": ["pp.full.householder"],
      },
    },
    XweXpZwv5M: {
      auto: false,
    },
    YLoPjfFTTq: {
      auto: false,
      data: {
        "proposal.cars.number.proposed": 1,
      },
    },
    YM6FlfFTTq: {
      auto: true,
      data: {
        "proposal.cars.disabled.number.proposed": 0,
      },
    },
    ZPGfXZwv5M: {
      auto: true,
      answers: ["ePbHoZwv5M"],
    },
    ZVPE5MjeNd: {
      auto: true,
      answers: ["FJCgycNn2P"],
    },
    aUOcKZwv5M: {
      auto: false,
    },
    dknMGLlZaS: {
      auto: true,
      answers: ["hz5h3omgeQ"],
    },
    dyszZMv887: {
      auto: true,
      answers: ["LIQFcAVcsb"],
    },
    e9KichJuaa: {
      auto: true,
      data: {
        "proposal.treeWorksOnly": ["false"],
      },
    },
    eUMKffFTTq: {
      auto: false,
      data: {
        "proposal.completion.date": "2024-05-02",
      },
    },
    eY70ifFTTq: {
      auto: true,
      data: {
        "property.titleNumberKnown.form": ["No"],
      },
    },
    eiN5ChJuaa: {
      auto: false,
      answers: ["vraivhJuaa"],
    },
    frGuJV6OZa: {
      auto: false,
      data: {
        frGuJV6OZa: "London stock brick",
      },
    },
    fyFd2QfcsN: {
      auto: true,
      data: {
        "heritageStatement.needed": ["no"],
      },
    },
    g01FztvfL0: {
      auto: true,
      data: {
        "application.fee.reduction.sports": ["false"],
      },
    },
    g0b2irgCi5: {
      auto: true,
      data: {
        "application.fee.calculated": 206,
      },
    },
    gWdARfFTTq: {
      auto: false,
      answers: ["fADA2fFTTq"],
    },
    gpAVtazVRi: {
      auto: false,
      data: {
        "proposal.extend.area": 45,
      },
    },
    hYuHtyQ82u: {
      auto: true,
      answers: ["3HkLByRLqu"],
    },
    hlmRDZwv5M: {
      auto: false,
    },
    hy4BpkgxiS: {
      auto: true,
      data: {
        "application.preAppAdvice.form": ["No"],
      },
    },
    iDkX13SHKZ: {
      auto: true,
      answers: ["eYdn7Fa7nb"],
    },
    ifKSiqpfjA: {
      auto: true,
      data: {
        "application.fee.exemption.resubmission": ["false"],
      },
    },
    io2FnnF5ww: {
      auto: true,
      answers: ["lLnkzcvhoF"],
    },
    jEyOXZwv5M: {
      auto: false,
    },
    jhW9joqZF3: {
      auto: true,
      answers: ["jqor9SqKdC"],
    },
    jkGS7LGAID: {
      auto: true,
      answers: ["pDbALmkBdg"],
    },
    k9c3xtUhBN: {
      auto: false,
      data: {
        k9c3xtUhBN: "Grey slate",
      },
    },
    kH8LltzXsC: {
      auto: true,
      answers: ["bKvEooIOQF"],
    },
    kP6WjnFuTL: {
      auto: false,
      answers: ["SXCfHPrkEA"],
    },
    kReKi25IZv: {
      auto: false,
      answers: ["nz3Mlx9E74"],
    },
    l4PhqfFTTq: {
      auto: false,
      data: {
        "proposal.cars.number.existing": 1,
      },
    },
    lElZ7ZYdvV: {
      auto: false,
      answers: ["FBp0thf3DI"],
    },
    lKNmit5gHr: {
      auto: false,
      answers: ["VC2gYOorLJ"],
    },
    lMy9g3WJeI: {
      auto: false,
      answers: ["9ciucqOCIv"],
    },
    m1ywRbgU2j: {
      auto: true,
      data: {
        "application.declaration.accurate.form": ["Yes"],
      },
    },
    mBU5HhNOpA: {
      auto: true,
      data: {
        "application.type": ["pp.full.householder"],
      },
    },
    meQ89VyNZa: {
      auto: false,
      answers: ["Dgem0iHNYF"],
    },
    mi10SfFTTq: {
      auto: false,
      data: {
        "proposal.bicycles.offStreet.number.proposed": 2,
      },
    },
    mpDYAZBWJO: {
      auto: true,
      answers: ["R34ldvRJHr"],
    },
    oBiYaZwv5M: {
      auto: false,
    },
    p6pcH5H3r9: {
      auto: false,
      answers: ["9U2ADk9SOu"],
    },
    pTjrwfFTTq: {
      auto: false,
      answers: ["wxMPYfFTTq"],
    },
    pZnDl2vCR1: {
      auto: true,
      data: {
        "applicant.interest.form": ["Sole owner"],
      },
    },
    pbeW9Bgw5q: {
      auto: true,
      answers: ["IAlWEBgw5q"],
    },
    qvEsuZwv5M: {
      auto: false,
    },
    rH87NM67xt: {
      auto: false,
      data: {
        rH87NM67xt: "No door present",
      },
    },
    rO9gYU7xDr: {
      auto: true,
      data: {
        "application.elevations.recommended": ["true"],
      },
    },
    s0Nu0py0Qo: {
      auto: true,
      answers: ["GAQS1I0a8x"],
    },
    s2aMN1hmj5: {
      auto: true,
      data: {
        "application.elevationsProposed.recommended": ["true"],
      },
    },
    sea3PGmxCZ: {
      auto: false,
      answers: ["VrrESbMyxA"],
    },
    tKaJ7G9edw: {
      auto: true,
      answers: ["570pkUh6cC"],
    },
    tgz5GZwv5M: {
      auto: false,
      data: {
        "proposal.description":
          "Roof extension to the rear of the property, incorporating starship launchpad.",
      },
    },
    v7ExifFTTq: {
      auto: true,
      data: {
        "proposal.cars.disabled.number.existing": 0,
      },
    },
    v9fPz73Nuh: {
      auto: false,
      data: {
        v9fPz73Nuh: "Brushed steel.",
      },
    },
    vBZ6E8sPSF: {
      auto: false,
      answers: ["GtDg9j4eo9"],
    },
    wCqwaiL60E: {
      auto: true,
      answers: ["lQrLoTZ4Hi"],
    },
    wnfLShJuaa: {
      auto: true,
      data: {
        "proposal.droppedKerbOnly": ["false"],
      },
    },
    x3YXiotP6I: {
      auto: true,
      data: {
        "application.floorPlan.recommended": ["true"],
      },
    },
    xPCDRfFTTq: {
      auto: true,
      data: {
        "proposal.cars.club.number.existing": 0,
      },
    },
    yFkrjZwv5M: {
      auto: false,
    },
    yPJSNETmd7: {
      auto: true,
      data: {
        "proposal.visibleFromPublicRealm": ["Information not provided"],
      },
    },
    yxnZzbqZfy: {
      auto: true,
      answers: ["YJpOvJROoD"],
    },
  },
  payments: [],
  invitations_to_pay: [],
};
