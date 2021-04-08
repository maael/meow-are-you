import React, { useState } from 'react'
import Image from 'next/image'
import { FiPlusCircle } from 'react-icons/fi'

export default function Index() {
  const [groups, setGroups] = useState<{ id: number; name: string; color: string }[]>([])
  const groupMap = new Map(groups.map((s) => [s.id, s]))
  const [symptoms, setSymptoms] = useState<{ id: number; name: string; group: number; color: string }[]>([])
  const symptomMap = new Map(symptoms.map((s) => [s.id, s]))
  const [updates, setUpdates] = useState<{ symptom: number; group: number; rating: number; added_at: string }[]>([])
  console.info(updates, symptomMap)
  return (
    <div>
      <div className="flex flex-row items-center justify-center pt-10">
        <div className="sm:w-40 w-20">
          <div className="relative aspect-w-16 aspect-h-16">
            <Image src="/images/cat-face.png" layout="fill" />
          </div>
        </div>
        <div className="ml-5 text-gradient bg-gradient-to-br from-yellow-500 to-yellow-700 text-2xl sm:text-4xl font-bold uppercase mt-5">
          Meow are you?
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-gradient bg-gradient-to-br from-yellow-500 to-yellow-700 text-3xl font-bold uppercase">
          Management
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-gradient bg-gradient-to-br from-yellow-500 to-yellow-700 text-2xl font-bold uppercase">
          Symptom Groups
        </div>
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
      <div className="flex flex-col items-center">
        <div className="text-gradient bg-gradient-to-br from-yellow-500 to-yellow-700 text-2xl font-bold uppercase">
          Symptoms
        </div>
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
      <div className="flex flex-col items-center">
        <div className="text-gradient bg-gradient-to-br from-yellow-500 to-yellow-700 text-3xl font-bold uppercase">
          Updates
        </div>
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
      <div className="flex flex-col items-center">
        <div className="text-gradient bg-gradient-to-br from-yellow-500 to-yellow-700 text-3xl font-bold uppercase">
          Dashboard
        </div>
      </div>
    </div>
  )
}
