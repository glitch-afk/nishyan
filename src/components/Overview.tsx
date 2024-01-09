const Overview = () => {
  return (
    <div className="mb-8 w-full">
      <div className="mb-6 flex w-full justify-between">
        <h2 className="text-[20px] font-medium">Overview</h2>

        <select
          name="sort"
          id="sort"
          className="h-[36px] min-w-[137px] rounded-[4px] border border-[#D9D9D9]  bg-white px-[14px] py-[6px] text-left text-base text-night-muted"
        >
          <option value="last_month" className="text-base text-night-muted">
            Last Month
          </option>
        </select>
      </div>

      {/* overview cards */}
      <div className="flex flex-col md:flex-row w-full items-center space-y-5 md:space-y-0 md:space-x-5">
        {/* online orders */}
        <div className="flex w-full flex-col space-y-4 rounded-lg bg-white p-5 shadow-card">
          <h3 className="text-night-muted">Online orders</h3>
          <span className="text-[32px] font-medium leading-9">231</span>
        </div>
        {/* amount received */}
        <div className="flex w-full flex-col space-y-4 rounded-lg bg-white p-5 shadow-card">
          <h3 className="text-night-muted">Amount received</h3>
          <span className="text-[32px] font-medium leading-9">
            &#8377; 23,92,312.19
          </span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
