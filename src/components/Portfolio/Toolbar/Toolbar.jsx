import './Toolbar.css';

export const Toolbar = ({ filters, selected, onSelectFilter }) => {

  return (
    <div className="toolbar">
      {
        filters.map((filter) => (
          <button
            className={filter === selected ? "toolbar_btn active" : "toolbar_btn"}
            onClick={() => onSelectFilter(filter)}
            key={filter}
          >
            {filter}
          </button>
        ))
      }
    </div>
  )
}