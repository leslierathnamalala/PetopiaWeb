export class ConfigStore {
  InbuiltValues: string[];
  OtherValues: string;
}

export enum ConfigTypes{
  CookingFacilities = 6,
  DietaryRequirement = 7,
  SpecialInfo = 9,
  OtherlInfo = 10,
  ReferralReason = 11,
}