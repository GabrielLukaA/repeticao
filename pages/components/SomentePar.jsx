export default function SomentePar(props) {
  const numeroPar = props.numero % 2 === 0;


  return (
    <div className="flex flex-col">
        {
            numeroPar ? <span>{props.numero}</span> : null
        }
    </div>
  )
//   return numeroPar ? <span>{props.numero}</span> : null;
}
