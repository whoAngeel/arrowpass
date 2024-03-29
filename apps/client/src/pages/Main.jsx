import TicketFace from "../components/shared/TicketFace"

const Main = () => {
  return (
    <div className="m-7">
        <h1 className="font-bold text-2xl">Tus boletos</h1>
        <TicketFace hora="13:00" origen="Mexico" destino="Guadalajara" />
    </div>
  )
}

export default Main