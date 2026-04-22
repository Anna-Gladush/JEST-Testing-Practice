const capitalize = (str) => {
  str = str[0].toUpperCase() + str.substr(1);
  return str;
}

export default capitalize;