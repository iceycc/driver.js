export const OVERLAY_OPACITY = 0.75;
export const OVERLAY_PADDING = 10;

export const SHOULD_ANIMATE_OVERLAY = true;
export const SHOULD_OUTSIDE_CLICK_CLOSE = true;
export const ALLOW_KEYBOARD_CONTROL = true;
export const SHOULD_OUTSIDE_CLICK_NEXT = false;

export const ESC_KEY_CODE = 27;
export const LEFT_KEY_CODE = 37;
export const RIGHT_KEY_CODE = 39;

export const ID_OVERLAY = 'driver-page-overlay';
export const ID_STAGE = 'driver-highlighted-element-stage';
export const ID_POPOVER = 'driver-popover-item';

export const CLASS_DRIVER_HIGHLIGHTED_ELEMENT = 'driver-highlighted-element';
export const CLASS_POSITION_RELATIVE = 'driver-position-relative';
export const CLASS_FIX_STACKING_CONTEXT = 'driver-fix-stacking';

export const CLASS_STAGE_NO_ANIMATION = 'driver-stage-no-animation';
export const CLASS_POPOVER_TIP = 'driver-popover-tip';
export const CLASS_POPOVER_TITLE = 'driver-popover-title';
export const CLASS_POPOVER_DESCRIPTION = 'driver-popover-description';
export const CLASS_POPOVER_FOOTER = 'driver-popover-footer';
export const CLASS_CLOSE_BTN = 'driver-close-btn';
export const CLASS_CLOSE_ICON = 'driver-close-icon';
export const CLASS_STEP = 'driver-step';
export const CLASS_CURRENT = 'driver-current';
export const CLASS_ALL = 'driver-all';

export const CLASS_NEXT_STEP_BTN = 'driver-next-btn';
export const CLASS_PREV_STEP_BTN = 'driver-prev-btn';
export const CLASS_BTN_DISABLED = 'driver-disabled';
export const CLASS_BTN_NONE = 'driver-display-none'; // 隐藏
export const CLASS_CLOSE_ONLY_BTN = 'driver-close-only-btn';
export const CLASS_NAVIGATION_BTNS = 'driver-navigation-btns';

// NOTE: It must match the one set in the animations in CSS file
export const ANIMATION_DURATION_MS = 300;
const closeSVG = `
   <svg t="1663400613867" class="icon ${CLASS_CLOSE_ICON}" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2369" width="200" height="200"><path d="M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z" fill="#fff" p-id="2370"></path></svg>
`;

// language=HTML
export const POPOVER_HTML = (className = '') => `
  <div id="${ID_POPOVER}" class="${className}">
    <div class="${CLASS_POPOVER_TIP}"></div>
    <div class="${CLASS_POPOVER_TITLE}">Popover Title</div>
    <div class="${CLASS_POPOVER_DESCRIPTION}">Popover Description</div>
    ${closeSVG}
    <div class="driver-clearfix ${CLASS_POPOVER_FOOTER}">
      <!--  这个按钮隐藏了    -->
      <button class="${CLASS_CLOSE_BTN}">Close</button>
      <span class="${CLASS_STEP}"><span class="${CLASS_CURRENT}">1</span>/<span class="${CLASS_ALL}">4</span></span>
      <span class="driver-btn-group ${CLASS_NAVIGATION_BTNS}">
        <button class="${CLASS_PREV_STEP_BTN}">Previous</button>
        <button class="${CLASS_NEXT_STEP_BTN}">Next</button>
      </span>
    </div>
  </div>`;

export const OVERLAY_HTML = `<div id="${ID_OVERLAY}"></div>`;
export const STAGE_HTML = `<div id="${ID_STAGE}"></div>`;
