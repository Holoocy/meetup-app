import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../NewMeetupForm";

function NewMeetupPage() {
    const navigate = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch('https://react-project-28bfe-default-rtdb.firebaseio.com/meetups.json',
           {
              method: 'POST',
              body: JSON.stringify(meetupData),
              headers: {
                 'content-Type': 'application/json'
                }
            }
        
        ).then(() => {
            navigate('/');
        });
        
    }

    return <section>
        <h1>Place Your Booking</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>;
}

export default NewMeetupPage;