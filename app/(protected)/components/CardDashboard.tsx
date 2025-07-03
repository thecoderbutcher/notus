import { MdOutlineSentimentVerySatisfied } from "react-icons/md";
const CardDashboard = () => {
  return (
    <div className="flex flex-col gap-4 justify-center bg-baseBackground dark:bg-baseBackgroundDark hover:shadow-lg p-4 rounded-lg w-full">
      <div className="flex justify-between items-center text-sm">
        <p className="text-text/60 dark:text-textDark/60">Titulo</p>
        <p>Extratitle</p>
      </div>
      <p className="text-xl font-bold">Principal Data</p>
      <div className="flex justify-between items-center">
        <a href="" className="text-sm">dataviews</a>
        <span className="p-2 bg-accent/20 rounded-full text-2xl">
          <MdOutlineSentimentVerySatisfied />
        </span>
      </div>
    </div>
  )
}

export default CardDashboard
