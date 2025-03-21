import type { Passport } from "../../../types/index.js";

export const noFiles: Passport = {
  data: {
    _nots: {
      "property.constraints.planning": [
        "articleFour",
        "listed",
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
        "articleFour.buckinghamshire.caz",
      ],
    },
    _address: {
      x: 494718,
      y: 190522,
      pao: "1",
      town: "BEACONSFIELD",
      uprn: "100080481952",
      title: "1, AMERSHAM ROAD, BEACONSFIELD",
      source: "os",
      street: "AMERSHAM ROAD",
      latitude: 51.6055791,
      postcode: "HP9 2HA",
      blpu_code: "2",
      longitude: -0.6336819,
      planx_value: "residential.house.semiDetached",
      organisation: null,
      planx_description: "Semi-detached",
      single_line_address:
        "1, AMERSHAM ROAD, BEACONSFIELD, BUCKINGHAMSHIRE, HP9 2HA",
    },
    "user.role": ["applicant"],
    worksToRoof: ["false"],
    "property.type": ["residential.house.semiDetached"],
    "proposal.time": ["future"],
    "applicant.type": ["individual"],
    "applicant.email": "dafydd@opensystemslab.io",
    "applicant.title": "mr",
    "property.region": ["South East"],
    "application.type": ["ldc.proposed"],
    "proposal.site.area": 383.72,
    "uniform.isRelated": ["false"],
    "uniform.siteVisit": ["true"],
    "_contact.applicant": {
      applicant: {
        email: "dafydd@opensystemslab.io",
        phone: "12456789",
        title: "mr",
        lastName: "test",
        firstName: "test",
        organisation: "",
      },
    },
    "applicant.interest": ["owner.sole"],
    "applicant.resident": ["true"],
    "uniform.personRole": ["Applicant"],
    "applicant.name.last": "test",
    "applicant.name.first": "test",
    "proposal.description": "test",
    "proposal.projectType": ["alter.equipment.alarm"],
    "applicant.siteContact": ["applicant"],
    "uniform.applicationTo": ["N410"],
    "uniform.consentRegime": ["General Permitted Development Extensions"],
    "proposal.treeWorksOnly": ["false"],
    "uniform.scenarioNumber": ["15"],
    "applicant.phone.primary": "12456789",
    "application.fee.payable": 0,
    "application.preAppAdvice": ["false"],
    "application.resubmission": ["true"],
    "proposal.droppedKerbOnly": ["false"],
    "uniform.applicantInterest": ["Owner"],
    "uniform.proposedUseStatus": ["permanent"],
    "application.fee.calculated": 103,
    "proposal.site.area.hectares": 0.038372,
    "application.basisOfLawfulness": ["permittedDevelopment"],
    "applicant.ownership.certificate": ["a"],
    "property.localAuthorityDistrict": ["Buckinghamshire", "South Bucks"],
    "application.declaration.accurate": ["true"],
    "application.declaration.connection": ["none"],
    "application.showTreesConsentResult": ["false"],
    "application.fee.exemption.disability": ["false"],
    "application.fee.exemption.resubmission": ["true"],
    "application.resubmission.original.applicationReference": "ff",
  },
};

export const singleFileQuestion: Passport = {
  data: {
    ...noFiles.data,
    "elevations.existing": [
      {
        url: "https://api.1434.planx.pizza/file/private/4senippj/Screenshot%202023-02-08%20at%2009.13.55.png",
        filename: "Screenshot 2023-02-08 at 09.13.55.png",
        cachedSlot: {
          id: "QZYeaycqQhpZoX7qd1Tns",
          url: "https://api.1434.planx.pizza/file/private/4senippj/Screenshot%202023-02-08%20at%2009.13.55.png",
          file: {
            path: "Screenshot 2023-02-08 at 09.13.55.png",
            size: 33803,
            type: "image/png",
          },
          status: "success",
          progress: 1,
        },
      },
    ],
  },
};

export const drawBoundaryComponent: Passport = {
  data: {
    ...noFiles.data,
    locationPlan: [
      {
        file: {
          path: "PXL_20230507_150205350~2.jpg",
        },
        status: "success",
        progress: 1,
        id: "QU8_5f128M9jlp3GtN1SM",
        url: "https://api.2770.planx.pizza/file/private/mtl0y31s/PXL_20230507_150205350~2.jpg",
      },
    ],
    "drawBoundary.action": "Uploaded a location plan",
  },
};

export const multipleFileQuestions: Passport = {
  data: {
    ...noFiles.data,
    "elevations.existing": [
      {
        url: "https://api.1434.planx.pizza/file/private/4senippj/Screenshot%202023-02-08%20at%2009.13.55.png",
        filename: "Screenshot 2023-02-08 at 09.13.55.png",
        cachedSlot: {
          id: "QZYeaycqQhpZoX7qd1Tns",
          url: "https://api.1434.planx.pizza/file/private/4senippj/Screenshot%202023-02-08%20at%2009.13.55.png",
          file: {
            path: "Screenshot 2023-02-08 at 09.13.55.png",
            size: 33803,
            type: "image/png",
          },
          status: "success",
          progress: 1,
        },
      },
    ],
    "elevations.proposed": [
      {
        url: "https://api.1434.planx.pizza/file/private/vsvv8987/Screenshot%202023-02-08%20at%2009.13.55.png",
        filename: "Screenshot 2023-02-08 at 09.13.55.png",
        cachedSlot: {
          id: "tUrm4syFWyH-oInuaDoiv",
          url: "https://api.1434.planx.pizza/file/private/vsvv8987/Screenshot%202023-02-08%20at%2009.13.55.png",
          file: {
            path: "Screenshot 2023-02-08 at 09.13.55.png",
            size: 33803,
            type: "image/png",
          },
          status: "success",
          progress: 1,
        },
      },
    ],
  },
};

export const multipleFilesMultipleQuestions: Passport = {
  data: {
    ...noFiles.data,
    "elevations.existing": [
      {
        url: "https://api.1434.planx.pizza/file/private/4senippj/Screenshot%202023-02-08%20at%2009.13.55.png",
        filename: "Screenshot 2023-02-08 at 09.13.55.png",
        cachedSlot: {
          id: "QZYeaycqQhpZoX7qd1Tns",
          url: "https://api.1434.planx.pizza/file/private/4senippj/Screenshot%202023-02-08%20at%2009.13.55.png",
          file: {
            path: "Screenshot 2023-02-08 at 09.13.55.png",
            size: 33803,
            type: "image/png",
          },
          status: "success",
          progress: 1,
        },
      },
      {
        url: "https://api.1434.planx.pizza/file/private/4senippj/Screenshot%202023-02-08%20at%2009.13.55.png",
        filename: "Screenshot 2023-02-08 at 09.13.55.png",
        cachedSlot: {
          id: "QZYeaycqQhpZoX7qd1Tns",
          url: "https://api.1434.planx.pizza/file/private/4senippj/Screenshot%202023-02-08%20at%2009.13.55.png",
          file: {
            path: "Screenshot 2023-02-08 at 09.13.55.png",
            size: 33803,
            type: "image/png",
          },
          status: "success",
          progress: 1,
        },
      },
    ],
    "elevations.proposed": [
      {
        url: "https://api.1434.planx.pizza/file/private/vsvv8987/Screenshot%202023-02-08%20at%2009.13.55.png",
        filename: "Screenshot 2023-02-08 at 09.13.55.png",
        cachedSlot: {
          id: "tUrm4syFWyH-oInuaDoiv",
          url: "https://api.1434.planx.pizza/file/private/vsvv8987/Screenshot%202023-02-08%20at%2009.13.55.png",
          file: {
            path: "Screenshot 2023-02-08 at 09.13.55.png",
            size: 33803,
            type: "image/png",
          },
          status: "success",
          progress: 1,
        },
      },
    ],
    "sitePlan.existing": [
      {
        url: "https://api.1434.planx.pizza/file/private/lwp0w0ua/Screenshot%202023-02-08%20at%2009.13.55.png",
        filename: "Screenshot 2023-02-08 at 09.13.55.png",
        cachedSlot: {
          id: "oL_Xy8OLkkxnLSOnJt9nV",
          url: "https://api.1434.planx.pizza/file/private/lwp0w0ua/Screenshot%202023-02-08%20at%2009.13.55.png",
          file: {
            path: "Screenshot 2023-02-08 at 09.13.55.png",
            size: 33803,
            type: "image/png",
          },
          status: "success",
          progress: 1,
        },
      },
      {
        url: "https://api.1434.planx.pizza/file/private/lwp0w0ua/Screenshot%202023-02-08%20at%2009.13.55.png",
        filename: "Screenshot 2023-02-08 at 09.13.55.png",
        cachedSlot: {
          id: "oL_Xy8OLkkxnLSOnJt9nV",
          url: "https://api.1434.planx.pizza/file/private/lwp0w0ua/Screenshot%202023-02-08%20at%2009.13.55.png",
          file: {
            path: "Screenshot 2023-02-08 at 09.13.55.png",
            size: 33803,
            type: "image/png",
          },
          status: "success",
          progress: 1,
        },
      },
      {
        url: "https://api.1434.planx.pizza/file/private/lwp0w0ua/Screenshot%202023-02-08%20at%2009.13.55.png",
        filename: "Screenshot 2023-02-08 at 09.13.55.png",
        cachedSlot: {
          id: "oL_Xy8OLkkxnLSOnJt9nV",
          url: "https://api.1434.planx.pizza/file/private/lwp0w0ua/Screenshot%202023-02-08%20at%2009.13.55.png",
          file: {
            path: "Screenshot 2023-02-08 at 09.13.55.png",
            size: 33803,
            type: "image/png",
          },
          status: "success",
          progress: 1,
        },
      },
    ],
    "sitePlan.proposed": [
      {
        url: "https://api.1434.planx.pizza/file/private/t1qv0vvr/Screenshot%202023-02-08%20at%2009.13.55.png",
        filename: "Screenshot 2023-02-08 at 09.13.55.png",
        cachedSlot: {
          id: "AuB6K9edYOEqPKj-Mcj26",
          url: "https://api.1434.planx.pizza/file/private/t1qv0vvr/Screenshot%202023-02-08%20at%2009.13.55.png",
          file: {
            path: "Screenshot 2023-02-08 at 09.13.55.png",
            size: 33803,
            type: "image/png",
          },
          status: "success",
          progress: 1,
        },
      },
    ],
  },
};
