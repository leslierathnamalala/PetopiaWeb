import { UserGeneral } from "../user/user-general.model";

export class VoucherGeneral {
  partnerId: string;
  authorId: string;
  bnfId: string;
  referralId: string;
  nosAdult: number;
  nosElders: number;
  nosChildren: number;
  childrenAges: string;
  cookingFacilities: string;
  dietaryRequirement: string;
  deliveryOptions: string;
  deliverySpecial: string;
  considerations: string;
  medical: string;
  otherOptions?: any;
  otherService?: any;
  logEntries: LogEntry[];
  modComments: string;
  approved: boolean;
}

export class LogEntry {
  idvoucher_log: number;
  author: UserGeneral;
  authorRole: string;
  logEntry: string;
  logDate: Date;
}