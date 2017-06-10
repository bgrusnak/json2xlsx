export default (sheetCount) => {
  let lines = `<?xml version="1.0" ?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">`
  for (let i = 1; i <= sheetCount; i++) {
    lines += `
<Relationship Id="SheetId`+i+`" Target="worksheets/sheet`+i+`.xml" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"/>`
  }
  lines += `
</Relationships>`
  return lines
}