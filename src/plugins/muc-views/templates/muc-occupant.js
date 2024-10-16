import { html } from 'lit';
import { __ } from 'i18n';

/**
 * @param {import('../occupant').default} el
 */
export default (el) => {
    return html`<span class="sidebar-heading">
            <button
                type="button"
                class="btn btn--transparent back-button"
                @click=${() => el.muc.save({ 'sidebar_view': 'occupants' })}
            >
                <converse-icon size="1em" class="fa fa-arrow-left"></converse-icon>
            </button>
            Participant</span
        >
        <div>Detailed view for an occupant;</div>`;
};
