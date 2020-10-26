export function countReps(allVpns, category) {
  const counted = {};
  allVpns.forEach(
    vpn => (counted[vpn[category]] = (counted[vpn[category]] || 0) + 1)
  );
  return counted;
}
