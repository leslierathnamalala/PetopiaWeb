interface DataItem {
  date: string;
  nosReferrals: number;
  nosVouchers: number;
  nosDeliveries: number;
  nosReturns: number;
}

interface Result {
  months: string[];
  sumReferrals: number[];
  sumVouchers: number[];
  sumDeliveries: number[];
  sumReturns: number[];
}