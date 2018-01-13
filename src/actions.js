export const NAVTOGGLE = 'navtoggle'
export const RESIZE = 'resize'

export const toggleNav = () => {
  return {
    type: NAVTOGGLE
  }
}

export const resize = () => {
  return {
    type: RESIZE
  }
}