import { useDyteMeeting  } from "@dytesdk/react-web-core";
import {DyteMeeting} from '@dytesdk/react-ui-kit'


export default function DyteMeetingComponent(){
    const {meeting}  = useDyteMeeting()
    return (
        <section className="h-90vh my-40  flex items-center justify-center">
            <DyteMeeting meeting={meeting} />
        </section>
    );
}