/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type UUID = string;
export type URL = string;
export type DateTime = string;

/**
 * Root of PlanX's Digital Planning Schema
 */
export interface DigitalPlanningDataSchema {
  data: {
    applicant: Applicant;
    application: Application;
    property: Property;
    proposal: Proposal;
    user: User;
  };
  files: File[];
  metadata: Metadata;
  responses: Responses;
  result: Result;
}
export interface Applicant {
  name: string;
}
export interface Application {
  name: string;
}
/**
 * This is an applicant
 */
export interface Property {
  name: string;
}
export interface Proposal {
  name: string;
}
export interface User {
  name: string;
}
export interface File {
  foo: "bar" | "baz" | "boo";
  size: string;
}
export interface Metadata {
  /**
   * Details of the digital planning service which generated this payload
   */
  service: {
    name: string;
    owner: string;
    publishedFlowId: UUID;
    url: URL;
  };
  session: {
    createdAt: DateTime;
    id: UUID;
    source: "PlanX";
    submittedAt: DateTime;
  };
}
export interface Responses {
  name: string;
}
export interface Result {
  name: string;
}