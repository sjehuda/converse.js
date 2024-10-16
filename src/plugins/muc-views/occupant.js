import { _converse, api } from "@converse/headless";
import { CustomElement } from 'shared/components/element.js';
import tplMUCOccupant from "./templates/muc-occupant.js";

import './styles/muc-occupant.scss';


export default class MUCOccupant extends CustomElement {

    constructor () {
        super();
        this.jid = null;
    }

    static get properties () {
        return {
            jid: { type: String }
        }
    }

    initialize() {
        const { chatboxes } = _converse.state;
        this.muc = chatboxes.get(this.jid);
        this.muc.initialized.then(() => this.requestUpdate());
    }

    render () {
        return tplMUCOccupant(this);
    }
}

api.elements.define('converse-muc-occupant', MUCOccupant);
