import {Position} from "./Position";
import {InsuranceConditions} from "./InsuranceConditions";
import {AvailableFeatures} from "./AvailableFeatures";
import {Autonomy} from "./Autonomy";
import {Model} from "./Model";
import {Sku} from "./Sku";
import {Settings} from "http2";

export interface Bike {
    id:                                 number;
    mac_address:                        string;
    stolen:                             boolean;
    firmware_version:                   string;
    activated_at:                       Date;
    passkey:                            string;
    nickname:                           string;
    crashed:                            boolean;
    seen_at:                            Date;
    sku_code:                           string;
    last_crash_started_at:              Date;
    autonomy:                           number;
    battery_state_of_charge_updated_at: Date;
    battery_state_of_charge:            number;
    pcb_battery_state_of_charge:        number;
    serial_number:                      string;
    total_distance:                     number;
    total_duration:                     number;
    total_co2_saved:                    number;
    position:                           Position;
    trip_sharing:                       boolean;
    insurance_conditions:               InsuranceConditions;
    available_features:                 AvailableFeatures;
    duration_modifier:                  number;
    last_ride_mode:                     string;
    autonomies:                         Autonomy[];
    model:                              Model;
    sku:                                Sku;
    settings:                           Settings;
}
