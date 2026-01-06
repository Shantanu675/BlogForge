import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    // SIGN UP (NO AUTO LOGIN)
    async createAccount({ email, password, name }) {
        try {
            return await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
        } catch (error) {
            throw error;
        }
    }

    // LOGIN
    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(
                email,
                password
            );
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            return null;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Logout error", error);
        }
    }
}

const authService = new AuthService();
export default authService;
