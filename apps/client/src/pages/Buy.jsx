"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ComboboxDemo } from "@/components/shared/ComboboxDemo";
import { RiArrowLeftRightLine, RiSearchLine } from "react-icons/ri";
import { Separator } from "@/components/ui/separator";
import Datepicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";

import React, { useState } from "react";

registerLocale("es", es);

const Buy = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="p-5">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <ComboboxDemo />
          <RiArrowLeftRightLine className="my-auto mx-2" />
          <ComboboxDemo />
        </div>
        <div className="flex flex-row">
          {/* <RiSearchLine className="my-auto"/>
        <button> fecha</button> */}
          <Datepicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            locale="es"
            className="rounded-xl p-2"
          />
        </div>
      </div>

      <div className="mt-8">
        <div className="my-5 flex flex-row justify-between">
          <div className="">
            <p className="text-xl font-bold">MÉXICO - GUADALAJARA</p>
            <p className="text-xs">Terminal Norte - Terminal CAPU</p>
          </div>
          <div>
            <p className="text-xl">19:00 - 20:00</p>
            <p className="text-xs">17/05/2024</p>
          </div>
          <p className="my-auto text-2xl font-bold">$198.00</p>
          <Sheet key="bottom">
            <SheetTrigger asChild>
              <Button className="bg-slate-50 rounded-2xl px-5 text-black hover:bg-white">
                Comprar
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[90%]">
              <SheetHeader>
                <SheetTitle>Comprar</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    value="@peduarte"
                    className="col-span-3"
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        <Separator className="bg-black" />
      </div>
    </div>
  );
};

export default Buy;
