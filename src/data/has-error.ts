import {AppError} from "./app-error";

export default interface HasError {
    error?: AppError.Exception;
}
