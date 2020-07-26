//employee information
export interface IAdmin_Form {
  //user info saved after registration
  employeeFirstName: any;
  employeeLastName: any;
  employeeEmail: any;
  employeeUserName: any;
  employeeID_DB: any;
  //to be completed by employee/user
  employeeMiddleName: any;
  employeeGender: any;
  employeeDateOfBirth: any;
  employeeMaritalStatus: any;
  employeeMobileNumber: any;
  employeeTelephoneNumber: any;
  employeeAddress: any;
  employeeImage: any;
  employeePosition: any;
  employeeEmployeeNumber: any;
  employeeHireDate: any;
  employeeEmploymentStatus: any;
  employeeDepartment: any;
  employeeSalary: any;
  employeeReportsTo: any;

}

export interface IAdmin_AfterRegister {
  employeeFirstName: any;
  employeeLastName: any;
  employeeEmail: any;
  employeeUserName: any;
  employeeID_DB: any;
}
