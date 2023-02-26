import {Included} from "./Included";

export interface AppTexts {
    title:         string;
    image_url:     string;
    description:   string;
    included:      Included[];
    purchase_text: string;
    asterisk_note: string;
}
