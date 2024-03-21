export class UserGeneral {
  city: string;
  district: string;
  firstName: string;
  lastName: string;
  nic: string;
  province: string;
  userId: number;
  userType: UserType;
  username: string;
  zipCode: string;
}

export enum UserType {
  None = 0,
  Advertiser = 1,
  Clinician = 2
}