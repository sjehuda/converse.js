/**
 * @class
 * @namespace _converse.RosterView
 * @memberOf _converse
 */
export default class RosterView {
    initialize(): Promise<void>;
    model: any;
    render(): import("lit-html").TemplateResult<1>;
    showAddContactModal(ev: any): void;
    syncContacts(ev: any): Promise<void>;
    syncing_contacts: boolean;
    toggleRoster(ev: any): void;
}
