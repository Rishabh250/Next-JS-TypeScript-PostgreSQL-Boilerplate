import Container, { Service as DIService } from 'typedi';
import { Request, Response } from 'express'
import UserSchema from '../validation/user';
import { IUserController }  from '../interfaces';
import Services from '../services';
import AppConstants from '../utils/constant';

const { HEADERS: { PUBLIC_ID }, RESPONSE_ERROR: { VALIDATION_ERROR, SERVICE_ERROR } } = AppConstants;

@DIService()
class UserController implements IUserController {
  private userServices;
  private createSchema;

  constructor(services: Services = Container.get(Services)) {
    this.userServices = services.userServices;
    this.createSchema = UserSchema.createSchema;
  }

  public create = async (req: Request, res: Response) => {
    try {
      const { body, user: { userId = '' } = {} } = req;
      const data = { ...body, userId };

      const { error } = this.createSchema.create.validate(data);

      if (error) {
        const { details } = error;

        return res.badRequest(VALIDATION_ERROR, details);
      }

      const { doc, errors }: ServiceResponse = await this.userServices.create(data);

      if (errors) {
        return res.badRequest(SERVICE_ERROR ,errors);
      }

      const { publicId } = doc;

      res.setHeader(PUBLIC_ID, publicId);

      return res.postRequest();

    } catch (error) {
      return res.serverError();
    }
  }


  public getList =async  (req: Request, res: Response) => {
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
