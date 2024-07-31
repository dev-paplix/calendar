import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction" ;
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function Calendar() {
  const handleDateClick = (arg) => {
    alert(arg.dateStr)
  }

  return (
    
    <FullCalendar
      plugins={[ dayGridPlugin, interactionPlugin ]}
      dateClick={handleDateClick}
    />
  )
}