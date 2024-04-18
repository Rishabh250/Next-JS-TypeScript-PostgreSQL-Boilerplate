import { Service as DIService, Inject } from 'typedi';
import { Request, Response } from 'express'
import UserSchema from '../validation/user';
import Services from '../services';
import AppConstants from '../utils/constant';
import { ICreate, IGetList, IGetDetailsById, IUpdate, IUserCreate } from 'src/interfaces';

const { HEADERS: { PUBLIC_ID }, RESPONSE_ERROR: { VALIDATION_ERROR, SERVICE_ERROR } } = AppConstants;

@DIService()
class UserController implements ICreate, IGetList, IGetDetailsById, IUpdate {
  private readonly userServices;
  private readonly createSchema;

  constructor (@Inject() services: Services) {
    this.userServices = services.userServices;
    this.createSchema = UserSchema.createSchema;
  }

  public create = async (req: Request, res: Response) => {
    try {
      const { body, user: { userId = '' } = {} } = req;
      const data: IUserCreate = { ...body, userId };

      const { error } = this.createSchema.create.validate(data);

      if (error) {
        const { details } = error;

        return res.badRequest(VALIDATION_ERROR, details);
      }

      const { doc, errors }: ServiceResponse = await this.userServices.create(data);

      if (errors) {
        return res.badRequest(SERVICE_ERROR, errors);
      }

      const { publicId } = doc as { publicId: string };

      res.setHeader(PUBLIC_ID, publicId);

      return res.postRequest();
    } catch (error) {
      return res.serverError();
    }
  }

  public getList = async (req: Request, res: Response) => {
    return res.getRequest({ message: 'User list' });
  }

  public getDetailsById = async (req: Request, res: Response) => {
    return res.updated();
  }

  public update = async (req: Request, res: Response) => {
    return res.updated();
  }
}

export default UserController;
