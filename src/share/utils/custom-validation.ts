export function secondSetepValidation(phoneNumber: string, sourceOfFund: string, range: Array<Date>): {
    status: boolean,
    severity: string,
    summary: string,
    detail: string
}  {

    var onlyNumberRegix = /^[0-9]*$/;
    var onlyLetterRegix = /[a-zA-Z]/;
    var isPhoneNumberTrue: boolean = true;
    var isSourceOfFundTrue: boolean = true;
    var isRangeTrue: boolean = true;

    if (phoneNumber == "" || phoneNumber == null || phoneNumber == undefined) {
        isPhoneNumberTrue = false;
        return ({ status:false, severity: 'error', summary: 'Input Error', detail: 'Phone Number Should Not Be Empty!' })
    }

    else if (onlyNumberRegix.test(phoneNumber) == false) {
        isPhoneNumberTrue = false;
        return ({status:false, severity: 'error', summary: 'Input Error', detail: 'Phone Number Must Include Only Numbers!' });
    }

    else if (sourceOfFund == "" || sourceOfFund == null || sourceOfFund == undefined) {
        isSourceOfFundTrue = false;
        return ({status:false, severity: 'error', summary: 'Input Error', detail: 'Source Of Letters Should Not Be Empty!' });
    }

    else if (onlyLetterRegix.test(sourceOfFund) == false) {
        isSourceOfFundTrue = false;
        return ({status:false, severity: 'error', summary: 'Input Error', detail: 'Source Of Letters Must Include Only Letters!' });
    }

    else if (range.length === 0) {
        isRangeTrue = false;
        return ({status:false, severity: 'error', summary: 'Input Error', detail: 'Date Range Should Not Be Empty!' });
    }

    else {
        return ({status:true, severity: 'success', summary: 'Success Message', detail: 'You Will Tranfer To Next Step!' });
    }
}


export function thirdSetepValidation(person:string): {
    status: boolean,
    severity: string,
    summary: string,
    detail: string
}  {
    if(person == ""){
        return ({status:false, severity: 'error', summary: 'Input Error', detail: 'Please Select A person!' });
      }

    else {
        return ({status:true, severity: 'success', summary: 'Success Message', detail: 'You Will Tranfer To Next Step!' });
    }
}
