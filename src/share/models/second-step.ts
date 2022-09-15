import { Istatus } from "./status";

export interface Isecond {
    imageUrl : string,
    phoneNumber : string,
    sourceOfFund : string,
    range : Array<Date>,
    minDate : string,
    maxDate : string,
    status : Istatus
}