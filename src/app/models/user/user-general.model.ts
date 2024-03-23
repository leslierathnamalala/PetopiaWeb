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
  userImage: string;
}

export enum UserType {
  None = 0,
  Advertiser = 1,
  Clinician = 2,
  Admin = 3
}