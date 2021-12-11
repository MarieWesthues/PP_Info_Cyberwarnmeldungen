


export default function populateTemplate(templateObject, alert){
    // reduce list of key value pairs to actual key value pairs
    // const reducer = (acc, {key, value}) => {
    //     acc[key] = value;
    //     return acc;
    // }
    const attributes = alert.attributes;
    
    attributes.threatLevel = alert.threatLevel;
    attributes.threatType = alert.threatType;
    attributes.title = alert.threatType;

    const populated = templateObject.templateString.replace(/\${(.*?)}/g, (match, content)=> {

        return attributes[content]
    })
    
    return populated;
 

}

// for reference

// function fillTemplate(str, obj){
//     return str.replace(/\${(.+)}/g, (match, content)=> (
//         objectPath.get(obj, content)
//     ))
// } 