"use server"

import cleaningData from "./clean_data"

export default async function services(formData){
   const data = cleaningData(formData)
   console.log(data)

    const url = 'https://api.edu-hub.knime.com/deployments/rest:94f534bd-96d8-4f94-b4a9-49b7fb61e27c/execution'
    const username = '3Vj3FUEhVBOHE1YotejpvwfuBow2T66rgQ73ympcqlk'
    const password = 'C5yIErJo9vn5wsSpkigSHV4CMlN3Nh34vjj1jxTKeq9CqsoiJWZqZpsuGI0aGhLat5KxoBAXyMa_4xh7PC4iAQ'
    
        try{
          const response = await fetch(url,{
            method:'post',
            headers:{'Authorization':'Basic ' +btoa(`${username}:${password}`),
              'Content-type' : 'application/json'
            },
            body:JSON.stringify({
              "table-input": {
                  "table-data": [
                      data
                  ]
              }
          })
          })
          if(response.ok){
            const result = await response.json()
            const finalResult = result['outputValues']['table-output']['table-data'][0][13]
            console.log(finalResult)
            return finalResult
          }else{
            if(response.status === 404){throw new Error('404,Not found')}
            if(response.status === 500){throw new Error('500,internal server error')}
          }
          
        }catch(error){
          console.error('Terdapat error status error : ',error)
        }

}
