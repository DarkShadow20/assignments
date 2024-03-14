

export default function BussinessCard(){

    return (
            <div className="shadow-md w-96 max-w-full">
                <div className=" border-black-300 border-2 rounded">
                    <div className="p-2 ">
                        <div>
                            <p className="font-bold text-xl">Kunal</p>
                        </div>
                        <div>
                            <p className="mt-1">A short description</p>
                        </div>
                        <div>
                            <p className="font-bold text-xl">Interests</p>
                        </div>
                        <div>
                            Open Source
                        </div>
                        <div>
                            Stock Market Research
                        </div>
                        <div>
                            Bussiness Ideas Brainstorm
                        </div>
                        <div>
                            <button className="text-white bg-blue-500 rounded p-4">Linkedin</button>
                            <button className="text-white bg-blue-500 m-2 rounded p-4">Twiiter</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}