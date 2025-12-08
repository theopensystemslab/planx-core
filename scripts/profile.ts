import { getMockReportAPlanningBreachFlow } from "../src/export/digitalPlanning/mocks/flows/index.js";
import { mockReportAPlanningBreachSessionMedway } from "../src/export/digitalPlanning/mocks/reportAPlanningBreach.js";
import { DigitalPlanning } from "../src/export/digitalPlanning/model.js"

/**
 * Script called by `pnpm:profile-function`
 * Accepts a callback function which will generate a `.cpuprofile` file in the `./profiles` dir
 * This is then opened in the browser as an interactive flamegraph
 */
const profile = async (label: string, callback: CallableFunction) => {
  console.time(label);
  await callback();
  console.timeEnd(label);
}

// profile(
//   "Medway RAB template",
//   async () => new DigitalPlanning({
//     session: mockReportAPlanningBreachSessionMedway,
//     flow: await getMockReportAPlanningBreachFlow(),
//   })
// );