import ReactPaginate from 'react-paginate';

// eslint-disable-next-line react/prop-types
export default function Pagination({page,getMoviesFromPage}) {
    const handlePageClick = (data)=>{
        console.log("handeled");
        getMoviesFromPage(data.selected + 1)
    }

  return (
    <div className='flex justify-center'>
    <ReactPaginate
        breakLabel="....."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={page}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={'flex border-2'}
        pageClassName={'bg-white rounded py-2 px-3 font-semibold'}
        activeClassName={"active"}
        previousClassName={"py-2 px-3 font-semibold"}
        nextClassName={"py-2 px-3 font-semibold"}
      />
    </div>
  )
}
