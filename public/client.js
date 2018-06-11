let populationData = []
fetch('/populations')
  .then(stream => stream.json())
  .then(data => { populationData = data })

const svg = document.querySelector('svg')
const infoHeader = document.querySelector('h1')

svg.addEventListener('mouseover', handleHover)

function handleHover (event) {
  const stateName = getStateFromAbbreviation(event.target.id)
  const titleForToolTip = event.target.id ? stateName : 'United States'
  svg.querySelector('title').innerHTML = titleForToolTip
  const state = populationData.find(stateData => stateData.State === stateName)
  infoHeader.innerText = summary(state)
}

function summary (state) {
  if (!state) return 'Hover over a state to see its population and rank!'
  let rank = cardinalToOrdinal(parseInt(state.Rank, 10))
  rank = rank === '1st' ? '' : rank
  return `${state.State} is the ${rank} most populous state with ${state.Population} residents.`
}

function cardinalToOrdinal (number) { // adapted from https://stackoverflow.com/questions/13627308/add-st-nd-rd-and-th-ordinal-suffix-to-a-number
  const suffixes = ['th', 'st', 'nd', 'rd']
  const indexOfOrdinal = number % 100
  const teenAdjustedIndexOfOrdinal = (indexOfOrdinal - 20) % 10
  const suffix = suffixes[teenAdjustedIndexOfOrdinal] || suffixes[indexOfOrdinal] || suffixes[0]
  return `${number}${suffix}`
}

function getStateFromAbbreviation (abbreviation) { // https://github.com/datasets-io/us-states-abbr-names/blob/master/lib/dataset.json
  const states = { 'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'AR': 'Arkansas', 'CA': 'California', 'CO': 'Colorado', 'CT': 'Connecticut', 'DE': 'Delaware', 'FL': 'Florida', 'GA': 'Georgia', 'HI': 'Hawaii', 'ID': 'Idaho', 'IL': 'Illinois', 'IN': 'Indiana', 'IA': 'Iowa', 'KS': 'Kansas', 'KY': 'Kentucky', 'LA': 'Louisiana', 'ME': 'Maine', 'MD': 'Maryland', 'MA': 'Massachusetts', 'MI': 'Michigan', 'MN': 'Minnesota', 'MS': 'Mississippi', 'MO': 'Missouri', 'MT': 'Montana', 'NE': 'Nebraska', 'NV': 'Nevada', 'NH': 'New Hampshire', 'NJ': 'New Jersey', 'NM': 'New Mexico', 'NY': 'New York', 'NC': 'North Carolina', 'ND': 'North Dakota', 'OH': 'Ohio', 'OK': 'Oklahoma', 'OR': 'Oregon', 'PA': 'Pennsylvania', 'RI': 'Rhode Island', 'SC': 'South Carolina', 'SD': 'South Dakota', 'TN': 'Tennessee', 'TX': 'Texas', 'UT': 'Utah', 'VT': 'Vermont', 'VA': 'Virginia', 'WA': 'Washington', 'WV': 'West Virginia', 'WI': 'Wisconsin', 'WY': 'Wyoming' }
  return states[abbreviation]
}
