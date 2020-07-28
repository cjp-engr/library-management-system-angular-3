//employee information
export interface IEmployee_Admin_CompletedForm {
  //user info saved after registration
  employee_adminFirstName: any;
  employee_adminLastName: any;
  employee_adminEmail: any;
  employee_adminUserName: any;
  employee_adminID_DB: any;
  //to be completed by employee/user
  employee_adminMiddleName: any;
  employee_adminGender: any;
  employee_adminDateOfBirth: any;
  employee_adminMaritalStatus: any;
  employee_adminMobileNumber: any;
  employee_adminTelephoneNumber: any;
  employee_adminAddress: any;
  employee_adminImage: any;
  employee_adminPosition: any;
  employee_adminEmployeeNumber: any;
  employee_adminHireDate: any;
  employee_adminEmploymentStatus: any;
  employee_adminDepartment: any;
  employee_adminSalary: any;
  employee_adminReportsTo: any;

}

export interface IEmployee_Admin_AfterRegister {
  emp_adminFirstNameAfterRegister: any;
  emp_adminLastNameAfterRegister: any;
  emp_adminEmailAfterRegister: any;
  emp_adminUserNameAfterRegister: any;
  emp_adminID_DBAfterRegister: any;
  emp_adminIsUserCompletedForm: string;
}
