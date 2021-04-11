export interface Group {
  id: number
  name: string
  color: string
}

export interface Symptom {
  id: number
  name: string
  group: number
  color: string
}

export interface Update {
  symptom: number
  group: number
  rating: number
  added_at: string
}
