export class Delivery {
  recordDate: Date;
  profile: Profile;
  availabilityHeader: AvailabilityHeader;
  nosAllocations: number;
  nosParcels: number;
}
export class Profile {
  preferredPostal: string;
  vehicleType: string;
  updatedDate: Date;
}
export class Driver {
  userId: string;
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  userMobile: string;
  groupId: number;
  roleId: number;
  userOrg: string;
}
export class AvailabilityHeader {
  driver: Driver;
  availableDate: string;
}