// https://api.editor.planx.dev/admin/session/7e147b04-0a8b-44fc-a249-c36ef6407f84/summary
export const mockPriorApprovalSession = {
  flow: {
    id: "3245f1f1-d044-4e73-a819-20a7ff730964",
    slug: "apply-for-prior-approval",
    team: {
      slug: "camden",
      referenceCode: "CMD",
    },
  },
  created_at: "2024-06-28T10:10:20.874631+00:00",
  updated_at: "2024-06-28T10:24:39.737304+00:00",
  submitted_at: null,
  locked_at: null,
  sanitised_at: null,
  email: "areyouon@email.org",
  passport: {
    _nots: {
      "property.constraints.planning": [
        "brownfieldSite",
        "designated.AONB",
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
        "tpo",
        "article4.camden.147kentishTown",
        "article4.camden.187kentishTown",
        "article4.camden.33yorkRise",
        "article4.camden.belsize",
        "article4.camden.belsizeAvenue",
        "article4.camden.eC3Caz",
        "article4.camden.eC3NoCaz",
        "article4.camden.fitzjohnAvenue",
        "article4.camden.frognal",
        "article4.camden.hampstead",
        "article4.camden.parkway",
        "article4.camden.primroseHill",
        "article4.camden.southHill",
        "article4.camden.suiGenC3",
        "article4.camden.swissCottage",
        "article4.camden.caz",
        "road.classified",
      ],
    },
    _address: {
      x: 528097,
      y: 186713,
      pao: "31",
      town: "LONDON",
      uprn: "000005008312",
      usrn: "20400012",
      title: "31, HIGHGATE WEST HILL, LONDON",
      source: "os",
      street: "HIGHGATE WEST HILL",
      latitude: 51.5647555,
      postcode: "N6 6NP",
      blpu_code: "2",
      longitude: -0.1532914,
      planx_value: "residential.dwelling.flat",
      organisation: null,
      planx_description: "Flat",
      single_line_address: "31, HIGHGATE WEST HILL, LONDON, CAMDEN, N6 6NP",
    },
    "user.role": ["applicant"],
    RHBOiknaeR:
      "The facade treatment will be sympathetic with the existing building and character of the area, using namely glazed tiles, london stock brick and standing seam zinc roofing.",
    YELHAd7auA:
      "These are the impacts on heritage:\nA\nB\nC\n and this is how they will be mitigated:\n1\n2\n3",
    pO5dssVxOd:
      "New extension to university building, 6 metres to the rear and 4 metres in height, clad in books of poetry.",
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
              count: 21562,
              dataset: "tree-preservation-zone",
            },
            "licence-text":
              "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "paint-options": "",
            "attribution-text": "© Crown copyright and database right 2024",
          },
          flood: {
            name: "Flood risk zone",
            text: "Flood zones are a guide produced by the Environment Agency to demonstrate the probability of river and sea flooding in areas across England. Flood zones are based on the likelihood of an area flooding, with flood zone 1 areas least likely to flood and flood zone 3 areas more likely to flood. \n\nThe flood zones were produced to help developers, councils and communities understand the flood risks present in specific locations or regions. Despite being a very useful indicator of an area’s flood risk, the zones cannot tell you whether a location will definitely flood or to what severity.",
            plural: "Flood risk zones",
            prefix: "",
            themes: ["environment"],
            dataset: "flood-risk-zone",
            licence: "ogl3",
            "end-date": "",
            entities: "",
            typology: "geography",
            wikidata: "",
            wikipedia: "",
            collection: "flood-risk-zone",
            "entry-date": "",
            "start-date": "",
            attribution: "crown-copyright",
            description:
              "Area identified as being at risk of flooding from rivers or the sea",
            "entity-count": {
              count: 550621,
              dataset: "flood-risk-zone",
            },
            "licence-text":
              "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "paint-options": "",
            "attribution-text": "© Crown copyright and database right 2024",
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
              count: 23956,
              dataset: "listed-building-outline",
            },
            "licence-text":
              "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "paint-options": {
              colour: "#F9C744",
            },
            "attribution-text": "© Crown copyright and database right 2024",
          },
          article4: {
            name: "Article 4 direction area",
            text: "A local planning authority may create an [article 4 direction](https://www.gov.uk/guidance/when-is-permission-required#article-4-direction) to alter or remove [permitted development rights](https://www.gov.uk/government/publications/permitted-development-rights-for-householders-technical-guidance) from a building or area.\n\nEach [article 4 direction](/dataset/article-4-direction) may apply to one or more article 4 direction areas.",
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
              count: 1355,
              dataset: "article-4-direction-area",
            },
            "licence-text":
              "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "paint-options": "",
            "attribution-text": "© Crown copyright and database right 2024",
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
              "© Historic England 2024. Contains Ordnance Survey data © Crown copyright and database right 2024.\nThe Historic England GIS Data contained in this material was obtained on [date].\nThe most publicly available up to date Historic England GIS Data can be obtained from [HistoricEngland.org.uk](https://historicengland.org.uk).",
          },
          greenBelt: {
            name: "Green belt",
            text: "Boundaries for land designated by a local planning authority as being [green belt](https://www.gov.uk/guidance/green-belt),\ngrouped using the [greenbelt core](/dataset/greenbelt-core) category.\nThis data is compiled by the Department for Levelling Up, Housing and Communities for the purposes of gathering [green belt statistics](https://www.gov.uk/government/collections/green-belt-statistics).",
            plural: "Green belt",
            prefix: "",
            themes: ["environment"],
            dataset: "green-belt",
            licence: "ogl3",
            "end-date": "",
            entities: "",
            typology: "geography",
            wikidata: "Q2734873",
            wikipedia: "Green_belt_(United_Kingdom)",
            collection: "green-belt",
            "entry-date": "",
            "start-date": "",
            attribution: "os-open-data",
            description: "",
            "entity-count": {
              count: 185,
              dataset: "green-belt",
            },
            "licence-text":
              "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "paint-options": {
              colour: "#85994b",
            },
            "attribution-text":
              "Your use of OS OpenData is subject to the terms at http://os.uk/opendata/licence\nContains Ordnance Survey data © Crown copyright and database right 2024",
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
              "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2024.",
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
              "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2024.",
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
              "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2024.",
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
              "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2024.",
          },
          "article4.caz": {
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
            "attribution-text": "© Crown copyright and database right 2024",
          },
          brownfieldSite: {
            name: "Brownfield site",
            text: "This is an experimental dataset of the boundaries of brownfield sites found on [data.gov.uk](https://www.data.gov.uk/search?q=brownfield)\nand local planning authority web sites.\nWe expect to combine this dataset with the [brownfield land](/dataset/brownfield-land) dataset in the near future.",
            plural: "Brownfield sites",
            prefix: "",
            themes: ["development"],
            dataset: "brownfield-site",
            licence: "ogl3",
            "end-date": "",
            entities: "",
            typology: "geography",
            wikidata: "Q896586",
            wikipedia: "Brownfield_land",
            collection: "brownfield-site",
            "entry-date": "",
            "start-date": "",
            attribution: "crown-copyright",
            description: "",
            "entity-count": {
              count: 2777,
              dataset: "brownfield-site",
            },
            "licence-text":
              "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "paint-options": {
              colour: "#745729",
            },
            "attribution-text": "© Crown copyright and database right 2024",
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
              opacity: 0.2,
            },
            "attribution-text":
              "© Historic England 2024. Contains Ordnance Survey data © Crown copyright and database right 2024.\nThe Historic England GIS Data contained in this material was obtained on [date].\nThe most publicly available up to date Historic England GIS Data can be obtained from [HistoricEngland.org.uk](https://historicengland.org.uk).",
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
              "© Historic England 2024. Contains Ordnance Survey data © Crown copyright and database right 2024.\nThe Historic England GIS Data contained in this material was obtained on [date].\nThe most publicly available up to date Historic England GIS Data can be obtained from [HistoricEngland.org.uk](https://historicengland.org.uk).",
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
              "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2024.",
          },
          "nature.ramsarSite": {
            name: "Ramsar site",
            text: "An internationally protected site listed as a wetland of international importance.\nRamsar sites are designated by [UNESCO](https://en.unesco.org/) and managed by [Natural England](https://www.gov.uk/government/organisations/natural-england).\n\nNatural England provides [guidance ](https://www.gov.uk/guidance/protected-sites-and-areas-how-to-review-planning-applications) to help local authorities decide on planning applications in protected sites and areas.",
            plural: "Ramsar sites",
            prefix: "",
            themes: ["environment"],
            dataset: "ramsar",
            licence: "ogl3",
            "end-date": "",
            entities: "",
            typology: "geography",
            wikidata: "",
            wikipedia: "",
            collection: "ramsar",
            "entry-date": "",
            "start-date": "",
            attribution: "natural-england",
            description: "",
            "entity-count": {
              count: 73,
              dataset: "ramsar",
            },
            "licence-text":
              "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "paint-options": {
              colour: "#7fcdff",
            },
            "attribution-text":
              "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2024.",
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
              "Source: Office for National Statistics licensed under the Open Government Licence v.3.0\nContains OS data © Crown copyright and database right 2024",
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
              count: 8341,
              dataset: "conservation-area",
            },
            "licence-text":
              "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
            "paint-options": {
              colour: "#78AA00",
            },
            "attribution-text":
              "© Historic England 2024. Contains Ordnance Survey data © Crown copyright and database right 2024.\nThe Historic England GIS Data contained in this material was obtained on [date].\nThe most publicly available up to date Historic England GIS Data can be obtained from [HistoricEngland.org.uk](https://historicengland.org.uk).",
          },
        },
        constraints: {
          tpo: {
            fn: "tpo",
            text: "is not in a Tree Preservation Order (TPO) Zone",
            value: false,
            category: "Trees",
          },
          flood: {
            fn: "flood",
            text: "is not in a Flood Risk Zone",
            value: false,
            category: "Flooding",
          },
          listed: {
            fn: "listed",
            text: "is not, or is not within, a Listed Building",
            value: false,
            category: "Heritage and conservation",
          },
          article4: {
            fn: "article4",
            data: [
              {
                name: "Basements",
                notes: "Basements",
                point: "POINT (-0.157397 51.546393)",
                entity: 7010002613,
                prefix: "article-4-direction-area",
                dataset: "article-4-direction-area",
                "end-date": "",
                geometry:
                  "MULTIPOLYGON (((-0.114229 51.525483, -0.11424 51.525498, -0.114236 51.525511, -0.113955 51.525728, -0.112995 51.526367, -0.112919 51.526409, -0.113018 51.526438, -0.113163 51.526464, -0.113445 51.526533, -0.113671 51.526608, -0.113861 51.526696, -0.114183 51.526882, -0.115206 51.527544, -0.115338 51.527643, -0.115407 51.527706, -0.115489 51.527819, -0.115576 51.528023, -0.115604 51.528122, -0.115706 51.528616, -0.115794 51.529336, -0.115857 51.529723, -0.115883 51.529781, -0.115925 51.529831, -0.116033 51.529916, -0.11617 51.529986, -0.116735 51.5302, -0.117072 51.530306, -0.117852 51.530524, -0.11836 51.530649, -0.11984 51.530947, -0.121063 51.530854, -0.121654 51.530823, -0.122563 51.530754, -0.122567 51.530793, -0.122545 51.531021, -0.122538 51.53141, -0.122518 51.531848, -0.122462 51.532611, -0.122435 51.532864, -0.122378 51.533595, -0.122327 51.534545, -0.122317 51.535198, -0.122312 51.535291, -0.122287 51.53537, -0.122299 51.536024, -0.12235 51.536623, -0.122399 51.537045, -0.122665 51.537802, -0.122825 51.538149, -0.122969 51.538386, -0.123298 51.538853, -0.123783 51.539318, -0.124014 51.539524, -0.124535 51.540211, -0.124842 51.540632, -0.124991 51.540872, -0.125088 51.541246, -0.125281 51.541503, -0.125528 51.541869, -0.125612 51.54201, -0.125676 51.542199, -0.125727 51.54245, -0.125755 51.542549, -0.125913 51.543063, -0.125888 51.543165, -0.12597 51.543497, -0.126058 51.543908, -0.126191 51.544425, -0.126606 51.545981, -0.126816 51.5468, -0.126982 51.547341, -0.12704 51.54747, -0.127081 51.547533, -0.127191 51.547671, -0.127341 51.547818, -0.127663 51.548099, -0.127828 51.548222, -0.127978 51.548318, -0.128127 51.548394, -0.129229 51.548893, -0.129352 51.548972, -0.12981 51.549314, -0.129891 51.54938, -0.13008 51.549559, -0.130162 51.549653, -0.130191 51.549701, -0.130386 51.550061, -0.130511 51.550317, -0.130719 51.550667, -0.130738 51.550721, -0.130741 51.551103, -0.130752 51.551204, -0.130796 51.5513, -0.130853 51.551366, -0.130934 51.551436, -0.13105 51.551528, -0.131154 51.551593, -0.131435 51.551739, -0.131914 51.551969, -0.132335 51.552199, -0.13256 51.552356, -0.133133 51.55278, -0.133529 51.55302, -0.134101 51.553403, -0.134443 51.55367, -0.134741 51.553931, -0.134823 51.554043, -0.134961 51.554283, -0.135063 51.554428, -0.135174 51.554544, -0.135296 51.554634, -0.1354 51.55469, -0.135652 51.554789, -0.136217 51.554972, -0.136592 51.555081, -0.136784 51.555149, -0.136877 51.555192, -0.136999 51.55527, -0.13708 51.555337, -0.137187 51.555445, -0.137523 51.555818, -0.137996 51.556406, -0.138133 51.556559, -0.138308 51.556736, -0.138629 51.557128, -0.139298 51.558058, -0.139678 51.558607, -0.139963 51.55904, -0.140466 51.559761, -0.140531 51.559831, -0.140741 51.560018, -0.140899 51.560194, -0.140976 51.560331, -0.141035 51.560501, -0.141048 51.560606, -0.141029 51.561059, -0.14099 51.561453, -0.140975 51.561511, -0.140934 51.561606, -0.140754 51.561906, -0.140681 51.562066, -0.140583 51.562425, -0.140556 51.562639, -0.140553 51.562745, -0.140565 51.562836, -0.140633 51.563113, -0.140753 51.563455, -0.140774 51.563558, -0.140718 51.563968, -0.140632 51.564257, -0.14062 51.564343, -0.140621 51.56441, -0.140637 51.564498, -0.140713 51.564684, -0.141027 51.565205, -0.141164 51.565544, -0.141223 51.565751, -0.141363 51.566421, -0.141437 51.56686, -0.141433 51.567021, -0.141453 51.56715, -0.141513 51.567365, -0.141838 51.568197, -0.141944 51.568398, -0.142094 51.568623, -0.142152 51.568676, -0.142385 51.568827, -0.142471 51.568905, -0.14248 51.568921, -0.142477 51.568973, -0.142399 51.569095, -0.142349 51.569253, -0.142804 51.569446, -0.143668 51.569836, -0.144005 51.569963, -0.144329 51.570068, -0.144599 51.570138, -0.145421 51.570262, -0.145621 51.570299, -0.146637 51.57053, -0.148079 51.570805, -0.148727 51.570947, -0.149096 51.571052, -0.149901 51.571365, -0.149886 51.571391, -0.149938 51.571475, -0.150146 51.571554, -0.150654 51.571587, -0.150972 51.571596, -0.150971 51.57158, -0.151147 51.571602, -0.151286 51.571605, -0.151348 51.571596, -0.151615 51.571631, -0.151996 51.571663, -0.154325 51.571846, -0.154914 51.57189, -0.154937 51.571871, -0.15497 51.571867, -0.155048 51.571881, -0.155065 51.571904, -0.157075 51.572075, -0.157165 51.57208, -0.157427 51.572071, -0.157565 51.572082, -0.157609 51.57207, -0.157631 51.572045, -0.157736 51.572051, -0.157754 51.572112, -0.157796 51.572128, -0.158505 51.572191, -0.15885 51.572212, -0.159999 51.572669, -0.160374 51.572763, -0.160471 51.572779, -0.160717 51.572776, -0.161603 51.572672, -0.162097 51.572603, -0.163342 51.572504, -0.163669 51.572486, -0.164542 51.572501, -0.165003 51.572612, -0.165016 51.572592, -0.165083 51.572607, -0.16507 51.572627, -0.165184 51.572653, -0.165205 51.572642, -0.165267 51.572652, -0.165273 51.572669, -0.165623 51.572737, -0.165745 51.572748, -0.165827 51.572737, -0.165893 51.572718, -0.165984 51.572736, -0.166115 51.572764, -0.166149 51.572804, -0.166251 51.572861, -0.166322 51.572881, -0.166607 51.572929, -0.166809 51.572953, -0.167301 51.572963, -0.168071 51.572918, -0.169662 51.572775, -0.170323 51.572668, -0.170709 51.572585, -0.171166 51.572449, -0.171706 51.572182, -0.171747 51.572154, -0.171814 51.572088, -0.171834 51.572041, -0.171833 51.572023, -0.172031 51.571943, -0.172086 51.571953, -0.172135 51.571949, -0.172193 51.571935, -0.172335 51.571874, -0.17264 51.571702, -0.173076 51.571418, -0.173443 51.571013, -0.173549 51.570857, -0.17361 51.570737, -0.173646 51.57065, -0.173692 51.570502, -0.173715 51.570381, -0.173729 51.570087, -0.173711 51.569929, -0.173714 51.569903, -0.173829 51.569907, -0.173851 51.569709, -0.174194 51.569442, -0.174378 51.569252, -0.174871 51.569426, -0.175084 51.569435, -0.175135 51.569546, -0.175831 51.569784, -0.175858 51.569804, -0.175864 51.569848, -0.176586 51.570088, -0.17684 51.570165, -0.17762 51.570256, -0.177667 51.570267, -0.178125 51.570513, -0.178045 51.570428, -0.178022 51.570377, -0.178016 51.570297, -0.178025 51.570235, -0.178064 51.570163, -0.178115 51.570105, -0.178185 51.570063, -0.178281 51.570025, -0.178556 51.569973, -0.180264 51.569687, -0.180409 51.569675, -0.180986 51.569673, -0.180962 51.569625, -0.180891 51.569522, -0.180842 51.569429, -0.18082 51.569404, -0.180899 51.569374, -0.181451 51.569109, -0.18188 51.568894, -0.182151 51.568699, -0.182419 51.56855, -0.183107 51.568194, -0.183242 51.56813, -0.183676 51.567957, -0.183388 51.567769, -0.183515 51.567682, -0.183479 51.56766, -0.183761 51.56747, -0.184006 51.567389, -0.184885 51.567224, -0.185822 51.567017, -0.186051 51.566957, -0.186143 51.566919, -0.186908 51.56651, -0.186934 51.566487, -0.186955 51.566406, -0.186991 51.566355, -0.187036 51.566259, -0.187091 51.566194, -0.187152 51.566152, -0.187491 51.566042, -0.187711 51.566006, -0.187824 51.565973, -0.18806 51.565859, -0.188328 51.565775, -0.188602 51.56562, -0.188665 51.565594, -0.188831 51.565562, -0.189119 51.565539, -0.189217 51.56551, -0.189352 51.565412, -0.189467 51.565298, -0.189644 51.565217, -0.189736 51.565092, -0.189847 51.564981, -0.189872 51.564861, -0.189891 51.564814, -0.189939 51.564733, -0.189986 51.564685, -0.190003 51.56461, -0.190002 51.564467, -0.190036 51.564362, -0.190085 51.56408, -0.1901 51.564051, -0.19008 51.564036, -0.190141 51.563952, -0.190154 51.563855, -0.190168 51.563729, -0.190144 51.563577, -0.190149 51.563414, -0.190158 51.563361, -0.190211 51.56324, -0.190281 51.562988, -0.190311 51.562956, -0.190335 51.562944, -0.190381 51.562619, -0.190525 51.562312, -0.190626 51.561973, -0.190708 51.561861, -0.190777 51.561805, -0.190882 51.561746, -0.191161 51.561644, -0.191331 51.561604, -0.19148 51.561587, -0.19229 51.561557, -0.192591 51.56136, -0.192763 51.561258, -0.193004 51.561143, -0.193344 51.561021, -0.193566 51.560959, -0.193645 51.560928, -0.193774 51.560854, -0.193968 51.560918, -0.194193 51.560848, -0.194333 51.560788, -0.194521 51.560723, -0.194564 51.56067, -0.194569 51.560571, -0.194835 51.56048, -0.195143 51.560461, -0.195277 51.560467, -0.195619 51.560521, -0.196097 51.560644, -0.196578 51.560727, -0.19661 51.560673, -0.196731 51.560696, -0.196765 51.560622, -0.196808 51.560629, -0.196825 51.560596, -0.196866 51.560603, -0.196896 51.560556, -0.19689 51.560555, -0.196899 51.560535, -0.196889 51.560387, -0.196893 51.560029, -0.196817 51.56003, -0.196809 51.55967, -0.196798 51.559621, -0.196703 51.55936, -0.196651 51.559265, -0.196606 51.559203, -0.196769 51.559157, -0.196766 51.559128, -0.196807 51.559146, -0.196948 51.559107, -0.197024 51.559049, -0.197172 51.559016, -0.197269 51.558977, -0.197498 51.558865, -0.197911 51.559129, -0.198134 51.558988, -0.198304 51.55886, -0.198398 51.558737, -0.198437 51.558624, -0.198488 51.558344, -0.198497 51.5582, -0.198523 51.558144, -0.198655 51.558011, -0.198881 51.557838, -0.199172 51.557525, -0.199243 51.557455, -0.199306 51.557413, -0.199351 51.557358, -0.199436 51.557195, -0.199512 51.557073, -0.199555 51.556956, -0.199558 51.556799, -0.199542 51.556693, -0.19938 51.556335, -0.199368 51.556199, -0.199373 51.55619, -0.200038 51.556168, -0.200587 51.556125, -0.200947 51.556068, -0.201426 51.555962, -0.202276 51.555845, -0.202648 51.555782, -0.20348 51.555666, -0.20409 51.555608, -0.204789 51.555425, -0.204927 51.555412, -0.205036 51.555377, -0.205155 51.555355, -0.205562 51.555325, -0.205779 51.555318, -0.205805 51.555372, -0.205832 51.555473, -0.205876 51.555584, -0.205859 51.555771, -0.205871 51.556068, -0.205887 51.556198, -0.205968 51.556431, -0.206076 51.556392, -0.206115 51.556386, -0.206495 51.556359, -0.206671 51.55629, -0.206854 51.556232, -0.208398 51.55587, -0.208838 51.555728, -0.209196 51.556022, -0.209551 51.556351, -0.210012 51.556751, -0.211335 51.556283, -0.211631 51.556166, -0.211858 51.556051, -0.211853 51.556045, -0.212112 51.555918, -0.212368 51.555767, -0.212375 51.555771, -0.21259 51.555648, -0.212584 51.555643, -0.212725 51.555566, -0.21273 51.55557, -0.212796 51.555537, -0.21287 51.555493, -0.212866 51.555486, -0.21299 51.555419, -0.213487 51.555191, -0.213085 51.554837, -0.212804 51.554575, -0.211996 51.553781, -0.211796 51.553603, -0.211283 51.5532, -0.210322 51.552479, -0.209091 51.551571, -0.208553 51.551197, -0.207424 51.550369, -0.207192 51.550187, -0.20694 51.549975, -0.206229 51.549334, -0.205573 51.548728, -0.203702 51.546957, -0.20256 51.545891, -0.200739 51.54417, -0.200465 51.543922, -0.200291 51.543802, -0.200041 51.543606, -0.199419 51.543074, -0.196926 51.541037, -0.196297 51.54051, -0.193939 51.538419, -0.193065 51.537662, -0.192101 51.536864, -0.191636 51.53646, -0.191485 51.536308, -0.191195 51.536044, -0.19102 51.535904, -0.190871 51.535806, -0.190715 51.535716, -0.190485 51.535596, -0.189926 51.535345, -0.18962 51.535186, -0.189374 51.535042, -0.189197 51.534912, -0.188723 51.534531, -0.187907 51.534909, -0.187828 51.534959, -0.186784 51.535922, -0.186192 51.536452, -0.184616 51.537947, -0.184519 51.538027, -0.184462 51.538063, -0.184179 51.538218, -0.183993 51.538309, -0.183729 51.538417, -0.182869 51.538719, -0.181494 51.539169, -0.180724 51.539396, -0.180017 51.53959, -0.179781 51.539647, -0.17946 51.539706, -0.178625 51.539809, -0.178462 51.539813, -0.178223 51.5398, -0.177716 51.539756, -0.177334 51.539735, -0.173913 51.539473, -0.173988 51.539108, -0.174057 51.538702, -0.174132 51.538326, -0.174133 51.538281, -0.174108 51.53821, -0.174073 51.53815, -0.173984 51.53805, -0.173893 51.537968, -0.173477 51.537646, -0.173362 51.537709, -0.171935 51.538403, -0.170877 51.537778, -0.169448 51.538593, -0.169038 51.53842, -0.168563 51.538199, -0.167955 51.537876, -0.167813 51.537787, -0.16757 51.537611, -0.167011 51.537243, -0.165397 51.536138, -0.165254 51.53605, -0.164899 51.535785, -0.164283 51.536035, -0.16342 51.536365, -0.163044 51.536497, -0.160397 51.537299, -0.159659 51.536643, -0.159352 51.536339, -0.157367 51.5368, -0.156492 51.536995, -0.155809 51.537132, -0.154967 51.537282, -0.154595 51.537342, -0.154152 51.537401, -0.153456 51.537465, -0.152685 51.537511, -0.151511 51.534851, -0.151333 51.534467, -0.151013 51.533733, -0.150023 51.531525, -0.149938 51.531313, -0.148926 51.529073, -0.147123 51.525035, -0.145765 51.525267, -0.145199 51.523978, -0.144784 51.52405, -0.144672 51.524056, -0.144481 51.524045, -0.144223 51.524008, -0.144088 51.523997, -0.14409 51.524304, -0.144102 51.524596, -0.144096 51.524624, -0.144008 51.524675, -0.143968 51.524678, -0.143451 51.524612, -0.143385 51.524549, -0.143384 51.524528, -0.14356 51.523914, -0.143348 51.52387, -0.143182 51.523857, -0.143076 51.523854, -0.142847 51.523868, -0.140775 51.522176, -0.139117 51.520836, -0.138069 51.519955, -0.138055 51.519938, -0.138043 51.519894, -0.138012 51.519863, -0.136963 51.518886, -0.13628 51.519157, -0.135798 51.518685, -0.135209 51.518929, -0.134289 51.518024, -0.134456 51.517957, -0.134041 51.517572, -0.134005 51.517547, -0.133812 51.517598, -0.133606 51.517696, -0.133571 51.517701, -0.133523 51.517695, -0.13349 51.517683, -0.133098 51.517419, -0.132949 51.517331, -0.132835 51.517278, -0.132407 51.517118, -0.132567 51.516991, -0.132505 51.516964, -0.132526 51.516883, -0.132466 51.51682, -0.132484 51.516799, -0.132513 51.516729, -0.132516 51.516674, -0.131369 51.516963, -0.131325 51.516972, -0.131131 51.516981, -0.130783 51.517082, -0.130552 51.516796, -0.130315 51.51653, -0.130314 51.516433, -0.130348 51.516386, -0.130349 51.516319, -0.130385 51.516251, -0.130433 51.516125, -0.130433 51.516079, -0.13042 51.516028, -0.130247 51.515553, -0.129964 51.514824, -0.129613 51.514004, -0.129554 51.513882, -0.129376 51.513567, -0.129335 51.513472, -0.129206 51.513483, -0.129074 51.513469, -0.128471 51.513192, -0.128265 51.51308, -0.127727 51.512724, -0.127641 51.512678, -0.127538 51.512664, -0.127449 51.512662, -0.127301 51.512675, -0.12717 51.512705, -0.1271 51.512797, -0.127042 51.512856, -0.126809 51.513042, -0.126644 51.513143, -0.126309 51.513318, -0.125192 51.51381, -0.124804 51.513986, -0.124531 51.514121, -0.124303 51.514251, -0.123546 51.514717, -0.123383 51.514786, -0.122854 51.51514, -0.122365 51.514827, -0.122066 51.514616, -0.121796 51.514869, -0.120838 51.514703, -0.120495 51.514625, -0.119453 51.514502, -0.118702 51.514704, -0.118643 51.514824, -0.118536 51.514986, -0.117619 51.51522, -0.117232 51.515393, -0.116124 51.515671, -0.115121 51.515912, -0.114694 51.516026, -0.114425 51.515646, -0.114158 51.515304, -0.113825 51.514822, -0.112288 51.515162, -0.112302 51.515204, -0.111685 51.515289, -0.111648 51.515322, -0.111568 51.515334, -0.111667 51.515538, -0.111841 51.515842, -0.112001 51.516089, -0.112176 51.516333, -0.112318 51.5165, -0.112719 51.516922, -0.113252 51.517464, -0.113695 51.517937, -0.11374 51.51801, -0.113755 51.518051, -0.113802 51.518256, -0.113496 51.518272, -0.112845 51.518288, -0.112375 51.518263, -0.11111 51.51815, -0.110224 51.518028, -0.109466 51.517938, -0.107819 51.517766, -0.107324 51.517931, -0.105291 51.518556, -0.105795 51.520101, -0.105918 51.520443, -0.106022 51.520685, -0.106134 51.520909, -0.106338 51.521278, -0.106628 51.521698, -0.107002 51.522184, -0.108238 51.522087, -0.108332 51.522169, -0.108558 51.522427, -0.108747 51.522695, -0.108895 51.522929, -0.108934 51.522985, -0.10897 51.52302, -0.109261 51.522915, -0.109554 51.523058, -0.110026 51.523154, -0.110408 51.523218, -0.110912 51.523334, -0.11202 51.523605, -0.112349 51.523709, -0.112563 51.523811, -0.112799 51.523943, -0.113086 51.524153, -0.113638 51.524577, -0.113924 51.525029, -0.114229 51.525483)))",
                typology: "geography",
                reference: "A4Ba3",
                "entry-date": "2023-09-09",
                "start-date": "2016-10-03",
                "article-4-direction": "A4B3",
                "organisation-entity": "90",
              },
            ],
            text: "is in an Article 4 direction area",
            value: true,
            category: "General policy",
          },
          monument: {
            fn: "monument",
            text: "is not the site of a Scheduled Monument",
            value: false,
            category: "Heritage and conservation",
          },
          greenBelt: {
            fn: "greenBelt",
            text: "is not in a Green Belt",
            value: false,
            category: "General policy",
          },
          designated: {
            value: true,
          },
          "nature.SAC": {
            fn: "nature.SAC",
            text: "is not in a Special Area of Conservation (SAC)",
            value: false,
            category: "Ecology",
          },
          "nature.SPA": {
            fn: "nature.SPA",
            text: "is not in a Special Protection Area (SPA)",
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
          brownfieldSite: {
            fn: "brownfieldSite",
            text: "is not on Brownfield land",
            value: false,
            category: "General policy",
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
          "nature.ramsarSite": {
            fn: "nature.ramsarSite",
            text: "is not in a Ramsar Site",
            value: false,
            category: "Ecology",
          },
          "article4.camden.caz": {
            fn: "article4.caz",
            text: "is not in the Central Activities Zone",
            value: false,
            category: "General policy",
          },
          "article4.camden.eC3Caz": {
            fn: "article4.camden.eC3Caz",
            value: false,
          },
          "article4.camden.belsize": {
            fn: "article4.camden.belsize",
            value: false,
          },
          "article4.camden.frognal": {
            fn: "article4.camden.frognal",
            value: false,
          },
          "article4.camden.parkway": {
            fn: "article4.camden.parkway",
            value: false,
          },
          "designated.nationalPark": {
            fn: "designated.nationalPark",
            text: "is not in a National Park",
            value: false,
            category: "Heritage and conservation",
          },
          "article4.camden.eC3NoCaz": {
            fn: "article4.camden.eC3NoCaz",
            value: false,
          },
          "article4.camden.suiGenC3": {
            fn: "article4.camden.suiGenC3",
            value: false,
          },
          "article4.camden.basements": {
            fn: "article4.camden.basements",
            value: true,
          },
          "article4.camden.hampstead": {
            fn: "article4.camden.hampstead",
            value: false,
          },
          "article4.camden.southHill": {
            fn: "article4.camden.southHill",
            value: false,
          },
          "article4.camden.33yorkRise": {
            fn: "article4.camden.33yorkRise",
            value: false,
          },
          "designated.conservationArea": {
            fn: "designated.conservationArea",
            data: [
              {
                name: "Highgate Village",
                point: "POINT (-0.151421 51.568011)",
                entity: 44009654,
                prefix: "conservation-area",
                dataset: "conservation-area",
                "end-date": "",
                geometry:
                  "MULTIPOLYGON (((-0.141362 51.566416, -0.141437 51.56686, -0.141433 51.567021, -0.141453 51.56715, -0.141513 51.567365, -0.141838 51.568197, -0.141944 51.568398, -0.142094 51.568623, -0.142152 51.568676, -0.142385 51.568827, -0.142471 51.568905, -0.14248 51.568921, -0.142477 51.568973, -0.142399 51.569095, -0.142349 51.569253, -0.142804 51.569446, -0.143668 51.569836, -0.144005 51.569963, -0.144329 51.570068, -0.144599 51.570138, -0.145421 51.570262, -0.145621 51.570299, -0.146637 51.57053, -0.148079 51.570805, -0.148727 51.570947, -0.149096 51.571052, -0.149901 51.571365, -0.149886 51.571391, -0.149938 51.571475, -0.150146 51.571554, -0.150654 51.571587, -0.150972 51.571596, -0.150971 51.57158, -0.151147 51.571602, -0.151286 51.571605, -0.151348 51.571596, -0.151615 51.571631, -0.151996 51.571663, -0.154325 51.571846, -0.154914 51.57189, -0.154937 51.571871, -0.15497 51.571867, -0.155048 51.571881, -0.155065 51.571904, -0.157075 51.572075, -0.157165 51.57208, -0.157427 51.572071, -0.157565 51.572082, -0.157609 51.57207, -0.157631 51.572045, -0.157736 51.572051, -0.157754 51.572112, -0.157796 51.572128, -0.158505 51.572191, -0.15885 51.572212, -0.159999 51.572669, -0.160374 51.572763, -0.160471 51.572779, -0.160717 51.572776, -0.160917 51.572753, -0.160896 51.572706, -0.160874 51.572684, -0.16071 51.572626, -0.160685 51.572605, -0.160664 51.57257, -0.160656 51.572534, -0.160663 51.57249, -0.160712 51.572354, -0.160753 51.572311, -0.160845 51.57226, -0.161137 51.57207, -0.161198 51.572011, -0.161208 51.571949, -0.161203 51.571762, -0.161261 51.571492, -0.161308 51.57135, -0.16147 51.571278, -0.161495 51.57126, -0.161625 51.570875, -0.161661 51.570808, -0.161715 51.570739, -0.161804 51.570671, -0.161945 51.570609, -0.161284 51.570443, -0.158788 51.570463, -0.158625 51.570466, -0.158568 51.570476, -0.158521 51.570465, -0.158335 51.570303, -0.158273 51.570239, -0.158211 51.570151, -0.158171 51.570059, -0.158159 51.570006, -0.158157 51.569851, -0.158173 51.569753, -0.158311 51.569391, -0.158377 51.569118, -0.158397 51.568991, -0.158504 51.568991, -0.158674 51.56884, -0.158738 51.568805, -0.159188 51.568705, -0.159361 51.568648, -0.1597 51.568458, -0.159793 51.568426, -0.159943 51.568355, -0.160293 51.568223, -0.160257 51.568184, -0.159694 51.56777, -0.159381 51.567556, -0.159356 51.567551, -0.159319 51.567527, -0.159321 51.567518, -0.159129 51.5674, -0.158251 51.566771, -0.158168 51.566715, -0.158026 51.566647, -0.158017 51.566634, -0.15769 51.566462, -0.157498 51.566335, -0.157287 51.566173, -0.156976 51.566004, -0.156908 51.565951, -0.156837 51.565917, -0.156809 51.56589, -0.156753 51.565862, -0.156515 51.565669, -0.155953 51.565301, -0.155869 51.565228, -0.155829 51.565155, -0.155832 51.565074, -0.15605 51.564691, -0.156052 51.564628, -0.156033 51.564403, -0.155994 51.564277, -0.155913 51.564158, -0.155721 51.563912, -0.155402 51.563593, -0.155293 51.563429, -0.155265 51.563402, -0.155139 51.56331, -0.154801 51.563152, -0.154824 51.563133, -0.154858 51.563121, -0.155026 51.562963, -0.155167 51.562769, -0.155037 51.562687, -0.154977 51.562723, -0.154932 51.562736, -0.154771 51.562673, -0.154589 51.562677, -0.154225 51.56249, -0.154076 51.562406, -0.154006 51.562353, -0.153929 51.562376, -0.153894 51.562323, -0.153864 51.562238, -0.153856 51.562174, -0.153873 51.562061, -0.153857 51.561956, -0.153899 51.561841, -0.153891 51.561672, -0.153924 51.561667, -0.15394 51.56159, -0.153968 51.561527, -0.15382 51.561505, -0.153793 51.561477, -0.153742 51.561444, -0.153613 51.561396, -0.153546 51.561401, -0.153307 51.56139, -0.153265 51.561407, -0.153179 51.561414, -0.153117 51.561395, -0.15308 51.561431, -0.15293 51.561397, -0.152712 51.561368, -0.152634 51.561327, -0.152501 51.56131, -0.152516 51.561289, -0.152331 51.561311, -0.152187 51.561351, -0.15182 51.561379, -0.15169 51.56138, -0.15154 51.56136, -0.151157 51.561264, -0.150945 51.561244, -0.150968 51.561276, -0.150993 51.561294, -0.151119 51.561485, -0.151091 51.561491, -0.151084 51.561502, -0.150859 51.561562, -0.150999 51.56186, -0.151053 51.561951, -0.151178 51.562078, -0.1521 51.562821, -0.152377 51.563122, -0.152554 51.563359, -0.152596 51.563405, -0.152741 51.56374, -0.152857 51.564074, -0.152963 51.564678, -0.153014 51.564841, -0.153147 51.565122, -0.153264 51.565421, -0.153384 51.565674, -0.153529 51.566009, -0.153567 51.566145, -0.153601 51.56637, -0.153617 51.566685, -0.153656 51.566802, -0.153762 51.56702, -0.153891 51.567418, -0.153883 51.567602, -0.152679 51.567865, -0.152621 51.567722, -0.152566 51.567735, -0.152536 51.567682, -0.152142 51.567768, -0.152176 51.567825, -0.151989 51.567874, -0.152011 51.56791, -0.151736 51.567992, -0.151754 51.568045, -0.151406 51.568136, -0.151005 51.568187, -0.151028 51.568056, -0.150983 51.568001, -0.150587 51.568048, -0.149446 51.566127, -0.147412 51.566337, -0.146906 51.566399, -0.146561 51.566383, -0.146543 51.56607, -0.14649 51.565592, -0.146472 51.565331, -0.146469 51.565053, -0.146429 51.56462, -0.146452 51.564405, -0.14653 51.563912, -0.146648 51.5635, -0.146696 51.563384, -0.145882 51.563173, -0.145781 51.563162, -0.145709 51.563161, -0.145578 51.563186, -0.145563 51.563195, -0.145459 51.563283, -0.145068 51.563664, -0.144549 51.564033, -0.144419 51.564113, -0.144041 51.564272, -0.143009 51.564581, -0.14243 51.564807, -0.14293 51.565037, -0.143001 51.56538, -0.142566 51.565539, -0.142866 51.565895, -0.142941 51.566029, -0.142967 51.566025, -0.143009 51.566077, -0.141459 51.566406, -0.141362 51.566416)))",
                typology: "geography",
                reference: "CA19",
                "entry-date": "2024-06-14",
                "start-date": "1978-04-01",
                "document-url":
                  "https://www.camden.gov.uk/documents/20142/7610500/Highgate.pdf",
                "documentation-url":
                  "https://www.camden.gov.uk/highgate-conservation-area-appraisal-and-management-strategy",
                "organisation-entity": "90",
              },
            ],
            text: "is in a Conservation Area",
            value: true,
            category: "Heritage and conservation",
          },
          "article4.camden.primroseHill": {
            fn: "article4.camden.primroseHill",
            value: false,
          },
          "article4.camden.swissCottage": {
            fn: "article4.camden.swissCottage",
            value: false,
          },
          "article4.camden.belsizeAvenue": {
            fn: "article4.camden.belsizeAvenue",
            value: false,
          },
          "article4.camden.147kentishTown": {
            fn: "article4.camden.147kentishTown",
            value: false,
          },
          "article4.camden.187kentishTown": {
            fn: "article4.camden.187kentishTown",
            value: false,
          },
          "article4.camden.fitzjohnAvenue": {
            fn: "article4.camden.fitzjohnAvenue",
            value: false,
          },
          "designated.nationalPark.broads": {
            fn: "designated.nationalPark.broads",
            value: false,
          },
        },
        planxRequest:
          "https://api.editor.planx.dev/gis/camden?geom=MULTIPOLYGON+%28%28%28-0.153392+51.564734%2C+-0.153391+51.564724%2C+-0.153376+51.564725%2C+-0.153085+51.564757%2C+-0.1531+51.564806%2C+-0.15335+51.564785%2C+-0.153392+51.564734%29%29%29&analytics=false&sessionId=7e147b04-0a8b-44fc-a249-c36ef6407f84",
        sourceRequest:
          "https://www.planning.data.gov.uk/entity.json?entries=current&geometry=MULTIPOLYGON+%28%28%28-0.153392+51.564734%2C+-0.153391+51.564724%2C+-0.153376+51.564725%2C+-0.153085+51.564757%2C+-0.1531+51.564806%2C+-0.15335+51.564785%2C+-0.153392+51.564734%29%29%29&geometry_relation=intersects&limit=100&dataset=article-4-direction-area&dataset=central-activities-zone&dataset=brownfield-land&dataset=brownfield-site&dataset=area-of-outstanding-natural-beauty&dataset=conservation-area&dataset=green-belt&dataset=national-park&dataset=world-heritage-site&dataset=world-heritage-site-buffer-zone&dataset=flood-risk-zone&dataset=listed-building&dataset=listed-building-outline&dataset=scheduled-monument&dataset=ancient-woodland&dataset=ramsar&dataset=special-area-of-conservation&dataset=special-protection-area&dataset=site-of-special-scientific-interest&dataset=park-and-garden&dataset=tree&dataset=tree-preservation-order&dataset=tree-preservation-zone",
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
        planxRequest: "https://api.editor.planx.dev/roads?usrn=20400012",
        sourceRequest:
          "https://api.os.uk/features/v1/wfs?service=WFS&request=GetFeature&version=2.0.0&typeNames=Highways_RoadLink&outputFormat=GEOJSON&srsName=urn%3Aogc%3Adef%3Acrs%3AEPSG%3A%3A4326&count=1&filter=%0A++++%3Cogc%3AFilter%3E%0A++++++%3Cogc%3APropertyIsLike+wildCard%3D%22%25%22+singleChar%3D%22%23%22+escapeChar%3D%22%21%22%3E%0A++++++++%3Cogc%3APropertyName%3EFormsPartOf%3C%2Fogc%3APropertyName%3E%0A++++++++%3Cogc%3ALiteral%3E%25Street%23usrn20400012%25%3C%2Fogc%3ALiteral%3E%0A++++++%3C%2Fogc%3APropertyIsLike%3E%0A++++%3C%2Fogc%3AFilter%3E%0A++&",
      },
    ],
    multipleFees: ["false"],
    "property.EPC": ["false"],
    otherDocument: [
      {
        url: "https://api.editor.planx.dev/file/private/o9ckva99/test%20document.pdf",
        rule: {
          condition: "NotRequired",
        },
        filename: "test document.pdf",
        cachedSlot: {
          id: "zIOSjhGuEvOCJ85R92Buv",
          url: "https://api.editor.planx.dev/file/private/o9ckva99/test%20document.pdf",
          file: {
            path: "test document.pdf",
            size: 100578,
            type: "application/pdf",
          },
          status: "success",
          progress: 1,
        },
      },
    ],
    "property.type": ["commercial.education.university", "other"],
    "applicant.type": ["company"],
    _requestedFiles: {
      optional: [
        "photographs.existing",
        "otherDrawing",
        "otherDocument",
        "visualisations",
      ],
      required: [
        "sitePlan.proposed",
        "elevations.existing",
        "elevations.proposed",
      ],
      recommended: [],
    },
    "applicant.email": "johnnybthepoet@email.org",
    "applicant.title": "Sir",
    "property.region": ["London"],
    "proposal.energy": ["solar"],
    "application.type": ["pa.part7.classM"],
    "proposal.started": ["false"],
    "applicant.address": {
      town: "Slough",
      line1: "12 Cabbage Lane",
      line2: "",
      county: "",
      country: "",
      postcode: "FR1 3ND",
    },
    "proposal.siteArea": 117.62,
    "sitePlan.proposed": [
      {
        url: "https://api.editor.planx.dev/file/private/p3e01fea/test%20document.pdf",
        rule: {
          fn: "application.sitePlanProposed.required",
          val: "true",
          operator: "Equals",
          condition: "RequiredIf",
        },
        filename: "test document.pdf",
        cachedSlot: {
          id: "bq8otcygAJdnxVIQOUEow",
          url: "https://api.editor.planx.dev/file/private/p3e01fea/test%20document.pdf",
          file: {
            path: "test document.pdf",
            size: 100578,
            type: "application/pdf",
          },
          status: "success",
          progress: 1,
        },
      },
    ],
    "_contact.applicant": {
      applicant: {
        email: "johnnybthepoet@email.org",
        phone: "012345678901",
        title: "Sir",
        lastName: "Betjeman",
        firstName: "John",
        organisation: "",
      },
    },
    "applicant.resident": ["false"],
    "applicant.name.last": "Betjeman",
    "drawBoundary.action": "Accepted the title boundary",
    "elevations.existing": [
      {
        url: "https://api.editor.planx.dev/file/private/p3e01fea/test%20document.pdf",
        rule: {
          fn: "application.elevations.required",
          val: "true",
          operator: "Equals",
          condition: "RequiredIf",
        },
        filename: "test document.pdf",
        cachedSlot: {
          id: "bq8otcygAJdnxVIQOUEow",
          url: "https://api.editor.planx.dev/file/private/p3e01fea/test%20document.pdf",
          file: {
            path: "test document.pdf",
            size: 100578,
            type: "application/pdf",
          },
          status: "success",
          progress: 1,
        },
      },
    ],
    "elevations.proposed": [
      {
        url: "https://api.editor.planx.dev/file/private/p3e01fea/test%20document.pdf",
        rule: {
          fn: "application.elevationsProposed.required",
          val: "true",
          operator: "Equals",
          condition: "RequiredIf",
        },
        filename: "test document.pdf",
        cachedSlot: {
          id: "bq8otcygAJdnxVIQOUEow",
          url: "https://api.editor.planx.dev/file/private/p3e01fea/test%20document.pdf",
          file: {
            path: "test document.pdf",
            size: 100578,
            type: "application/pdf",
          },
          status: "success",
          progress: 1,
        },
      },
    ],
    "findProperty.action": "Selected an existing address",
    "proposal.schemeName": "Sir John Betjeman's New Extension",
    "applicant.agent.form": ["No"],
    "applicant.name.first": "John",
    "property.titleNumber": ["unknown"],
    "proposal.description":
      "New extension to university building, for the purposes of teaching downbeat poetry about Slough to the masses. 6 metres to the rear and 4 metres in height.",
    "proposal.projectType": ["extend"],
    "applicant.siteContact.role": ["applicant"],
    "proposal.energy.solar": ["true"],
    "proposal.parking.type": ["cycles"],
    "proposal.started.date": "2024-07-28",
    "property.EPCKnown.form": ["The property does not have one"],
    "property.area.internal": 400,
    "property.boundary.area": 117.62,
    "property.boundary.site": {
      type: "Feature",
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [-0.153392, 51.564734],
              [-0.153391, 51.564724],
              [-0.153376, 51.564725],
              [-0.153085, 51.564757],
              [-0.1531, 51.564806],
              [-0.15335, 51.564785],
              [-0.153392, 51.564734],
            ],
          ],
        ],
      },
      properties: {
        name: "",
        entity: 12000488653,
        prefix: "title-boundary",
        dataset: "title-boundary",
        "end-date": "",
        typology: "geography",
        reference: "36535150",
        "entry-date": "2024-05-06",
        "start-date": "2008-08-14",
        "organisation-entity": "13",
      },
    },
    "applicant.phone.primary": "012345678901",
    "application.fee.payable": 120,
    "property.boundary.title": {
      type: "Feature",
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [-0.153392, 51.564734],
              [-0.153391, 51.564724],
              [-0.153376, 51.564725],
              [-0.153085, 51.564757],
              [-0.1531, 51.564806],
              [-0.15335, 51.564785],
              [-0.153392, 51.564734],
            ],
          ],
        ],
      },
      properties: {
        name: "",
        entity: 12000488653,
        prefix: "title-boundary",
        dataset: "title-boundary",
        "end-date": "",
        typology: "geography",
        reference: "36535150",
        "entry-date": "2024-05-06",
        "start-date": "2008-08-14",
        "organisation-entity": "13",
      },
    },
    "property.parking.cycles": 5,
    "proposal.completed.date": "2024-07-28",
    "proposal.greenRoof.area": 12,
    "proposal.parking.cycles": 8,
    "application.resubmission": ["false"],
    "proposal.EVCharging.type": ["fast"],
    "application.leadDeveloper": ["ukCompany"],
    "application.fee.calculated": 120,
    "proposal.area.internal.new": 390,
    "proposal.visibility.public": ["true"],
    "part7classM.proposalScoping": ["true"],
    "proposal.waste.reuseRecycle": 0,
    "property.boundary.title.area": 117.62,
    "proposal.urbanGreeningFactor": 2,
    "property.constraints.planning": [
      "article4.camden.basements",
      "designated.conservationArea",
    ],
    "application.linked.superseding": ["false"],
    "property.titleNumberKnown.form": ["No"],
    "proposal.area.internal.removed": 10,
    "proposal.energy.solar.capacity": 6,
    "application.elevations.required": ["true"],
    "property.boundary.area.hectares": 0.011762,
    "property.boundary.site.buffered": {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-0.15493734790285768, 51.56522576220498],
            [-0.15505320644125323, 51.56504747786384],
            [-0.15511632777023215, 51.564859242252645],
            [-0.1551247086918598, 51.56466703112467],
            [-0.15512370831226344, 51.5646570311394],
            [-0.15506688539278515, 51.56444235333997],
            [-0.1549419509343411, 51.564239122873374],
            [-0.1547539833721988, 51.56405559940242],
            [-0.15451062266757806, 51.56389924156728],
            [-0.1542217597300613, 51.56377640388988],
            [-0.15389913441740583, 51.56369207855773],
            [-0.15355585845204073, 51.563649692573335],
            [-0.1532058826349597, 51.56365096850657],
            [-0.15319088298486222, 51.56365196848297],
            [-0.1530735926641987, 51.56366231487889],
            [-0.15278259925226753, 51.563694314131034],
            [-0.15245228702242208, 51.56375204210845],
            [-0.1521466895646757, 51.56384902710949],
            [-0.1518777442317343, 51.5639814807343],
            [-0.15165595692780515, 51.56414422907923],
            [-0.15148999173764907, 51.56433091480729],
            [-0.15138633244771807, 51.56453424544735],
            [-0.15134902918544713, 51.564746278230245],
            [-0.1513795400859528, 51.56495873034025],
            [-0.15139453831460234, 51.565007730557646],
            [-0.1514862796876887, 51.56520395374383],
            [-0.15163587929081165, 51.565385909356664],
            [-0.1518379740115803, 51.56554707353199],
            [-0.1520853183476211, 51.56568166780034],
            [-0.1523690441509932, 51.56578486629789],
            [-0.15267897859349236, 51.565852968824274],
            [-0.15300400895062694, 51.565883533537765],
            [-0.15333248111749462, 51.56587546452552],
            [-0.1535824868904128, 51.565854464031574],
            [-0.15390761313355883, 51.56580700308505],
            [-0.15421210312504866, 51.56572172138088],
            [-0.15448468841935922, 51.56560177503166],
            [-0.15471528151298422, 51.56545160299237],
            [-0.15489534918196063, 51.565276762756554],
            [-0.15493734790285768, 51.56522576220498],
          ],
        ],
      },
      properties: {
        name: "",
        entity: 12000488653,
        prefix: "title-boundary",
        dataset: "title-boundary",
        "end-date": "",
        typology: "geography",
        reference: "36535150",
        "entry-date": "2024-05-06",
        "start-date": "2008-08-14",
        "organisation-entity": "13",
      },
    },
    "property.localAuthorityDistrict": ["Camden"],
    "proposal.charging.active.number": 3,
    "application.declaration.accurate": ["true"],
    "application.fee.reference.govPay": {
      moto: false,
      state: {
        status: "created",
        finished: false,
      },
      _links: {
        self: {
          href: "https://publicapi.payments.service.gov.uk/v1/payments/90u259k4b9qh4tn2h220ui2um3",
          method: "GET",
        },
        cancel: {
          href: "https://publicapi.payments.service.gov.uk/v1/payments/90u259k4b9qh4tn2h220ui2um3/cancel",
          method: "POST",
        },
        events: {
          href: "https://publicapi.payments.service.gov.uk/v1/payments/90u259k4b9qh4tn2h220ui2um3/events",
          method: "GET",
        },
        refunds: {
          href: "https://publicapi.payments.service.gov.uk/v1/payments/90u259k4b9qh4tn2h220ui2um3/refunds",
          method: "GET",
        },
        next_url: {
          href: "https://card.payments.service.gov.uk/secure/6e32b41c-9156-4af8-84c0-df04764b61cc",
          method: "GET",
        },
        next_url_post: {
          href: "https://card.payments.service.gov.uk/secure",
          type: "application/x-www-form-urlencoded",
          method: "POST",
          params: {
            chargeTokenId: "6e32b41c-9156-4af8-84c0-df04764b61cc",
          },
        },
      },
      amount: 120,
      language: "en",
      metadata: {
        flow: "apply-for-prior-approval",
        source: "PlanX",
        paidViaInviteToPay: false,
      },
      reference: "7e147b04-0a8b-44fc-a249-c36ef6407f84",
      payment_id: "90u259k4b9qh4tn2h220ui2um3",
      return_url:
        "https://editor.planx.dev/camden/apply-for-prior-approval/published?sessionId=7e147b04-0a8b-44fc-a249-c36ef6407f84&email=areyouon%40email.org",
      description: "New application",
      created_date: "2024-06-28T10:22:56.879Z",
      refund_summary: {
        status: "pending",
        amount_available: 12000,
        amount_submitted: 0,
      },
      delayed_capture: false,
      payment_provider: "sandbox",
      authorisation_mode: "web",
      settlement_summary: {},
    },
    "application.declaration.connection": ["none"],
    "proposal.parking.cycles.difference": 3,
    "applicant.address.sameAsSiteAddress": ["No"],
    "proposal.utilities.fire.suppression": ["true"],
    "application.fee.exemption.disability": ["false"],
    "application.declaration.accurate.form": ["Yes"],
    "application.leadDeveloper.companyName": "Fit For Cabbages Developments",
    "application.sitePlanProposed.required": ["true"],
    "property.boundary.title.area.hectares": 0.011762,
    "application.fee.exemption.resubmission": ["false"],
    "application.declaration.connection.form": ["No connections"],
    "application.elevationsProposed.required": ["true"],
    "application.transportAssessment.required": ["true"],
    "proposal.utilities.internet.commercialUnits": 1,
    "proposal.utilities.internet.residentialUnits": 0,
    "application.fee.exemption.planningApplication": ["false"],
    "application.informationType.transportAssessment": ["document"],
    "application.leadDeveloper.ukCompanyRegistrationNumber": "12345679ABC",
    "application.consultees.mobileNetworkOperators.consulted": ["false"],
  },
  breadcrumbs: {
    "0GjcYeIXsf": {
      auto: false,
    },
    "0t4bUuuSA7": {
      auto: true,
      answers: ["l78sUFjVbX"],
    },
    "11kAdcrwmE": {
      auto: false,
      data: {
        "property.parking.cycles": 5,
      },
    },
    "3JglXonUti": {
      auto: false,
      answers: ["oJiwyeTp0f"],
    },
    "3OorRQ7DwY": {
      auto: false,
      data: {
        "proposal.area.internal.removed": 10,
      },
    },
    "4kNA9PWC4j": {
      auto: false,
      answers: ["17HqOtTsIa"],
    },
    "7jYzr4mw0C": {
      auto: true,
      data: {
        "application.sitePlanProposed.required": ["true"],
      },
    },
    "8kaCyhvpH7": {
      auto: false,
      answers: ["PsRnXEO2x7"],
    },
    "8s3HKw34c4": {
      auto: true,
      data: {
        "proposal.parking.cycles.difference": 3,
      },
    },
    "8wv6JfFTTq": {
      auto: true,
      data: {
        "property.EPCKnown.form": ["The property does not have one"],
      },
    },
    "9OMGTgLZsn": {
      auto: true,
      answers: ["CHhc4QbuMO"],
    },
    "9jgV3fFTTq": {
      auto: true,
      data: {
        "property.titleNumber": ["unknown"],
      },
    },
    "9zSqolzagB": {
      auto: true,
      answers: ["0crtpEXK0m"],
    },
    AsjvlXzCAM: {
      auto: true,
      answers: ["XgeuYfzCAM", "BXJk0hECAM"],
    },
    BDulPzfy0y: {
      auto: true,
      answers: ["PHdvJFBxax"],
    },
    BK9IG3wgXj: {
      auto: true,
      data: {
        "application.transportAssessment.required": ["true"],
      },
    },
    CBjoZlXnao: {
      auto: false,
      answers: ["GJ9b9DTPLK"],
    },
    Cx95aeIXsf: {
      auto: false,
      data: {
        "drawBoundary.action": "Accepted the title boundary",
        "property.boundary.area": 117.62,
        "property.boundary.site": {
          type: "Feature",
          geometry: {
            type: "MultiPolygon",
            coordinates: [
              [
                [
                  [-0.153392, 51.564734],
                  [-0.153391, 51.564724],
                  [-0.153376, 51.564725],
                  [-0.153085, 51.564757],
                  [-0.1531, 51.564806],
                  [-0.15335, 51.564785],
                  [-0.153392, 51.564734],
                ],
              ],
            ],
          },
          properties: {
            name: "",
            entity: 12000488653,
            prefix: "title-boundary",
            dataset: "title-boundary",
            "end-date": "",
            typology: "geography",
            reference: "36535150",
            "entry-date": "2024-05-06",
            "start-date": "2008-08-14",
            "organisation-entity": "13",
          },
        },
        "property.boundary.area.hectares": 0.011762,
        "property.boundary.site.buffered": {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [-0.15493734790285768, 51.56522576220498],
                [-0.15505320644125323, 51.56504747786384],
                [-0.15511632777023215, 51.564859242252645],
                [-0.1551247086918598, 51.56466703112467],
                [-0.15512370831226344, 51.5646570311394],
                [-0.15506688539278515, 51.56444235333997],
                [-0.1549419509343411, 51.564239122873374],
                [-0.1547539833721988, 51.56405559940242],
                [-0.15451062266757806, 51.56389924156728],
                [-0.1542217597300613, 51.56377640388988],
                [-0.15389913441740583, 51.56369207855773],
                [-0.15355585845204073, 51.563649692573335],
                [-0.1532058826349597, 51.56365096850657],
                [-0.15319088298486222, 51.56365196848297],
                [-0.1530735926641987, 51.56366231487889],
                [-0.15278259925226753, 51.563694314131034],
                [-0.15245228702242208, 51.56375204210845],
                [-0.1521466895646757, 51.56384902710949],
                [-0.1518777442317343, 51.5639814807343],
                [-0.15165595692780515, 51.56414422907923],
                [-0.15148999173764907, 51.56433091480729],
                [-0.15138633244771807, 51.56453424544735],
                [-0.15134902918544713, 51.564746278230245],
                [-0.1513795400859528, 51.56495873034025],
                [-0.15139453831460234, 51.565007730557646],
                [-0.1514862796876887, 51.56520395374383],
                [-0.15163587929081165, 51.565385909356664],
                [-0.1518379740115803, 51.56554707353199],
                [-0.1520853183476211, 51.56568166780034],
                [-0.1523690441509932, 51.56578486629789],
                [-0.15267897859349236, 51.565852968824274],
                [-0.15300400895062694, 51.565883533537765],
                [-0.15333248111749462, 51.56587546452552],
                [-0.1535824868904128, 51.565854464031574],
                [-0.15390761313355883, 51.56580700308505],
                [-0.15421210312504866, 51.56572172138088],
                [-0.15448468841935922, 51.56560177503166],
                [-0.15471528151298422, 51.56545160299237],
                [-0.15489534918196063, 51.565276762756554],
                [-0.15493734790285768, 51.56522576220498],
              ],
            ],
          },
          properties: {
            name: "",
            entity: 12000488653,
            prefix: "title-boundary",
            dataset: "title-boundary",
            "end-date": "",
            typology: "geography",
            reference: "36535150",
            "entry-date": "2024-05-06",
            "start-date": "2008-08-14",
            "organisation-entity": "13",
          },
        },
      },
    },
    Cz0xhAeaCy: {
      auto: false,
      data: {
        "application.leadDeveloper.ukCompanyRegistrationNumber": "12345679ABC",
      },
    },
    Dj8uzqMfbn: {
      auto: false,
      answers: ["BPfnZZjoDS"],
    },
    E63e1zXlP8: {
      auto: false,
      answers: ["yupLEsUTn2"],
    },
    ESWiVPa8F8: {
      auto: false,
      answers: ["XyxjPPa8F8"],
    },
    EoXjOeIXsf: {
      auto: false,
    },
    Euxg2h3LrL: {
      auto: false,
      answers: ["hGSf77GRJk"],
    },
    F6QHvR93Hb: {
      auto: true,
      answers: ["5rfE5goCyB"],
    },
    FDjdC8jGvG: {
      auto: false,
      answers: ["VVrq4wiBOU"],
    },
    FjqSS4KPRR: {
      auto: false,
      answers: ["K3vQNfYHfv"],
    },
    FsGPOqFRTU: {
      auto: true,
      data: {
        "part7classM.proposalScoping": ["true"],
      },
    },
    Fv6lXlscLG: {
      auto: true,
      answers: ["jNTnqMpUZA"],
    },
    FwyzmeIXsf: {
      auto: true,
      answers: ["OscpleIXsf"],
    },
    G3UvqkadNO: {
      auto: false,
      answers: ["XEO8W1CcIk"],
    },
    GPcb8p54sJ: {
      auto: false,
      data: {
        "proposal.parking.cycles": 8,
      },
    },
    GfwfUoatgs: {
      auto: false,
      data: {
        "proposal.energy.solar.capacity": 6,
      },
    },
    GrgYjTEJEy: {
      auto: false,
      data: {
        "property.area.internal": 400,
      },
    },
    GsPkmeIXsf: {
      auto: false,
    },
    H4lulakQuw: {
      auto: true,
      answers: ["SALazP3rhe"],
    },
    I03hRPF3ck: {
      auto: false,
      answers: ["hrVQ3UrdMQ"],
    },
    IBf5oPa8F8: {
      auto: true,
      answers: ["uGngqPa8F8"],
    },
    IElZkBeHC5: {
      auto: false,
      answers: ["GR4jdPeD9b"],
    },
    JXt0WnAhMF: {
      auto: true,
      answers: ["DoGzD6ZGle"],
    },
    KSHxStR5wh: {
      auto: true,
      answers: ["FOsiIgiUBd"],
    },
    Kd81dw4271: {
      auto: false,
      answers: ["64CruLG7Ra"],
    },
    Kty9YPa8F8: {
      auto: true,
      answers: ["WMxzEPa8F8"],
    },
    LU5xin8PHs: {
      auto: false,
      answers: ["7MvdNl3XE8"],
    },
    LX6YWhFHZX: {
      auto: false,
      data: {
        otherDocument: [
          {
            url: "https://api.editor.planx.dev/file/private/o9ckva99/test%20document.pdf",
            rule: {
              condition: "NotRequired",
            },
            filename: "test document.pdf",
            cachedSlot: {
              id: "zIOSjhGuEvOCJ85R92Buv",
              url: "https://api.editor.planx.dev/file/private/o9ckva99/test%20document.pdf",
              file: {
                path: "test document.pdf",
                size: 100578,
                type: "application/pdf",
              },
              status: "success",
              progress: 1,
            },
          },
        ],
        _requestedFiles: {
          optional: [
            "photographs.existing",
            "otherDrawing",
            "otherDocument",
            "visualisations",
          ],
          required: [
            "sitePlan.proposed",
            "elevations.existing",
            "elevations.proposed",
          ],
          recommended: [],
        },
        "sitePlan.proposed": [
          {
            url: "https://api.editor.planx.dev/file/private/p3e01fea/test%20document.pdf",
            rule: {
              fn: "application.sitePlanProposed.required",
              val: "true",
              operator: "Equals",
              condition: "RequiredIf",
            },
            filename: "test document.pdf",
            cachedSlot: {
              id: "bq8otcygAJdnxVIQOUEow",
              url: "https://api.editor.planx.dev/file/private/p3e01fea/test%20document.pdf",
              file: {
                path: "test document.pdf",
                size: 100578,
                type: "application/pdf",
              },
              status: "success",
              progress: 1,
            },
          },
        ],
        "elevations.existing": [
          {
            url: "https://api.editor.planx.dev/file/private/p3e01fea/test%20document.pdf",
            rule: {
              fn: "application.elevations.required",
              val: "true",
              operator: "Equals",
              condition: "RequiredIf",
            },
            filename: "test document.pdf",
            cachedSlot: {
              id: "bq8otcygAJdnxVIQOUEow",
              url: "https://api.editor.planx.dev/file/private/p3e01fea/test%20document.pdf",
              file: {
                path: "test document.pdf",
                size: 100578,
                type: "application/pdf",
              },
              status: "success",
              progress: 1,
            },
          },
        ],
        "elevations.proposed": [
          {
            url: "https://api.editor.planx.dev/file/private/p3e01fea/test%20document.pdf",
            rule: {
              fn: "application.elevationsProposed.required",
              val: "true",
              operator: "Equals",
              condition: "RequiredIf",
            },
            filename: "test document.pdf",
            cachedSlot: {
              id: "bq8otcygAJdnxVIQOUEow",
              url: "https://api.editor.planx.dev/file/private/p3e01fea/test%20document.pdf",
              file: {
                path: "test document.pdf",
                size: 100578,
                type: "application/pdf",
              },
              status: "success",
              progress: 1,
            },
          },
        ],
      },
    },
    LvacCh5Sft: {
      auto: false,
      answers: ["xRT4oR2JM6"],
    },
    MBfV2eIXsf: {
      auto: false,
    },
    MMPIvVduyy: {
      auto: false,
      answers: ["j2Ll5UAnnM"],
    },
    MvRUSyqezC: {
      auto: false,
      answers: ["twOdAbGD0c"],
    },
    MwguZtYfgo: {
      auto: false,
      answers: ["l9QeLkWnuB"],
    },
    NOOsoNqwEz: {
      auto: false,
      answers: ["gLsFJbrERP"],
    },
    OOiDEfFTTq: {
      auto: false,
      answers: ["P7W34fFTTq"],
    },
    OT7qweIXsf: {
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
              href: "https://publicapi.payments.service.gov.uk/v1/payments/90u259k4b9qh4tn2h220ui2um3",
              method: "GET",
            },
            cancel: {
              href: "https://publicapi.payments.service.gov.uk/v1/payments/90u259k4b9qh4tn2h220ui2um3/cancel",
              method: "POST",
            },
            events: {
              href: "https://publicapi.payments.service.gov.uk/v1/payments/90u259k4b9qh4tn2h220ui2um3/events",
              method: "GET",
            },
            refunds: {
              href: "https://publicapi.payments.service.gov.uk/v1/payments/90u259k4b9qh4tn2h220ui2um3/refunds",
              method: "GET",
            },
            next_url: {
              href: "https://card.payments.service.gov.uk/secure/6e32b41c-9156-4af8-84c0-df04764b61cc",
              method: "GET",
            },
            next_url_post: {
              href: "https://card.payments.service.gov.uk/secure",
              type: "application/x-www-form-urlencoded",
              method: "POST",
              params: {
                chargeTokenId: "6e32b41c-9156-4af8-84c0-df04764b61cc",
              },
            },
          },
          amount: 120,
          language: "en",
          metadata: {
            flow: "apply-for-prior-approval",
            source: "PlanX",
            paidViaInviteToPay: false,
          },
          reference: "7e147b04-0a8b-44fc-a249-c36ef6407f84",
          payment_id: "90u259k4b9qh4tn2h220ui2um3",
          return_url:
            "https://editor.planx.dev/camden/apply-for-prior-approval/published?sessionId=7e147b04-0a8b-44fc-a249-c36ef6407f84&email=areyouon%40email.org",
          description: "New application",
          created_date: "2024-06-28T10:22:56.879Z",
          refund_summary: {
            status: "pending",
            amount_available: 12000,
            amount_submitted: 0,
          },
          delayed_capture: false,
          payment_provider: "sandbox",
          authorisation_mode: "web",
          settlement_summary: {},
        },
      },
    },
    Oh6JXwyrQU: {
      auto: true,
      answers: ["czLBEhCulw"],
    },
    QEtbieIXsf: {
      auto: false,
      data: {
        "proposal.description":
          "New extension to university building, for the purposes of teaching downbeat poetry about Slough to the masses. 6 metres to the rear and 4 metres in height.",
      },
    },
    QFTAdfgGtY: {
      auto: true,
      answers: ["cVtQOWKBVY"],
    },
    QX4MkQC2oq: {
      auto: false,
      answers: ["xL95HkeOAz"],
    },
    R7nZoEmQ6b: {
      auto: true,
      answers: ["Rpjz5O16AW"],
    },
    RHBOiknaeR: {
      auto: false,
      data: {
        RHBOiknaeR:
          "The facade treatment will be sympathetic with the existing building and character of the area, using namely glazed tiles, london stock brick and standing seam zinc roofing.",
      },
    },
    RZxUB4PcW5: {
      auto: false,
      answers: ["GfnFWLmEen"],
    },
    RxPc5fFTTq: {
      auto: false,
      answers: ["XE2ySfFTTq"],
    },
    ShPkwTNiCM: {
      auto: true,
      data: {
        "proposal.siteArea": 117.62,
      },
    },
    T1zEieIXsf: {
      auto: false,
      data: {
        _address: {
          x: 528097,
          y: 186713,
          pao: "31",
          town: "LONDON",
          uprn: "000005008312",
          usrn: "20400012",
          title: "31, HIGHGATE WEST HILL, LONDON",
          source: "os",
          street: "HIGHGATE WEST HILL",
          latitude: 51.5647555,
          postcode: "N6 6NP",
          blpu_code: "2",
          longitude: -0.1532914,
          planx_value: "residential.dwelling.flat",
          organisation: null,
          planx_description: "Flat",
          single_line_address: "31, HIGHGATE WEST HILL, LONDON, CAMDEN, N6 6NP",
        },
        "property.region": ["London"],
        "findProperty.action": "Selected an existing address",
        "property.boundary.title": {
          type: "Feature",
          geometry: {
            type: "MultiPolygon",
            coordinates: [
              [
                [
                  [-0.153392, 51.564734],
                  [-0.153391, 51.564724],
                  [-0.153376, 51.564725],
                  [-0.153085, 51.564757],
                  [-0.1531, 51.564806],
                  [-0.15335, 51.564785],
                  [-0.153392, 51.564734],
                ],
              ],
            ],
          },
          properties: {
            name: "",
            entity: 12000488653,
            prefix: "title-boundary",
            dataset: "title-boundary",
            "end-date": "",
            typology: "geography",
            reference: "36535150",
            "entry-date": "2024-05-06",
            "start-date": "2008-08-14",
            "organisation-entity": "13",
          },
        },
        "property.boundary.title.area": 117.62,
        "property.localAuthorityDistrict": ["Camden"],
        "property.boundary.title.area.hectares": 0.011762,
      },
      override: {
        "property.type": ["residential.dwelling.flat"],
      },
    },
    T2QtM64BpR: {
      auto: true,
      data: {
        "applicant.agent.form": ["No"],
      },
    },
    Tz7roPa8F8: {
      auto: true,
      answers: ["knzX5Pa8F8"],
    },
    U4ksNeIXsf: {
      auto: false,
    },
    UCcrlPa8F8: {
      auto: false,
      answers: ["s8MaZPa8F8"],
    },
    UHzoCPa8F8: {
      auto: true,
      data: {
        "application.fee.payable": 120,
      },
    },
    UgDQBaO0PG: {
      auto: false,
      answers: ["eKp2LHwTaC"],
    },
    V1pPQeIXsf: {
      auto: false,
      answers: ["RZSr0eIXsf"],
    },
    VLgxhI46Cf: {
      auto: false,
      answers: ["CeZM9UBm9O"],
    },
    Vy1mleIXsf: {
      auto: true,
      answers: ["LL55HeIXsf"],
    },
    WBkwbvfPBi: {
      auto: true,
      answers: ["3tAFR7kMtA"],
    },
    WjfeLGXseE: {
      auto: false,
      data: {
        "applicant.address": {
          town: "Slough",
          line1: "12 Cabbage Lane",
          line2: "",
          county: "",
          country: "",
          postcode: "FR1 3ND",
        },
      },
    },
    WpV3KfWRCB: {
      auto: false,
      data: {
        "proposal.waste.reuseRecycle": 0,
      },
    },
    YELHAd7auA: {
      auto: false,
      data: {
        YELHAd7auA:
          "These are the impacts on heritage:\nA\nB\nC\n and this is how they will be mitigated:\n1\n2\n3",
      },
    },
    YgzMu6zTKo: {
      auto: false,
      data: {
        "proposal.utilities.internet.residentialUnits": 0,
      },
    },
    alkbAGuyeq: {
      auto: false,
      answers: ["jrcQ9zfn16"],
    },
    bZHQGPNb1p: {
      auto: true,
      data: {
        multipleFees: ["false"],
      },
    },
    cOSGyPa8F8: {
      auto: true,
      data: {
        "application.fee.exemption.planningApplication": ["false"],
      },
    },
    d61LSLFmsl: {
      auto: true,
      answers: ["ATJLf49B5t"],
    },
    dGxzaPa8F8: {
      auto: true,
      answers: ["YMbKtPa8F8"],
    },
    dLTgek2aYF: {
      auto: false,
    },
    dgCzHeIXsf: {
      auto: false,
      data: {
        _nots: {
          "property.constraints.planning": [
            "brownfieldSite",
            "designated.AONB",
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
            "tpo",
            "article4.camden.147kentishTown",
            "article4.camden.187kentishTown",
            "article4.camden.33yorkRise",
            "article4.camden.belsize",
            "article4.camden.belsizeAvenue",
            "article4.camden.eC3Caz",
            "article4.camden.eC3NoCaz",
            "article4.camden.fitzjohnAvenue",
            "article4.camden.frognal",
            "article4.camden.hampstead",
            "article4.camden.parkway",
            "article4.camden.primroseHill",
            "article4.camden.southHill",
            "article4.camden.suiGenC3",
            "article4.camden.swissCottage",
            "article4.camden.caz",
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
                  count: 21562,
                  dataset: "tree-preservation-zone",
                },
                "licence-text":
                  "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "paint-options": "",
                "attribution-text":
                  "© Crown copyright and database right 2024",
              },
              flood: {
                name: "Flood risk zone",
                text: "Flood zones are a guide produced by the Environment Agency to demonstrate the probability of river and sea flooding in areas across England. Flood zones are based on the likelihood of an area flooding, with flood zone 1 areas least likely to flood and flood zone 3 areas more likely to flood. \n\nThe flood zones were produced to help developers, councils and communities understand the flood risks present in specific locations or regions. Despite being a very useful indicator of an area’s flood risk, the zones cannot tell you whether a location will definitely flood or to what severity.",
                plural: "Flood risk zones",
                prefix: "",
                themes: ["environment"],
                dataset: "flood-risk-zone",
                licence: "ogl3",
                "end-date": "",
                entities: "",
                typology: "geography",
                wikidata: "",
                wikipedia: "",
                collection: "flood-risk-zone",
                "entry-date": "",
                "start-date": "",
                attribution: "crown-copyright",
                description:
                  "Area identified as being at risk of flooding from rivers or the sea",
                "entity-count": {
                  count: 550621,
                  dataset: "flood-risk-zone",
                },
                "licence-text":
                  "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "paint-options": "",
                "attribution-text":
                  "© Crown copyright and database right 2024",
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
                  count: 23956,
                  dataset: "listed-building-outline",
                },
                "licence-text":
                  "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "paint-options": {
                  colour: "#F9C744",
                },
                "attribution-text":
                  "© Crown copyright and database right 2024",
              },
              article4: {
                name: "Article 4 direction area",
                text: "A local planning authority may create an [article 4 direction](https://www.gov.uk/guidance/when-is-permission-required#article-4-direction) to alter or remove [permitted development rights](https://www.gov.uk/government/publications/permitted-development-rights-for-householders-technical-guidance) from a building or area.\n\nEach [article 4 direction](/dataset/article-4-direction) may apply to one or more article 4 direction areas.",
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
                  count: 1355,
                  dataset: "article-4-direction-area",
                },
                "licence-text":
                  "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "paint-options": "",
                "attribution-text":
                  "© Crown copyright and database right 2024",
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
                  "© Historic England 2024. Contains Ordnance Survey data © Crown copyright and database right 2024.\nThe Historic England GIS Data contained in this material was obtained on [date].\nThe most publicly available up to date Historic England GIS Data can be obtained from [HistoricEngland.org.uk](https://historicengland.org.uk).",
              },
              greenBelt: {
                name: "Green belt",
                text: "Boundaries for land designated by a local planning authority as being [green belt](https://www.gov.uk/guidance/green-belt),\ngrouped using the [greenbelt core](/dataset/greenbelt-core) category.\nThis data is compiled by the Department for Levelling Up, Housing and Communities for the purposes of gathering [green belt statistics](https://www.gov.uk/government/collections/green-belt-statistics).",
                plural: "Green belt",
                prefix: "",
                themes: ["environment"],
                dataset: "green-belt",
                licence: "ogl3",
                "end-date": "",
                entities: "",
                typology: "geography",
                wikidata: "Q2734873",
                wikipedia: "Green_belt_(United_Kingdom)",
                collection: "green-belt",
                "entry-date": "",
                "start-date": "",
                attribution: "os-open-data",
                description: "",
                "entity-count": {
                  count: 185,
                  dataset: "green-belt",
                },
                "licence-text":
                  "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "paint-options": {
                  colour: "#85994b",
                },
                "attribution-text":
                  "Your use of OS OpenData is subject to the terms at http://os.uk/opendata/licence\nContains Ordnance Survey data © Crown copyright and database right 2024",
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
                  "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2024.",
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
                  "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2024.",
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
                  "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2024.",
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
                  "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2024.",
              },
              "article4.caz": {
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
                  "© Crown copyright and database right 2024",
              },
              brownfieldSite: {
                name: "Brownfield site",
                text: "This is an experimental dataset of the boundaries of brownfield sites found on [data.gov.uk](https://www.data.gov.uk/search?q=brownfield)\nand local planning authority web sites.\nWe expect to combine this dataset with the [brownfield land](/dataset/brownfield-land) dataset in the near future.",
                plural: "Brownfield sites",
                prefix: "",
                themes: ["development"],
                dataset: "brownfield-site",
                licence: "ogl3",
                "end-date": "",
                entities: "",
                typology: "geography",
                wikidata: "Q896586",
                wikipedia: "Brownfield_land",
                collection: "brownfield-site",
                "entry-date": "",
                "start-date": "",
                attribution: "crown-copyright",
                description: "",
                "entity-count": {
                  count: 2777,
                  dataset: "brownfield-site",
                },
                "licence-text":
                  "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "paint-options": {
                  colour: "#745729",
                },
                "attribution-text":
                  "© Crown copyright and database right 2024",
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
                  opacity: 0.2,
                },
                "attribution-text":
                  "© Historic England 2024. Contains Ordnance Survey data © Crown copyright and database right 2024.\nThe Historic England GIS Data contained in this material was obtained on [date].\nThe most publicly available up to date Historic England GIS Data can be obtained from [HistoricEngland.org.uk](https://historicengland.org.uk).",
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
                  "© Historic England 2024. Contains Ordnance Survey data © Crown copyright and database right 2024.\nThe Historic England GIS Data contained in this material was obtained on [date].\nThe most publicly available up to date Historic England GIS Data can be obtained from [HistoricEngland.org.uk](https://historicengland.org.uk).",
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
                  "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2024.",
              },
              "nature.ramsarSite": {
                name: "Ramsar site",
                text: "An internationally protected site listed as a wetland of international importance.\nRamsar sites are designated by [UNESCO](https://en.unesco.org/) and managed by [Natural England](https://www.gov.uk/government/organisations/natural-england).\n\nNatural England provides [guidance ](https://www.gov.uk/guidance/protected-sites-and-areas-how-to-review-planning-applications) to help local authorities decide on planning applications in protected sites and areas.",
                plural: "Ramsar sites",
                prefix: "",
                themes: ["environment"],
                dataset: "ramsar",
                licence: "ogl3",
                "end-date": "",
                entities: "",
                typology: "geography",
                wikidata: "",
                wikipedia: "",
                collection: "ramsar",
                "entry-date": "",
                "start-date": "",
                attribution: "natural-england",
                description: "",
                "entity-count": {
                  count: 73,
                  dataset: "ramsar",
                },
                "licence-text":
                  "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "paint-options": {
                  colour: "#7fcdff",
                },
                "attribution-text":
                  "© Natural England copyright. Contains Ordnance Survey data © Crown copyright and database right 2024.",
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
                  "Source: Office for National Statistics licensed under the Open Government Licence v.3.0\nContains OS data © Crown copyright and database right 2024",
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
                  count: 8341,
                  dataset: "conservation-area",
                },
                "licence-text":
                  "Licensed under the [Open Government Licence v.3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).",
                "paint-options": {
                  colour: "#78AA00",
                },
                "attribution-text":
                  "© Historic England 2024. Contains Ordnance Survey data © Crown copyright and database right 2024.\nThe Historic England GIS Data contained in this material was obtained on [date].\nThe most publicly available up to date Historic England GIS Data can be obtained from [HistoricEngland.org.uk](https://historicengland.org.uk).",
              },
            },
            constraints: {
              tpo: {
                fn: "tpo",
                text: "is not in a Tree Preservation Order (TPO) Zone",
                value: false,
                category: "Trees",
              },
              flood: {
                fn: "flood",
                text: "is not in a Flood Risk Zone",
                value: false,
                category: "Flooding",
              },
              listed: {
                fn: "listed",
                text: "is not, or is not within, a Listed Building",
                value: false,
                category: "Heritage and conservation",
              },
              article4: {
                fn: "article4",
                data: [
                  {
                    name: "Basements",
                    notes: "Basements",
                    point: "POINT (-0.157397 51.546393)",
                    entity: 7010002613,
                    prefix: "article-4-direction-area",
                    dataset: "article-4-direction-area",
                    "end-date": "",
                    geometry:
                      "MULTIPOLYGON (((-0.114229 51.525483, -0.11424 51.525498, -0.114236 51.525511, -0.113955 51.525728, -0.112995 51.526367, -0.112919 51.526409, -0.113018 51.526438, -0.113163 51.526464, -0.113445 51.526533, -0.113671 51.526608, -0.113861 51.526696, -0.114183 51.526882, -0.115206 51.527544, -0.115338 51.527643, -0.115407 51.527706, -0.115489 51.527819, -0.115576 51.528023, -0.115604 51.528122, -0.115706 51.528616, -0.115794 51.529336, -0.115857 51.529723, -0.115883 51.529781, -0.115925 51.529831, -0.116033 51.529916, -0.11617 51.529986, -0.116735 51.5302, -0.117072 51.530306, -0.117852 51.530524, -0.11836 51.530649, -0.11984 51.530947, -0.121063 51.530854, -0.121654 51.530823, -0.122563 51.530754, -0.122567 51.530793, -0.122545 51.531021, -0.122538 51.53141, -0.122518 51.531848, -0.122462 51.532611, -0.122435 51.532864, -0.122378 51.533595, -0.122327 51.534545, -0.122317 51.535198, -0.122312 51.535291, -0.122287 51.53537, -0.122299 51.536024, -0.12235 51.536623, -0.122399 51.537045, -0.122665 51.537802, -0.122825 51.538149, -0.122969 51.538386, -0.123298 51.538853, -0.123783 51.539318, -0.124014 51.539524, -0.124535 51.540211, -0.124842 51.540632, -0.124991 51.540872, -0.125088 51.541246, -0.125281 51.541503, -0.125528 51.541869, -0.125612 51.54201, -0.125676 51.542199, -0.125727 51.54245, -0.125755 51.542549, -0.125913 51.543063, -0.125888 51.543165, -0.12597 51.543497, -0.126058 51.543908, -0.126191 51.544425, -0.126606 51.545981, -0.126816 51.5468, -0.126982 51.547341, -0.12704 51.54747, -0.127081 51.547533, -0.127191 51.547671, -0.127341 51.547818, -0.127663 51.548099, -0.127828 51.548222, -0.127978 51.548318, -0.128127 51.548394, -0.129229 51.548893, -0.129352 51.548972, -0.12981 51.549314, -0.129891 51.54938, -0.13008 51.549559, -0.130162 51.549653, -0.130191 51.549701, -0.130386 51.550061, -0.130511 51.550317, -0.130719 51.550667, -0.130738 51.550721, -0.130741 51.551103, -0.130752 51.551204, -0.130796 51.5513, -0.130853 51.551366, -0.130934 51.551436, -0.13105 51.551528, -0.131154 51.551593, -0.131435 51.551739, -0.131914 51.551969, -0.132335 51.552199, -0.13256 51.552356, -0.133133 51.55278, -0.133529 51.55302, -0.134101 51.553403, -0.134443 51.55367, -0.134741 51.553931, -0.134823 51.554043, -0.134961 51.554283, -0.135063 51.554428, -0.135174 51.554544, -0.135296 51.554634, -0.1354 51.55469, -0.135652 51.554789, -0.136217 51.554972, -0.136592 51.555081, -0.136784 51.555149, -0.136877 51.555192, -0.136999 51.55527, -0.13708 51.555337, -0.137187 51.555445, -0.137523 51.555818, -0.137996 51.556406, -0.138133 51.556559, -0.138308 51.556736, -0.138629 51.557128, -0.139298 51.558058, -0.139678 51.558607, -0.139963 51.55904, -0.140466 51.559761, -0.140531 51.559831, -0.140741 51.560018, -0.140899 51.560194, -0.140976 51.560331, -0.141035 51.560501, -0.141048 51.560606, -0.141029 51.561059, -0.14099 51.561453, -0.140975 51.561511, -0.140934 51.561606, -0.140754 51.561906, -0.140681 51.562066, -0.140583 51.562425, -0.140556 51.562639, -0.140553 51.562745, -0.140565 51.562836, -0.140633 51.563113, -0.140753 51.563455, -0.140774 51.563558, -0.140718 51.563968, -0.140632 51.564257, -0.14062 51.564343, -0.140621 51.56441, -0.140637 51.564498, -0.140713 51.564684, -0.141027 51.565205, -0.141164 51.565544, -0.141223 51.565751, -0.141363 51.566421, -0.141437 51.56686, -0.141433 51.567021, -0.141453 51.56715, -0.141513 51.567365, -0.141838 51.568197, -0.141944 51.568398, -0.142094 51.568623, -0.142152 51.568676, -0.142385 51.568827, -0.142471 51.568905, -0.14248 51.568921, -0.142477 51.568973, -0.142399 51.569095, -0.142349 51.569253, -0.142804 51.569446, -0.143668 51.569836, -0.144005 51.569963, -0.144329 51.570068, -0.144599 51.570138, -0.145421 51.570262, -0.145621 51.570299, -0.146637 51.57053, -0.148079 51.570805, -0.148727 51.570947, -0.149096 51.571052, -0.149901 51.571365, -0.149886 51.571391, -0.149938 51.571475, -0.150146 51.571554, -0.150654 51.571587, -0.150972 51.571596, -0.150971 51.57158, -0.151147 51.571602, -0.151286 51.571605, -0.151348 51.571596, -0.151615 51.571631, -0.151996 51.571663, -0.154325 51.571846, -0.154914 51.57189, -0.154937 51.571871, -0.15497 51.571867, -0.155048 51.571881, -0.155065 51.571904, -0.157075 51.572075, -0.157165 51.57208, -0.157427 51.572071, -0.157565 51.572082, -0.157609 51.57207, -0.157631 51.572045, -0.157736 51.572051, -0.157754 51.572112, -0.157796 51.572128, -0.158505 51.572191, -0.15885 51.572212, -0.159999 51.572669, -0.160374 51.572763, -0.160471 51.572779, -0.160717 51.572776, -0.161603 51.572672, -0.162097 51.572603, -0.163342 51.572504, -0.163669 51.572486, -0.164542 51.572501, -0.165003 51.572612, -0.165016 51.572592, -0.165083 51.572607, -0.16507 51.572627, -0.165184 51.572653, -0.165205 51.572642, -0.165267 51.572652, -0.165273 51.572669, -0.165623 51.572737, -0.165745 51.572748, -0.165827 51.572737, -0.165893 51.572718, -0.165984 51.572736, -0.166115 51.572764, -0.166149 51.572804, -0.166251 51.572861, -0.166322 51.572881, -0.166607 51.572929, -0.166809 51.572953, -0.167301 51.572963, -0.168071 51.572918, -0.169662 51.572775, -0.170323 51.572668, -0.170709 51.572585, -0.171166 51.572449, -0.171706 51.572182, -0.171747 51.572154, -0.171814 51.572088, -0.171834 51.572041, -0.171833 51.572023, -0.172031 51.571943, -0.172086 51.571953, -0.172135 51.571949, -0.172193 51.571935, -0.172335 51.571874, -0.17264 51.571702, -0.173076 51.571418, -0.173443 51.571013, -0.173549 51.570857, -0.17361 51.570737, -0.173646 51.57065, -0.173692 51.570502, -0.173715 51.570381, -0.173729 51.570087, -0.173711 51.569929, -0.173714 51.569903, -0.173829 51.569907, -0.173851 51.569709, -0.174194 51.569442, -0.174378 51.569252, -0.174871 51.569426, -0.175084 51.569435, -0.175135 51.569546, -0.175831 51.569784, -0.175858 51.569804, -0.175864 51.569848, -0.176586 51.570088, -0.17684 51.570165, -0.17762 51.570256, -0.177667 51.570267, -0.178125 51.570513, -0.178045 51.570428, -0.178022 51.570377, -0.178016 51.570297, -0.178025 51.570235, -0.178064 51.570163, -0.178115 51.570105, -0.178185 51.570063, -0.178281 51.570025, -0.178556 51.569973, -0.180264 51.569687, -0.180409 51.569675, -0.180986 51.569673, -0.180962 51.569625, -0.180891 51.569522, -0.180842 51.569429, -0.18082 51.569404, -0.180899 51.569374, -0.181451 51.569109, -0.18188 51.568894, -0.182151 51.568699, -0.182419 51.56855, -0.183107 51.568194, -0.183242 51.56813, -0.183676 51.567957, -0.183388 51.567769, -0.183515 51.567682, -0.183479 51.56766, -0.183761 51.56747, -0.184006 51.567389, -0.184885 51.567224, -0.185822 51.567017, -0.186051 51.566957, -0.186143 51.566919, -0.186908 51.56651, -0.186934 51.566487, -0.186955 51.566406, -0.186991 51.566355, -0.187036 51.566259, -0.187091 51.566194, -0.187152 51.566152, -0.187491 51.566042, -0.187711 51.566006, -0.187824 51.565973, -0.18806 51.565859, -0.188328 51.565775, -0.188602 51.56562, -0.188665 51.565594, -0.188831 51.565562, -0.189119 51.565539, -0.189217 51.56551, -0.189352 51.565412, -0.189467 51.565298, -0.189644 51.565217, -0.189736 51.565092, -0.189847 51.564981, -0.189872 51.564861, -0.189891 51.564814, -0.189939 51.564733, -0.189986 51.564685, -0.190003 51.56461, -0.190002 51.564467, -0.190036 51.564362, -0.190085 51.56408, -0.1901 51.564051, -0.19008 51.564036, -0.190141 51.563952, -0.190154 51.563855, -0.190168 51.563729, -0.190144 51.563577, -0.190149 51.563414, -0.190158 51.563361, -0.190211 51.56324, -0.190281 51.562988, -0.190311 51.562956, -0.190335 51.562944, -0.190381 51.562619, -0.190525 51.562312, -0.190626 51.561973, -0.190708 51.561861, -0.190777 51.561805, -0.190882 51.561746, -0.191161 51.561644, -0.191331 51.561604, -0.19148 51.561587, -0.19229 51.561557, -0.192591 51.56136, -0.192763 51.561258, -0.193004 51.561143, -0.193344 51.561021, -0.193566 51.560959, -0.193645 51.560928, -0.193774 51.560854, -0.193968 51.560918, -0.194193 51.560848, -0.194333 51.560788, -0.194521 51.560723, -0.194564 51.56067, -0.194569 51.560571, -0.194835 51.56048, -0.195143 51.560461, -0.195277 51.560467, -0.195619 51.560521, -0.196097 51.560644, -0.196578 51.560727, -0.19661 51.560673, -0.196731 51.560696, -0.196765 51.560622, -0.196808 51.560629, -0.196825 51.560596, -0.196866 51.560603, -0.196896 51.560556, -0.19689 51.560555, -0.196899 51.560535, -0.196889 51.560387, -0.196893 51.560029, -0.196817 51.56003, -0.196809 51.55967, -0.196798 51.559621, -0.196703 51.55936, -0.196651 51.559265, -0.196606 51.559203, -0.196769 51.559157, -0.196766 51.559128, -0.196807 51.559146, -0.196948 51.559107, -0.197024 51.559049, -0.197172 51.559016, -0.197269 51.558977, -0.197498 51.558865, -0.197911 51.559129, -0.198134 51.558988, -0.198304 51.55886, -0.198398 51.558737, -0.198437 51.558624, -0.198488 51.558344, -0.198497 51.5582, -0.198523 51.558144, -0.198655 51.558011, -0.198881 51.557838, -0.199172 51.557525, -0.199243 51.557455, -0.199306 51.557413, -0.199351 51.557358, -0.199436 51.557195, -0.199512 51.557073, -0.199555 51.556956, -0.199558 51.556799, -0.199542 51.556693, -0.19938 51.556335, -0.199368 51.556199, -0.199373 51.55619, -0.200038 51.556168, -0.200587 51.556125, -0.200947 51.556068, -0.201426 51.555962, -0.202276 51.555845, -0.202648 51.555782, -0.20348 51.555666, -0.20409 51.555608, -0.204789 51.555425, -0.204927 51.555412, -0.205036 51.555377, -0.205155 51.555355, -0.205562 51.555325, -0.205779 51.555318, -0.205805 51.555372, -0.205832 51.555473, -0.205876 51.555584, -0.205859 51.555771, -0.205871 51.556068, -0.205887 51.556198, -0.205968 51.556431, -0.206076 51.556392, -0.206115 51.556386, -0.206495 51.556359, -0.206671 51.55629, -0.206854 51.556232, -0.208398 51.55587, -0.208838 51.555728, -0.209196 51.556022, -0.209551 51.556351, -0.210012 51.556751, -0.211335 51.556283, -0.211631 51.556166, -0.211858 51.556051, -0.211853 51.556045, -0.212112 51.555918, -0.212368 51.555767, -0.212375 51.555771, -0.21259 51.555648, -0.212584 51.555643, -0.212725 51.555566, -0.21273 51.55557, -0.212796 51.555537, -0.21287 51.555493, -0.212866 51.555486, -0.21299 51.555419, -0.213487 51.555191, -0.213085 51.554837, -0.212804 51.554575, -0.211996 51.553781, -0.211796 51.553603, -0.211283 51.5532, -0.210322 51.552479, -0.209091 51.551571, -0.208553 51.551197, -0.207424 51.550369, -0.207192 51.550187, -0.20694 51.549975, -0.206229 51.549334, -0.205573 51.548728, -0.203702 51.546957, -0.20256 51.545891, -0.200739 51.54417, -0.200465 51.543922, -0.200291 51.543802, -0.200041 51.543606, -0.199419 51.543074, -0.196926 51.541037, -0.196297 51.54051, -0.193939 51.538419, -0.193065 51.537662, -0.192101 51.536864, -0.191636 51.53646, -0.191485 51.536308, -0.191195 51.536044, -0.19102 51.535904, -0.190871 51.535806, -0.190715 51.535716, -0.190485 51.535596, -0.189926 51.535345, -0.18962 51.535186, -0.189374 51.535042, -0.189197 51.534912, -0.188723 51.534531, -0.187907 51.534909, -0.187828 51.534959, -0.186784 51.535922, -0.186192 51.536452, -0.184616 51.537947, -0.184519 51.538027, -0.184462 51.538063, -0.184179 51.538218, -0.183993 51.538309, -0.183729 51.538417, -0.182869 51.538719, -0.181494 51.539169, -0.180724 51.539396, -0.180017 51.53959, -0.179781 51.539647, -0.17946 51.539706, -0.178625 51.539809, -0.178462 51.539813, -0.178223 51.5398, -0.177716 51.539756, -0.177334 51.539735, -0.173913 51.539473, -0.173988 51.539108, -0.174057 51.538702, -0.174132 51.538326, -0.174133 51.538281, -0.174108 51.53821, -0.174073 51.53815, -0.173984 51.53805, -0.173893 51.537968, -0.173477 51.537646, -0.173362 51.537709, -0.171935 51.538403, -0.170877 51.537778, -0.169448 51.538593, -0.169038 51.53842, -0.168563 51.538199, -0.167955 51.537876, -0.167813 51.537787, -0.16757 51.537611, -0.167011 51.537243, -0.165397 51.536138, -0.165254 51.53605, -0.164899 51.535785, -0.164283 51.536035, -0.16342 51.536365, -0.163044 51.536497, -0.160397 51.537299, -0.159659 51.536643, -0.159352 51.536339, -0.157367 51.5368, -0.156492 51.536995, -0.155809 51.537132, -0.154967 51.537282, -0.154595 51.537342, -0.154152 51.537401, -0.153456 51.537465, -0.152685 51.537511, -0.151511 51.534851, -0.151333 51.534467, -0.151013 51.533733, -0.150023 51.531525, -0.149938 51.531313, -0.148926 51.529073, -0.147123 51.525035, -0.145765 51.525267, -0.145199 51.523978, -0.144784 51.52405, -0.144672 51.524056, -0.144481 51.524045, -0.144223 51.524008, -0.144088 51.523997, -0.14409 51.524304, -0.144102 51.524596, -0.144096 51.524624, -0.144008 51.524675, -0.143968 51.524678, -0.143451 51.524612, -0.143385 51.524549, -0.143384 51.524528, -0.14356 51.523914, -0.143348 51.52387, -0.143182 51.523857, -0.143076 51.523854, -0.142847 51.523868, -0.140775 51.522176, -0.139117 51.520836, -0.138069 51.519955, -0.138055 51.519938, -0.138043 51.519894, -0.138012 51.519863, -0.136963 51.518886, -0.13628 51.519157, -0.135798 51.518685, -0.135209 51.518929, -0.134289 51.518024, -0.134456 51.517957, -0.134041 51.517572, -0.134005 51.517547, -0.133812 51.517598, -0.133606 51.517696, -0.133571 51.517701, -0.133523 51.517695, -0.13349 51.517683, -0.133098 51.517419, -0.132949 51.517331, -0.132835 51.517278, -0.132407 51.517118, -0.132567 51.516991, -0.132505 51.516964, -0.132526 51.516883, -0.132466 51.51682, -0.132484 51.516799, -0.132513 51.516729, -0.132516 51.516674, -0.131369 51.516963, -0.131325 51.516972, -0.131131 51.516981, -0.130783 51.517082, -0.130552 51.516796, -0.130315 51.51653, -0.130314 51.516433, -0.130348 51.516386, -0.130349 51.516319, -0.130385 51.516251, -0.130433 51.516125, -0.130433 51.516079, -0.13042 51.516028, -0.130247 51.515553, -0.129964 51.514824, -0.129613 51.514004, -0.129554 51.513882, -0.129376 51.513567, -0.129335 51.513472, -0.129206 51.513483, -0.129074 51.513469, -0.128471 51.513192, -0.128265 51.51308, -0.127727 51.512724, -0.127641 51.512678, -0.127538 51.512664, -0.127449 51.512662, -0.127301 51.512675, -0.12717 51.512705, -0.1271 51.512797, -0.127042 51.512856, -0.126809 51.513042, -0.126644 51.513143, -0.126309 51.513318, -0.125192 51.51381, -0.124804 51.513986, -0.124531 51.514121, -0.124303 51.514251, -0.123546 51.514717, -0.123383 51.514786, -0.122854 51.51514, -0.122365 51.514827, -0.122066 51.514616, -0.121796 51.514869, -0.120838 51.514703, -0.120495 51.514625, -0.119453 51.514502, -0.118702 51.514704, -0.118643 51.514824, -0.118536 51.514986, -0.117619 51.51522, -0.117232 51.515393, -0.116124 51.515671, -0.115121 51.515912, -0.114694 51.516026, -0.114425 51.515646, -0.114158 51.515304, -0.113825 51.514822, -0.112288 51.515162, -0.112302 51.515204, -0.111685 51.515289, -0.111648 51.515322, -0.111568 51.515334, -0.111667 51.515538, -0.111841 51.515842, -0.112001 51.516089, -0.112176 51.516333, -0.112318 51.5165, -0.112719 51.516922, -0.113252 51.517464, -0.113695 51.517937, -0.11374 51.51801, -0.113755 51.518051, -0.113802 51.518256, -0.113496 51.518272, -0.112845 51.518288, -0.112375 51.518263, -0.11111 51.51815, -0.110224 51.518028, -0.109466 51.517938, -0.107819 51.517766, -0.107324 51.517931, -0.105291 51.518556, -0.105795 51.520101, -0.105918 51.520443, -0.106022 51.520685, -0.106134 51.520909, -0.106338 51.521278, -0.106628 51.521698, -0.107002 51.522184, -0.108238 51.522087, -0.108332 51.522169, -0.108558 51.522427, -0.108747 51.522695, -0.108895 51.522929, -0.108934 51.522985, -0.10897 51.52302, -0.109261 51.522915, -0.109554 51.523058, -0.110026 51.523154, -0.110408 51.523218, -0.110912 51.523334, -0.11202 51.523605, -0.112349 51.523709, -0.112563 51.523811, -0.112799 51.523943, -0.113086 51.524153, -0.113638 51.524577, -0.113924 51.525029, -0.114229 51.525483)))",
                    typology: "geography",
                    reference: "A4Ba3",
                    "entry-date": "2023-09-09",
                    "start-date": "2016-10-03",
                    "article-4-direction": "A4B3",
                    "organisation-entity": "90",
                  },
                ],
                text: "is in an Article 4 direction area",
                value: true,
                category: "General policy",
              },
              monument: {
                fn: "monument",
                text: "is not the site of a Scheduled Monument",
                value: false,
                category: "Heritage and conservation",
              },
              greenBelt: {
                fn: "greenBelt",
                text: "is not in a Green Belt",
                value: false,
                category: "General policy",
              },
              designated: {
                value: true,
              },
              "nature.SAC": {
                fn: "nature.SAC",
                text: "is not in a Special Area of Conservation (SAC)",
                value: false,
                category: "Ecology",
              },
              "nature.SPA": {
                fn: "nature.SPA",
                text: "is not in a Special Protection Area (SPA)",
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
              brownfieldSite: {
                fn: "brownfieldSite",
                text: "is not on Brownfield land",
                value: false,
                category: "General policy",
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
              "nature.ramsarSite": {
                fn: "nature.ramsarSite",
                text: "is not in a Ramsar Site",
                value: false,
                category: "Ecology",
              },
              "article4.camden.caz": {
                fn: "article4.caz",
                text: "is not in the Central Activities Zone",
                value: false,
                category: "General policy",
              },
              "article4.camden.eC3Caz": {
                fn: "article4.camden.eC3Caz",
                value: false,
              },
              "article4.camden.belsize": {
                fn: "article4.camden.belsize",
                value: false,
              },
              "article4.camden.frognal": {
                fn: "article4.camden.frognal",
                value: false,
              },
              "article4.camden.parkway": {
                fn: "article4.camden.parkway",
                value: false,
              },
              "designated.nationalPark": {
                fn: "designated.nationalPark",
                text: "is not in a National Park",
                value: false,
                category: "Heritage and conservation",
              },
              "article4.camden.eC3NoCaz": {
                fn: "article4.camden.eC3NoCaz",
                value: false,
              },
              "article4.camden.suiGenC3": {
                fn: "article4.camden.suiGenC3",
                value: false,
              },
              "article4.camden.basements": {
                fn: "article4.camden.basements",
                value: true,
              },
              "article4.camden.hampstead": {
                fn: "article4.camden.hampstead",
                value: false,
              },
              "article4.camden.southHill": {
                fn: "article4.camden.southHill",
                value: false,
              },
              "article4.camden.33yorkRise": {
                fn: "article4.camden.33yorkRise",
                value: false,
              },
              "designated.conservationArea": {
                fn: "designated.conservationArea",
                data: [
                  {
                    name: "Highgate Village",
                    point: "POINT (-0.151421 51.568011)",
                    entity: 44009654,
                    prefix: "conservation-area",
                    dataset: "conservation-area",
                    "end-date": "",
                    geometry:
                      "MULTIPOLYGON (((-0.141362 51.566416, -0.141437 51.56686, -0.141433 51.567021, -0.141453 51.56715, -0.141513 51.567365, -0.141838 51.568197, -0.141944 51.568398, -0.142094 51.568623, -0.142152 51.568676, -0.142385 51.568827, -0.142471 51.568905, -0.14248 51.568921, -0.142477 51.568973, -0.142399 51.569095, -0.142349 51.569253, -0.142804 51.569446, -0.143668 51.569836, -0.144005 51.569963, -0.144329 51.570068, -0.144599 51.570138, -0.145421 51.570262, -0.145621 51.570299, -0.146637 51.57053, -0.148079 51.570805, -0.148727 51.570947, -0.149096 51.571052, -0.149901 51.571365, -0.149886 51.571391, -0.149938 51.571475, -0.150146 51.571554, -0.150654 51.571587, -0.150972 51.571596, -0.150971 51.57158, -0.151147 51.571602, -0.151286 51.571605, -0.151348 51.571596, -0.151615 51.571631, -0.151996 51.571663, -0.154325 51.571846, -0.154914 51.57189, -0.154937 51.571871, -0.15497 51.571867, -0.155048 51.571881, -0.155065 51.571904, -0.157075 51.572075, -0.157165 51.57208, -0.157427 51.572071, -0.157565 51.572082, -0.157609 51.57207, -0.157631 51.572045, -0.157736 51.572051, -0.157754 51.572112, -0.157796 51.572128, -0.158505 51.572191, -0.15885 51.572212, -0.159999 51.572669, -0.160374 51.572763, -0.160471 51.572779, -0.160717 51.572776, -0.160917 51.572753, -0.160896 51.572706, -0.160874 51.572684, -0.16071 51.572626, -0.160685 51.572605, -0.160664 51.57257, -0.160656 51.572534, -0.160663 51.57249, -0.160712 51.572354, -0.160753 51.572311, -0.160845 51.57226, -0.161137 51.57207, -0.161198 51.572011, -0.161208 51.571949, -0.161203 51.571762, -0.161261 51.571492, -0.161308 51.57135, -0.16147 51.571278, -0.161495 51.57126, -0.161625 51.570875, -0.161661 51.570808, -0.161715 51.570739, -0.161804 51.570671, -0.161945 51.570609, -0.161284 51.570443, -0.158788 51.570463, -0.158625 51.570466, -0.158568 51.570476, -0.158521 51.570465, -0.158335 51.570303, -0.158273 51.570239, -0.158211 51.570151, -0.158171 51.570059, -0.158159 51.570006, -0.158157 51.569851, -0.158173 51.569753, -0.158311 51.569391, -0.158377 51.569118, -0.158397 51.568991, -0.158504 51.568991, -0.158674 51.56884, -0.158738 51.568805, -0.159188 51.568705, -0.159361 51.568648, -0.1597 51.568458, -0.159793 51.568426, -0.159943 51.568355, -0.160293 51.568223, -0.160257 51.568184, -0.159694 51.56777, -0.159381 51.567556, -0.159356 51.567551, -0.159319 51.567527, -0.159321 51.567518, -0.159129 51.5674, -0.158251 51.566771, -0.158168 51.566715, -0.158026 51.566647, -0.158017 51.566634, -0.15769 51.566462, -0.157498 51.566335, -0.157287 51.566173, -0.156976 51.566004, -0.156908 51.565951, -0.156837 51.565917, -0.156809 51.56589, -0.156753 51.565862, -0.156515 51.565669, -0.155953 51.565301, -0.155869 51.565228, -0.155829 51.565155, -0.155832 51.565074, -0.15605 51.564691, -0.156052 51.564628, -0.156033 51.564403, -0.155994 51.564277, -0.155913 51.564158, -0.155721 51.563912, -0.155402 51.563593, -0.155293 51.563429, -0.155265 51.563402, -0.155139 51.56331, -0.154801 51.563152, -0.154824 51.563133, -0.154858 51.563121, -0.155026 51.562963, -0.155167 51.562769, -0.155037 51.562687, -0.154977 51.562723, -0.154932 51.562736, -0.154771 51.562673, -0.154589 51.562677, -0.154225 51.56249, -0.154076 51.562406, -0.154006 51.562353, -0.153929 51.562376, -0.153894 51.562323, -0.153864 51.562238, -0.153856 51.562174, -0.153873 51.562061, -0.153857 51.561956, -0.153899 51.561841, -0.153891 51.561672, -0.153924 51.561667, -0.15394 51.56159, -0.153968 51.561527, -0.15382 51.561505, -0.153793 51.561477, -0.153742 51.561444, -0.153613 51.561396, -0.153546 51.561401, -0.153307 51.56139, -0.153265 51.561407, -0.153179 51.561414, -0.153117 51.561395, -0.15308 51.561431, -0.15293 51.561397, -0.152712 51.561368, -0.152634 51.561327, -0.152501 51.56131, -0.152516 51.561289, -0.152331 51.561311, -0.152187 51.561351, -0.15182 51.561379, -0.15169 51.56138, -0.15154 51.56136, -0.151157 51.561264, -0.150945 51.561244, -0.150968 51.561276, -0.150993 51.561294, -0.151119 51.561485, -0.151091 51.561491, -0.151084 51.561502, -0.150859 51.561562, -0.150999 51.56186, -0.151053 51.561951, -0.151178 51.562078, -0.1521 51.562821, -0.152377 51.563122, -0.152554 51.563359, -0.152596 51.563405, -0.152741 51.56374, -0.152857 51.564074, -0.152963 51.564678, -0.153014 51.564841, -0.153147 51.565122, -0.153264 51.565421, -0.153384 51.565674, -0.153529 51.566009, -0.153567 51.566145, -0.153601 51.56637, -0.153617 51.566685, -0.153656 51.566802, -0.153762 51.56702, -0.153891 51.567418, -0.153883 51.567602, -0.152679 51.567865, -0.152621 51.567722, -0.152566 51.567735, -0.152536 51.567682, -0.152142 51.567768, -0.152176 51.567825, -0.151989 51.567874, -0.152011 51.56791, -0.151736 51.567992, -0.151754 51.568045, -0.151406 51.568136, -0.151005 51.568187, -0.151028 51.568056, -0.150983 51.568001, -0.150587 51.568048, -0.149446 51.566127, -0.147412 51.566337, -0.146906 51.566399, -0.146561 51.566383, -0.146543 51.56607, -0.14649 51.565592, -0.146472 51.565331, -0.146469 51.565053, -0.146429 51.56462, -0.146452 51.564405, -0.14653 51.563912, -0.146648 51.5635, -0.146696 51.563384, -0.145882 51.563173, -0.145781 51.563162, -0.145709 51.563161, -0.145578 51.563186, -0.145563 51.563195, -0.145459 51.563283, -0.145068 51.563664, -0.144549 51.564033, -0.144419 51.564113, -0.144041 51.564272, -0.143009 51.564581, -0.14243 51.564807, -0.14293 51.565037, -0.143001 51.56538, -0.142566 51.565539, -0.142866 51.565895, -0.142941 51.566029, -0.142967 51.566025, -0.143009 51.566077, -0.141459 51.566406, -0.141362 51.566416)))",
                    typology: "geography",
                    reference: "CA19",
                    "entry-date": "2024-06-14",
                    "start-date": "1978-04-01",
                    "document-url":
                      "https://www.camden.gov.uk/documents/20142/7610500/Highgate.pdf",
                    "documentation-url":
                      "https://www.camden.gov.uk/highgate-conservation-area-appraisal-and-management-strategy",
                    "organisation-entity": "90",
                  },
                ],
                text: "is in a Conservation Area",
                value: true,
                category: "Heritage and conservation",
              },
              "article4.camden.primroseHill": {
                fn: "article4.camden.primroseHill",
                value: false,
              },
              "article4.camden.swissCottage": {
                fn: "article4.camden.swissCottage",
                value: false,
              },
              "article4.camden.belsizeAvenue": {
                fn: "article4.camden.belsizeAvenue",
                value: false,
              },
              "article4.camden.147kentishTown": {
                fn: "article4.camden.147kentishTown",
                value: false,
              },
              "article4.camden.187kentishTown": {
                fn: "article4.camden.187kentishTown",
                value: false,
              },
              "article4.camden.fitzjohnAvenue": {
                fn: "article4.camden.fitzjohnAvenue",
                value: false,
              },
              "designated.nationalPark.broads": {
                fn: "designated.nationalPark.broads",
                value: false,
              },
            },
            planxRequest:
              "https://api.editor.planx.dev/gis/camden?geom=MULTIPOLYGON+%28%28%28-0.153392+51.564734%2C+-0.153391+51.564724%2C+-0.153376+51.564725%2C+-0.153085+51.564757%2C+-0.1531+51.564806%2C+-0.15335+51.564785%2C+-0.153392+51.564734%29%29%29&analytics=false&sessionId=7e147b04-0a8b-44fc-a249-c36ef6407f84",
            sourceRequest:
              "https://www.planning.data.gov.uk/entity.json?entries=current&geometry=MULTIPOLYGON+%28%28%28-0.153392+51.564734%2C+-0.153391+51.564724%2C+-0.153376+51.564725%2C+-0.153085+51.564757%2C+-0.1531+51.564806%2C+-0.15335+51.564785%2C+-0.153392+51.564734%29%29%29&geometry_relation=intersects&limit=100&dataset=article-4-direction-area&dataset=central-activities-zone&dataset=brownfield-land&dataset=brownfield-site&dataset=area-of-outstanding-natural-beauty&dataset=conservation-area&dataset=green-belt&dataset=national-park&dataset=world-heritage-site&dataset=world-heritage-site-buffer-zone&dataset=flood-risk-zone&dataset=listed-building&dataset=listed-building-outline&dataset=scheduled-monument&dataset=ancient-woodland&dataset=ramsar&dataset=special-area-of-conservation&dataset=special-protection-area&dataset=site-of-special-scientific-interest&dataset=park-and-garden&dataset=tree&dataset=tree-preservation-order&dataset=tree-preservation-zone",
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
            planxRequest: "https://api.editor.planx.dev/roads?usrn=20400012",
            sourceRequest:
              "https://api.os.uk/features/v1/wfs?service=WFS&request=GetFeature&version=2.0.0&typeNames=Highways_RoadLink&outputFormat=GEOJSON&srsName=urn%3Aogc%3Adef%3Acrs%3AEPSG%3A%3A4326&count=1&filter=%0A++++%3Cogc%3AFilter%3E%0A++++++%3Cogc%3APropertyIsLike+wildCard%3D%22%25%22+singleChar%3D%22%23%22+escapeChar%3D%22%21%22%3E%0A++++++++%3Cogc%3APropertyName%3EFormsPartOf%3C%2Fogc%3APropertyName%3E%0A++++++++%3Cogc%3ALiteral%3E%25Street%23usrn20400012%25%3C%2Fogc%3ALiteral%3E%0A++++++%3C%2Fogc%3APropertyIsLike%3E%0A++++%3C%2Fogc%3AFilter%3E%0A++&",
          },
        ],
        "property.constraints.planning": [
          "article4",
          "article4.camden.basements",
          "designated",
          "designated.conservationArea",
        ],
      },
    },
    dk16BXYNwM: {
      auto: false,
      data: {
        "proposal.schemeName": "Sir John Betjeman's New Extension",
      },
    },
    dknMGPa8F8: {
      auto: true,
      answers: ["OXqMmPa8F8"],
    },
    eUc6i6MEaD: {
      auto: false,
      data: {
        "proposal.started.date": "2024-07-28",
      },
    },
    eY70ifFTTq: {
      auto: true,
      data: {
        "property.titleNumberKnown.form": ["No"],
      },
    },
    eaxoGeIXsf: {
      auto: false,
    },
    enVBPHCEft: {
      auto: true,
      answers: ["CsGNpqlEzP"],
    },
    fLVlIcYbXD: {
      auto: false,
      answers: ["06bA9iXPTC"],
    },
    fUtSvC1ows: {
      auto: true,
      answers: ["tPDl3wOlmK"],
    },
    gVMKOd4iGH: {
      auto: true,
      data: {
        "proposal.energy.solar": ["true"],
      },
    },
    gWdARfFTTq: {
      auto: false,
      answers: ["fADA2fFTTq"],
    },
    hGX3D9MpaE: {
      auto: false,
      answers: ["Ww5JkPHjPQ"],
    },
    hYuHtPa8F8: {
      auto: true,
      answers: ["xhjeCPa8F8"],
    },
    i2mbsPa8F8: {
      auto: true,
      answers: ["e4RalPa8F8"],
    },
    iCbF9S3e20: {
      auto: false,
      data: {
        "application.leadDeveloper.companyName":
          "Fit For Cabbages Developments",
      },
    },
    iQZQpCtmnC: {
      auto: true,
      answers: ["1kS7OpWPD1"],
    },
    izdPNR23hI: {
      auto: true,
      data: {
        "application.declaration.connection.form": ["No connections"],
      },
    },
    jgqSaPa8F8: {
      auto: true,
      answers: ["Veh7iPa8F8"],
    },
    jt3yOeIXsf: {
      auto: false,
    },
    kLpp93Owue: {
      auto: false,
      data: {
        "proposal.utilities.internet.commercialUnits": 1,
      },
    },
    l631aPa8F8: {
      auto: true,
      answers: ["viyyTPa8F8"],
    },
    lCfRyXcbqm: {
      auto: false,
      answers: ["k7Cz4QLtWN"],
    },
    lMy9g3WJeI: {
      auto: false,
      answers: ["9ciucqOCIv"],
    },
    ltEI5PXh6n: {
      auto: false,
      answers: ["PVeBS5cDJn"],
    },
    lxzw3A7MHI: {
      auto: true,
      data: {
        "application.type": ["pa.part7.classM"],
      },
    },
    m1ywRbgU2j: {
      auto: true,
      data: {
        "application.declaration.accurate.form": ["Yes"],
      },
    },
    niKVEyAMYx: {
      auto: true,
      data: {
        "application.elevations.required": ["true"],
      },
    },
    o2LP8hHaaK: {
      auto: false,
      answers: ["0VDWW8oTLC"],
    },
    o30WVPa8F8: {
      auto: true,
      data: {
        "application.fee.calculated": 120,
      },
    },
    p11Ci13HQ3: {
      auto: false,
      data: {
        "applicant.email": "johnnybthepoet@email.org",
        "applicant.title": "Sir",
        "_contact.applicant": {
          applicant: {
            email: "johnnybthepoet@email.org",
            phone: "012345678901",
            title: "Sir",
            lastName: "Betjeman",
            firstName: "John",
            organisation: "",
          },
        },
        "applicant.name.last": "Betjeman",
        "applicant.name.first": "John",
        "applicant.phone.primary": "012345678901",
      },
    },
    pNZigFwL0f: {
      auto: true,
      data: {
        "applicant.address.sameAsSiteAddress": ["No"],
      },
    },
    pO5dssVxOd: {
      auto: false,
      data: {
        pO5dssVxOd:
          "New extension to university building, 6 metres to the rear and 4 metres in height, clad in books of poetry.",
      },
    },
    pSBoA8QoOz: {
      auto: false,
      answers: ["sbMcsJIigj"],
    },
    pbeW9nvYaw: {
      auto: true,
      answers: ["Bhug5Y8qHA"],
    },
    qtHcYuNH0U: {
      auto: false,
      data: {
        "proposal.area.internal.new": 390,
      },
    },
    r5iIYbR54l: {
      auto: false,
      answers: ["P0EbCHQ6YA"],
    },
    rmNT86yFzk: {
      auto: false,
      answers: ["nXaRtjP78K"],
    },
    tsJ10xauFj: {
      auto: true,
      data: {
        "application.elevationsProposed.required": ["true"],
      },
    },
    uBS9tovnxB: {
      auto: false,
      data: {
        "proposal.urbanGreeningFactor": 2,
      },
    },
    ud9yhxw250: {
      auto: false,
      data: {
        "proposal.charging.active.number": 3,
      },
    },
    vwAwrp8hSJ: {
      auto: false,
      data: {
        "proposal.greenRoof.area": 12,
      },
    },
    wEGve27Ytl: {
      auto: true,
      answers: ["Di2POweYMj"],
    },
    wTTII5M7bc: {
      auto: false,
      answers: ["m0pp8GWxEM"],
    },
    wUSQpcppQu: {
      auto: false,
      data: {
        "proposal.completed.date": "2024-07-28",
      },
    },
    ws97BLp88w: {
      auto: true,
      answers: ["8T05wOWOsp"],
    },
    wzMyVPa8F8: {
      auto: true,
      data: {
        "application.fee.exemption.resubmission": ["false"],
      },
    },
    xTdqUdtpTe: {
      auto: false,
      answers: ["707fK8IC4A"],
    },
    xfJKTeIXsf: {
      auto: false,
    },
    y0hGscP72i: {
      auto: false,
      answers: ["XvFDevZm7U"],
    },
    yUcnQqnBIs: {
      auto: false,
      answers: ["jO52aQnDEO"],
    },
    zSh8ERfq3C: {
      auto: true,
      answers: ["xPJEKMFomU"],
    },
    zwGEpPa8F8: {
      auto: false,
      answers: ["dk51cPa8F8"],
    },
  },
  payments: [
    {
      created_at: "2024-06-28T10:24:39.070051+00:00",
      payment_id: "90u259k4b9qh4tn2h220ui2um3",
      amount: 12000,
      status: "success",
    },
    {
      created_at: "2024-06-28T10:22:56.928578+00:00",
      payment_id: "90u259k4b9qh4tn2h220ui2um3",
      amount: 12000,
      status: "created",
    },
  ],
  invitations_to_pay: [],
};
