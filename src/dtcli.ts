
// trivial CLI useful for testing

// usage:
// npm run-script compile
// node lib/dtcli.js myTemplate.docx myContext.json myOutfile.docx

import createReport from './index.js';
const fs = require('fs');

const template = fs.readFileSync(process.argv[2]);
const context = fs.readFileSync(process.argv[3], 'utf-8');

const buffer = createReport({
  template,
  data: JSON.parse(context),
}).then(function(data:any) {
  console.log('done')
  fs.writeFileSync(process.argv[4], data)
}).catch(function(error:any) {
  console.log(error)
})
