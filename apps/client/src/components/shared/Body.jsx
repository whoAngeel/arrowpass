import Buy from "@/pages/Buy"
import Main from "../../pages/Main"

const Body = ({contenido}) => {
  return (

    <div className="bg-white bg-opacity-[0.2] mx-32 w-[80%] mb-7 mt-20  rounded-xl phone:w-full phone:m-0 phone:rounded-none tablet:mx-5">
        {contenido == 'home' && <Buy/>}
        {contenido == 'tickets' && <Main/>}
        
    </div>
  )
}

export default Body