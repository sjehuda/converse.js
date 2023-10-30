import MUCMessage from './message';
import { Collection } from '@converse/skeletor';

/**
 * Collection which stores MUC messages
 * @namespace MUCMessages
 * @memberOf _converse
 */
class MUCMessages extends Collection {

    get comparator () {
        return 'time';
    }

    /**
     * @param {MUCMessage[]} [models]
     * @param {Object} [options]
     */
    constructor (models, options) {
        super(models, options);
        this.model = MUCMessage;
    }
}

export default MUCMessages;
