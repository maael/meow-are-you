import { Dispatch, SetStateAction } from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import { Group } from '../../types'

export default function Groups({
  groups,
  setGroups,
}: {
  groups: Group[]
  setGroups: Dispatch<SetStateAction<Group[]>>
}) {
  return (
    <div className="center-col">
      <div className="gradient-text text-2xl">Symptom Groups</div>
      <div className="flex flex-col gap-2">
        {groups.map((s, i) => (
          <div key={i} className="pt-1 pb-1 pr-2 pl-2 rounded-md" style={{ backgroundColor: s.color }}>
            {s.name}
          </div>
        ))}
      </div>
      <div
        className="text-yellow-700 text-2xl m-2 cursor-pointer transform hover:scale-125"
        onClick={() => setGroups((s) => s.concat({ id: s.length, name: 'OCD', color: '#DC2626' }))}
      >
        <FiPlusCircle />
      </div>
    </div>
  )
}
