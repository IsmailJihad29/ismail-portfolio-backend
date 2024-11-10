import jwt from "jsonwebtoken";
import config from "../../../config";
import { User } from "../User/user.model";

export type TLoginUser = {
  email: string;
  password: string;
};

const loginUserService = async (payload: TLoginUser) => {
  const user = await User.isUsersExistsByCustomId(payload?.email);

  //* check user and password
  if (!user) {
    throw new Error("This user is not found!");
  }

  const isPasswordMatched = await User.isPasswordMatched(
    payload?.password,
    user?.password
  );

  if (!isPasswordMatched) {
    throw new Error("Password do not matched.");
  }

  // Create token and sent to the client
  const jwtPayload = {
    userEmail: user.email,
    role: user.role,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: config.jwt_access_expires_in,
  });

  return { accessToken, user };
};

export const AuthServices = {
  loginUserService,
};
