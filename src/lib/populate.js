


export default function populateTemplate(templateObject, messageObject){
    // reduce list of key value pairs to actual key value pairs
    const reducer = (acc, {key, value}) => {
        acc[key] = value;
        return acc;
    }
    const attributes = messageObject.attributes.reduce(reducer, {})

    attributes.threatLevel = messageObject.threatLevel;
    attributes.threatType = messageObject.threatType;
    attributes.title = messageObject.threatType;

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