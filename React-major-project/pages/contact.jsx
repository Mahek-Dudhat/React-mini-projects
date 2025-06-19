import "./Contact.css";

export default function Contact() {

    const getFormData = (formData) => {
        console.log(formData);
        const res = Object.fromEntries(formData.entries());
        console.log(res);
    }

    return (
        <section className="contact-section container">
            <h1 className="contact-title mt-5">Contact Us</h1>

            <div className="container">
                <form action={getFormData}>
                    <label htmlFor="fname" className="form-label">Enter Your Full Name:</label>
                    <input id="fname" name="fullName" type="text" placeholder="Enter Your Full Name" className="form-control mb-4" required />

                    <label htmlFor="email" className="form-label">Enter Your Email:</label>
                    <input id="email" name="email" type="email" placeholder="Enter Your Email" className="form-control mb-4" required />

                    <label htmlFor="msg" className="form-label">Enter Your Message:</label>
                    <textarea id="msg" name="msg" rows="10" placeholder="Enter Your Message" className="form-control" required />

                    <button type="submit" className="btn btn-primary mt-4">Send</button>
                </form>
            </div>
        </section>
    )
}