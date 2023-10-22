import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material'

const data = [
  {
    name: 'John Doe',
    class: 'Math',
    phone: '123-456-7890',
    email: 'john@example.com',
    subject: 'Math',
    gender: 'Male',
  },
  {
    name: 'Jane Smith',
    class: 'Science',
    phone: '987-654-3210',
    email: 'jane@example.com',
    subject: 'Science',
    gender: 'Female',
  },
  // Add more data for additional rows...
]

const TeachersTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Class</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.class}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.subject}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell>
                <Button variant='contained' color='primary'>
                  Edit
                </Button>
                <Button variant='contained' color='secondary'>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TeachersTable
