'use client';

import { LocalizationProvider as MuiLocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function LocalizationProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <MuiLocalizationProvider dateAdapter={AdapterDayjs} {...props}>
      {children}
    </MuiLocalizationProvider>
  );
}
