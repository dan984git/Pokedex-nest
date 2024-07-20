import { Injectable } from "@nestjs/common";
import { HttpAdapter } from "../interfaces/http-adapter.interface";

@Injectable()
export class FetchAdapter implements HttpAdapter {

    private fetch = fetch;

    async get<T>(url: string): Promise<T> {
        try {
            const data = await (await this.fetch(url)).json();
            return data;
        } catch (error) {
            throw new Error('This is an error - Check logs');
        }
    }

}