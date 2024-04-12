import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData()
  //const [data , setdata] = useState([])
  // useEffect(() => {
  //       fetch('https://api.github.com/users/ParthSauguny')
  //       .then((res) => res.json())
  //       .then(data => {
  //         console.log(data);
  //         setdata(data);
  //       })
  // } ,[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl' >
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="github dp" width={300}/>
    </div>
  )
}

export default Github

export const GitLoader = async () => {
  const res = await fetch("https://api.github.com/users/ParthSauguny")
  return res.json()
}