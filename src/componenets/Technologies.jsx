import { RiReactjsLine } from "react-icons/ri";  // Importing React icon
import { DiPython, DiJava, DiHtml5, DiCss3Full, DiMysql } from "react-icons/di";  // Importing various tech icons
import { FaGit, FaGithub } from "react-icons/fa";  // Importing Git and GitHub icons
import { SiDjango, SiFirebase } from "react-icons/si";  // Importing Django and Firebase icons

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">

        {/* Section Title */}
        <h1 className="my-20 text-center text-4xl">Tools & Technologies</h1>

        {/* Technology Icons Display */}
        <div className="flex flex-wrap items-center justify-center gap-4">

            {/* Each technology represented by its respective icon */}
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-5xl" style={{ color: "#61DAFB" }} />
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiPython className="text-5xl" style={{ color: "#306998" }}/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiJava className="text-5xl" style={{ color: "#f89820" }}/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiHtml5 className="text-5xl" style={{ color: "#E34F26" }} />
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiCss3Full className="text-5xl" style={{ color: "#1572B6" }}/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiDjango className="text-5xl" style={{ color: "#092E20" }}/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiFirebase className="text-5xl" style={{ color: "#FFCA28" }} />
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGit className="text-5xl" style={{ color: "#F05032" }} />
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGithub className="text-5xl" style={{ color: "#FFFFFF" }}/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiMysql className="text-5xl" style={{ color: "#4479A1" }}/>
            </div>

        </div>

    </div>
  )
}

export default Technologies