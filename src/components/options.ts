import get from 'get-value';
import Config from './config';
import Tracking from './tracking';

export class Options {
    public debug: boolean;
    public pageview: boolean;
    public tracking: Tracking;
    public config: Config;

    constructor(options: Partial<Options>) {
        this.debug = get(options, 'debug', {
            default: false,
        });
        this.pageview = get(options, 'pageview', {
            default: true,
        });
        this.tracking = Object.assign({ enabled: true, default: true }, get(options, 'tracking', {
            default: {},
        }));
        this.config = get(options, 'config', {
            default: {},
        });
    }
}

export default Options;
