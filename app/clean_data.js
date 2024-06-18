
export default function cleaningData(formData){
    let data = []
    Object.keys(formData).forEach(function(key,index){
        if(key === 'nod' || key === 'monthly_income'){
            data.push(formData[key])
        }else{
            data.push(Number(formData[key]))

        }
    })
    return data
}