import'./Contactus.css';

function ContactUs() {

    return (
        <>
            <form>
                <input name="name" type="text" className="feedback-input" placeholder="Name" />
                <input name="email" type="text" className="feedback-input" placeholder="Email" />
                <textarea name="text" className="feedback-input" placeholder="Comment"></textarea>
                <input type="submit" value="SUBMIT" />
            </form>
           
        </>
    )
}

export default ContactUs;
