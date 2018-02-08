const API_ROOT = 'http://localhost:3001/api/v1'

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json'
}

const getWithToken = url => {
  const token = localStorage.getItem('token')
  return fetch(url, {
    headers: { Authorization: token }
  }).then(res => res.json())
}

const getCurrentUser = () => {
  return getWithToken(`${API_ROOT}/current_user`)
}

const login = data => {
  return fetch(`${API_ROOT}/login`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
}

const createDailyUpdate = data => {
  return fetch(`${API_ROOT}/daily_updates`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
}

const createGoal = data => {
  return fetch(`${API_ROOT}/goals`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
}

const fetchCognitiveDistortions = () => {
  return fetch(`${API_ROOT}/cognitive_distortions`)
  .then(res => res.json())
}

const newThoughtEntry = data => {
  return fetch(`${API_ROOT}/thought_entries`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
}

const completedGoal = data => {
  return fetch(`${API_ROOT}/completed`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({id: data})
  }).then(res => res.json())
}

const newReflection = data => {
  return fetch(`${API_ROOT}/goal_reflections`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
}

const deleteGoal = id => {
  return fetch(`${API_ROOT}/goals/${id}`, {
    method: 'DELETE'
  }).then(resp => resp.json())
}

const fetchMeditations = () => {
  return fetch(`${API_ROOT}/meditations`)
  .then(resp => resp.json())
}

const newSession = data => {
  return fetch(`${API_ROOT}/meditation_sessions`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(resp => resp.json())
}

export const adapter = {
  auth: {
    login,
    getCurrentUser
  },

  daily_updates: {
    createDailyUpdate
  },

  goals: {
    createGoal,
    completedGoal,
    newReflection,
    deleteGoal
  },

  cogDistortions: {
    fetchCognitiveDistortions
  },

  thoughts: {
    newThoughtEntry
  },

  meditation: {
    fetchMeditations,
    newSession
  }
}