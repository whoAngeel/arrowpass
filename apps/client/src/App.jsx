import { Button } from "antd";
import { useToast } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa6";

function App() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">ArroWPass</a>
        </div>
        <div className="flex-none">
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Inicia Sesion
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <form>
                <h3 className="font-bold text-2xl text-center">
                  Bienvenido de vuelta
                </h3>
                <button className="btn w-full mt-5">
                  {" "}
                  <FaGoogle />
                  Continuar con Google
                </button>
                <div className="divider">
                  <p className="text-xs">OR</p>
                </div>
                <label className="input input-bordered flex items-center gap-2 mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input type="text" className="grow" placeholder="Email" />
                </label>
                <label className="input input-bordered flex items-center gap-2 mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input type="password" className="grow" value="password" />
                </label>
                <div className="mt-5">
                  <a href="#" className="underline text-[#ea8f45]">
                    <p>¿Olvidaste tu contraseña?</p>
                  </a>
                  {/* <p>
                    ¿Aún no tienes cuenta?
                    <a href="#" className="underline text-[#ea8f45]">
                      Registrate
                    </a>
                  </p> */}
                </div>
                <div className=" flex">
                  <button
                    type="submit"
                    className="btn btn-active btn-neutral mt-5 mx-auto w-full"
                  >
                    Entrar
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      </div>
      {/* daisy */}
      <div className="bg-primary">Hola </div>
      {/* antdesign */}
      <Button type="primary">hola </Button>
      {/* chakra ui */}
      <ToastExample></ToastExample>
    </>
  );
}
function ToastExample() {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Toast
    </Button>
  );
}

export default App;
