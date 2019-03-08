export const addQa = (name, props) => (props && props['data-qa']) ? `${props['data-qa']} ${name}` : name;
