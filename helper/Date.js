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

export function timeFormat(date, type) {
  date = new Date(date);
  
  if (type === 'mainTweetInfo') {
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    const formattedDate = date.toLocaleDateString('en-AU');
    const formattedTime = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

    return {formattedDate, formattedTime};
  }
}