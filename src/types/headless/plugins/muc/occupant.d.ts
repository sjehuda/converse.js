export default ChatRoomOccupant;
/**
 * Represents a participant in a MUC
 * @class
 * @namespace _converse.ChatRoomOccupant
 * @memberOf _converse
 */
declare class ChatRoomOccupant extends Model {
    constructor(attributes: any, options: any);
    vcard: any;
    defaults(): {
        hats: any[];
        show: string;
        states: any[];
    };
    save(key: any, val: any, options: any): any;
    getDisplayName(): any;
    isMember(): boolean;
    isModerator(): boolean;
    isSelf(): any;
}
import { Model } from "@converse/skeletor";
//# sourceMappingURL=occupant.d.ts.map