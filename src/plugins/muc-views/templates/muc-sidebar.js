import { html } from 'lit';

/**
 * @param {import('../sidebar').default} el
 */
export default (el) => {
    const model = el.model;
    const sidebar_view = model.get('sidebar_view');
    return html`
        <div class="dragresize-occupants-left">&nbsp;</div>
        ${sidebar_view?.startsWith('occupant:')
            ? html`<converse-muc-occupant jid="${el.jid}"></converse-muc-occupant>`
            : html`<converse-muc-occupants jid="${el.jid}"></converse-muc-occupants>`}
    `;
};
