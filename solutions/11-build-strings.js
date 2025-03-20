// BEGIN
export const buildDefinitionList = (definitions) => {
    if (definitions.length === 0){
        return '';
    }

    let htmlTeg = '<dl>';
    for (const def of definitions) {
        const [term, description] = def;
        htmlTeg += `<dt>${term}</dt><dd>${description}</dd>`;
    }
    htmlTeg += '</dl>';
    return htmlTeg;
}
export default buildDefinitionList;
// END