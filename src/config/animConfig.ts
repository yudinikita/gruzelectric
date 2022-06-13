export const animConfig = {
  block: {
    initial: {
      y: 100,
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
    transition: { duration: 0.7 },
    viewport: {
      once: true,
    },
  },
  title: {
    initial: {
      scale: 0.3,
      opacity: 0,
    },
    whileInView: {
      scale: 1,
      opacity: 1,
    },
    transition: { duration: 0.7 },
    viewport: {
      once: true,
    },
  },
}
