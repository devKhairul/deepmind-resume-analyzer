export const meta = () => [
    {title: 'Deemind | Auth'},
    {name: 'description', content: 'Log into your account'},
]

const auth = () => {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex items-center justify-center">
    <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
            <div className="flex flex-col items-center gap-2 text-center">
                <h1>Welcome</h1>
                <h2>Log In to Continue</h2>
            </div>
        </section>
    </div>
  </main>
}

export default auth