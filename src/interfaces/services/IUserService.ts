
interface IUserService {
    create (payload: object): void;
    getList (payload: object): void;
    getDetailsById (payload: object): void;
    update (payload: object): void;
}

export default IUserService;
