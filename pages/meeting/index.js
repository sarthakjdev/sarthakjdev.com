import { DyteButton, DyteTextField } from "@dytesdk/react-ui-kit";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Meeting() {
  const router = useRouter();
  const [roomName, setroomName] = useState("");
  const [authToken, setauthToken] = useState("");
  return (
    <section className="flex items-center justify-center h-96">
      <div className="flex  items-center gap-4 lg:flex-col lg:gap-10">
        <input
          placeholder="Room Name"
          type="text"
          color="#ffffff"
          className="rounded-full px-4 py-2 focus:outline-none hover:border-none "
          onChange={(e)=>{
            setroomName(e.target.value)}}
        />
        <input
          placeholder="Auth Token"
          type="text"
          color="#ffffff"
          className="rounded-full px-4 py-2 focus:outline-none hover:border-none "
          onChange={(e)=>{setauthToken(e.target.value)}}
        />

        {/* <DyteTextField
          about="Room Name"
          placeholder="Room Name"
          onChange={(e) => {
            setroomName(e.target.value);
          }}
        />

        <DyteTextField
          about="Passwoprd"
          placeholder="Password"
          onChange={(e) => {
            setauthToken(e.target.value);
          }}
        /> */}

        <DyteButton
          onClick={() => {
            router.push(
              {
                pathname: `/meeting/${roomName}`,
                query: { authToken: authToken },
              },
              `/meeting/${roomName}`
            );
          }}
          size={"xl"}
          className={"rounded-full px-20 h-10 text-xl"}
        >
          Join Meeting
        </DyteButton>
      </div>
    </section>
  );
}
