import React from "react"
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material"

export const MiuTable = () => {
  return (
    <>
      <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
        <Table aria-label='simple table' stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell align='center'>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id} sx={{ "&:last-child td ,&:last-child th": { botder: 0 } }}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell align='center'>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

const data = [
  {
    id: 1,
    first_name: "Bernie",
    last_name: "Letchford",
    email: "bletchford0@a8.net",
    gender: "Male",
    ip_address: "143.101.154.217",
  },
  {
    id: 2,
    first_name: "Gayelord",
    last_name: "Geertje",
    email: "ggeertje1@feedburner.com",
    gender: "Male",
    ip_address: "253.32.127.99",
  },
  {
    id: 3,
    first_name: "Peirce",
    last_name: "Robun",
    email: "probun2@youtube.com",
    gender: "Male",
    ip_address: "209.187.18.225",
  },
  {
    id: 4,
    first_name: "Cybill",
    last_name: "Colbrun",
    email: "ccolbrun3@bigcartel.com",
    gender: "Female",
    ip_address: "145.175.237.119",
  },
  {
    id: 5,
    first_name: "Rich",
    last_name: "Rubrow",
    email: "rrubrow4@webs.com",
    gender: "Male",
    ip_address: "5.246.216.84",
  },
  {
    id: 6,
    first_name: "Delia",
    last_name: "Kerrey",
    email: "dkerrey5@wsj.com",
    gender: "Female",
    ip_address: "207.198.131.38",
  },
  {
    id: 7,
    first_name: "Georgette",
    last_name: "Jeaneau",
    email: "gjeaneau6@canalblog.com",
    gender: "Genderqueer",
    ip_address: "36.29.108.59",
  },
  {
    id: 8,
    first_name: "Stephie",
    last_name: "Bulch",
    email: "sbulch7@spotify.com",
    gender: "Female",
    ip_address: "181.1.132.72",
  },
  {
    id: 9,
    first_name: "Fergus",
    last_name: "Louedey",
    email: "flouedey8@example.com",
    gender: "Male",
    ip_address: "148.96.72.109",
  },
  {
    id: 10,
    first_name: "Page",
    last_name: "Derl",
    email: "pderl9@goo.ne.jp",
    gender: "Male",
    ip_address: "174.25.42.59",
  },
]
