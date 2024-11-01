import { useState, FormEvent, ChangeEvent } from "react";
import { IForm } from "../interface/form";
import { useStore } from "@/context/useStore"; 

export default function MyForm() {
  const initialState: IForm = {
    element: "",
    probability: "",
  };
  const [form, setForm] = useState<IForm>(initialState);

  const {add, data} = useStore()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    add({
      id: data.length + 1,
      element: parseFloat(form.element),
      probability: parseFloat(form.probability),
      elementXprobability: parseFloat(form.element) * parseFloat(form.probability),
      elementPow: Math.pow(parseFloat(form.element), 2),
      powXProbability: Math.pow(parseFloat(form.element), 2) * parseFloat(form.probability)
    })
    setForm(initialState)
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[300px] p-4 border rounded-md flex flex-col justify-center items-center gap-2 mt-4"
    >
      <h2 className="uppercase font-semibold text-xl text-gray-800">
        Datos de la tabla
      </h2>
      <label
        htmlFor="element"
        className="w-[90%] text-left font-semibold text-xs"
      >
        X:
      </label>
      <input
        type="number"
        id="element"
        name="element"
        placeholder="0"
        value={form.element}
        onChange={handleChange}
        className="w-[90%] p-1 rounded-md border text-xs outline-none transition-all focus:border-blue-500 focus:border-2"
      />
      <label
        htmlFor="probability"
        className="w-[90%] text-left font-semibold text-xs"
      >
        P(x):
      </label>
      <input
        type="number"
        id="probability"
        name="probability"
        placeholder="0"
        value={form.probability}
        onChange={handleChange}
        className="w-[90%] p-1 rounded-md border text-xs outline-none transition-all focus:border-blue-500 focus:border-2"
      />
      <button className="w-[70%] p-2 rounded-md bg-blue-700 transition-all hover:bg-blue-600 text-xs text-white" type="submit">
        Guardar
      </button>
    </form>
  );
}
