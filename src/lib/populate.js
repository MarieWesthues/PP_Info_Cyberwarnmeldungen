import { Group, Subscriber } from "./mongoose/model/subscriber";

export default function populateTemplate(templateObject, attributes){
    // const attributes = alert.attributes;
    
    // attributes.threatLevel = alert.threatLevel;
    // attributes.threatType = alert.threatType;
    // attributes.title = alert.threatType;

    const populated = templateObject.templateString.replace(/\${(.*?)}/g, (match, content)=> {

        return attributes[content]
    }) 
    return populated;
}

export function getGroupBySubscriber(name) {
    return Group.findOne({name: name})
    .populate('groups').exec((err,groups) => {
        console.log("Populated Subscriber " + groups)
    })
}

export function getSubByGroup(name) {
    return Subscriber.findOne({name: name})
    .populate('subscribers').exec((err,subscribers) => {
        console.log("Populated Subscriber " + subscribers)
    })
}