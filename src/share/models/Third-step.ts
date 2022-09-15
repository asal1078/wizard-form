import { Istatus } from "./status";
import { Itable } from "./table-data";

export interface IThird {
    imageUrl : any,
    phoneNumber : string,
    sourceOfFund : string,
    minDate : string,
    maxDate : string,
    status : Istatus,
    tableData : Itable
}