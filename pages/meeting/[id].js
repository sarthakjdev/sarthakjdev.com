import { useDyteClient, DyteProvider  } from "@dytesdk/react-web-core";
import DyteMeetingComponent from "../../src/components/meeting";
import { useEffect } from "react";

export default function MeetingJoined({roomName, authToken}){
    const [meeting, initMeeting] = useDyteClient();
    useEffect(() => {
      initMeeting({
        roomName: roomName,
        authToken: authToken,
        defaults: {
          audio: false,
          video: false,
        },
      });
    }, []);
  
    return (
      <DyteProvider value={meeting}>
        <DyteMeetingComponent />
      </DyteProvider>
    );
}

export async function getServerSideProps(context){
    return {
        props: {
            roomName: context.query.id,
            authToken: context.query.authToken
        }
    }
}