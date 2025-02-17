import { CONTACT } from "../constraints" // Importing contact details from constraints

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">

        {/* Section Title */}
        <h1 className="my-10 text-center text-4xl">Contacts</h1>

        {/* Contact Details */}
        <div className="text-center tracking-tighter">
            <p className="my-4">{CONTACT.address}</p>
            <p className="my-4">{CONTACT.phoneNo}</p>

            {/* Display email as a clickable link */}
            <a href="#" className="border-b">
                {CONTACT.email}
            </a>          
        </div> 
    </div>
  )
}

export default Contact