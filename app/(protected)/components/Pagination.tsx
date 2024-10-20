const Pagination = () => {
  return (
    <div className="flex items-center justify-between p-4 text-content">
      <button
        disabled
        className="py-2 px-4 rounded-md bg-content-dark text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>
      <div className="flex items-center gap-2 text-sm">
        <button className="px-2 rounded-sm bg-stats-pastel_blue">1</button>
        <button className="px-2 rounded-sm">2</button>
        <button className="px-2 rounded-sm">3</button>
        ...
        <button className="px-2 rounded-sm">10</button>
      </div>
      <button className="py-2 px-4 rounded-md bg-content-dark text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
        Next
      </button>
    </div>
  );
};

export default Pagination;
