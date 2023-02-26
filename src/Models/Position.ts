export interface Position {
    latitude:    number;
    longitude:   number;
    accuracy:    number;
    created_at:  Date;
    received_at: Date;
    address:     string;
    source:      string;
    elevation:   null;
    id:          number;
    type:        string;
}
