export const formatBytes = bytes => {
  const UNITS = ['B', 'KiB', 'MiB', 'GiB'];
  const UNIT_STEP = 1024;

  let unit;
  let value = bytes;
  for (let i = 0; i < UNITS.length; i++) {
    unit = UNITS[i];
    if (value / UNIT_STEP >= 1) {
      value /= UNIT_STEP;
    } else {
      break;
    }
  }

  return `${Math.round(value * 10) / 10} ${unit}`;
};
