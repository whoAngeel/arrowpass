import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Terminales = () => {
  return (
    <div className="p-7">
      
      <Table className="border-black">
        <TableHeader>
          <TableRow className="border-black ">
            <TableHead className="w-[100px] font-extrabold">Placas</TableHead>
            <TableHead className="font-extrabold">Tipo</TableHead>
            <TableHead className="font-extrabold">Modelo</TableHead>
            <TableHead className="font-extrabold">Capacidad</TableHead>
            <TableHead className="text-right font-extrabold">Marca</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>??</TableCell>
            <TableCell>Modelo 01</TableCell>
            <TableCell>30</TableCell>
            <TableCell className="text-right">Ford</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>??</TableCell>
            <TableCell>Modelo 01</TableCell>
            <TableCell>30</TableCell>
            <TableCell className="text-right">Ford</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default Terminales