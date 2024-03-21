export class ResponseModel {
  body: any;
  ok: boolean;
  status: StausCode;
  statusText: string;
}

export enum StausCode {
  LIST_RETRIEVED = 200, 
  ENTITY_CREATED = 201, 
  ENTITY_UPDATED = 202, 
  PARTIAL_CONTENT = 206, 
  PERSISTANCE_FAILED = 304, 
  INCOMPLETE = 400, 
  RESTRICTED = 401, 
  RESTRICTED_ACCESS = 403, 
  NOT_FOUND = 404, 
  NOT_ACTIVATED = 405, 
  LOGIN_FAILED = 406, 
  ALREADY_EXIST = 409, 
  EXPIRED = 410, 
  EMAIL_INVALID = 412, 
  CODE_MISMATCHED = 417, 
  SERVER_ERROR = 500, 
}