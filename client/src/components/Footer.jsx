import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsInstagram, BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                Journey
              </span>
              Jot
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Link to='/faqs'>FAQs</Link>
                <Link to='/about'>JourneyJot</Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link href='https://github.com/Rushichorge17'>Github</Footer.Link>
                <Footer.Link href='https://discord.com/channels/@me'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Link to='/privacy-policy'>Privacy Policy</Link>
                <Link to='/terms-and-conditions'>Terms &amp; Conditions</Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by=" JourneyJot"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='https://www.instagram.com/_rushi_17_/' icon={BsInstagram}/>
            <Footer.Icon href='https://twitter.com/ChorgeRushi17' icon={BsTwitter}/>
            <Footer.Icon href='https://github.com/Rushichorge17' icon={BsGithub}/>
            <Footer.Icon href='https://www.linkedin.com/in/rushikeshchorge/' icon={BsLinkedin}/>
          </div>
        </div>
      </div>
    </Footer>
  );
}
