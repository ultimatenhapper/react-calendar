import { useCalendarStore } from "../../hooks";

export function FabDelete() {
  const { startDeletingEvent, hasEventSelected } = useCalendarStore();

  const handleDelete = () => {
    startDeletingEvent();
  };

  return (
    <button className="btn btn-danger fab-danger" style={{ display: hasEventSelected ? '' : 'none'}} onClick={handleDelete}>
      <i className="fa fa-trash-alt" ></i>
    </button>
  );
}
