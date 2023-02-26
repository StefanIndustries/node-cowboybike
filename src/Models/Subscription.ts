import {NextRenewal} from "./NextRenewal";
import {Plan} from "./Plan";
import {Contract} from "./Contract";

export interface Subscription {
    id:                      number;
    purchased_at:            Date;
    activated_at:            Date;
    cowboy_product_page_url: string;
    next_renewal:            NextRenewal;
    plan:                    Plan;
    contract:                Contract;
    status:                  string;
    translated_status:       string;
    expires_at:              Date;
    next_renewal_at:         Date;
}
