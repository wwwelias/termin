//! Everything within this file should either come from the API or be localized

export const weekdays = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']

export const slotTime = [
  { start: '08:30', end: '09:00' },
  { start: '09:00', end: '09:30' },
  { start: '09:30', end: '10:00' },
  { start: '10:00', end: '10:30' },
  { start: '10:30', end: '11:00' },
  { start: '11:00', end: '11:30' },
  { start: '11:30', end: '12:00' },
  { start: '12:00', end: '12:30' },
  { start: '12:30', end: '13:00' },
  { start: '13:00', end: '13:30' },
  { start: '13:30', end: '14:00' },
  { start: '14:00', end: '14:30' },
  { start: '14:30', end: '15:00' },
  { start: '15:00', end: '15:30' },
  { start: '15:30', end: '16:00' },
]

export const options = [
  { value: 'sven', label: 'Dr. Sven Hartmann' },
  { value: 'elias', label: 'Dr. Elias Wohlgenannt' },
  { value: 'joachim', label: 'Dr. Joachim Wohlgenannt' },
  { value: 'susanne', label: 'Dr. Susanne Wohlgenannt' },
  { value: 'florian', label: 'Dr. Florian Wohlgenannt' },
]

// what the fuck?
export const workingSlots = {
  sven: [
    [true, true, true, true, true, true, true, false, false, false, false, false, false, false],
    [true, true, true, true, true, true, true, true, true, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, true, true, true, true, true],
    [true, true, true, true, true, true, true, false, false, false, false, false, false, false],
    [true, true, true, true, true, true, true, false, false, false, false, false, false, false],
  ],
  elias: [
    [false, false, false, false, false, false, false, false, false, true, true, true, true, true],
    [true, true, true, true, true, true, true, false, false, false, false, false, false, false],
    [true, true, true, true, true, true, true, true, true, false, false, false, false, false],
    [true, true, true, true, true, true, true, false, false, false, false, false, false, false],
    [true, true, true, true, true, true, true, true, true, false, false, false, false, false],
  ],
  joachim: [
    [true, true, true, true, true, false, false, false, false, false, false, false, false, false],
    [true, true, true, true, true, true, true, true, true, false, false, false, false, false],
    [true, true, true, true, true, true, true, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, true, true, true, true, true],
    [true, true, true, true, true, true, true, false, false, true, true, false, false, false],
  ],
  susanne: [
    [true, true, true, true, true, true, true, false, false, false, false, false, false, false],
    [true, true, true, true, true, true, true, true, true, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, false, false, false, true, true, true],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  ],
  florian: [
    [true, true, true, true, true, true, true, false, false, false, false, false, false, false],
    [true, true, true, true, true, true, false, false, false, true, true, true, true, true],
    [false, false, false, false, false, false, false, false, false, true, true, true, true, true],
    [false, false, true, true, true, true, true, false, false, true, true, false, false, false],
    [false, false, false, false, true, true, true, true, true, false, false, false, false, false],
  ],
}
