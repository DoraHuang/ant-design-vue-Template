import _ from 'lodash';
import { export_json_to_excel } from '/@/excel/Export2Excel.js'; //注意这个Export2Excel路径
/*  ExportToExcel.js
 *
 * columnsArr：表格的欄位(配合a-table)
 * datas：表格要呈現的資料
 * fileName：產生檔案的檔名
 *  
 */
export function ExportToExcel(columnsArr,datas,fileName) {
  const tHeader = _.map(columnsArr, 'title'); // 上面设置Excel的表格第一行的标题
  const filterVal = _.map(columnsArr, 'dataIndex'); // 上面的index、nickName、name是tableData里对象的属性key值
  const list = datas; //把要导出的数据tableData存到list
  const data = formatJson(filterVal, list);
  export_json_to_excel(tHeader, data, fileName); //最后一个是表名字
}
function formatJson(filterVal, jsonData) {
  return jsonData.map((v) => filterVal.map((j) => v[j]));
}

//export default { exportExcel };
