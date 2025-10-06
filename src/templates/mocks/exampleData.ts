import { Application } from "../../export/digitalPlanning/schemas/application/types.js";

export const exampleData: Application = {
  "data": {
    "applicant": {
      "type": 'individual',
      "email": 'dafydd@opensystemslab.io',
      "name": {
        "first": "test",
        "last": "test"
      },
      "phone": {
        "primary": '1234567'
      },
      "address": {
        "sameAsSiteAddress": true
      },
      "siteContact": {
        "role": 'applicant'
      }
    },
    "application": {
      "type": {
        "description": "Lawful Development Certificate",
        "value": "ldc"
      },
      "declaration": {
        "accurate": true,
        "connection": {
          "value": "none"
        }
      },
      "fee": {

      }
    },
    "property": {
      "address": {
        "town": "HIGH WYCOMBE",
        "uprn": "200000797602",
        "latitude": 51.6274191,
        "postcode": "HP11 1BB",
        "singleLine":
          "BUCKINGHAMSHIRE COUNCIL, COUNCIL OFFICES, QUEEN VICTORIA ROAD",
        "longitude": -0.7489513,
        "pao": 'COUNCIL OFFICES',
        "source": 'Ordnance Survey',
        "street": 'QUEEN VICTORIA ROAD',
        "title": '',
        "usrn": '',
        "x": 486694,
        "y": 192808
      },
      "planning": {
        "designations": [
          { "value": "tpo", "intersects": false, "description": "Tree Preservation Order (TPO) or zone" },
          { "value": "listed", "intersects": false, "description": "Listed building" },
          { "value": "articleFour", "intersects": false, "description": "Article 4 direction area" },
          { "value": "monument", "intersects": false, "description": "Site of a Scheduled Monument" },
          { "value": "nature.SAC", "intersects": false, "description": "Special Area of Conservation (SAC)" },
          { "value": "nature.ASNW", "intersects": false, "description": "Ancient Semi-Natural Woodland (ASNW)" },
          { "value": "nature.SSSI", "intersects": false, "description": "Site of Special Scientific Interest (SSSI)" },
          { "value": "nature.SPA", "intersects": false, "description": "Special Protection Area (SPA)" },
          { "value": "designated.WHS", "intersects": false, "description": "UNESCO World Heritage Site (WHS)" },
          { "value": "registeredPark", "intersects": false, "description": "Registered parks and gardens" },
          { "value": "designated.AONB", "intersects": false, "description": "Area of Outstanding Natural Beauty (AONB)" },
          { "value": "designated.nationalPark", "intersects": false, "description": "National Park" },
          { "value": "designated.conservationArea", "intersects": true, "description": "Conservation area" },
          { "value": "articleFour.caz", "intersects": false, "description": "Central Activities Zone (CAZ)" },
          { "value": "designated.nationalPark.broads", "intersects": false, "description": "National Park - Broads" },
        ],
        "sources": ['']
      }
    },
    "proposal": {
      "description": "ldc",
      "projectType": [
        {
          "description": "Install a security alarm",
          "value": "alter.equipment.alarm"
        }
      ],
      "boundary": {
        "site": {
          "type": "Feature",
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [-0.7491888117037445, 51.62746573090956],
                [-0.7487475045017631, 51.627460469121615],
                [-0.7490133156060904, 51.627360716173484],
                [-0.7491888117037445, 51.62746573090956],
              ],
            ],
          },
          "properties": null,
        },
        "area": {
          "squareMetres": 1000.0
        }
      }

    },
    "user": {

    }
  },
  "files": [
    {
      "name": "WhatsApp%20Image%202022-07-01%20at%2011.18.03%20AM%20%281%29.jpeg",
      "type": [
        {
          "description": "Floor plan - proposed",
          "value": "floorPlan.proposed"
        },
        {
          "description": "Floor plan - existing",
          "value": "floorPlan.existing"
        },
        {
          "description": "Elevations - existing",
          "value": "elevations.existing"
        },
        {
          "description": "Elevations - proposed",
          "value": "elevations.proposed"
        },
      ]
    }
  ],
  "metadata": {
    "id": "fcdaabb2-1feb-47cb-94fa-f9d5148b2efb",
    "source": "PlanX",
    "submittedAt": ""
  }
}

