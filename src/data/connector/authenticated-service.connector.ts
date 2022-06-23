import {container, injectable} from "tsyringe";
import TokenRepository from "../util/token-repository";
import ServiceConnector from "./service.connector";

@injectable()
export default class AuthenticatedServiceConnector extends ServiceConnector {
    readonly getHeaders = (options: Record<string, any>): Record<string, any> => {
        const tokenRepository = container.resolve(TokenRepository);
        const token = tokenRepository.getToken();
        if (!token)
            return options;

        options["headers"] = {
            ...(options["headers"] ?? {}),
            Authorization: `Bearer ${tokenRepository.getToken()}`
        };

        return options;
    };
}
