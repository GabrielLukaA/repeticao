import Filho from "./Filho";

export default function Pai(){
    return (
        <div className="flex justify-center flex-col">
<Filho nome="Cleiton" familia="Albuquerque"/>
<Filho nome="José" familia="Amaral"/>
<Filho nome="Maria" familia="Silva"/>
        </div>
    )
}