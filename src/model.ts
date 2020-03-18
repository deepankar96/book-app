export interface employee{
    id:number;
    email:string;
    username:string;
}

export interface department{
    id:number;
    collegeid:string;
    departmentid:string;
    departmentname:string;
    hodid:string;
    departmentemail:string;
    departmentpassword:string;
}

export interface course{
    id:number;
    collegeid:string;
    departmentid:string;
    courseid:string;
    coursename:string;
    courseduration:string;
    coursedivison:string;
}

export interface college{
    id:number;
    collegeName:string;
    collegePassword:string;
    collegeId:string;
    collegeLocation:string;
    collegeAddress:string;
}