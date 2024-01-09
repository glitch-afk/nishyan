import { tableData } from '#utils/data'
import { cn } from '#utils/misc'
import { Icon } from './ui/icons'

const PaymentsTable = () => {
  return (
    <div>
      <h2 className="text-[20px] font-medium">Transactions | This Month</h2>
      {/* table section */}
      <section className="mt-5 w-full rounded-lg bg-white p-3 shadow-card">
        {/* table controls */}
        <TableControls />
        {/* table */}
        <Table />
        <Pagination />
      </section>
    </div>
  )
}

export default PaymentsTable

export const TableControls = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
      <div className="flex w-full items-center space-x-1 rounded-[4px] border border-border pl-4 sm:max-w-[248px]">
        <Icon name="search" className="h-[14px] w-[14px] text-[#999]" />
        <input
          type="search"
          placeholder="Search by order ID..."
          className="w-full border-none bg-transparent text-[14px] leading-5 text-night placeholder:text-[#999] focus-visible:ring-0"
        />
      </div>
      <div className="flex w-full items-center space-x-3 sm:w-fit">
        {/* sort */}
        <div className="flex items-center space-x-[6px] rounded-[4px] border border-border px-3 py-[6px]">
          <span className="text-night-muted">Sort</span>
          <Icon name="sort" className="text-night-muted" size="sm" />
        </div>
        {/* download */}
        <div className="flex w-full items-center justify-center space-x-[6px] rounded-[4px] border border-border p-2">
          <Icon name="download" size="md" className="text-night-muted" />
          <span className="text-sm text-night-muted sm:hidden">
            Download Report
          </span>
        </div>
      </div>
    </div>
  )
}

const Table = () => {
  return (
    <div className="mt-3 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full">
            <thead>
              <tr className="rounded-[4px] bg-lightGray">
                <th
                  scope="col"
                  className="whitespace-nowrap px-3 py-[10px] pl-3 text-left text-sm font-medium text-night-muted"
                >
                  Order ID
                </th>
                <th
                  scope="col"
                  className="whitespace-nowrap px-3 text-center text-sm font-medium text-night-muted"
                >
                  <span>Order date</span>
                  <Icon name="chevronDownFilled" size="lg" className="-mt-1" />
                </th>
                <th
                  scope="col"
                  className="whitespace-nowrap px-3 text-center text-sm font-medium text-night-muted"
                >
                  Order amount
                </th>
                <th
                  scope="col"
                  className="whitespace-nowrap px-3 pr-3 text-right text-sm font-medium text-night-muted"
                >
                  <span className="mr-1">Transaction fees</span>
                  <Icon name="exclamation" className="-mt-1" size="font" />
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-mediumGray">
              {tableData.map((item, idx) => (
                <tr key={idx}>
                  <td className="whitespace-nowrap py-[14px] pl-3 text-left text-sm text-[#146EB4]">
                    #{item.orderId}
                  </td>
                  <td className="whitespace-nowrap text-center text-sm">
                    {item.orderDate}
                  </td>
                  <td className="whitespace-nowrap text-center text-sm">
                    &#8377; {item.orderAmount}
                  </td>
                  <td className="whitespace-nowrap pr-3 text-right text-sm">
                    &#8377; {item.transactionFees}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const Pagination = () => {
  return (
    <div className="my-6 flex w-full items-center justify-center">
      <nav
        className="isolate inline-flex text-sm font-medium"
        aria-label="Pagination"
      >
        <a
          href="#"
          className="relative inline-flex items-center rounded-[4px] p-[6px] pr-3 text-night-muted ring-1 ring-inset ring-border hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <Icon name="chevron-left" className="h-[18px] w-[18px]" />

          <span>Previous</span>
        </a>
        <div className="mx-6 flex items-center space-x-2 text-sm font-medium">
          <a
            href="#"
            aria-current="page"
            className="flex items-center justify-center rounded-[4px] px-2 py-[6px] text-sm text-night-muted"
          >
            1
          </a>
          <span className="relative inline-flex items-center">...</span>
          {[10, 11, 12, 13, 14, 15, 15, 17, 18].map((item, idx) => (
            <a
              key={idx}
              href="#"
              aria-current="page"
              className={cn(
                'items-center justify-center rounded-[4px] px-2 py-[6px] text-sm text-night-muted md:flex',
                {
                  'bg-[#146EB4] text-white': item === 10,
                  'hidden md:flex': item > 11,
                },
              )}
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#"
          className="relative inline-flex items-center rounded-[4px] p-[6px] pl-3 text-night-muted ring-1 ring-inset ring-border hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <span className="text-sm font-medium text-night-muted">Next</span>
          <Icon name="chevron-right" className="h-[18px] w-[18px]" />
        </a>
      </nav>
    </div>
  )
}
