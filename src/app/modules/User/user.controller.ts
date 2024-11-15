import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { userServices } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const user = req.body;

  const result = await userServices.createUserIntoDB(user);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User registered successfully',
    data: result,
  });
});

export const UserControllers = {
  createUser,
};
