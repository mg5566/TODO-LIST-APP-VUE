// calc now date
const calcDate = () => {
  let today = new Date();

  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  const result = year + "." + month + "." + date + " " + hours + ":" + minutes +":" + seconds;

  return result;
};

export default calcDate;
