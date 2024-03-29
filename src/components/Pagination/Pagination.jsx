import classNames from 'classnames'
import { createSearchParams, Link } from 'react-router-dom'

/**
Với range = 2 áp dụng cho khoảng cách đầu, cuối và xung quanh current_page
[1] 2 3 ... 19 20
1 [2] 3 4 ... 19 20
1 2 [3] 4 5 ... 19 20
1 2 3 [4] 5 6 ... 19 20
1 2 3 4 [5] 6 7 ... 19 20
1 2 ... 4 5 [6] 8 9 ... 19 20
1 2 ...13 14 [15] 16 17 ... 19 20
1 2 ... 14 15 [16] 17 18 19 20
1 2 ... 15 16 [17] 18 19 20
1 2 ... 16 17 [18] 19 20
1 2 ... 17 18 [19] 20
1 2 ... 18 19 [20]
 */

const RANGE = 2
export default function Pagination({ queryConfig, pageSize, url }) {
  const page = Number(queryConfig._page)
  const renderPagination = () => {
    let dotAfter = false
    let dotBefore = false
    const renderDotBefore = (index) => {
      if (!dotBefore) {
        dotBefore = true
        return (
          <span key={index} className='bg-white rounded text-black px-3 py-2 shadow-sm mx-2 border'>
            ...
          </span>
        )
      }
      return null
    }
    const renderDotAfter = (index) => {
      if (!dotAfter) {
        dotAfter = true
        return (
          <span key={index} className='bg-white  text-black px-3 py-2 shadow-sm mx-2 border'>
            ...
          </span>
        )
      }
      return null
    }
    return Array(pageSize)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1

        // Điều kiện để return về ...
        if (page <= RANGE * 2 + 1 && pageNumber > page + RANGE && pageNumber < pageSize - RANGE + 1) {
          return renderDotAfter(index)
        } else if (page > RANGE * 2 + 1 && page < pageSize - RANGE * 2) {
          if (pageNumber < page - RANGE && pageNumber > RANGE) {
            return renderDotBefore(index)
          } else if (pageNumber > page + RANGE && pageNumber < pageSize - RANGE + 1) {
            return renderDotAfter(index)
          }
        } else if (page >= pageSize - RANGE * 2 && pageNumber > RANGE && pageNumber < page - RANGE) {
          return renderDotBefore(index)
        }

        return (
          <Link
            to={{
              pathname: url,
              search: createSearchParams({
                ...queryConfig,
                _page: pageNumber.toString()
              }).toString()
            }}
            key={index}
            className={classNames(
              'bg-white rounded text-black px-3 py-2 hover:text-orange-600 shadow-sm mx-2 cursor-pointer border',
              {
                'border-orange-600 text-orange-600': pageNumber === page,
                'border-transparent': pageNumber !== page
              }
            )}
          >
            {pageNumber}
          </Link>
        )
      })
  }
  return (
    <div className='flex flex-wrap mt-6 justify-center'>
      {page === 1 ? (
        <span className='mx-2 cursor-not-allowed rounded border text-gray-500 bg-white/60 px-3 py-2  shadow-sm'>
          Prev
        </span>
      ) : (
        <Link
          to={{
            pathname: url,
            search: createSearchParams({
              ...queryConfig,
              _page: (page - 1).toString()
            }).toString()
          }}
          className='mx-2 cursor-pointer rounded border text-black bg-white px-3 py-2  shadow-sm'
        >
          Prev
        </Link>
      )}
      {renderPagination()}
      {page === pageSize ? (
        <span className='mx-2 cursor-not-allowed rounded border text-gray-500 bg-white/60 px-3 py-2  shadow-sm'>
          Next
        </span>
      ) : (
        <Link
          to={{
            pathname: url,
            search: createSearchParams({
              ...queryConfig,
              _page: (page + 1).toString()
            }).toString()
          }}
          className='mx-2 cursor-pointer rounded border text-black bg-white px-3 py-2  shadow-sm'
        >
          Next
        </Link>
      )}
    </div>
  )
}
