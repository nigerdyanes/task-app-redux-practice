export const setNamePriority = (priority) => {
  switch (priority) {
    case "1":
      return "High";
    case "2":
      return "Middle";
    case "3":
      return "Low";
    default:
      break;
  }
};

