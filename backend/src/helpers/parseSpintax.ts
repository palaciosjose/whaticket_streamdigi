import crypto from "crypto";

const parseSpintax = (text: string): string => {
  const regex = /\{([^{}]+)\}/g;
  return text.replace(regex, (_match, group) => {
    const options = group.split("|").map(option => parseSpintax(option));
    const randomIndex = crypto.randomInt(0, options.length);
    return options[randomIndex];
  });
};

export default parseSpintax;
