import { Footer } from "flowbite-react"
import { BsLinkedin, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function FooterElement() {
  const date = new Date();
  const currentYear = date.getFullYear()

  return (
   <Footer className="p-6">
        <Footer.Brand 
          href="/"
          name="Kingsley Okine"
        />
        <Footer.Copyright 
          by="Quami Killy"
          href="https://github.com/killy10o10"
          year={currentYear}
        />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.linkedin.com/in/kingsley-okine/"
              icon={BsLinkedin}
              target="_blank"
            />
            <Footer.Icon
              href="https://www.instagram.com/quami_killy/"
              icon={BsInstagram}
              target="_blank"
            />
            <Footer.Icon
              href="https://twitter.com/Quami_Killy"
              icon={BsTwitter}
              target="_blank"
            />
            <Footer.Icon
              href="https://github.com/killy10o10"
              icon={BsGithub}
              target="_blank"
            />
          </div>
   </Footer>
  )
}

export default FooterElement
