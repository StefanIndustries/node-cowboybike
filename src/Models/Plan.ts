import {AppTexts} from "./AppTexts";

export interface Plan {
    name:                         string;
    type:                         string;
    price:                        number;
    currency:                     string;
    period:                       number;
    qover_insurance_info_url:     string;
    qover_general_conditions_url: string;
    purchase_link:                string;
    app_texts:                    AppTexts;
}
