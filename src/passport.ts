import { Passport as IPassport } from './types';
import has from "lodash.has";

type Question = Record<string, any>[];

export class Passport {
  userPassport: IPassport

  constructor(userPassport: IPassport) {
    this.userPassport = userPassport
  }

  getFiles() {
    const isFileUploadQuestion = (question: Question) => has(question[0], "url");
    const getFileURLs = (questionWithFiles: Question) => questionWithFiles.map(question => question.url);

    const files = Object.values(this.userPassport)
      .filter(isFileUploadQuestion)
      .map(getFileURLs)
      .flat();
    return files;
  }
}