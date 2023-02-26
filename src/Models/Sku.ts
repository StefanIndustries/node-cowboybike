import {Features} from "./Features";

export interface Sku {
    code:      string;
    features:  Features;
    market:    string;
    color:     string;
    color_hex: string;
}
