
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { orange } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const CalendarComponent = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const CustomDateCalendar = styled(DateCalendar)(({ theme }) => ({
    '& .Mui-selected': {
      backgroundColor: `${orange[500]} !important`,
      color: 'white',
    },
    '& .Mui-selected:hover': {
      backgroundColor: `${orange[700]} !important`,
    },
    '& .MuiPickersDay-root': {
      color: prefersDarkMode ? 'white' : 'black',
    },
    '& .MuiDayCalendar-weekDayLabel': {
      color: prefersDarkMode ? 'white' : 'black',
    },
    '& .MuiPickersArrowSwitcher-root .MuiSvgIcon-root': {
      color: prefersDarkMode ? 'white' : 'black',
    },
  }));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CustomDateCalendar />
    </LocalizationProvider>
  );
};

export default CalendarComponent;
