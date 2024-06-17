import { Address } from "./Address";
import { Company } from "./Company";

export interface User {
    // TO DO: Define the properties of the user object
    id: number;
    address: Address;
    company: Company;
    email: string;
    name: string;
    phone: string;
    username: string;
    website: string;
}