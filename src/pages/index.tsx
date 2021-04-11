import React, { useState } from 'react'
import Logo from '../components/primitives/Logo'
import Groups from '../components/complex/Groups'
import Symptoms from '../components/complex/Symptoms'
import Updates from '../components/complex/Updates'
import Dashboard from '../components/complex/Dashboard'
import { Group, Symptom, Update } from '../types'

export default function Index() {
  const [groups, setGroups] = useState<Group[]>([])
  const [symptoms, setSymptoms] = useState<Symptom[]>([])
  const [updates, setUpdates] = useState<Update[]>([])
  return (
    <div>
      <div className="flex flex-row items-center justify-center pt-10">
        <Logo />
        <div className="ml-5 gradient-text text-2xl sm:text-4xl mt-5">Meow are you?</div>
      </div>
      <div className="center-col">
        <div className="gradient-text text-3xl">Management</div>
      </div>
      <Groups groups={groups} setGroups={setGroups} />
      <Symptoms groups={groups} symptoms={symptoms} setSymptoms={setSymptoms} />
      <Updates groups={groups} symptoms={symptoms} updates={updates} setUpdates={setUpdates} />
      <Dashboard />
    </div>
  )
}
