import { Service as DIService } from "typedi";
import UserServices from "./user";

@DIService()
class Services {
  public userServices: UserServices;
  constructor(userServices: UserServices) {
    this.userServices = userServices;
  }


  public getServices = () => {
    return {
      userServices: this.userServices,
    };
  }
}

export default Services;