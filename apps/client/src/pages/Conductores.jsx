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
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Conductores = () => {
  return (
    <div className="p-7">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Agregar</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Agregar Conductor</DialogTitle>
            <DialogDescription>
              Asegurate de rellenar cada uno de los campos.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Nombre
              </Label>
              <Input id="name"  className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Telefono
              </Label>
              <Input id="username" type="number" className="col-span-3" min="0" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Dirección
              </Label>
              <Input id="username" type="text" className="col-span-3" min="0" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Nomina
              </Label>
              <Input id="username" type="text" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Guardar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Table className="border-black">
        <TableHeader>
          <TableRow className="border-black ">
            <TableHead className="w-[100px] font-extrabold">Nombre</TableHead>
            <TableHead className="font-extrabold">Telefono</TableHead>
            <TableHead className="font-extrabold">Dirección</TableHead>
            <TableHead className="font-extrabold">Nomina</TableHead>
            
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-black ">
            <TableCell className="font-medium">Aa</TableCell>
            <TableCell>??</TableCell>
            <TableCell>Modelo 01</TableCell>
            <TableCell>30</TableCell>
          </TableRow>
          <TableRow className="border-black ">
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>??</TableCell>
            <TableCell>Modelo 01</TableCell>
            <TableCell>30</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default Conductores