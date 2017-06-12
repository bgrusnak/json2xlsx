import generatorCellNumber from '../../commons/generatorCellNumber';
import entities from '../../entities';

export default (index, value, rowIndex) => (`<c r="${generatorCellNumber(index, rowIndex)}" t="inlineStr"><is><t>${entities(value)}</t></is></c>`);
