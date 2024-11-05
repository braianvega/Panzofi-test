import { Author } from "@/interfaces";
import { UserRounded } from "./components";


const getUsers = async () => {
    const data: [Author] = await fetch('http://localhost:8000/api/v1/author/',
        {
            next: {
              revalidate: 10
            }
          })
        .then(res => res.json())
    return data;
}

export default async function Home() {

    const users = await getUsers();

    return (
        <div className="min-h-screen bg-teal-950">
            <div className="pt-44">
                <h1 className="text-5xl text-center">Seleciona un autor</h1>
            </div>
            <div className="flex mt-8 justify-center space-x-5">
                {users.map(user =>
                    <UserRounded user={user} key={user.userUrlImage} />
                )}
            </div>
        </div>
    );
}