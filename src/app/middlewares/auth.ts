import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { User } from '../modules/User/user.model';
import { TUserRole } from '../modules/User/user.interface';
import config from '../../config';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      throw new Error(

        'You have no access to this route',
      );
    }

    const tokenSplit = token.split(' ');

    if (tokenSplit.length !== 2 || tokenSplit[0] !== 'Bearer') {
      throw new Error('Please Provide Valid Token Format');
    }

    const accessToken = tokenSplit[1];

    const decoded = jwt.verify(
      accessToken,
      config.jwt_access_secret as string,
    ) as JwtPayload;

    const { role, userEmail } = decoded;

    const user = await User.isUsersExistsByCustomId(userEmail);

    if (!user) {
      throw new Error('This user is not found!');
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      // Check if have auth access
      throw new Error(
  
        'You have no access to this route',
      );
    }

    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;
