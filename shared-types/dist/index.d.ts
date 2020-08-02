export interface BasicCustomer {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    active: number;
    account_manager_id: number;
    reason_for_joining: string | null;
    created_date: string;
}
export interface BasicAccount {
    id: number;
    customer_id: number;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    solar_farm_id: number | null;
    capacity_share: number | null;
    created_date: string;
}
export interface FullCustomer extends BasicCustomer {
    accounts: Array<BasicAccount>;
}
