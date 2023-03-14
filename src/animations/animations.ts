// Animation to scale up an element
export const scaleUp = {
  initial: {
    opacity: 0,
    scale: 0.5, // initial scale of 0.5
  },
  animate: {
    opacity: 1,
    scale: 1, // animate to scale of 1
    transition: {
      duration: 0.1, // duration of transition in seconds
      ease: "easeInOut", // easing function
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5, // scale back down to 0.5 when exiting
    transition: {
      duration: 0.2, // duration of exit transition in seconds
      ease: "easeInOut", // easing function
    },
  },
};

// Animation to fade in an element from the left
export const authLeft = {
  initial: {
    opacity: 0,
    backGroundColor: "transparent", // initial background color
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.1, // duration of transition in seconds
      ease: "easeInOut", // easing function
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2, // duration of exit transition in seconds
      ease: "ease", // easing function
    },
  },
};

// Animation  to slide up from the bottom
export const slideUp = {
  initial: {
    opacity: 0,
    y: -200, // initial y position off-screen
  },
  animate: {
    opacity: 1,
    y: 0, // animate to y position of 0 (on-screen)
    transition: {
      type: "spring", // use a spring animation
      damping: 20, // controls bounciness of spring
    },
  },
  exit: {
    opacity: 0,
    y: -200, // slide back down off-screen when exiting
    transition: {
      duration: 0.5, // duration of exit transition in seconds
      ease: "easeInOut", // easing function
    },
  },
};
