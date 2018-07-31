const Utils = () => {
  const timeSince = (date) => {
    const currentDate = new Date(date);
    const seconds = Math.floor((new Date() - currentDate) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hrs";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " mins";
    }
    return Math.floor(seconds) + " seconds";
  }

  return Object.freeze({
    timeSince
  });
}