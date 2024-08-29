import { HttpException, HttpStatus } from "@nestjs/common";

export class ValidationExeption extends HttpException {
    messages;

    constructor(response) {
        super(response, HttpStatus.BAD_REQUEST);
        this.messages = response;
    }
}
