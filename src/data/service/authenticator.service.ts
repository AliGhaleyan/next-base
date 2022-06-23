import {injectable} from "tsyringe";
import ServiceConnector from "../connector/service.connector";
import {AcquireToken, RegisterFormModel} from "../model/auth.model";
import {Token} from "../model/token.model";
import BaseService from "./base-service";

@injectable()
export default class AuthenticatorService extends BaseService {
    constructor(connector: ServiceConnector) {
        super(connector);
    }

    readonly acquireToken = (data: AcquireToken): Promise<Token> => {
        return this.post("login", data);
    };

    readonly signUp = (form: RegisterFormModel): Promise<any> => {
        return this.post(`/admin`, form);
    };
};
