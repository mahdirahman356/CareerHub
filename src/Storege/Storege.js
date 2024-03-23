
let getAppliedJobId = () => {
    let getValue = localStorage.getItem('applied-id')
    if(getValue){
        return JSON.parse(getValue)
    }else{
        return[]
    }
}

let saveAppliedJobId = (id) => {
    let getValues = getAppliedJobId()
    let getIdFind = getValues.find(job => job === id)
    if(!getIdFind){
        getValues.push(id) 
        localStorage.setItem('applied-id',JSON.stringify(getValues))
        
    }
}

export {saveAppliedJobId,getAppliedJobId}