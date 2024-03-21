import { UserGeneral } from "../user/user-general.model"

export class ReferralGeneral {
  recomenderId: string;
  beneficiaryId: string;
  reasons: string;
  firstReferral: boolean;
  development: string;
  medical: string;
}

export class Referral {
    referralId: string
    reasons: string
    isFirstReferral: boolean
    development: string
    medical: string
    referralDate: string
    recommender: UserGeneral
    moderator: UserGeneral
    moderatedDate: string
    moderatorComments: string
    beneficiary: Beneficiary
    entityStatus: string
  }
  
  export class Beneficiary {
    beneficiaryId: string
    bnfFirstName: string
    bnfLastName: string
    bnfEmail: string
    primaryMobile: string
    secondaryMobile: any
    streetAddress: string
    addressCity: string
    addressPostCode: string
    registeredDate: string
    consideration: string
    adults: number
    elders: number
    children: number
    childrenAgeList: string
    cookingFacilities: string
    dietaryRequirement: string
    deliveryOption: string
    deliverySpecial: string
    considerationOption: string
    medicalRequirement: string
    otherOption: any
    otherService: string
    updateDate: string
    recommender: UserGeneral
    onGoingStatus?: boolean
  }

  