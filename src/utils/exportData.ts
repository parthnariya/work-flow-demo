import { FileData } from "../store/types";

export function jsonToCsv(items: FileData) {
  const header = Object.keys(items[0]);
  const headerString = header.join(",");
  const replacer = (key: string, value: string) => value ?? "";
  const rowItems = items.map((row) =>
    header
      .map((fieldName) => JSON.stringify(row[fieldName], replacer))
      .join(",")
  );

  const csv = [headerString, ...rowItems].join("\r\n");
  return csv;
}
