import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../../state/state'
import { useTable } from 'react-table'

const CalendarGrid = () =>  {
  const weekDays = useSelector(state => state.state.weekDays);
  const dispatch = useDispatch();
  const data = React.useMemo(
   () => [
     {
       col1: 'Hello',
       col2: 'World',
     },
     {
       col1: 'react-table',
       col2: 'rocks',
     },
     {
       col1: 'whatever',
       col2: 'you want',
     },
   ],
   []
 );
const columns = React.useMemo(
   () => [
     {
       Header: 'Column 1',
       accessor: 'col1', // accessor is the "key" in the data
     },
     {
       Header: 'Column 2',
       accessor: 'col2',
     },
   ],
   []
 );
  const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
   } = useTable({ columns, data });
const timeList = [1,2,3,4,5,6,7,8,9,10,11];
  return (
    
    <div className="calendarGrid">
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 style={{
                   background: 'aliceblue',
                   color: 'black',
                   fontWeight: 'bold',
                 }}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <>
             
             <tr {...row.getRowProps()}>
                {timeList[row]} 
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                       padding: '10px',
                       border: 'solid 1px gray',
                       background: 'papayawhip',
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
             </>
           )
         })}
       </tbody>
     </table>
    </div>
  );
}

export default CalendarGrid;