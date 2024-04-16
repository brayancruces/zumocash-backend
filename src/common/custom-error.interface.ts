interface CustomError {
    code: string;
    message: string;
}

export class AuthError implements CustomError {
    constructor(public code: string, public message: string) {}
}