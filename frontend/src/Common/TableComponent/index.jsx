import React from 'react';
import { Button, Table } from 'reactstrap';

function TableComponent({ tableColumns, tableData, onClickButton }) {
  return (
    <Table striped>
      <thead>
        <tr>
          {tableColumns.map((columnName) => {
            return <th key={columnName}>{columnName}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => {
          return (
            <tr key={index}>
              {row.map((data, index) => {
                return data.type === 'button' ? (
                  <td key={index}>
                    <Button
                      onClick={() => {
                        onClickButton(data.primaryId);
                      }}
                    >
                      {data.value}
                    </Button>
                  </td>
                ) : (
                  <td key={index}>{data.value}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default TableComponent;
