exports.goodDate = function() {
  let d = new Date();
  let hour = d.getHours();
  let h;
  switch (hour) {
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      h = "Good Morning";
      break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
      h = "Good Afternoon";
      break;
    case 18:
    case 19:
    case 20:
    case 21:
      h = "Good Evening";
      break;
    case 22:
    case 23:
    case 00:
    case 1:
    case 2:
    case 3:
    case 4:
      h = "Good Night";
      return h;
  }
};
