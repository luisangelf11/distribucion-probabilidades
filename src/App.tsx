import MyForm from "./components/MyForm";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useStore } from "./context/useStore";
import {
  addAllPowXProbability,
  addAllXProbability,
  addAllP,
} from "./helpers/operations";
import CardResult from "./components/CardResult";

export default function App() {
  const { data, clear, removeItem } = useStore();
  return (
    <section className="w-full flex flex-col gap-2 justify-center items-center p-2">
      <MyForm />
      <Table className="w-[90%] m-auto">
        <TableCaption className="uppercase">
          Tabla de Distribución de probabilidades
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">X</TableHead>
            <TableHead>P(x)</TableHead>
            <TableHead>X * P(x)</TableHead>
            <TableHead className="text-right">X^2</TableHead>
            <TableHead className="text-right">(X^2)(P(x))</TableHead>
            <TableHead className="text-right">Remover</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 ? (
            data.map((el, index) => (
              <TableRow key={index} className="text-center">
                <TableCell className="font-medium">{el.element}</TableCell>
                <TableCell>{el.probability}</TableCell>
                <TableCell>{el.elementXprobability.toFixed(4)}</TableCell>
                <TableCell className="text-right">{el.elementPow}</TableCell>
                <TableCell className="text-right">
                  {el.powXProbability}
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    type="button"
                    variant="destructive"
                    className="text-white"
                    onClick={()=> removeItem(el.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                No hay datos
              </TableCell>
            </TableRow>
          )}
          {data.length ? (
            <TableRow className="text-center">
              <TableCell>Total</TableCell>
              <TableCell>{Math.round(addAllP(data))}</TableCell>
              <TableCell>{addAllXProbability(data)}</TableCell>
              <TableCell colSpan={3}>
                {addAllPowXProbability(data).toFixed(4)}
              </TableCell>
            </TableRow>
          ) : (
            ""
          )}
        </TableBody>
      </Table>
      <CardResult />
      <Button
        onClick={() => clear()}
        type="button"
        variant="destructive"
        title="Limpiar"
      >
        Limpiar
      </Button>
    </section>
  );
}
