async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if(!res.ok) {
    throw new Error('Fail to fetch data')
  }
  return res.json();
}

export default async function DashBoardDetailPage({
  params: { id }
}: {
  params: { id: string }
}) {
  const data = await getPost(id);
  return (
    <div>
      <h1>{id}</h1>
      <p>{data?.username}</p>
      <p>{data?.email}</p>
    </div>
  )
}
