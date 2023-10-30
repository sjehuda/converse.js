import Message from './message.js';
import { Collection } from '@converse/skeletor';

class Messages extends Collection {

    get comparator () {
        return 'time';
    }

    /**
     * @param {Message[]} [models]
     * @param {Object} [options]
     */
    constructor (models, options) {
        super(models, options);
        this.model = Message;
        this.fetched = null;
        this.chatbox = null;
    }
}

export default Messages;
