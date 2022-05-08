import locales from "~/locales/en";

export default ({}, inject) => {
  const t = (value) => {
    if (!value && typeof value != "string") return value;
    return locales.find((el) => el.id == value)?.["en"] || value;
  };
  inject("t", t);
};
