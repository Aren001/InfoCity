import React from 'react';


const Pagination = (props) => {
    const {page , perPage , totalPosts , paginate}=props;
    return (
        // <!-- Pagination -->

        <div className="Pagination">
            <button
                className="Pagination-button"
                onClick={() => paginate("prev")}
                disabled={page===1}
                >
                &larr;
            </button>
            <span className="Pagination-info">
                    <b>{page}</b> ----- <b>{Math.ceil(totalPosts / perPage)}</b>
            </span>
            <button
               className="Pagination-button"
               onClick={() => paginate("next")}
               disabled={page===Math.ceil(totalPosts / perPage)}
            >
                &rarr;
            </button>
        </div>
    
    )
}
export default Pagination;