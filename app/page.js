export const metadata = {
  title:"Root Page",
  description:"Root page description"
}

export default async function Home({searchParams}){
  const {order} = await searchParams;
  return (
    <>
      <h2>Hello Harsh</h2>
      {order&&<h1>Your order is successfully placed</h1>}
    </>
  )
}