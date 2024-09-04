export type TypeInitialValues = {
  username: string;
  password: string;
};

export type TypeLoginFormFields = {
  name: "username" | "password";
  header: string;
  placeholder: string;
  type: string;
}[];

export const loginInitialValues: TypeInitialValues = {
  username: "",
  password: "",
};

export const loginFields: TypeLoginFormFields = [
  {
    type: "text",
    name: "username",
    placeholder: "Remplir votre nom d'utilisateur",
    header: "Nom d'utilisateur :",
  },
  {
    type: "password",
    name: "password",
    placeholder: "Remplir votre mot de passe",
    header: "Mot de passe :",
  },
];