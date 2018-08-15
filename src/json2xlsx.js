import JSZip from 'jszip';
import FileSaver from 'file-saver';

import validator from './validator';
import generatorRows from './formatters/rows/generatorRows';

import workbookXML from './workbook';
import workbookXMLRels from './relationships';

import rels from './statics/rels';
import contentTypes from './contentTypes';
import templateSheet from './templates/worksheet.xml'

export const generateXMLWorksheet = (rows) => {
	const XMLRows = generatorRows(rows);
	return templateSheet.replace('{placeholder}', XMLRows);
};

export default (config) => {
	const valid = validator(config)
	if (valid !== true) {
		throw valid;
	}

	const zip = new JSZip();
	const xl = zip.folder('xl');

	xl.file('workbook.xml', workbookXML(config.sheets));

	xl.file('_rels/workbook.xml.rels', workbookXMLRels(config.sheets.length));
	zip.file('_rels/.rels', rels);
	zip.file('[Content_Types].xml', contentTypes(config.sheets.length));


	config.sheets.map((sheet, i) => {
		let worksheet = generateXMLWorksheet(sheet.data);
		xl.file('worksheets/sheet' + (i + 1) + '.xml', worksheet);
	})
	/*
			let worksheet = generateXMLWorksheet(config.data); 
			xl.file('worksheets/sheet1.xml', worksheet);

	*/

	zip.generateAsync({
			type: 'blob'
		})
		.then((blob) => {
			FileSaver.saveAs(blob, `${config.filename}.xlsx`);
		});
};