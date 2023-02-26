import {Speeds} from "./Speeds";

export interface Features {
    battery_autonomy:         number;
    available_sku_conversion: null;
    default_ble_passkey:      string;
    battery_leds:             number;
    available_speeds:         Speeds;
    displayed_speeds:         Speeds;
    throttle_off_voltage:     number;
    has_wireless_charger:     boolean;
    modbus_devices:           number[];
}
