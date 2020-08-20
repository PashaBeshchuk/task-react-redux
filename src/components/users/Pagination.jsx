import React from 'react';
import './style.css';

const Pagination = ({listPages, anotherPage}) => {
    return <div className="container col-lg-2">
        <ul>
            {listPages.map(page => {
                return (
                    <li
                    key={page}
                    id={page}
                    onClick={anotherPage}
                    >
                    {page}
                    </li>
                )
            })}
        </ul>
    </div>
}

export default Pagination;
