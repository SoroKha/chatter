export function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);
    var options = { year: 'numeric', month: 'short', day: 'numeric' };

    interval = seconds / 2592000;
    if (interval > 1) {
      return new Date(date).toLocaleDateString("en-US", options);
    }
  
    var interval = seconds / 86400;

    if (interval > 1) {
      return Math.floor(interval) + "d";
    }
    interval = seconds / 3600;

    if (interval > 1) {
      return Math.floor(interval) + "h";
    }
    interval = seconds / 60;

    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}