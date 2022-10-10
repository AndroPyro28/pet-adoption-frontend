import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction"
import { AdoptionRecord } from '../../models/Adoption.ts';
import { CalendarContainer } from "./components"

function Calendar({ records }: { records: AdoptionRecord[] | undefined }) {
    const handleDateClick = (args: any) => {
        console.log(args)
    }
    const fetchAdoption = records?.filter((data) => data.status === 'APPROVED').map(record => ({title: `Adoption for ${record.adoptee.name}, Adopted by ${record.adopter.profile.fist_name} ${record.adopter.profile.fist_name}`, date: record.schedule.split('.')[0] }))
    return (
        <CalendarContainer>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                dateClick={handleDateClick}
                events={fetchAdoption}
                buttonIcons={false}
                editable={true}
                height={500}
                droppable={true}
                eventBackgroundColor={'rgb(210,0,51)'}
                eventColor={'rgb(210,0,51)'}
            />
        </CalendarContainer>
    )
}

export default Calendar