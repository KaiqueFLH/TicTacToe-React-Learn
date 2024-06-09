
export default function Display(props){

    let cont1 = props.c1
    let cont2 = props.c2


    return (
        <div className="w-full h-32 bg-black text-white  flex justify-evenly items-center">
            <div className="text-lg p-5 bg-white text-black">Jogador X - {cont1}</div>
            <h1 className="text-2xl">Jogo Da Velha</h1>
            <div className="text-lg p-5 bg-white text-black">Jogador O - {cont2}</div>
        </div>
    )
}