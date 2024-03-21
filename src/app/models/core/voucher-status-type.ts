export enum StatusEnum {
  CREATED = 0,
  APPROVE = 1,
  REJECT = -1,
  SET_DELIVERY_DATE = 2,
  READY_FOR_COLLECTION = 3,
  READY_FOR_DELIVERY = 4,
  OUT_FOR_DELIVERY = 5,
  RETURNED = 401,
  NOTCOLLECTED = 402,
  DELIVERED = 202,
  COLLECTED = 200,
  CANCELLED = 410,
  RESCHEDULE = 600,
  REDELIVERY = 610,
}

export const VoucherStatusType: VoucherStatus[] = [
  { order: 0, statusId: 0, statusName: 'Created' },
  { order: 1, statusId: 1, statusName: 'Approved' },
  { order: 2, statusId: -1, statusName: 'Reject' },
  { order: 3, statusId: 2, statusName: 'Delivery Date Set' },
  { order: 4, statusId: 3, statusName: 'Ready for Collection' },
  { order: 5, statusId: 4, statusName: 'Ready for Delivery' },
  { order: 6, statusId: 5, statusName: 'Out for Delivery' },
  { order: 7, statusId: 401, statusName: 'Returned' },
  { order: 8, statusId: 202, statusName: 'Delivered' },
  { order: 9, statusId: 200, statusName: 'Collected' },
  { order: 10, statusId: 410, statusName: 'Cancelled' },
  { order: 11, statusId: 402, statusName: 'Not collected' },
]

export const UpdateStatusType: VoucherStatus[] = [
  { order: 3, statusId: 2, statusName: 'Delivery Date Set' },
  { order: 4, statusId: 3, statusName: 'Ready for Collection' },
  { order: 5, statusId: 4, statusName: 'Ready for Delivery' },
  { order: 6, statusId: 5, statusName: 'Out for Delivery' },
  { order: 7, statusId: 401, statusName: 'Returned' },
  { order: 8, statusId: 202, statusName: 'Delivered' },
  { order: 9, statusId: 200, statusName: 'Collected' },
  { order: 10, statusId: 410, statusName: 'Cancelled' },
  { order: 11, statusId: 600, statusName: 'Re-Schedule' },
  { order: 12, statusId: 610, statusName: 'Re-Delivery' },
]

export class VoucherStatus {
  order: number;
  statusId: StatusEnum;
  statusName: string;
}