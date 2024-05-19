export function csvToJson(csvString: string, delimiter = ",") {
  const rows = csvString.split("\n");
  const headers = rows[0].split(delimiter);
  const tableData: Record<string, string>[] = [];

  for (let i = 1; i < rows.length; i++) {
    const values = rows[i].split(delimiter);
    const obj: Record<string, string> = {};
    if (headers) {
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = values[j] || "";
      }
    }
    tableData.push(obj);
  }

  return tableData;
}
