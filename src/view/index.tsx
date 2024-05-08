import React from 'react';
import spanSize from './utils/spanSize';

const TableView = ({ list, tableData }: { list: string[], tableData: Array<string[]>, }) => {
  const cols = [];
  return (
    <>
      <table>
        <thead>
          {list?.length !== 0 && (
            <tr>
              {list?.map(function (r, i) {
                return (
                  <th
                    key={`rowAttr${i}`}
                  >
                    {r.toUpperCase()}
                  </th>
                );
              })}
            </tr>
          )}
        </thead>
        <tbody>
          {tableData?.length !== 0 &&
            tableData?.map(function (rowKey, i) {
              return (
                <tr key={`rowKeyRow${i}`}>
                  {rowKey?.map(function (txt, index) {
                    const x = spanSize(tableData, i, index);
                    if (x === -1) {
                      return null;
                    }
                    return (
                      <td
                        key={`rowKeyLabel${i}-${index}`}
                        rowSpan={x}
                        colSpan={index === list?.length - 1 && cols?.length !== 0 ? 2 : 1}
                      >
                        {txt}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
      </>
  );
}

export default TableView;
