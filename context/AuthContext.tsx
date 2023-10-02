import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolConfig = {
  UserPoolId: String(process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID),
  ClientId: String(process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID),
};

export const userPool = new CognitoUserPool(poolConfig);
