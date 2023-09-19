import {
  CognitoIdentityProviderClient,
  SignUpCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import { NextRequest, NextResponse } from "next/server";

export interface UserDetails {
  email: string;
  password: string;
}

const { COGNITO_REGION, COGNITO_APP_CLIENT_ID } = process.env;
export async function POST(request: NextRequest) {
  const { email, password }: UserDetails = await request.json();
  const params = {
    ClientId: COGNITO_APP_CLIENT_ID,
    Password: password,
    Username: email,
    UserAttributes: [
      {
        Name: "email",
        Value: email,
      },
    ],
  };

  const cognitoClient = new CognitoIdentityProviderClient({
    region: COGNITO_REGION,
  });

  const signUpCommand = new SignUpCommand(params);

  try {
    const response = await cognitoClient.send(signUpCommand);
    return new NextResponse(JSON.stringify(response["$metadata"]), {
      status: 200,
    });
  } catch (e: unknown) {
    throw new Error("Error registering user", e as ErrorOptions);
  }
}
