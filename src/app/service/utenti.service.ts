import { User } from "../models/user";

export async function getUsers(): Promise<User[]> {
    return await (await fetch('http://localhost:3000/utenti')).json();
}
