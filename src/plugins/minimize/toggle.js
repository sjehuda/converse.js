import { Model } from '@converse/skeletor';

class MinimizedChatsToggle extends Model {
    defaults () {
        return {
            'collapsed': false
        }
    }
}

export default MinimizedChatsToggle;
