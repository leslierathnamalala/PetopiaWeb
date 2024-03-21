import { UserGeneral } from "../user/user-general.model"

export class Voucher {
    voucherId: number
    voucherSerial: string
    author: UserGeneral
    partnerId: string
    partnerName: string
    partnerOrganization: string
    bnfId: string
    bnfName: string
    bnfAddress: string
    bnfPostalCode: string
    referral: Referral
    createdDate: string
    updatedDate: string
    entityStatus: number
    nosAdult: number
    nosElders: number
    nosChildren: number
    childrenAges: string
    cookingFacilities: string
    dietaryRequirement: string
    deliveryOptions: string
    deliverySpecial: string
    considerations: string
    medical: string
    otherOptions: string
    otherService: string
    nosParcels: string
    logEntries: string
    expectedDeliveryDate: string
    deliverer: UserGeneral
    deliveredDate: string
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
  }

  
