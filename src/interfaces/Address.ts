import { Geo } from "./Geo";

export interface Address{
    city: string;
    geo: Geo;
    street: string;
    suite: string;
    zipcode: string;
}