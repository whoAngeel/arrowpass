import { Button } from "@/components/ui/button";
import { RiEyeLine } from "react-icons/ri";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RiHomeSmile2Fill } from "react-icons/ri";
import { HiTicket, HiMiniIdentification } from "react-icons/hi2";
import { FaBus, FaMapPin } from "react-icons/fa";
import { IoIosCalendar, IoLogoGoogle } from "react-icons/io";
import { useState } from "react";

const Sidebar = ({ cambiarContenido }) => {
  const [password, setPassword] = useState("password");
  const [register, setRegister] = useState(false);

  return (
    <div className="bg-white bg-opacity-[0.2] w-[180px] m-3 rounded-lg phone:hidden tablet:w-[50px] tablet:mr-0">
      <img
        src="../../../public/flechaAmarilla.png"
        className="w-[80%] mx-auto"
      />
      {/* <div className=" flex flex-row">
        <Avatar className="w-8 h-8 m-2">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-xs my-auto font-semibold">Ronaldo Acevedo</p>
      </div> */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="mx-4">
            Iniciar Sesión
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          {!register && (
            <div>
              <DialogHeader>
                <DialogTitle>Iniciar Sesión</DialogTitle>
                <DialogDescription>
                  Bienvenido, descubre todo lo nuevo que tenemos para ti
                </DialogDescription>
              </DialogHeader>

              <div className="flex items-center space-x-2 mt-3">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link">Correo</Label>
                  <Input id="link" type="email" />
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-3">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link">Contraseña</Label>
                  <Input id="link" type={password} />
                </div>
                <Button
                  size="sm"
                  className="mt-5"
                  onClick={() => {
                    password == "password"
                      ? setPassword("text")
                      : setPassword("password");
                  }}
                >
                  <RiEyeLine />
                </Button>
              </div>
              <DialogDescription className="mt-3">
                Aun no tienes cuenta?{" "}
                <a
                  href="#"
                  className="underline text-yellow-600"
                  onClick={() => {
                    setRegister(true);
                  }}
                >
                  Registrate
                </a>
              </DialogDescription>
              <Button className="mt-2">
                <IoLogoGoogle />
                <p className="ml-2">Inicia sesión con Google</p>
              </Button>
            </div>
          )}
          {register && (
            <div>
              <DialogHeader>
                <DialogTitle>Registrate</DialogTitle>
                <DialogDescription>
                  Crea una cuenta y descubre lo que tenemos para ti
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2 mt-3">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link">Nombre</Label>
                  <Input id="link" type="text" />
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-3">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link">Apellidos</Label>
                  <Input id="link" type="text" />
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-3">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link">Correo</Label>
                  <Input id="link" type="email" />
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-3">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link">Celular</Label>
                  <Input id="link" type="number" />
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-3">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link">Contraseña</Label>
                  <Input id="link" type={password} />
                </div>
                <Button
                  size="sm"
                  className="mt-5"
                  onClick={() => {
                    password == "password"
                      ? setPassword("text")
                      : setPassword("password");
                  }}
                >
                  <RiEyeLine />
                </Button>
              </div>
              <DialogDescription className="mt-2">
                ¿Ya tienes cuenta?{" "}
                <a
                  href="#"
                  className="underline text-yellow-600"
                  onClick={() => {
                    setRegister(false);
                  }}
                >
                  Iniciar sesión
                </a>
              </DialogDescription>
              <Button className="mt-2">
                <IoLogoGoogle />
                <p className="ml-2">Registrate con Google</p>
              </Button>
            </div>
          )}

          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="submit" variant="secondary">
                Entrar
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="mt-12"></div>
      <div id="content">
        <button
          className="flex flex-row hover:bg-slate-200 h-8 rounded-lg m-2 w-[90%]"
          onClick={() => {
            cambiarContenido("home");
          }}
        >
          <RiHomeSmile2Fill className="my-auto m-2" />
          <p className="text-xs my-auto font-bold">Home</p>
        </button>
      </div>
      <div id="content">
        <button
          className="flex flex-row hover:bg-slate-200 h-8 rounded-lg m-2 w-[90%]"
          onClick={() => cambiarContenido("tickets")}
        >
          <HiTicket className="my-auto m-2" />
          <p className="text-xs my-auto font-bold">Your Tickets</p>
        </button>
      </div>
      <div id="content">
        <button
          className="flex flex-row hover:bg-slate-200 h-8 rounded-lg m-2 w-[90%]"
          onClick={() => cambiarContenido("buses")}
        >
          <FaBus className="my-auto m-2" />
          <p className="text-xs my-auto font-bold">Buses</p>
        </button>
      </div>
      <div id="content">
        <button
          className="flex flex-row hover:bg-slate-200 h-8 rounded-lg m-2 w-[90%]"
          onClick={() => cambiarContenido("terminales")}
        >
          <FaMapPin className="my-auto m-2" />
          <p className="text-xs my-auto font-bold">Terminales</p>
        </button>
      </div>
      <div id="content">
        <button
          className="flex flex-row hover:bg-slate-200 h-8 rounded-lg m-2 w-[90%]"
          onClick={() => cambiarContenido("conductores")}
        >
          <HiMiniIdentification className="my-auto m-2" />
          <p className="text-xs my-auto font-bold">Conductores</p>
        </button>
      </div>
      <div id="content">
        <button
          className="flex flex-row hover:bg-slate-200 h-8 rounded-lg m-2 w-[90%]"
          onClick={() => cambiarContenido("Corridas")}
        >
          <IoIosCalendar className="my-auto m-2" />
          <p className="text-xs my-auto font-bold">Corridas</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
