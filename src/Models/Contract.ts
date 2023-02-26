import {ContractBike} from "./ContractBike";

export interface Contract {
    qover_contract_id: string;
    qover_reference:   string;
    excess_amount:     number;
    qover_claims_url:  string;
    bike:              ContractBike;
}
