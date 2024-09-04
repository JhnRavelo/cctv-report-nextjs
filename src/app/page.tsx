import FormFields from "@/components/Form/Form";
import "./login.scss";
import { loginFields, loginInitialValues } from "@/assets/ts/login";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ouverture de session",
};

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-title">
          <span>Ouverture de session</span>
        </div>
        <div className="login-form">
          <FormFields
            initialValues={loginInitialValues}
            formFields={loginFields}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;