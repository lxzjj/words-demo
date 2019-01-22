import wepy from 'wepy'

export const info = wepy.getSystemInfoSync()
export const isIphoneX = info.model.indexOf('iPhone X') !== -1
export const isIphone = info.model.indexOf('iPhone') !== -1

export const SCREEN_HEIGHT = info.screenHeight
export const SCREEN_WIDTH = info.screenWidth
export const WINDOW_HEIGHT = info.windowHeight
export const NAVIGATION_HEIGHT = isIphoneX ? 88 : (isIphone ? 64 : 68)
export const STATUS_BAR_HEIGHT = info.statusBarHeight
export const TITLE_BAR_HEIGHT = NAVIGATION_HEIGHT - STATUS_BAR_HEIGHT

export const PXIEL_PER_VW = SCREEN_WIDTH / 100
export const PXIEL_PER_VH = SCREEN_HEIGHT / 100
