import TicketFace from "../components/shared/TicketFace";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Main = () => {
  return (
    <div className="m-7">
      <h1 className="font-bold text-2xl">Tus boletos</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className=" laptop:w-[800px] ml-10 tablet:w-[80%] mr-10"
      >
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            
              <CarouselItem key={index} className="laptop:basis-1/4 tablet:basis-1/3 phone:basis-1/2">
                <div className="p-1">
                <TicketFace
                  hora="13:00"
                  origen="Mexico"
                  destino="Guadalajara"
                />
                </div>
              </CarouselItem>
            
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Main;
