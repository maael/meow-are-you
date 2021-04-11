import { Dispatch, SetStateAction } from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import { Group, Symptom } from '../../types'

export default function Symptoms({
  symptoms,
  setSymptoms,
  groups,
}: {
  groups: Group[]
  symptoms: Symptom[]
  setSymptoms: Dispatch<SetStateAction<Symptom[]>>
}) {
  return (
    <div className="center-col">
      <div className="gradient-text text-2xl">Symptoms</div>
      <div className="flex flex-col gap-2">
        {symptoms.map((s, i) => (
          <div key={i} className="pt-1 pb-1 pr-2 pl-2 rounded-md" style={{ backgroundColor: s.color }}>
            {s.name}
          </div>
        ))}
      </div>
      <div
        className="text-yellow-700 text-2xl m-2 cursor-pointer transform hover:scale-125"
        onClick={() =>
          setSymptoms((s) => s.concat({ id: s.length, name: 'Headache', group: groups[0].id, color: '#F87171' }))
        }
      >
        <FiPlusCircle />
      </div>
    </div>
  )
}
