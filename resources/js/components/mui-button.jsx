import * as React from 'react';
import Button from '@mui/material/Button';

export default function MuiButton({ title, ...props }) {
  return <Button {...props}>{title}</Button>;
}