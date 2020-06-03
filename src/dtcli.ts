
// trivial CLI useful for testing

// usage: dtcli myTemplate.docx myContext.json myOutfile.docx

import createReport from 'docx-templates';
import fs from 'fs';

const template = fs.readFileSync('myTemplate.docx');

const buffer = await createReport({
  template,
  data: {
    name: 'John',
    surname: 'Appleseed',
  },
});

fs.writeFileSync('report.docx', buffer)
