const schedule = [
  {
    day: "01",
    available: "15:00",
  },
  {
    day: "02",
    available: "14:00",
  },
  {
    day: "03",
    available: "17:00",
  },
  {
    day: "22",
    available: ["16:00", "17:00"],
  },
];

const fetchAPI = () => {
  let date = new Date();
  let result = [];
  let filteredDays = [];
  let today = date.getDay() + 1;

  filteredDays = schedule.filter((item) => parseInt(item.day) === today);
  for (var i = 0; i < filteredDays.length; i++) {
    result = [].concat(filteredDays[i].available);
  }

  console.log("available times for today are : ", result);
  return result;
};

const checkDate = (date) => {
  let result = [];
  let filteredDays = [];
  let split = date.split("-");
  filteredDays = schedule.filter((item) => item.day === split[2]);
  for (var i = 0; i < filteredDays.length; i++) {
    result = [].concat(filteredDays[i].available);
  }
  //   console.log("filtered times are : ", result);
  return result;
};

export { fetchAPI, checkDate };
