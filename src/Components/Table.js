import React from 'react'

function Table({headings , width , rows}) {
  return (
    <>
     <table className={`text-sm text-left bg-gray-100 dark:bg-[#0a0908] text-gray-700 dark:text-white ${width} overflow-auto`}>
        <thead className="text-xs  uppercase">
          <tr>
            {headings.map((index) => (
              <th className="px-6 py-3" scope='col' key={index.id}>
                {index.title}
              </th>
            ))}
          </tr>
        </thead>
        {rows}
      </table>
    </>
  )
}

export default Table