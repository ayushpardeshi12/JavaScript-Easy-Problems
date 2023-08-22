// Check The Date and Tell Whether It Is Time For Cookies Or Milk

function CookiesOrMilk(date) {
  let day = date.getDate();
  let month = date.getMonth();
  if (day === 24 && month === 11) {
    return "Cookies";
  } else {
    return "Milk";
  }
}

console.log(CookiesOrMilk(new Date(2013, 11, 24)));
