export default ({}, inject) => {
  inject("caps", (value) => {
    if (value && typeof value == "string") {
      return value.charAt(0).toUpperCase() + value.slice(1);
    } else return value;
  });
};
