import Card from "./Card";
const Main = props => {
    return <main className="w-full">
        <div className="container mx-auto my-6 grid gap-4 grid-cols-4">
            {
                props.data.map(card => {
                    return <Card img={card.image} title={card.title} />
                })
            }
        </div>
    </main>
}

export default Main;