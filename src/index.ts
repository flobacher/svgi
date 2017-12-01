import { SVGIOptions } from './SVGIOptions';

export class SVGInjector {
  // - private constants -----------------------------------------
  // private static readonly SVG_NS = 'http://www.w3.org/2000/svg';
  // private static readonly XLINK_NS = 'http://www.w3.org/1999/xlink';
  // private static readonly DEFAULT_SPRITE_CLASS_NAME = 'sprite';
  // private static readonly DEFAULT_SPRITE_CLASS_ID_NAME = SVGI.DEFAULT_SPRITE_CLASS_NAME + '--';
  // private static readonly DEFAULT_FALLBACK_CLASS_NAMES = [SVGI.DEFAULT_SPRITE_CLASS_NAME];
  // private static readonly DEFAULT_REMOVESTYLES_CLASS_NAME = 'icon';

  constructor(options: SVGIOptions) {
    this.init(options);
  }

  // - public member functions --------------------------------------
  public init(options: SVGIOptions) {
    console.log('init', options);
  }
}
