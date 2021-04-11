import { Dispatch, SetStateAction } from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import { Group, Symptom, Update } from '../../types'

export default function Updates({
  symptoms,
  groups,
  updates,
  setUpdates,
}: {
  symptoms: Symptom[]
  groups: Group[]
  updates: Update[]
  setUpdates: Dispatch<SetStateAction<Update[]>>
}) {
  const groupMap = new Map(groups.map((s) => [s.id, s]))
  const symptomMap = new Map(symptoms.map((s) => [s.id, s]))
  return (
    <div className="center-col">
      <div className="gradient-text text-3xl">Updates</div>
      <div className="flex flex-col gap-2">
        {updates.map((s, i) => {
          const symptom = symptomMap.get(s.symptom)!
          const group = groupMap.get(s.group)!
          return (
            <div key={i} className="flex flex-row rounded-md overflow-hidden">
              <div className="pt-1 pb-1 pr-2 pl-2" style={{ backgroundColor: group.color }}>
                [{group.name}]
              </div>
              <div key={i} className="pt-1 pb-1 pr-2 pl-2" style={{ backgroundColor: symptom.color }}>
                {symptom.name}
              </div>
              <div className="pt-1 pb-1 pr-2 pl-2 bg-gray-200">{s.rating}</div>
            </div>
          )
        })}
      </div>
      <div
        className="text-yellow-700 text-2xl m-2 cursor-pointer transform hover:scale-125"
        onClick={() =>
          setUpdates((s) =>
            s.concat({
              symptom: symptoms[0].id,
              group: symptoms[0].group,
              rating: 3,
              added_at: new Date().toISOString(),
            })
          )
        }
      >
        <FiPlusCircle />
      </div>
    </div>
  )
}
