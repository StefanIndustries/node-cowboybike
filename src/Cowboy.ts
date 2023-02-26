import axios, {AxiosInstance, AxiosRequestConfig, AxiosHeaders} from "axios";
import { access } from "fs";
import {Me} from "./Models/Me";
import {Bike} from "./Models/Bike";

export class Cowboy {
    private axiosInstance: AxiosInstance;
    private abortController = new AbortController;

    private client: string = '';
    private accessToken: string = '';
    private uid: string = '';
    private expiry: number = 0;

    constructor(private username: string, private password: string) {
        this.axiosInstance = axios.create({
            baseURL: 'https://app-api.cowboy.bike',
            timeout: 30000,
            headers: {
                'X-Cowboy-App-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
            },
            signal: this.abortController.signal
        });

        this.axiosInstance.interceptors.request.use(async (request) => {
            if (request.url === '/auth/sign_in') {
                return request;
            }
            if (this.expiry !== 0) {
                if (this.expiry < Date.now()) {
                    if (!await this.login()) {
                        throw 'Failed to login';
                    }
                }
            }
            if (this.client === '' && this.accessToken === '' && this.uid === '') {
                if (!await this.login()) {
                    throw 'Failed to login';
                }
            }
            delete request.headers['Client'];
            delete request.headers['Access-Token'];
            delete request.headers['Uid'];
            request.headers['Client'] = this.client;
            request.headers['Access-Token'] = this.accessToken;
            request.headers['Uid'] = this.uid;
            return request;
        });

        this.axiosInstance.interceptors.response.use(async (response) => {
            if (response.config.url === '/auth/sign_in' || response.status === 200) {
                return response;
            }
            if (!await this.login()) {
                throw 'Failed to login';
            }
            delete response.config.headers['Client'];
            delete response.config.headers['Access-Token'];
            delete response.config.headers['Uid'];
            response.config.headers['Client'] = this.client;
            response.config.headers['Access-Token'] = this.accessToken;
            response.config.headers['Uid'] = this.uid;
            return this.axiosInstance(response.config);
        });
    }

    private async login(): Promise<boolean> {
        const result = await this.axiosInstance({
            method: 'POST',
            url: '/auth/sign_in',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {"email": this.username, "password": this.password}
        });
        if (result.status === 200) {
            const responseHeaders = <AxiosHeaders> result.headers;
            this.client = responseHeaders.get('client')!.toString();
            this.uid = responseHeaders.get('uid')!.toString();
            this.expiry = parseInt(responseHeaders.get('access-token')!.toString());
            this.accessToken = responseHeaders.get('access-token')!.toString();
            return true;
        }
        return false;
    }

    public async getMe(): Promise<Me> {
        const result = await this.axiosInstance({
            method: 'GET',
            url: '/users/me'
        });
        return <Me>result.data;
    }

    public async getBike(bikeId: number): Promise<Bike> {
        const result = await this.axiosInstance({
            method: 'GET',
            url: `/bikes/${bikeId}`
        });
        return <Bike>result.data;
    }
}
