import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesFromPage } from '../Redux/actions/MoviesActions';

// eslint-disable-next-line react/prop-types
export default function Pagination() {
  const [page,setPage] = useState(0)


  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pageCount);
  useEffect(()=>{
    setPage(pages)
  },[pages])

  const handlePageClick = (data)=>{
    dispatch(getMoviesFromPage(data.selected + 1))
  }

  return (
    <div className='pagination flex justify-center'>
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
