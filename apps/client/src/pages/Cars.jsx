import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Cars = () => {
  return (
    <div className="p-7">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Agregar </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Agregar Vehicle</DialogTitle>
            <DialogDescription>
              Por favor asegurate de llenar cada uno de los campos
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Placas
              </Label>
              <Input id="name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Tipo
              </Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Economica" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Primera Clase</SelectItem>
                  <SelectItem value="dark">Economica</SelectItem>
                  <SelectItem value="system">Bussines Class</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Model
              </Label>
              <Input id="name" className="col-span-3" type="text" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Capacidad
              </Label>
              <Input id="name" className="col-span-3" type="number" min="0" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Agregar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
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
  );
};

export default Cars;
