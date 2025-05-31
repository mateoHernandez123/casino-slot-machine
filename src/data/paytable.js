export const PAYLINES = {
  1: [
    [1, 0],
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
  ],
  2: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
  ],
  3: [
    [2, 0],
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
  ],
  4: [
    [0, 0],
    [1, 1],
    [2, 2],
    [1, 3],
    [0, 4],
  ],
  5: [
    [2, 0],
    [1, 1],
    [0, 2],
    [1, 3],
    [2, 4],
  ],
};

export const PAYOUTS = {
  CHERRY: 10,
  SEVEN_BLACK: 20,
  SEVEN_WHITE: 15,
  BAR_SINGLE: 8,
  BAR_TRIPLE: 12,
  BAR_5: 25,
  SPIN: 0, // comodín (multiplica ×5 por aparición)
  MYSTIC_ORB: 0, // comodín (multiplica ×2 por aparición)
  WHITE_RABBIT: 50, // bono
};

export const WILDCARDS = ["SPIN", "MYSTIC_ORB"];
export const WILDCARD_MULTIPLIERS = {
  SPIN: 5,
  MYSTIC_ORB: 2,
};
