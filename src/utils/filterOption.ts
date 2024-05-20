import { FileData } from "../store/types";

export const filterOption = [
  {
    value: "",
    label: "select condition",
  },
  {
    value: "1",
    label: "text is exactly",
  },
  {
    value: "2",
    label: "text is not exactly",
  },
  {
    value: "3",
    label: "text includes",
  },
  {
    value: "4",
    label: "text does not includes",
  },
];

export const filterFunction = (
  fileData: FileData,
  selectedColumn: string,
  condition: string,
  value: string
) => {
  let result = fileData;
  switch (condition) {
    case "1":
      result = fileData.filter(
        (column) => String(column[selectedColumn]) === value
      );
      break;

    case "2":
      result = fileData.filter(
        (column) => String(column[selectedColumn]) !== value
      );
      break;

    case "3":
      result = fileData.filter((column) =>
        String(column[selectedColumn]).includes(value)
      );
      console.log({result});
      break;

    case "4":
      result = fileData.filter(
        (column) => !String(column[selectedColumn]).includes(value)
      );
      break;
  }
  return result;
};
