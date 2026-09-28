interface BuildingProperties {
  bin: string;
  name: string | null;
}

interface BuildingSelection {
  selectedBin: string | null;
  status: string;
}

export function selectBuilding(
  currentBin: string | null,
  building: BuildingProperties
): BuildingSelection {
  const selectedBin = currentBin === building.bin ? null : building.bin;

  return {
    selectedBin,
    status:
      selectedBin ?
        `Selected ${building.name ?? `building ${building.bin}`}`
      : 'Selection cleared',
  };
}

export function getBuildingFillColor(
  buildingBin: string,
  selectedBin: string | null,
  useBlue: boolean
): [number, number, number, number] {
  if (buildingBin === selectedBin) return [244, 176, 41, 255];
  return useBlue ? [23, 95, 176, 220] : [201, 61, 46, 220];
}
