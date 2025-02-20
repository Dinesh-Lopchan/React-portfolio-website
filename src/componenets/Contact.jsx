import { CONTACT } from "../constraints" // Importing contact details from constraints
import { MapPin, Phone, Mail } from "lucide-react"; // Importing black & white icons

const Contact = () => {
  return (
    <div className="border-b pb-20">

      {/* Section Title */}
      <h1 className="my-10 text-center text-3xl ">CONTACT ME</h1>

      {/* Contact Details */}
      <div className="text-center tracking-tighter ">

        {/* Address  */}
        <p className="flex justify-center gap-0.5">
          <MapPin size={20} />
          <span className="font-semibold">:</span>
          <p className="text-center">{CONTACT.address}</p>
        </p>

        {/* Phone Number */}
        <p className="flex justify-center gap-0.5">
          <Phone size={20} />
          <span className="font-semibold">:</span>
          <p className="text-center">{CONTACT.phoneNo}</p>
        </p>

        {/* Email Link - Clickable email address */}
        <div className="flex justify-center gap-0.5">
          <Mail size={20} />
          <span className="font-semibold ">:</span>
          <a href={`mailto:${CONTACT.email}`} className="border-b">
            {CONTACT.email}
          </a>
        </div>

      </div>
    </div>
  )
}

export default Contact