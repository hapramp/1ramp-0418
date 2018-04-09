import mofidThumb from '../statics/img/team/mofid_hapramp.jpg'
import ankitThumb from '../statics/img/team/ankit_hapramp.jpg'
import aviThumb from '../statics/img/team/avi_hapramp.jpg'
import rajatThumb from '../statics/img/team/rajat_hapramp.jpg'
import vikramThumb from '../statics/img/team/vikram_hapramp.jpg'
import pratyushThumb from '../statics/img/team/pratyush_1_hapramp.jpg'
import sandeepThumb from '../statics/img/team/sandeep_hapramp.jpg'
import shreyaThumb from '../statics/img/team/shreya_hapramp.jpg'

import faFb from '@fortawesome/fontawesome-free-brands/faFacebookF'
import faBehance from '@fortawesome/fontawesome-free-brands/faBehance'
import faLink from '@fortawesome/fontawesome-free-solid/faLink'
import faTw from '@fortawesome/fontawesome-free-brands/faTwitter'
import faAngel from '@fortawesome/fontawesome-free-brands/faAngellist'
import faMedium from '@fortawesome/fontawesome-free-brands/faMediumM'
import faLinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn'
import faGitHub from '@fortawesome/fontawesome-free-brands/faGithub'


const community =
  [{
    name: 'Shubhendra Vikram', imgSrc: vikramThumb, designation: "LEAD STRATEGIST",
    socials: [{icon: faLinkedIn, link: 'https://www.linkedin.com/in/shubhendravikram'}, {
      icon: faTw, link: 'https://twitter.com/shubhendrav'
    },
      {icon: faFb, link: 'https://www.facebook.com/shubhendrav'}]
  },{
    name: 'Avi Aryan', imgSrc: aviThumb, designation: "FULL STACK ENGINEER",
    socials: [{icon: faLinkedIn, link: 'https://www.linkedin.com/in/aviaryan/'}, {
      icon: faTw, link: 'https://twitter.com/aviaryan123'
    },
      {icon: faGitHub, link: 'https://github.com/aviaryan'}]
  },{
    name: 'Pratyush Singh', imgSrc: pratyushThumb, designation: "BLOCKCHAIN ENGINEER",
    socials: [{icon: faLinkedIn, link: 'https://www.linkedin.com/in/singh-pratyush/'}, {
      icon: faTw, link: 'https://twitter.com/singhpratyush_'
    },
      {icon: faGitHub, link: 'https://github.com/singhpratyush'}]
  },{
    name: 'Shreya Singh', imgSrc: shreyaThumb, designation: "PUBLIC RELATIONS HEAD",
    socials: [{icon: faLinkedIn, link: 'https://www.linkedin.com/in/shreya-singh-3a0472b9/'}, {
      icon: faMedium, link: 'https://medium.com/@shreya.hapramp'
    },
      {icon: faFb, link: 'https://www.facebook.com/shreya.singh.39566905'}]
  },{
    name: 'Mofid Ansari',
    imgSrc: mofidThumb,
    designation: "UI Designer",
    socials: [{icon: faBehance, link: 'https://www.behance.net/ansarimofid'}, {
      icon: faLink, link: 'http://ansarimofid.in/'
    },
      {icon: faLinkedIn, link: 'https://www.behance.net/ansarimofid'}]
  },
    {
      name: 'Anit Kumar', imgSrc: ankitThumb, designation: "Android Developer",
      socials: [{icon: faLinkedIn, link: 'https://www.linkedin.com/in/bxute'}, {
        icon: faAngel, link: 'https://angel.co/bxute/'
      },
        {icon: faGitHub, link: 'https://github.com/bxute'}]
    },

    {
      name: 'Rajat Dangi', imgSrc: rajatThumb, designation: "BRAND STRATEGIST",
      socials: [{icon: faLinkedIn, link: 'https://www.linkedin.com/in/rajatdangi/'}, {
        icon: faTw, link: 'https://twitter.com/TheRajatDangi'
      },
        {icon: faMedium, link: 'https://medium.com/@rajatkumardangi'}]
    },

    {
      name: 'Sandeep Sudhagani', imgSrc: sandeepThumb, designation: "SECURITY ENGINEER",
      socials: [{icon: faLinkedIn, link: 'http://linkedin.com/in/sandeepsudhagani/'}, {
        icon: faLink, link: 'mailto:sandeepsudhagani@gmail.com'
      },
        {icon: faFb, link: 'https://www.facebook.com/sandeepsudhagani'}]
    },

  ];

export default community;