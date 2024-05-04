import { useState } from "react";
import { Calendar } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { localizer, getMessagesES } from "../../helpers";
import { CalendarEvent, CalendarModal, Navbar } from "../";
import { useCalendarStore, useUiStore } from "../../hooks";
import {FabAddNew, FabDelete} from "../";

export function CalendarPage() {
  const { openDateModal } = useUiStore();
  const { events, setActiveEvent } = useCalendarStore();
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || '');
  
  const eventStyleGetter = ( event, start, end, isSelected) => {
    // console.log({ event, start, end, isSelected})

    const style = {
      backgroundColor: '#347cf7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }
    return {
      style
    }
  }

  const onDoubleClick = () => {
    openDateModal()
  }
  
  const onSelect = (event) => {
    setActiveEvent( event);
  }
  
  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event);
    setLastView( event )
  }

  return (
    <>
      <Navbar />
      <Calendar
        culture="es"
        defaultView={lastView}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px )' }}
        messages={getMessagesES()}
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
      <CalendarModal />
      <FabAddNew />
      <FabDelete />
    </>
  );
}
