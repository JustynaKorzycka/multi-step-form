export enum NameEnum {
 userName = "userName",
 email = "email",
 phone = "phone",
}

const PERSONAL_INFO_DATA = {
 title: "Personal info",
 desc: "Please provide your name, email address, and phone number.",
 inputs: [
  {
   label: "Name",
   placeholder: "Your name",
   name: NameEnum.userName,
  },
  {
   label: "Email Address",
   placeholder: "e.g. mail@mail.com",
   name: NameEnum.email,
  },
  {
   label: "Phone Number",
   placeholder: "e.g. 111 222 333",
   name: NameEnum.phone,
  },
 ],
};

export default PERSONAL_INFO_DATA;
