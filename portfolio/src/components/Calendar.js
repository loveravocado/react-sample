import FullCalendar, { EventContentArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

export const Calendar = () => {
    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
            nowIndicator={true}
            selectable={true}
            selectHelper={true}
            allDaySlot={false}
            locale='ja'
            events={calendarEvents}

        />

    );
};
const calendarEvents = [
    {
        id: 1,
        title: 'Qiita書く',
        description: 'リンクアンドモチベーションのアドベントカレンダーを書く',
        start: '2023-11-15',
        end: '2023-11-16',
        backgroundColor: 'green',
        borderColor: 'red',
        editable: true
    },
    {
        id: 2,
        title: 'Qiita投稿',
        description: 'リンクアンドモチベーションのアドベントカレンダーを投稿する',
        start: '2023-11-18',
        end: '2023-11-23',
        backgroundColor: 'green',
        borderColor: 'red',
        editable: false
    }
]

