export class Auth {
  authorization: string;
  principal: Principal;
  user_role: number;
  last_login: Date;
}

export class AuthMFA {
  temp_token: string;
  user_first_name: string;
  user_last_name: string;
  user_id: string;
}


export class Principal {
  userId: string;
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  userMobile?: any;
  imageUrl: string;
  password?: any;
  registeredDate: Date;
  entityStatus: number;
  activatedDate?: any;
  mfaSecret?: any;
  mfaActivation?: any;
  groupId: number;
  roleId: number;
  userOrg: string;
  lastUpdated?: any;
  pwdUpdated: Date;
}