import { CONTACT } from "../constraints" // Importing contact details from constraints
import {motion} from "framer-motion"; //Importing motion for animations

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">

        {/* Section Title */}
        <h1 className="my-10 text-center text-4xl">Contacts</h1>

        {/* Contact Details */}
        <div className="text-center tracking-tighter">

            {/* Address Animation - Fades in from the left */}
            <motion.p 
              whileInView={{opacity:1, x:0}}
              initial={{opacity:0, x:-100}}
              transition={{duration:0.5}}
              className="my-4">
                {CONTACT.address}
            </motion.p>

            {/* Phone Number Animation - Fades in from the right */}
            <motion.p 
              whileInView={{opacity:1, x:0}}
              initial={{opacity:0, x:100}}
              transition={{duration:0.5}}
              className="my-4">
                {CONTACT.phoneNo}
            </motion.p>

            {/* Email Link - Clickable email address */}
            <a href={`mailto:${CONTACT.email}`} className="border-b">
                {CONTACT.email}
            </a>          
        </div> 
    </div>
  )
}

export default Contact