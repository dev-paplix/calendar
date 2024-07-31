
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from 'react';
import { DatePicker, Stack } from 'rsuite';
import "rsuite/dist/rsuite.css";
const Picker =() => {


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack direction="column" alignItems="flex-start" spacing={6}>
          <DatePicker format="yyyy-MM-dd" editable={false} />
       </Stack>
    </LocalizationProvider>
  );
}

export default Picker;