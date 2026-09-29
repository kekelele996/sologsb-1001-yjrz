export type CueStatus = 'draft' | 'reviewed' | 'issue'
export type Locale = 'zh-CN' | 'en-US' | 'ja-JP'

export interface Cue {
  id: string
  start: number
  end: number
  source: string
  target: string
  actorId: string
  speed: number
  termIds: string[]
  status: CueStatus
  locked: boolean
}

export interface Actor {
  id: string
  name: string
  color: string
  localeHint: string
}

export interface Term {
  id: string
  source: string
  target: string
  note: string
}

export interface Snapshot {
  id: string
  name: string
  createdAt: number
  cues: Cue[]
}

export interface EditorDocument {
  id: string
  title: string
  language: Locale
  cues: Cue[]
  actors: Actor[]
  terms: Term[]
  snapshots: Snapshot[]
  updatedAt: number
  revision: number
  lastWriter: string
}

export interface CueConflict {
  cueId: string
  type: 'actor' | 'tone' | 'address'
  message: string
}

export interface HistoryEntry {
  label: string
  cues: Cue[]
  selectedCueId: string | null
}

export type BatchKind = 'actor' | 'speed' | 'term'
export type TermMode = 'add' | 'remove' | 'replace'
export type LockScope = 'unlocked' | 'locked' | 'any'

export interface BatchCriteria {
  actorId: string
  statuses: CueStatus[]
  lockScope: LockScope
}

export interface BatchChange extends BatchCriteria {
  kind: BatchKind
  actorTargetId?: string
  speed?: number
  termMode?: TermMode
  termId?: string
  termTargetId?: string
  replaceText?: boolean
}

export interface BatchPreview {
  criteria: BatchCriteria
  matched: Cue[]
  editable: Cue[]
  locked: Cue[]
  changeCount: number
}
