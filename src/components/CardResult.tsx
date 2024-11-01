import { useStore } from '@/context/useStore'
import { addAllPowXProbability, addAllXProbability } from '@/helpers/operations'
import { useMemo } from 'react'

export default function CardResult() {
    const {data} = useStore()

    const media = useMemo(()=>{
        return addAllXProbability(data)
    }, [data])

    const varianza = useMemo(()=>{
        return addAllPowXProbability(data) - Math.pow(media, 2)
    }, [data, media])

    const desviacion = useMemo(()=>{
        return Math.sqrt(varianza)
    }, [varianza])

  return (
    <div className='w-[300px] sm:w-[500px] border rounded-lg p-3 border-dashed border-gray-800'>
        <h3 className='uppercase text-base font-semibold p-1'>Resultados</h3>
        <p className='text-sm'><span className='font-semibold'>Media:</span> {media}</p>
        <p className='text-sm'><span className='font-semibold'>Varianza:</span> {varianza} </p>
        <p className='text-sm'><span className='font-semibold'>Desviación estandar:</span> {desviacion}</p>
        <h3 className='uppercase text-base font-semibold p-1'>Interpretación de la desviación estandar</h3>
        <p className='text-sm'><span className='font-semibold'>Valor máximo:</span> {(media + (2*desviacion)).toFixed(4)}</p>
        <p className='text-sm'><span className='font-semibold'>Valor minímo:</span> {(media - (2*desviacion)).toFixed(4)}</p>
    </div>
  )
}
