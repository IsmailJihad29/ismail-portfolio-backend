import { Request, Response } from "express";
import { AuthServices } from "./auth.service";
import catchAsync from "../../utils/catchAsync";

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthServices.loginUserService(req.body);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "User Logged In Successfully",
    token: result?.accessToken,
    data: {
      _id: result?.user?._id,
      name: result?.user?.name,
      email: result?.user?.email,
      role: result?.user?.role,
      phone: result?.user?.phone,
      
    },
  });
});

export const AuthControllers = {
  loginUser,
};
