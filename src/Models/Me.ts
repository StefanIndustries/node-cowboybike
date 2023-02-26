import {CrashDetection} from "./CrashDetection";
import {Plan} from "./Plan";
import {Subscription} from "./Subscription";
import {ReferralProgram} from "./ReferralProgram";
import {MEBike} from "./MEBike";
import {MESettings} from "./MESettings";

export interface Me {
    id:                      number;
    country_code:            string;
    email:                   string;
    phone_number:            string;
    provider:                string;
    settings:                MESettings;
    facebook_profile_url:    null;
    instagram_username:      null;
    investor_number:         null;
    role:                    string;
    uid:                     string;
    created_at:              Date;
    updated_at:              Date;
    first_name:              string;
    last_name:               string;
    nickname:                string;
    uuid:                    string;
    biography:               null;
    sync_apple_health:       boolean;
    sync_google_fit:         boolean;
    profile_link:            string;
    sync_strava:             boolean;
    total_distance:          number;
    total_duration:          number;
    total_co2_saved:         number;
    first_bike_assigned_at:  Date;
    intercom_token:          string;
    subscription:            Subscription;
    active_subscriptions:    Subscription[];
    crash_detection:         CrashDetection;
    available_plans:         Plan[];
    available_languages:     string[];
    human_efficiency_factor: number;
    social_features:         boolean;
    emergency_phone_number:  string;
    referral_program:        ReferralProgram;
    avatar_url:              null;
    avatars:                 null;
    cover_url:               null;
    instagram_profile_url:   null;
    facebook_username:       null;
    strava_authorized:       boolean;
    in_app_shop_enabled:     boolean;
    bike:                    MEBike;
}
