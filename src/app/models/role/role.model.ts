export enum GroupLevel {
  Admin = 10,
  General = 20,
  Driver = 30,
  Other = 40,
}

export enum RoleLevel {
  SuperAdmin = 1010,
  GeneralAdmin = 1020,
  GeneralWorker = 2010,
  Dispatcher = 2020,
  GeneralUser = 2030,
  Driver = 3010,
  ReferralPartner = 4010
}

export const ROLE_LIST: any[] = [
  { groupId: GroupLevel.Admin, roleId: RoleLevel.GeneralAdmin, roleName: 'General Admin' },
  { groupId: GroupLevel.General, roleId: RoleLevel.GeneralWorker, roleName: 'General Worker' },
  { groupId: GroupLevel.General, roleId: RoleLevel.Dispatcher, roleName: 'Dispatcher' },
  { groupId: GroupLevel.General, roleId: RoleLevel.GeneralUser, roleName: 'General User' },
  { groupId: GroupLevel.Driver, roleId: RoleLevel.Driver, roleName: 'Driver' },
  { groupId: GroupLevel.Other, roleId: RoleLevel.ReferralPartner, roleName: 'Referral Partner' },
]

export const GROUP_LIST: any[] = [
  { groupId: GroupLevel.Admin, groupName: 'Admin' },
  { groupId: GroupLevel.General, groupName: 'Foodbox Users' },
  { groupId: GroupLevel.Driver, groupName: 'Drivers' },
  { groupId: GroupLevel.Other, groupName: 'Referral Partners' }
]
