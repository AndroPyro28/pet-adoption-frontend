export const animateModalVariant = {
    initial: {
      y: -500
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        type:"spring"
      },
    },
    exit: {
      x:"100vw",
      transition:{ 
        ease:"easeInOut"
      }
    }
  };
