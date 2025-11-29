export default async function Page() {
    const res = await fetch('https://api.vercel.app/blog', {
      next: { revalidate: 10 }, // Seconds
    });
   
    const data = await res.json();
   
    return (
      <main>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </main>
    );
  }